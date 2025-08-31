"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ContactModal } from "@/components/contact-modal"
import { ArrowLeft, MapPin, Home, Bath, Maximize } from "lucide-react"
import { useRouter } from "next/navigation"

interface Property {
  id: number
  title: string
  price: number
  location: string
  image: string
  bedrooms: number
  bathrooms: number
  area: number
  type: string
  zone: string
  description: string
  features: string[]
  images: string[]
}

interface PropertyDetailProps {
  property: Property
}

export function PropertyDetail({ property }: PropertyDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showContactModal, setShowContactModal] = useState(false)
  const router = useRouter()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="space-y-8">
      {/* Botón Volver */}
      <Button onClick={() => router.back()} variant="outline" className="flex items-center gap-2">
        <ArrowLeft className="w-4 h-4" />
        Volver a propiedades
      </Button>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <div className="relative aspect-video rounded-lg overflow-hidden">
            <Image
              src={property.images[selectedImage] || "/placeholder.svg"}
              alt={property.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex gap-2 mt-4 overflow-x-auto">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                  selectedImage === index ? "ring-2 ring-primary" : ""
                }`}
              >
                <Image src={image || "/placeholder.svg"} alt={`Vista ${index + 1}`} fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Información principal */}
        <Card className="lg:col-span-1">
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <Badge className="bg-primary text-primary-foreground mb-2">{formatPrice(property.price)}</Badge>
                <h1 className="text-2xl font-bold text-foreground text-balance">{property.title}</h1>
                <p className="text-muted-foreground flex items-center gap-1 mt-2">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-4 border-y">
                <div className="text-center">
                  <Home className="w-6 h-6 mx-auto mb-1 text-primary" />
                  <p className="text-sm font-medium">{property.bedrooms}</p>
                  <p className="text-xs text-muted-foreground">Ambientes</p>
                </div>
                <div className="text-center">
                  <Bath className="w-6 h-6 mx-auto mb-1 text-primary" />
                  <p className="text-sm font-medium">{property.bathrooms}</p>
                  <p className="text-xs text-muted-foreground">Baños</p>
                </div>
                <div className="text-center">
                  <Maximize className="w-6 h-6 mx-auto mb-1 text-primary" />
                  <p className="text-sm font-medium">{property.area}m²</p>
                  <p className="text-xs text-muted-foreground">Superficie</p>
                </div>
              </div>

              <Button
                onClick={() => setShowContactModal(true)}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                size="lg"
              >
                Contactarme
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Descripción y características */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Descripción</h2>
            <p className="text-muted-foreground leading-relaxed">{property.description}</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-4">Características</h2>
            <ul className="space-y-2">
              {property.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Modal de contacto */}
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} property={property} />
    </div>
  )
}
