import { NextResponse } from 'next/server'
import nodemailer from "nodemailer";

export async function POST(req) {
  const { email, subject, message } = await req.json();
  const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: process.env.SKIP_PREFLIGHT_CHECK,
      auth: {
          user: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.NEXT_PUBLIC_PERSONAL_EMAIL,
      subject: subject,
      text: message,
      replyTo: email
    });
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" });
  }
};
