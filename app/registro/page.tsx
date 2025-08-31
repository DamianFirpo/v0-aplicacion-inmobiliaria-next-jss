import { Header } from "@/components/header"
import { RegisterForm } from "@/components/register-form"

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Crear cuenta</h1>
            <p className="text-muted-foreground">Regístrate para acceder a todas las funcionalidades</p>
          </div>
          <RegisterForm />
        </div>
      </main>
    </div>
  )
}
