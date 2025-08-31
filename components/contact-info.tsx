import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Users, Award } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Información de Contacto</h2>

        <div className="space-y-4">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Dirección</h3>
              <p className="text-muted-foreground">Av. Santa Fe 1234, Piso 8</p>
              <p className="text-muted-foreground">Palermo, CABA (C1059ABF)</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Teléfono</h3>
              <p className="text-muted-foreground">+54 11 4567-8900</p>
              <p className="text-muted-foreground">WhatsApp: +54 9 11 4567-8900</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Email</h3>
              <p className="text-muted-foreground">info@inmoapp.com</p>
              <p className="text-muted-foreground">ventas@inmoapp.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Horarios de Atención</h3>
              <p className="text-muted-foreground">Lunes a Viernes: 9:00 - 19:00</p>
              <p className="text-muted-foreground">Sábados: 9:00 - 14:00</p>
              <p className="text-muted-foreground">Domingos: Cerrado</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6">Sobre Nosotros</h2>

        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Equipo Experto</h3>
                  <p className="text-muted-foreground text-sm">
                    Contamos con más de 15 años de experiencia en el mercado inmobiliario de Buenos Aires, con un equipo
                    de profesionales especializados en diferentes zonas de la ciudad.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">Servicios Integrales</h3>
                  <p className="text-muted-foreground text-sm">
                    Ofrecemos servicios completos de compra, venta, alquiler y administración de propiedades. También
                    brindamos asesoramiento legal y financiero para todas tus operaciones inmobiliarias.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-primary/5 rounded-lg p-6">
            <h3 className="font-semibold text-foreground mb-3">¿Por qué elegirnos?</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Atención personalizada las 24 horas</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Base de datos actualizada diariamente</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Asesoramiento legal y financiero incluido</span>
              </li>
              <li className="flex items-center space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span>Más de 500 operaciones exitosas</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
