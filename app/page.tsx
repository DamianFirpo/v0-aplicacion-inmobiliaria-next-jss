import { Header } from "@/components/header"
import { PropertySearch } from "@/components/property-search"
import { PropertyGrid } from "@/components/property-grid"
import { FilterProvider } from "@/contexts/filter-context"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <FilterProvider>
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4 text-balance">Encuentra tu hogar ideal</h1>
            <p className="text-lg text-muted-foreground text-pretty">
              Descubre las mejores propiedades en las zonas más exclusivas de Buenos Aires
            </p>
          </div>
          <PropertySearch />
          <PropertyGrid />
        </main>
      </FilterProvider>
    </div>
  )
}
