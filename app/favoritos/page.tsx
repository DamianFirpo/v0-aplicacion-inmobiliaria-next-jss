"use client"

import { useAuth } from "@/contexts/auth-context"
import { useFilters } from "@/contexts/filter-context"
import { PropertyCard } from "@/components/property-card"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Home, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function FavoritosPage() {
  const { user, favorites } = useAuth()
  const { allProperties } = useFilters()
  const router = useRouter()

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!user) {
      router.push("/login")
    }
  }, [user, router])

  if (!user) {
    return null // Will redirect to login
  }

  // Filter properties to show only favorites
  const favoriteProperties = allProperties.filter((property) => favorites.includes(property.id))

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Mis Favoritos</h1>
              <p className="text-muted-foreground">
                {favoriteProperties.length}{" "}
                {favoriteProperties.length === 1 ? "propiedad guardada" : "propiedades guardadas"}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        {favoriteProperties.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Card className="max-w-md w-full">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-muted-foreground" />
                </div>
                <h2 className="text-xl font-semibold mb-3">Aún no tienes favoritos</h2>
                <p className="text-muted-foreground mb-6 text-pretty">
                  Explora nuestras propiedades y marca como favoritas las que más te interesen para encontrarlas
                  fácilmente más tarde.
                </p>
                <Link href="/">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Home className="w-4 h-4 mr-2" />
                    Explorar propiedades
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        ) : (
          <>
            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {favoriteProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-muted/30 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold mb-3">¿Encontraste algo que te gusta?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-pretty">
                Nuestro equipo está listo para ayudarte con más información, agendar visitas o responder cualquier
                pregunta sobre estas propiedades.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button className="bg-primary hover:bg-primary/90">
                    Contactar asesor
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/">
                  <Button variant="outline">Ver más propiedades</Button>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
