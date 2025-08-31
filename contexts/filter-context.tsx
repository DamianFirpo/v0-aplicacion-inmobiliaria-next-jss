"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

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
  description: string
}

interface Filters {
  propertyType: string
  location: string
  priceRange: [number, number]
}

interface FilterContextType {
  filters: Filters
  setFilters: (filters: Filters) => void
  filteredProperties: Property[]
  allProperties: Property[]
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

const sampleProperties: Property[] = [
  {
    id: 1,
    title: "Depto 2 ambientes en Palermo",
    price: 180000,
    location: "Palermo",
    image: "/modern-apartment-palermo.png",
    bedrooms: 1,
    bathrooms: 1,
    area: 65,
    type: "2 ambientes",
    description: "Moderno departamento con balcón y excelente ubicación",
  },
  {
    id: 2,
    title: "Casa 3 ambientes en Caballito",
    price: 250000,
    location: "Caballito",
    image: "/family-house-caballito.png",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    type: "3 ambientes",
    description: "Casa con patio y parrilla, ideal para familias",
  },
  {
    id: 3,
    title: "Depto 1 ambiente en Recoleta",
    price: 150000,
    location: "Recoleta",
    image: "/elegant-studio-recoleta.png",
    bedrooms: 1,
    bathrooms: 1,
    area: 45,
    type: "1 ambiente",
    description: "Elegante monoambiente en zona premium",
  },
  {
    id: 4,
    title: "Casa 4 ambientes en Quilmes",
    price: 320000,
    location: "Quilmes",
    image: "/spacious-house-quilmes.png",
    bedrooms: 3,
    bathrooms: 2,
    area: 180,
    type: "4 ambientes",
    description: "Amplia casa familiar con jardín y garage",
  },
  {
    id: 5,
    title: "Depto 3 ambientes en Bernal",
    price: 200000,
    location: "Bernal",
    image: "/apartment-view-bernal.png",
    bedrooms: 2,
    bathrooms: 2,
    area: 85,
    type: "3 ambientes",
    description: "Departamento con balcón y vista panorámica",
  },
  {
    id: 6,
    title: "Loft en Palermo Hollywood",
    price: 280000,
    location: "Palermo",
    image: "/industrial-loft-palermo.png",
    bedrooms: 1,
    bathrooms: 1,
    area: 75,
    type: "2 ambientes",
    description: "Loft de diseño industrial con techos altos",
  },
]

export function FilterProvider({ children }: { children: ReactNode }) {
  const [filters, setFilters] = useState<Filters>({
    propertyType: "",
    location: "",
    priceRange: [0, 1000000],
  })

  const filteredProperties = sampleProperties.filter((property) => {
    const matchesType = !filters.propertyType || property.type === filters.propertyType
    const matchesLocation = !filters.location || property.location === filters.location
    const matchesPrice = property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]

    return matchesType && matchesLocation && matchesPrice
  })

  return (
    <FilterContext.Provider value={{ filters, setFilters, filteredProperties, allProperties: sampleProperties }}>
      {children}
    </FilterContext.Provider>
  )
}

export function useFilters() {
  const context = useContext(FilterContext)
  if (context === undefined) {
    throw new Error("useFilters must be used within a FilterProvider")
  }
  return context
}
