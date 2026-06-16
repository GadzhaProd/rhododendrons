"use client"

import { createContext, useContext, useEffect, useState } from "react"

export type CartItem = {
  slug: string
  name: string
  image: string
  size: string
  price: number
  quantity: number
}

type CartContext = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "quantity">) => void
  removeItem: (slug: string, size: string) => void
  updateQuantity: (slug: string, size: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const CartContext = createContext<CartContext | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem("cart")
    if (stored) {
      try {
        setItems(JSON.parse(stored))
      } catch {
        localStorage.removeItem("cart")
      }
    }
  }, [])

  // Persist to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items))
  }, [items])

  function addItem(newItem: Omit<CartItem, "quantity">) {
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.slug === newItem.slug && i.size === newItem.size
      )
      if (existing) {
        return prev.map((i) =>
          i.slug === newItem.slug && i.size === newItem.size
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      }
      return [...prev, { ...newItem, quantity: 1 }]
    })
    setIsOpen(true)
  }

  function removeItem(slug: string, size: string) {
    setItems((prev) =>
      prev.filter((i) => !(i.slug === slug && i.size === size))
    )
  }

  function updateQuantity(slug: string, size: string, quantity: number) {
    if (quantity < 1) {
      removeItem(slug, size)
      return
    }
    setItems((prev) =>
      prev.map((i) =>
        i.slug === slug && i.size === size ? { ...i, quantity } : i
      )
    )
  }

  function clearCart() {
    setItems([])
  }

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0)
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used inside CartProvider")
  return ctx
}
