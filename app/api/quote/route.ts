import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipient = process.env.SMTP_TO || "bbamovers@gmail.com";

type QuotePayload = {
  name?: string;
  phone?: string;
  city?: string;
  moveDate?: string;
  details?: string;
};

const hasValue = (value?: string) => Boolean(value && value.trim().length > 0);

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuotePayload;
    const errors: Record<string, string> = {};

    if (!hasValue(body.name)) errors.name = "Full name is required.";
    if (!hasValue(body.phone)) errors.phone = "Phone number is required.";
    if (!hasValue(body.city)) errors.city = "Current city is required.";
    if (!hasValue(body.moveDate)) errors.moveDate = "Move date is required.";
    if (!hasValue(body.details)) errors.details = "Move details are required.";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed.", fields: errors },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: process.env.SMTP_USER
        ? {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          }
        : undefined,
    });

    const sender = process.env.SMTP_FROM || "quotes@bbamovers.com";

    await transporter.sendMail({
      from: sender,
      to: recipient,
      subject: `New moving quote request from ${body.name}`,
      text: `Name: ${body.name}
Phone: ${body.phone}
City: ${body.city}
Move date: ${body.moveDate}

Details:
${body.details}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Quote email error", error);
    return NextResponse.json(
      { error: "Email could not be sent." },
      { status: 500 }
    );
  }
}
