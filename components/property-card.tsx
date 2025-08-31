"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { useState } from "react"
import { LoginRequiredModal } from "./login-required-modal"

interface Property {
  id: number
  title: string
  price: number
  location: string
  image: string
  bedrooms: number
  bathrooms: number
  area: number
  description?: string
  type?: string
}

interface PropertyCardProps {
  property: Property
  viewMode?: "grid" | "list"
}

export function PropertyCard({ property, viewMode = "grid" }: PropertyCardProps) {
  const { user, addToFavorites, removeFromFavorites, isFavorite } = useAuth()
  const [showLoginModal, setShowLoginModal] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price)
  }

  const handleFavoriteClick = () => {
    if (!user) {
      setShowLoginModal(true)
      return
    }

    if (isFavorite(property.id)) {
      removeFromFavorites(property.id)
    } else {
      addToFavorites(property.id)
    }
  }

  if (viewMode === "list") {
    return (
      <>
        <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
          <div className="flex flex-col sm:flex-row">
            <div className="relative sm:w-64 md:w-80 flex-shrink-0">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                width={320}
                height={200}
                className="w-full h-48 sm:h-40 md:h-full object-cover"
              />
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
                onClick={handleFavoriteClick}
              >
                <Heart
                  className={`w-4 h-4 ${
                    user && isFavorite(property.id)
                      ? "fill-red-500 text-red-500"
                      : "text-muted-foreground hover:text-red-500"
                  }`}
                />
              </Button>
            </div>

            <CardContent className="flex-1 p-4 sm:p-6">
              <div className="flex flex-col gap-4">
                <div className="flex-1">
                  <div className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="font-semibold text-lg sm:text-xl text-card-foreground text-balance">
                      {property.title}
                    </h3>
                    <Badge className="self-start sm:ml-4 bg-primary text-primary-foreground text-base sm:text-lg px-2 sm:px-3 py-1">
                      {formatPrice(property.price)}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm mb-3 flex items-center">
                    <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {property.location}
                  </p>

                  {property.description && (
                    <p className="text-muted-foreground text-sm mb-4 text-pretty line-clamp-2 sm:line-clamp-none">
                      {property.description}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"
                        />
                      </svg>
                      {property.bedrooms} amb
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                        />
                      </svg>
                      {property.bathrooms} baño{property.bathrooms > 1 ? "s" : ""}
                    </span>
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      {property.area}m²
                    </span>
                  </div>
                </div>

                <div className="flex-shrink-0">
                  <Link href={`/propiedad/${property.id}`}>
                    <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8">
                      Ver más
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </div>
        </Card>

        <LoginRequiredModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
      </>
    )
  }

  return (
    <>
      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-card">
        <div className="relative">
          <Image
            src={property.image || "/placeholder.svg"}
            alt={property.title}
            width={300}
            height={200}
            className="w-full h-48 object-cover"
          />
          <Badge className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-primary text-primary-foreground text-sm sm:text-base">
            {formatPrice(property.price)}
          </Badge>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 left-2 sm:top-3 sm:left-3 bg-background/80 hover:bg-background/90 backdrop-blur-sm"
            onClick={handleFavoriteClick}
          >
            <Heart
              className={`w-4 h-4 ${
                user && isFavorite(property.id)
                  ? "fill-red-500 text-red-500"
                  : "text-muted-foreground hover:text-red-500"
              }`}
            />
          </Button>
        </div>

        <CardContent className="p-3 sm:p-4">
          <h3 className="font-semibold text-base sm:text-lg text-card-foreground mb-2 text-balance">
            {property.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-3 flex items-center">
            <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {property.location}
          </p>

          <div className="grid grid-cols-3 gap-2 text-xs sm:text-sm text-muted-foreground mb-4">
            <span className="flex items-center justify-center sm:justify-start">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2"
                />
              </svg>
              <span className="hidden sm:inline">{property.bedrooms} amb</span>
              <span className="sm:hidden">{property.bedrooms}</span>
            </span>
            <span className="flex items-center justify-center sm:justify-start">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
              <span className="hidden sm:inline">
                {property.bathrooms} baño{property.bathrooms > 1 ? "s" : ""}
              </span>
              <span className="sm:hidden">{property.bathrooms}b</span>
            </span>
            <span className="flex items-center justify-center sm:justify-start">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              {property.area}m²
            </span>
          </div>

          <Link href={`/propiedad/${property.id}`}>
            <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground text-sm sm:text-base">
              Ver más
            </Button>
          </Link>
        </CardContent>
      </Card>

      <LoginRequiredModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  )
}
