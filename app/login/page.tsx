import { Header } from "@/components/header"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Iniciar sesión</h1>
            <p className="text-muted-foreground">Accede a tu cuenta para gestionar tus propiedades</p>
          </div>
          <LoginForm />
        </div>
      </main>
    </div>
  )
}
