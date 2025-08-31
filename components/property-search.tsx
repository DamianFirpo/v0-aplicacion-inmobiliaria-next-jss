"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFilters } from "@/contexts/filter-context"

export function PropertySearch() {
  const { filters, setFilters } = useFilters()
  const [localFilters, setLocalFilters] = useState({
    propertyType: filters.propertyType,
    location: filters.location,
    minPrice: filters.priceRange[0].toString(),
    maxPrice: filters.priceRange[1].toString(),
  })

  const handleFilterChange = (key: string, value: string) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }))
  }

  const handleApplyFilters = () => {
    const minPrice = localFilters.minPrice ? Number.parseInt(localFilters.minPrice) : 0
    const maxPrice = localFilters.maxPrice ? Number.parseInt(localFilters.maxPrice) : 1000000

    setFilters({
      propertyType: localFilters.propertyType,
      location: localFilters.location,
      priceRange: [minPrice, maxPrice],
    })
  }

  const handleClearFilters = () => {
    const emptyFilters = {
      propertyType: "",
      location: "",
      minPrice: "",
      maxPrice: "",
    }
    setLocalFilters(emptyFilters)
    setFilters({
      propertyType: "",
      location: "",
      priceRange: [0, 1000000],
    })
  }

  return (
    <Card className="p-4 sm:p-6 mb-6 sm:mb-8 bg-card">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4 sm:mb-6">
        {/* Tipo de Propiedad */}
        <div className="space-y-2">
          <Label htmlFor="property-type" className="text-sm font-medium">
            Tipo de Propiedad
          </Label>
          <Select
            value={localFilters.propertyType}
            onValueChange={(value) => handleFilterChange("propertyType", value)}
          >
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Seleccionar tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1 ambiente">1 Ambiente</SelectItem>
              <SelectItem value="2 ambientes">2 Ambientes</SelectItem>
              <SelectItem value="3 ambientes">3 Ambientes</SelectItem>
              <SelectItem value="4 ambientes">4 Ambientes</SelectItem>
              <SelectItem value="5 ambientes">5 Ambientes</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Zona Geográfica */}
        <div className="space-y-2">
          <Label htmlFor="location" className="text-sm font-medium">
            Zona
          </Label>
          <Select value={localFilters.location} onValueChange={(value) => handleFilterChange("location", value)}>
            <SelectTrigger className="h-10">
              <SelectValue placeholder="Seleccionar zona" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Palermo">Palermo</SelectItem>
              <SelectItem value="Recoleta">Recoleta</SelectItem>
              <SelectItem value="Caballito">Caballito</SelectItem>
              <SelectItem value="Quilmes">Quilmes</SelectItem>
              <SelectItem value="Bernal">Bernal</SelectItem>
              <SelectItem value="Belgrano">Belgrano</SelectItem>
              <SelectItem value="San Isidro">San Isidro</SelectItem>
              <SelectItem value="Villa Crespo">Villa Crespo</SelectItem>
              <SelectItem value="Puerto Madero">Puerto Madero</SelectItem>
              <SelectItem value="La Plata">La Plata</SelectItem>
              <SelectItem value="Tigre">Tigre</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Precio Mínimo */}
        <div className="space-y-2">
          <Label htmlFor="min-price" className="text-sm font-medium">
            Precio Mínimo (USD)
          </Label>
          <Input
            id="min-price"
            type="number"
            placeholder="50,000"
            className="h-10"
            value={localFilters.minPrice}
            onChange={(e) => handleFilterChange("minPrice", e.target.value)}
          />
        </div>

        {/* Precio Máximo */}
        <div className="space-y-2">
          <Label htmlFor="max-price" className="text-sm font-medium">
            Precio Máximo (USD)
          </Label>
          <Input
            id="max-price"
            type="number"
            placeholder="500,000"
            className="h-10"
            value={localFilters.maxPrice}
            onChange={(e) => handleFilterChange("maxPrice", e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Button
          onClick={handleApplyFilters}
          className="w-full sm:w-auto px-6 sm:px-8 py-2 bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          Aplicar Filtros
        </Button>
        <Button
          onClick={handleClearFilters}
          variant="outline"
          className="w-full sm:w-auto px-6 sm:px-8 py-2 bg-transparent"
        >
          Limpiar Filtros
        </Button>
      </div>
    </Card>
  )
}
