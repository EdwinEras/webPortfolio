"use client";

import { useState } from "react";
import type { FormEvent } from "react";

/**
 * Submission is a small state machine rather than a status string.
 *
 * The previous form stored one free-text `status`, which made "is the button
 * disabled?" and "did this succeed?" un-answerable without matching on English
 * prose. Modelling the states makes both trivial and keeps the copy in one
 * place at the bottom of this file.
 */
type SubmitState =
  | { status: "idle" }
  | { status: "sending" }
  | { status: "sent" }
  | { status: "error" };

const MESSAGES: Record<SubmitState["status"], string> = {
  idle: "",
  sending: "Sending…",
  sent: "Thanks — your message is on its way. I reply the same day.",
  error: "That didn't send. Email or message me directly using the links beside this form.",
};

export function ContactForm() {
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // Without this the browser performs a native GET submit, reloading the page
    // and putting the visitor's message in the URL.
    event.preventDefault();

    // Captured before the first `await`: React clears `currentTarget` once the
    // event has been handled, so reading it afterwards returns null.
    const form = event.currentTarget;
    const data = new FormData(form);

    setState({ status: "sending" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: String(data.get("email") ?? ""),
          subject: String(data.get("subject") ?? ""),
          message: String(data.get("message") ?? ""),
        }),
      });

      if (!response.ok) {
        setState({ status: "error" });
        return;
      }

      setState({ status: "sent" });
      form.reset();
    } catch {
      setState({ status: "error" });
    }
  }

  const isSending = state.status === "sending";

  return (
    <form
      onSubmit={handleSubmit}
      className="panel flex flex-col gap-[18px] p-[clamp(24px,3vw,34px)] shadow-md"
    >
      <label className="field-label">
        Your email
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          disabled={isSending}
          className="field-input"
        />
      </label>

      <label className="field-label">
        Subject
        <input type="text" name="subject" required disabled={isSending} className="field-input" />
      </label>

      <label className="field-label">
        Message
        <textarea
          name="message"
          rows={6}
          required
          disabled={isSending}
          className="field-input resize-y"
        />
      </label>

      <button
        type="submit"
        disabled={isSending}
        className="action action-md action-accent self-start disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSending ? "Sending…" : "Send message"}
      </button>

      {/*
        `aria-live` announces the outcome to a screen reader, which would
        otherwise get no feedback at all — the button label change is not
        announced. Reserving the height stops the panel jumping as it fills.
        The outcome is carried by the wording, never by colour alone.
      */}
      <p aria-live="polite" className="min-h-[20px] text-sm text-accent-300">
        {MESSAGES[state.status]}
      </p>
    </form>
  );
}
