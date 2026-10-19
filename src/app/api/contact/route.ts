import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

/**
 * Contact form endpoint.
 *
 * Two things the previous version got wrong, both of which the form depends on:
 *
 * 1. A send failure returned HTTP 200 with an `{ error }` body, so the client's
 *    `response.ok` check passed and the visitor was told their message had been
 *    delivered when it had not. Failures now carry a 4xx/5xx status.
 * 2. `from` was set to the visitor's address. Gmail refuses to send as an
 *    arbitrary sender and rewrites it, so the mail either failed or arrived
 *    misattributed. The authenticated account is the sender; the visitor's
 *    address goes on `replyTo`, which is what "reply" should use anyway.
 */

/** Generous, but bounded — an unbounded body is free abuse. */
const LIMITS = { email: 254, subject: 200, message: 5000 } as const;

type ContactPayload = {
  email: string;
  subject: string;
  message: string;
};

/**
 * Deliberately permissive: real address validation is delivery. This only
 * rejects input that certainly is not an address, so a legitimate visitor with
 * an unusual domain is never turned away.
 */
function looksLikeEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function readField(source: Record<string, unknown>, key: keyof ContactPayload): string {
  const value = source[key];
  return typeof value === "string" ? value.trim() : "";
}

function parsePayload(body: unknown): ContactPayload | null {
  if (typeof body !== "object" || body === null) return null;

  const source = body as Record<string, unknown>;
  const payload: ContactPayload = {
    email: readField(source, "email"),
    subject: readField(source, "subject"),
    message: readField(source, "message"),
  };

  const isValid =
    looksLikeEmail(payload.email) &&
    payload.email.length <= LIMITS.email &&
    payload.subject.length > 0 &&
    payload.subject.length <= LIMITS.subject &&
    payload.message.length > 0 &&
    payload.message.length <= LIMITS.message;

  return isValid ? payload : null;
}

export async function POST(request: Request) {
  const inbox = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

  if (!inbox || !password) {
    // A misconfigured deployment is our problem, not the visitor's — log it
    // loudly, and tell them only that it failed.
    console.error("[contact] Mail credentials are not configured.");
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const payload = parsePayload(body);
  if (!payload) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: inbox, pass: password },
  });

  try {
    await transporter.sendMail({
      from: inbox,
      to: inbox,
      replyTo: payload.email,
      subject: payload.subject,
      text: `From: ${payload.email}\n\n${payload.message}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    // Logged server-side only: the underlying SMTP error can name the account.
    console.error("[contact] Failed to send message.", error);
    return NextResponse.json({ error: "Unable to send message." }, { status: 500 });
  }
}
