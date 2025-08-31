"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Heart, User } from "lucide-react"
import Link from "next/link"

interface LoginRequiredModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginRequiredModal({ isOpen, onClose }: LoginRequiredModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
            <Heart className="w-8 h-8 text-primary" />
          </div>
          <DialogTitle className="text-center text-xl">¡Guarda tus propiedades favoritas!</DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Para marcar propiedades como favoritas y acceder a ellas más tarde, necesitas tener una cuenta.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="flex flex-col sm:flex-row gap-3 sm:justify-center">
          <Link href="/login" className="w-full sm:w-auto">
            <Button className="w-full bg-primary hover:bg-primary/90" onClick={onClose}>
              <User className="w-4 h-4 mr-2" />
              Iniciar sesión
            </Button>
          </Link>
          <Link href="/registro" className="w-full sm:w-auto">
            <Button variant="outline" className="w-full bg-transparent" onClick={onClose}>
              Crear cuenta
            </Button>
          </Link>
        </DialogFooter>

        <div className="text-center">
          <Button variant="ghost" onClick={onClose} className="text-sm text-muted-foreground">
            Continuar sin cuenta
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
