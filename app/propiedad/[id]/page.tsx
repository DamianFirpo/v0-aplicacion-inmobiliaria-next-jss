import { Header } from "@/components/header"
import { PropertyDetail } from "@/components/property-detail"
import { notFound } from "next/navigation"

// Datos de ejemplo para las propiedades (mismo que en filter-context)
const sampleProperties = [
  {
    id: 1,
    title: "Depto 2 ambientes en Palermo",
    price: 180000,
    location: "Palermo, CABA",
    image: "/modern-apartment-facade.png",
    bedrooms: 2,
    bathrooms: 1,
    area: 65,
    type: "2-ambientes",
    zone: "palermo",
    description:
      "Hermoso departamento de 2 ambientes ubicado en el corazón de Palermo. Cuenta con excelente iluminación natural, balcón con vista a la calle arbolada, y está completamente equipado. El edificio cuenta con portero las 24 horas y ascensor.",
    features: ["Balcón", "Portero 24hs", "Ascensor", "Calefacción central", "Cocina equipada"],
    images: ["/modern-apartment-facade.png", "/elegant-apartment-interior.png", "/cozy-apartment-living-room.png"],
  },
  {
    id: 2,
    title: "Casa 3 ambientes en Caballito",
    price: 250000,
    location: "Caballito, CABA",
    image: "/beautiful-house-with-garden.png",
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    type: "casa",
    zone: "caballito",
    description:
      "Amplia casa de 3 ambientes con jardín y parrilla. Ideal para familias que buscan tranquilidad sin alejarse del centro de la ciudad. La propiedad cuenta con garage para un auto y un hermoso jardín trasero.",
    features: ["Jardín", "Parrilla", "Garage", "Patio trasero", "Lavadero"],
    images: [
      "/beautiful-house-with-garden.png",
      "/family-house-with-front-yard.png",
      "/cozy-apartment-living-room.png",
    ],
  },
  {
    id: 3,
    title: "Depto 1 ambiente en Recoleta",
    price: 120000,
    location: "Recoleta, CABA",
    image: "/elegant-apartment-interior.png",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    type: "1-ambiente",
    zone: "recoleta",
    description:
      "Moderno monoambiente en Recoleta, perfectamente diseñado para optimizar cada metro cuadrado. Ubicado en una zona premium con fácil acceso a transporte público y comercios.",
    features: ["Amoblado", "Aire acondicionado", "Internet incluido", "Seguridad 24hs"],
    images: ["/elegant-apartment-interior.png", "/modern-apartment-facade.png", "/cozy-apartment-living-room.png"],
  },
  {
    id: 4,
    title: "PH 4 ambientes en Belgrano",
    price: 320000,
    location: "Belgrano, CABA",
    image: "/luxurious-penthouse-terrace.png",
    bedrooms: 4,
    bathrooms: 3,
    area: 150,
    type: "ph",
    zone: "belgrano",
    description:
      "Exclusivo PH de 4 ambientes con terraza propia. Propiedad única con excelentes terminaciones, cocina integrada y living comedor amplio. La terraza cuenta con parrilla y espacio para entretenimiento.",
    features: ["Terraza propia", "Parrilla", "Cocina integrada", "Vestidor", "Baulera"],
    images: ["/luxurious-penthouse-terrace.png", "/elegant-apartment-interior.png", "/modern-apartment-facade.png"],
  },
  {
    id: 5,
    title: "Depto 2 ambientes en Quilmes",
    price: 95000,
    location: "Quilmes, Buenos Aires",
    image: "/cozy-apartment-living-room.png",
    bedrooms: 2,
    bathrooms: 1,
    area: 58,
    type: "2-ambientes",
    zone: "quilmes",
    description:
      "Acogedor departamento de 2 ambientes en Quilmes centro. Excelente oportunidad de inversión en zona en crecimiento, cerca de estación de tren y centros comerciales.",
    features: ["Cerca del tren", "Balcón", "Cocina separada", "Luminoso"],
    images: ["/cozy-apartment-living-room.png", "/modern-apartment-facade.png", "/elegant-apartment-interior.png"],
  },
  {
    id: 6,
    title: "Casa 3 ambientes en Bernal",
    price: 140000,
    location: "Bernal, Buenos Aires",
    image: "/family-house-with-front-yard.png",
    bedrooms: 3,
    bathrooms: 2,
    area: 110,
    type: "casa",
    zone: "bernal",
    description:
      "Casa familiar de 3 ambientes en Bernal, ideal para quienes buscan tranquilidad y espacio. Cuenta con patio delantero y trasero, perfecta para familias con niños.",
    features: ["Patio delantero", "Patio trasero", "Garage", "Quincho", "Lavadero"],
    images: [
      "/family-house-with-front-yard.png",
      "/beautiful-house-with-garden.png",
      "/cozy-apartment-living-room.png",
    ],
  },
]

interface PropertyPageProps {
  params: { id: string }
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = sampleProperties.find((p) => p.id === Number.parseInt(params.id))

  if (!property) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <PropertyDetail property={property} />
      </main>
    </div>
  )
}
