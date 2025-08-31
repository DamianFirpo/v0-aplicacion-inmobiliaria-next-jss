import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message, property } = body

    // Validar campos requeridos
    if (!name || !email || !message || !property) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 })
    }

    // Simular envío de email
    console.log("🏠 Nueva consulta de propiedad recibida:")
    console.log("Propiedad:", property.title)
    console.log("ID Propiedad:", property.id)
    console.log("Precio:", property.price)
    console.log("Ubicación:", property.location)
    console.log("---")
    console.log("Cliente:", name)
    console.log("Email:", email)
    console.log("Teléfono:", phone || "No proporcionado")
    console.log("Mensaje:", message)
    console.log("Fecha:", new Date().toLocaleString("es-AR"))

    // Simular delay de envío
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // En un entorno real, aquí enviarías el email:
    /*
    await resend.emails.send({
      from: 'InmoApp <noreply@inmoapp.com>',
      to: ['ventas@inmoapp.com'],
      subject: `Consulta por propiedad: ${property.title}`,
      html: `
        <h2>Nueva consulta de propiedad</h2>
        <div style="background: #f5f5f5; padding: 15px; margin: 15px 0; border-radius: 5px;">
          <h3>${property.title}</h3>
          <p><strong>Precio:</strong> ${new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD' }).format(property.price)}</p>
          <p><strong>Ubicación:</strong> ${property.location}</p>
          <p><strong>ID:</strong> ${property.id}</p>
        </div>
        <h3>Datos del interesado:</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    })
    */

    return NextResponse.json({ message: "Consulta enviada correctamente" }, { status: 200 })
  } catch (error) {
    console.error("Error al enviar consulta de propiedad:", error)
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
  }
}
