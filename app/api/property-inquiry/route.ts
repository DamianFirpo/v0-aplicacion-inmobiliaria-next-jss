import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, property } = await request.json();

    // Si existe RESEND_API_KEY, usar Resend en vez de SMTP
    if (process.env.RESEND_API_KEY) {
      const payload = {
        from: process.env.SENDER_EMAIL!,
        to: process.env.RECIPIENT_EMAIL!,
        subject: `Consulta sobre: ${property?.title || ""}`,
        reply_to: email,
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
      };

      await fetch("https://api.resend.com/v1/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      return NextResponse.json({ success: true });
    }

    // Caso contrario: SMTP (opción antigua)
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
      from: `"Consulta Inmobiliaria" <${process.env.SMTP_USER}>`,
      replyTo: email,
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
    console.error("❌ Error al enviar consulta:", error);
    return NextResponse.json(
      { error: "Error al enviar la consulta" },
      { status: 500 },
    );
  }
}
