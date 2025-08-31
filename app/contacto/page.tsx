import { Header } from "@/components/header"
import { ContactInfo } from "@/components/contact-info"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Contáctanos</h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto">
              Estamos aquí para ayudarte a encontrar la propiedad perfecta. Ponte en contacto con nuestro equipo de
              expertos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  )
}
