import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    // Validar campos requeridos
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Simular envío de email (aquí integrarías con un servicio real como Resend, SendGrid, etc.)
    console.log("📧 Nuevo mensaje de contacto recibido:")
    console.log("Nombre:", name)
    console.log("Email:", email)
    console.log("Teléfono:", phone || "No proporcionado")
    console.log("Motivo:", subject)
    console.log("Mensaje:", message)
    console.log("Fecha:", new Date().toLocaleString("es-AR"))

    // Simular delay de envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // En un entorno real, aquí enviarías el email:
    /*
    await resend.emails.send({
      from: 'InmoApp <noreply@inmoapp.com>',
      to: ['info@inmoapp.com'],
      subject: `Nuevo contacto: ${subject}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Motivo:</strong> ${subject}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    })
    */

    return NextResponse.json({ message: "Mensaje enviado correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al enviar mensaje de contacto:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
