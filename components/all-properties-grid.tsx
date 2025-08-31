"use client"

import { useState, useMemo } from "react"
import { PropertyCard } from "./property-card"
import { useFilters } from "@/contexts/filter-context"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Grid, List, SlidersHorizontal } from "lucide-react"

type SortOption = "price-asc" | "price-desc" | "area-asc" | "area-desc" | "newest"

export function AllPropertiesGrid() {
  const { allProperties, filters } = useFilters()
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState<SortOption>("newest")
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const propertiesPerPage = 6

  const filteredAndSortedProperties = useMemo(() => {
    const filtered = allProperties.filter((property) => {
      const matchesType = !filters.propertyType || property.type === filters.propertyType
      const matchesLocation = !filters.location || property.location === filters.location
      const matchesPrice = property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1]

      return matchesType && matchesLocation && matchesPrice
    })

    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price
        case "price-desc":
          return b.price - a.price
        case "area-asc":
          return a.area - b.area
        case "area-desc":
          return b.area - a.area
        case "newest":
        default:
          return b.id - a.id
      }
    })

    return filtered
  }, [allProperties, filters, sortBy])

  const totalPages = Math.ceil(filteredAndSortedProperties.length / propertiesPerPage)
  const startIndex = (currentPage - 1) * propertiesPerPage
  const currentProperties = filteredAndSortedProperties.slice(startIndex, startIndex + propertiesPerPage)

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground">
            {filteredAndSortedProperties.length} propiedades encontradas
          </h2>
          <p className="text-sm text-muted-foreground">
            Página {currentPage} de {totalPages || 1}
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Select value={sortBy} onValueChange={(value: SortOption) => setSortBy(value)}>
            <SelectTrigger className="w-full sm:w-48">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Más recientes</SelectItem>
              <SelectItem value="price-asc">Precio: menor a mayor</SelectItem>
              <SelectItem value="price-desc">Precio: mayor a menor</SelectItem>
              <SelectItem value="area-asc">Área: menor a mayor</SelectItem>
              <SelectItem value="area-desc">Área: mayor a menor</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex border rounded-lg self-start sm:self-auto">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              <Grid className="w-4 h-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className="rounded-l-none"
            >
              <List className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {currentProperties.length > 0 ? (
        <div
          className={
            viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" : "space-y-4"
          }
        >
          {currentProperties.map((property) => (
            <PropertyCard key={property.id} property={property} viewMode={viewMode} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
            <SlidersHorizontal className="w-6 h-6 sm:w-8 sm:h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2">No se encontraron propiedades</h3>
          <p className="text-sm sm:text-base text-muted-foreground px-4">
            Intenta ajustar los filtros para ver más resultados
          </p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-1 sm:gap-2 pt-8 flex-wrap">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="text-xs sm:text-sm"
          >
            Anterior
          </Button>

          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            const page = i + 1
            return (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className="w-8 h-8 sm:w-10 sm:h-10 text-xs sm:text-sm"
              >
                {page}
              </Button>
            )
          })}

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="text-xs sm:text-sm"
          >
            Siguiente
          </Button>
        </div>
      )}
    </div>
  )
}
