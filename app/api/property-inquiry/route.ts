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

    // Log de entrada: qué datos trae el formulario
    console.log(">>> Datos recibidos en /api/property-inquiry:", {
      name,
      email,
      phone,
      message,
      property,
    });

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

    // Verifica conexión SMTP antes de enviar
    await transporter.verify();
    console.log(">>> Conexión SMTP verificada con:", process.env.SMTP_USER);

    // Construye y envía el correo
    const info = await transporter.sendMail({
      from: `"Consulta Inmobiliaria" <${process.env.SMTP_USER}>`, // remitente real
      replyTo: email, // si respondes, le llega al cliente
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

    // Log del resultado del envío
    console.log(">>> Correo enviado. Respuesta SMTP:", info);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ Error al enviar consulta:", error);
    return NextResponse.json(
      { error: "Error al enviar la consulta" },
      { status: 500 },
    );
  }
}
