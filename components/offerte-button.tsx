"use client"

import { Button } from "@/components/ui/button"
import type { ComponentPropsWithoutRef } from "react"

type Props = Omit<ComponentPropsWithoutRef<typeof Button>, "asChild"> & {
  onClick?: () => void
}

export function OfferteButton({ children, onClick, ...props }: Props) {
  function handleClick() {
    onClick?.()
    window.dispatchEvent(new CustomEvent("open-offerte-modal"))
  }
  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  )
}
