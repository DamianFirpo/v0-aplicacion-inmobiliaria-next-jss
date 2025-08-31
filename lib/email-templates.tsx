interface ContactEmailData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

interface PropertyInquiryData {
  name: string
  email: string
  phone?: string
  message: string
  property: {
    id: number
    title: string
    price: number
    location: string
  }
}

export function generateContactEmailHTML(data: ContactEmailData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Nuevo mensaje de contacto - InmoApp</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #10b981; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>InmoApp</h1>
          <p>Nuevo mensaje de contacto</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">Nombre:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Teléfono:</div>
            <div class="value">${data.phone || "No proporcionado"}</div>
          </div>
          <div class="field">
            <div class="label">Motivo:</div>
            <div class="value">${data.subject}</div>
          </div>
          <div class="field">
            <div class="label">Mensaje:</div>
            <div class="value">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>Este mensaje fue enviado desde el formulario de contacto de InmoApp</p>
          <p>Fecha: ${new Date().toLocaleString("es-AR")}</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export function generatePropertyInquiryEmailHTML(data: PropertyInquiryData): string {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Consulta de propiedad - InmoApp</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #10b981; color: white; padding: 20px; text-align: center; }
        .property-info { background: #e6fffa; border: 1px solid #10b981; padding: 15px; margin: 20px 0; border-radius: 5px; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>InmoApp</h1>
          <p>Nueva consulta de propiedad</p>
        </div>
        <div class="property-info">
          <h3>${data.property.title}</h3>
          <p><strong>Precio:</strong> ${formatPrice(data.property.price)}</p>
          <p><strong>Ubicación:</strong> ${data.property.location}</p>
          <p><strong>ID:</strong> ${data.property.id}</p>
        </div>
        <div class="content">
          <h3>Datos del interesado:</h3>
          <div class="field">
            <div class="label">Nombre:</div>
            <div class="value">${data.name}</div>
          </div>
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          <div class="field">
            <div class="label">Teléfono:</div>
            <div class="value">${data.phone || "No proporcionado"}</div>
          </div>
          <div class="field">
            <div class="label">Mensaje:</div>
            <div class="value">${data.message}</div>
          </div>
        </div>
        <div class="footer">
          <p>Esta consulta fue enviada desde la página de detalle de la propiedad</p>
          <p>Fecha: ${new Date().toLocaleString("es-AR")}</p>
        </div>
      </div>
    </body>
    </html>
  `
}
