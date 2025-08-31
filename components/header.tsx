"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/auth-context"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { User, LogOut, Heart, Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const { user, logout } = useAuth()
  const [isOpen, setIsOpen] = useState(false)

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base sm:text-lg">I</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-foreground">InmoApp</span>
          </Link>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              Inicio
            </Link>
            <Link
              href="/propiedades"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Propiedades
            </Link>
            <Link
              href="/sobre-nosotros"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Sobre nosotros
            </Link>
            <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Contacto
            </Link>
          </nav>

          <div className="flex items-center space-x-2 sm:space-x-4">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2 text-sm sm:text-base">
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline max-w-24 truncate">{user.name}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem disabled>
                    <User className="w-4 h-4 mr-2" />
                    <span className="truncate">{user.email}</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/favoritos" className="flex items-center">
                      <Heart className="w-4 h-4 mr-2" />
                      Mis favoritos
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="w-4 h-4 mr-2" />
                    Cerrar sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="hidden sm:flex items-center space-x-2">
                <Link href="/login">
                  <Button variant="ghost" size="sm">
                    Iniciar sesión
                  </Button>
                </Link>
                <Link href="/registro">
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Registrarse
                  </Button>
                </Link>
              </div>
            )}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle className="text-left">Menú</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  {/* Mobile Navigation Links */}
                  <Link
                    href="/"
                    className="text-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted"
                    onClick={handleLinkClick}
                  >
                    Inicio
                  </Link>
                  <Link
                    href="/propiedades"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted"
                    onClick={handleLinkClick}
                  >
                    Propiedades
                  </Link>
                  <Link
                    href="/sobre-nosotros"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted"
                    onClick={handleLinkClick}
                  >
                    Sobre nosotros
                  </Link>
                  <Link
                    href="/contacto"
                    className="text-muted-foreground hover:text-primary transition-colors font-medium py-2 px-2 rounded-md hover:bg-muted"
                    onClick={handleLinkClick}
                  >
                    Contacto
                  </Link>

                  <div className="border-t pt-4 mt-4">
                    {user ? (
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 px-2 py-2 bg-muted rounded-md">
                          <User className="w-4 h-4" />
                          <div className="flex flex-col">
                            <span className="text-sm font-medium">{user.name}</span>
                            <span className="text-xs text-muted-foreground truncate">{user.email}</span>
                          </div>
                        </div>
                        <Link
                          href="/favoritos"
                          className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors py-2 px-2 rounded-md hover:bg-muted"
                          onClick={handleLinkClick}
                        >
                          <Heart className="w-4 h-4" />
                          <span>Mis favoritos</span>
                        </Link>
                        <Button
                          variant="ghost"
                          onClick={() => {
                            logout()
                            handleLinkClick()
                          }}
                          className="w-full justify-start px-2 text-muted-foreground hover:text-primary"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Cerrar sesión
                        </Button>
                      </div>
                    ) : (
                      <div className="space-y-3">
                        <Link href="/login" onClick={handleLinkClick}>
                          <Button variant="ghost" className="w-full justify-start px-2">
                            Iniciar sesión
                          </Button>
                        </Link>
                        <Link href="/registro" onClick={handleLinkClick}>
                          <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                            Registrarse
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
