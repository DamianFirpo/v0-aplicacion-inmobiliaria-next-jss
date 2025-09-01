import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      phone,
      message,
      property,
    } = await request.json();

    // Configuración de nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp-mail.outlook.com",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Construye y envía el correo
    await transporter.sendMail({
      from: `${name} <${process.env.SMTP_USER}>`,
      replyTo: email, // para que al responder, le respondas al cliente
      to: process.env.RECIPIENT_EMAIL || "dfirpo@msn.com",
      subject: `Consulta sobre la propiedad: ${property?.title || ""}`,
      text: [
        `Nombre: ${name}`,
        `Email: ${email}`,
        `Teléfono: ${phone || "Sin proporcionar"}`,
        "",
        "Detalles de la propiedad:",
        `• ID: ${property?.id ?? "N/A"}`,
        `• Título: ${property?.title ?? ""}`,
        `• Precio: ${property?.price ? "US$ " + property.price : ""}`,
        `• Ubicación: ${property?.location ?? ""}`,
        "",
        "Mensaje del interesado:",
        message,
      ].join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error al enviar consulta:", error);
    return NextResponse.json(
      { error: "Error al enviar la consulta" },
      { status: 500 },
    );
  }
}
