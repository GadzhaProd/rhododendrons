# Assortiment Filtering Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add client-side filtering by color and size (height) to the `/assortiment` page using URL search params.

**Architecture:** `page.tsx` stays a server component with metadata. A new `AssortimentClient` client component handles filter state via `useSearchParams` + `useRouter`, derives unique filter options from `products` data at module level, and renders both the filter panel and the product grid.

**Tech Stack:** Next.js 16, React 19, TypeScript, Tailwind CSS, `next/navigation` (`useSearchParams`, `useRouter`)

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `app/assortiment/assortiment-client.tsx` | **Create** | Filter panel UI + product grid, URL param state |
| `app/assortiment/page.tsx` | **Modify** | Wrap AssortimentClient in `<Suspense>`, remove inline grid |

---

## Task 1: Create AssortimentClient component

**Files:**
- Create: `app/assortiment/assortiment-client.tsx`

- [ ] **Step 1: Create the file with full implementation**

```tsx
"use client"

import { useSearchParams, useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { products } from "@/lib/products"
import { useCallback } from "react"

// Derive unique filter options at module level (runs once)
const allColors = Array.from(new Set(products.map((p) => p.color))).sort()
const allSizes = Array.from(
  new Set(products.flatMap((p) => p.sizes.map((s) => s.label)))
).sort((a, b) => {
  const aNum = parseInt(a.split("–")[0])
  const bNum = parseInt(b.split("–")[0])
  return aNum - bNum
})

export function AssortimentClient() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const selectedColors = searchParams.getAll("color")
  const selectedSizes = searchParams.getAll("size")
  const hasFilters = selectedColors.length > 0 || selectedSizes.length > 0

  const toggleFilter = useCallback(
    (type: "color" | "size", value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      const current = params.getAll(type)
      params.delete(type)
      if (current.includes(value)) {
        current.filter((v) => v !== value).forEach((v) => params.append(type, v))
      } else {
        current.forEach((v) => params.append(type, v))
        params.append(type, value)
      }
      router.replace(`/assortiment?${params.toString()}`, { scroll: false })
    },
    [searchParams, router]
  )

  const clearFilters = useCallback(() => {
    router.replace("/assortiment", { scroll: false })
  }, [router])

  const filtered = products.filter((p) => {
    const colorMatch = selectedColors.length === 0 || selectedColors.includes(p.color)
    const sizeMatch =
      selectedSizes.length === 0 || p.sizes.some((s) => selectedSizes.includes(s.label))
    return colorMatch && sizeMatch
  })

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      {/* Filter panel */}
      <div className="mb-10 space-y-4">
        {/* Color row */}
        <div className="flex items-start gap-3">
          <span className="text-sm font-medium text-muted-foreground pt-1.5 shrink-0 w-14">
            Kleur:
          </span>
          <div className="flex flex-wrap gap-2">
            {allColors.map((color) => {
              const active = selectedColors.includes(color)
              return (
                <button
                  key={color}
                  onClick={() => toggleFilter("color", color)}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? "bg-accent text-accent-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {color}
                  {active && <X className="h-3 w-3" />}
                </button>
              )
            })}
          </div>
        </div>

        {/* Size row */}
        <div className="flex items-start gap-3">
          <span className="text-sm font-medium text-muted-foreground pt-1.5 shrink-0 w-14">
            Maat:
          </span>
          <div className="flex flex-wrap gap-2">
            {allSizes.map((size) => {
              const active = selectedSizes.includes(size)
              return (
                <button
                  key={size}
                  onClick={() => toggleFilter("size", size)}
                  className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {size}
                  {active && <X className="h-3 w-3" />}
                </button>
              )
            })}
          </div>
        </div>

        {/* Footer row: clear button + counter */}
        <div className="flex items-center gap-4">
          {hasFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
            >
              Wis filters
            </button>
          )}
          <span className="text-sm text-muted-foreground">
            {filtered.length} van {products.length} variëteiten
          </span>
        </div>
      </div>

      {/* Product grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-24 text-muted-foreground">
          Geen variëteiten gevonden met deze filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((product) => (
            <Link
              key={product.slug}
              href={`/assortiment/${product.slug}`}
              className="group"
            >
              <Card className="overflow-hidden border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-5">
                  <span className="text-xs font-medium text-accent uppercase tracking-wide">
                    {product.color}
                  </span>
                  <h2 className="mt-1 font-serif text-lg font-semibold text-foreground leading-tight">
                    {product.name}
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-1">
                    {product.sizes.map((size) => (
                      <span
                        key={size.label}
                        className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {size.label}
                      </span>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Vanaf{" "}
                      <span className="font-semibold text-foreground">
                        €{product.sizes[0].price}
                      </span>
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-accent group-hover:text-accent/80 transition-colors">
                      Bekijk
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd /Users/gadzha/Desktop/rhododendron-landing-page && npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add app/assortiment/assortiment-client.tsx
git commit -m "feat: add AssortimentClient with color/size filtering"
```

---

## Task 2: Update page.tsx to use AssortimentClient

**Files:**
- Modify: `app/assortiment/page.tsx`

- [ ] **Step 1: Replace the file contents**

```tsx
import { Suspense } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OfferteModal } from "@/components/offerte-modal"
import { AssortimentClient } from "./assortiment-client"
import { products } from "@/lib/products"

export const metadata = {
  title: "Assortiment | Top Rhododendrons",
  description:
    "Ontdek ons volledige assortiment van 12 populaire rhododendron variëteiten. Direct van eigen kwekerij in Otterlo.",
}

export default function AssortimentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-24">
        <div className="bg-secondary/50 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Ons Assortiment
            </span>
            <h1 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Alle Rhododendrons
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              {products.length} populaire variëteiten — direct leverbaar van eigen kwekerij in
              Otterlo. Dagvers gerooid bij uw bestelling.
            </p>
          </div>
        </div>

        <Suspense
          fallback={
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-muted-foreground">
              Laden...
            </div>
          }
        >
          <AssortimentClient />
        </Suspense>
      </main>
      <Footer />
      <OfferteModal />
    </>
  )
}
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `cd /Users/gadzha/Desktop/rhododendron-landing-page && npx tsc --noEmit`
Expected: no errors

- [ ] **Step 3: Start dev server and manually verify**

Run: `npm run dev`

Open `http://localhost:3000/assortiment` and check:
- All 12 products visible, counter shows "12 van 12 variëteiten"
- "Wis filters" button is hidden
- Click a color chip → grid filters, counter updates, URL updates (`?color=...`)
- Click same chip again → deselects, all products return
- Select color + size → AND logic: only products matching both are shown
- Click "Wis filters" → all filters reset, URL cleared
- Resize to mobile → chips wrap/scroll, layout intact
- Navigate to a product and press browser back → filters restored from URL

- [ ] **Step 4: Commit**

```bash
git add app/assortiment/page.tsx
git commit -m "feat: wire AssortimentClient into assortiment page with Suspense"
```
