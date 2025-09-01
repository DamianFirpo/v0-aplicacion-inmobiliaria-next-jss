import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, subject, message } = await request.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-mail.outlook.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      // remitente real = la cuenta que autentica en SMTP
      from: `${name} <${process.env.SMTP_USER}>`,
      // al contestar, responderás al cliente
      replyTo: email,
      to: process.env.RECIPIENT_EMAIL || "dfirpo@msn.com",
      subject: subject ? `Consulta: ${subject}` : "Consulta inmobiliaria",
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Teléfono: ${phone}`,
        "",
        `Mensaje:`,
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar correo:", error);
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 },
    );
  }
}
