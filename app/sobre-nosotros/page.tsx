import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Users, Award, Clock, MapPin, Heart } from "lucide-react"
import Link from "next/link"

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              Más de 15 años de experiencia
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              Tu hogar perfecto te está esperando
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              En InmoApp, no solo vendemos propiedades, creamos historias de vida. Somos tu compañero de confianza en el
              camino hacia encontrar el hogar de tus sueños.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/propiedades">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Ver propiedades
                </Button>
              </Link>
              <Link href="/contacto">
                <Button variant="outline" size="lg">
                  Contactanos
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Nuestra historia</h2>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Fundada en 2008 por María González y Carlos Rodríguez, InmoApp nació con una visión clara:
                  revolucionar la experiencia de búsqueda de propiedades en Argentina. Lo que comenzó como una pequeña
                  oficina en Palermo, hoy se ha convertido en una de las inmobiliarias más confiables del país.
                </p>
                <p className="text-muted-foreground mb-8 text-pretty">
                  Hemos ayudado a más de 5,000 familias a encontrar su hogar ideal, desde jóvenes profesionales buscando
                  su primer departamento hasta familias que necesitan más espacio para crecer. Cada historia es única, y
                  nos enorgullece ser parte de esos momentos especiales.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">5,000+</div>
                    <div className="text-sm text-muted-foreground">Familias felices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Años de experiencia</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/modern-real-estate-office-with-happy-team.png"
                  alt="Oficina de InmoApp"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Diferenciales */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">¿Por qué elegir InmoApp?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                No somos una inmobiliaria más. Somos tu aliado estratégico en una de las decisiones más importantes de
                tu vida.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Asesoramiento personalizado</h3>
                  <p className="text-muted-foreground text-pretty">
                    Cada cliente es único. Nuestro equipo de expertos te acompaña paso a paso, entendiendo tus
                    necesidades específicas y presupuesto.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Propiedades verificadas</h3>
                  <p className="text-muted-foreground text-pretty">
                    Todas nuestras propiedades pasan por un riguroso proceso de verificación. Sin sorpresas, sin
                    estafas, solo propiedades reales y disponibles.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Clock className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Respuesta inmediata</h3>
                  <p className="text-muted-foreground text-pretty">
                    El mercado inmobiliario se mueve rápido. Respondemos consultas en menos de 2 horas y coordinamos
                    visitas en el mismo día.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Conocimiento local</h3>
                  <p className="text-muted-foreground text-pretty">
                    Conocemos cada barrio como la palma de nuestra mano. Te asesoramos sobre transporte, servicios,
                    seguridad y proyección de la zona.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Proceso transparente</h3>
                  <p className="text-muted-foreground text-pretty">
                    Sin costos ocultos ni sorpresas. Te explicamos cada paso del proceso de compra o alquiler de manera
                    clara y transparente.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Compromiso emocional</h3>
                  <p className="text-muted-foreground text-pretty">
                    Entendemos que comprar una propiedad es más que una transacción. Es encontrar el lugar donde crearás
                    tus mejores recuerdos.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestro Equipo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Conoce a nuestro equipo</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Profesionales apasionados por ayudarte a encontrar tu hogar ideal
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <img
                    src="/professional-real-estate-agent.png"
                    alt="María González"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">María González</h3>
                  <p className="text-primary font-medium mb-3">Directora General</p>
                  <p className="text-muted-foreground text-sm text-pretty">
                    15 años de experiencia en el mercado inmobiliario. Especialista en propiedades de lujo y desarrollos
                    comerciales.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <img
                    src="/professional-man-real-estate-agent-smiling.png"
                    alt="Carlos Rodríguez"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">Carlos Rodríguez</h3>
                  <p className="text-primary font-medium mb-3">Director Comercial</p>
                  <p className="text-muted-foreground text-sm text-pretty">
                    Experto en inversiones inmobiliarias y financiamiento. Ayuda a nuestros clientes a encontrar las
                    mejores opciones de crédito.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center">
                  <img
                    src="/professional-woman-real-estate-agent-friendly.png"
                    alt="Ana Martínez"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">Ana Martínez</h3>
                  <p className="text-primary font-medium mb-3">Asesora Senior</p>
                  <p className="text-muted-foreground text-sm text-pretty">
                    Especialista en propiedades familiares y primeras compras. Su calidez y paciencia la convierten en
                    la favorita de nuestros clientes.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">¿Listo para encontrar tu hogar ideal?</h2>
            <p className="text-xl mb-8 text-pretty opacity-90">
              Nuestro equipo está esperando para ayudarte en cada paso del camino. Desde la primera consulta hasta las
              llaves en tu mano.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/propiedades">
                <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                  Explorar propiedades
                </Button>
              </Link>
              <Link href="/contacto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                >
                  Agenda una consulta
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
