"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

type Props = {
  images: string[]
  alt: string
}

export function ProductGallery({ images, alt }: Props) {
  const [active, setActive] = useState(0)
  const [open, setOpen] = useState(false)

  const prev = useCallback(() => {
    setActive((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  const next = useCallback(() => {
    setActive((i) => (i + 1) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      else if (e.key === "ArrowLeft") prev()
      else if (e.key === "ArrowRight") next()
    }
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKey)
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener("keydown", onKey)
    }
  }, [open, prev, next])

  return (
    <>
      <div>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl cursor-zoom-in"
          aria-label="Foto vergroten"
        >
          <Image
            src={images[active]}
            alt={alt}
            fill
            className="object-cover transition-transform duration-150 group-hover:scale-[1.02]"
            priority
          />
        </button>
        {images.length > 1 && (
          <div className="mt-4 flex gap-3">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Foto ${i + 1} bekijken`}
                aria-pressed={i === active}
                className={`relative aspect-[4/3] w-24 overflow-hidden rounded-lg transition-all ${
                  i === active
                    ? "ring-2 ring-accent ring-offset-2 ring-offset-background"
                    : "ring-1 ring-border opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`${alt} foto ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); setOpen(false) }}
            className="absolute top-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            aria-label="Sluiten"
          >
            <X className="h-5 w-5" />
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); prev() }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Vorige foto"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); next() }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Volgende foto"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div
            className="relative w-full h-full max-w-6xl max-h-[90vh] mx-4 sm:mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[active]}
              alt={alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {images.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 text-xs font-medium">
              {active + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  )
}
