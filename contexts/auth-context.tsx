"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

interface User {
  id: number
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<boolean>
  register: (name: string, email: string, password: string) => Promise<boolean>
  logout: () => void
  isLoading: boolean
  favorites: number[]
  addToFavorites: (propertyId: number) => void
  removeFromFavorites: (propertyId: number) => void
  isFavorite: (propertyId: number) => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Usuarios de ejemplo para simular autenticación
const mockUsers = [
  { id: 1, name: "Juan Pérez", email: "juan@example.com", password: "123456" },
  { id: 2, name: "María García", email: "maria@example.com", password: "123456" },
]

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [favorites, setFavorites] = useState<number[]>([])

  // Verificar si hay un usuario logueado al cargar la página
  useEffect(() => {
    const savedUser = localStorage.getItem("user")
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      const savedFavorites = localStorage.getItem(`favorites_${JSON.parse(savedUser).id}`)
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites))
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simular llamada a API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const foundUser = mockUsers.find((u) => u.email === email && u.password === password)

    if (foundUser) {
      const userData = { id: foundUser.id, name: foundUser.name, email: foundUser.email }
      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))

      const savedFavorites = localStorage.getItem(`favorites_${userData.id}`)
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites))
      } else {
        setFavorites([])
      }

      setIsLoading(false)
      return true
    }

    setIsLoading(false)
    return false
  }

  const register = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true)

    // Simular llamada a API
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Verificar si el email ya existe
    const existingUser = mockUsers.find((u) => u.email === email)
    if (existingUser) {
      setIsLoading(false)
      return false
    }

    // Crear nuevo usuario
    const newUser = {
      id: mockUsers.length + 1,
      name,
      email,
      password,
    }
    mockUsers.push(newUser)

    const userData = { id: newUser.id, name: newUser.name, email: newUser.email }
    setUser(userData)
    localStorage.setItem("user", JSON.stringify(userData))
    setFavorites([])
    setIsLoading(false)
    return true
  }

  const logout = () => {
    setUser(null)
    setFavorites([])
    localStorage.removeItem("user")
  }

  const addToFavorites = (propertyId: number) => {
    if (!user) return

    const newFavorites = [...favorites, propertyId]
    setFavorites(newFavorites)
    localStorage.setItem(`favorites_${user.id}`, JSON.stringify(newFavorites))
  }

  const removeFromFavorites = (propertyId: number) => {
    if (!user) return

    const newFavorites = favorites.filter((id) => id !== propertyId)
    setFavorites(newFavorites)
    localStorage.setItem(`favorites_${user.id}`, JSON.stringify(newFavorites))
  }

  const isFavorite = (propertyId: number) => {
    return favorites.includes(propertyId)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        register,
        logout,
        isLoading,
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
