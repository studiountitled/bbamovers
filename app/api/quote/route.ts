import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const recipient = process.env.SMTP_TO;

type QuotePayload = {
  name?: string;
  phone?: string;
  city?: string;
  moveDate?: string;
  homeSize?: string;
  truckSize?: string;
  mileage?: string;
  stairsInfo?: string;
  disassembly?: string;
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

    const smtpHost = process.env.SMTP_HOST || process.env.BREVO_SMTP_SERVER;
    const smtpPort = Number(
      process.env.SMTP_PORT || process.env.BREVO_PORT || 587
    );
    const smtpUser = process.env.SMTP_USER || process.env.BREVO_LOGIN;
    const smtpPass = process.env.SMTP_PASS || process.env.BREVO_SMTP_KEY;

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true",
      auth: smtpUser
        ? {
            user: smtpUser,
            pass: smtpPass,
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
Home size: ${body.homeSize || "Not provided"}
Truck size: ${body.truckSize || "Not provided"}
Mileage: ${body.mileage || "Not provided"}
Stairs info: ${body.stairsInfo || "Not provided"}
Disassembly/assembly: ${body.disassembly || "Not provided"}

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
