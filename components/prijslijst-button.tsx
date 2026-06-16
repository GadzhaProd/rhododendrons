"use client"

import { useState } from "react"
import { Download } from "lucide-react"
import { PrijslijstModal } from "./prijslijst-modal"

export function PrijslijstButton() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center justify-center gap-2 border border-primary-foreground/30 hover:bg-primary-foreground/10 rounded-md px-6 py-3 text-sm font-medium transition-colors"
      >
        <Download className="h-4 w-4" />
        Download prijslijst (PDF)
      </button>
      <PrijslijstModal open={open} onOpenChange={setOpen} />
    </>
  )
}
