import { PropertySearch } from "@/components/property-search"
import { AllPropertiesGrid } from "@/components/all-properties-grid"
import { FilterProvider } from "@/contexts/filter-context"

export default function PropiedadesPage() {
  return (
    <FilterProvider>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/5 to-primary/10 py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Encuentra tu hogar ideal</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Explora nuestra amplia selección de propiedades en las mejores zonas de Buenos Aires
              </p>
            </div>

            {/* Search Component */}
            <div className="max-w-4xl mx-auto">
              <PropertySearch />
            </div>
          </div>
        </section>

        {/* Properties Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <AllPropertiesGrid />
          </div>
        </section>
      </div>
    </FilterProvider>
  )
}
