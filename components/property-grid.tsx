"use client"
import { PropertyCard } from "@/components/property-card"
import { useFilters } from "@/contexts/filter-context"

export function PropertyGrid() {
  const { filteredProperties } = useFilters()

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Propiedades Destacadas</h2>
        <p className="text-muted-foreground">{filteredProperties.length} propiedades encontradas</p>
      </div>

      {filteredProperties.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No se encontraron propiedades con los filtros seleccionados.</p>
          <p className="text-muted-foreground text-sm mt-2">Intenta ajustar los criterios de búsqueda.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      )}
    </div>
  )
}
