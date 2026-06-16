"use client"

import Link from "next/link"
import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown, ChevronUp, ChevronsUpDown } from "lucide-react"

export type ComparisonRow = {
  slug: string
  name: string
  color: string
  colorHex: string
  bloei: string
  bloeiStart: number
  height: string
  heightMax: number
  width: string
  widthMax: number
  growth: string
  growthMax: number
  sun: string
  hardiness: number
}

type SortKey =
  | "name"
  | "color"
  | "bloei"
  | "height"
  | "width"
  | "growth"
  | "sun"
  | "hardiness"

type SortDir = "asc" | "desc"

const columns: ReadonlyArray<{ key: SortKey; label: string }> = [
  { key: "name", label: "Variëteit" },
  { key: "color", label: "Kleur" },
  { key: "bloei", label: "Bloei" },
  { key: "height", label: "Hoogte" },
  { key: "width", label: "Breedte" },
  { key: "growth", label: "Groei" },
  { key: "sun", label: "Standplaats" },
  { key: "hardiness", label: "Winterhard" },
]

const liningFigures = { fontVariantNumeric: "lining-nums tabular-nums" } as const

function sortValue(row: ComparisonRow, key: SortKey): string | number {
  switch (key) {
    case "name": return row.name
    case "color": return row.color
    case "bloei": return row.bloeiStart
    case "height": return row.heightMax
    case "width": return row.widthMax
    case "growth": return row.growthMax
    case "sun": return row.sun
    case "hardiness": return row.hardiness
  }
}

function isLightColor(hex: string): boolean {
  const c = hex.replace("#", "")
  if (c.length !== 6) return false
  const r = parseInt(c.slice(0, 2), 16)
  const g = parseInt(c.slice(2, 4), 16)
  const b = parseInt(c.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.85
}

export function PlantgidsComparisonTable({ data }: { data: ComparisonRow[] }) {
  const router = useRouter()
  const [sortKey, setSortKey] = useState<SortKey>("name")
  const [sortDir, setSortDir] = useState<SortDir>("asc")

  const sorted = useMemo(() => {
    const copy = [...data]
    copy.sort((a, b) => {
      const va = sortValue(a, sortKey)
      const vb = sortValue(b, sortKey)
      let cmp = 0
      if (typeof va === "number" && typeof vb === "number") {
        cmp = va - vb
      } else {
        cmp = String(va).localeCompare(String(vb), "nl")
      }
      return sortDir === "asc" ? cmp : -cmp
    })
    return copy
  }, [data, sortKey, sortDir])

  function handleSort(key: SortKey) {
    if (key === sortKey) {
      setSortDir(sortDir === "asc" ? "desc" : "asc")
    } else {
      setSortKey(key)
      setSortDir("asc")
    }
  }

  function ariaSort(key: SortKey): "ascending" | "descending" | "none" {
    if (key !== sortKey) return "none"
    return sortDir === "asc" ? "ascending" : "descending"
  }

  return (
    <div>
      <div className="overflow-x-auto -mx-4 sm:-mx-6 lg:mx-0">
        <table className="w-full min-w-[760px] border-collapse">
          <thead>
            <tr className="bg-secondary border-b border-border">
              {columns.map((col) => {
                const isActive = col.key === sortKey
                const Icon = isActive
                  ? sortDir === "asc"
                    ? ChevronUp
                    : ChevronDown
                  : ChevronsUpDown
                const stickyCls =
                  col.key === "name"
                    ? "sticky left-0 z-10 bg-secondary"
                    : ""
                return (
                  <th
                    key={col.key}
                    scope="col"
                    aria-sort={ariaSort(col.key)}
                    className={`text-left ${stickyCls}`}
                  >
                    <button
                      type="button"
                      onClick={() => handleSort(col.key)}
                      className="w-full px-4 py-3 min-h-11 flex items-center gap-1.5 text-xs uppercase tracking-wider font-medium text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:text-foreground focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset transition-colors"
                    >
                      <span>{col.label}</span>
                      <Icon
                        aria-hidden="true"
                        className={`h-3 w-3 ${
                          isActive ? "text-accent" : "text-muted-foreground/50"
                        }`}
                      />
                    </button>
                  </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {sorted.map((row) => (
              <tr
                key={row.slug}
                onClick={() => router.push(`/assortiment/${row.slug}`)}
                className="group cursor-pointer border-b border-border transition-colors duration-150 ease-out hover:bg-secondary/40 focus-within:bg-secondary/40"
              >
                <td className="sticky left-0 z-10 bg-background group-hover:bg-secondary/40 group-focus-within:bg-secondary/40 px-4 py-3 transition-colors">
                  <Link
                    href={`/assortiment/${row.slug}`}
                    onClick={(e) => e.stopPropagation()}
                    className="font-serif text-base font-medium text-foreground hover:text-accent focus-visible:outline-none focus-visible:text-accent rounded-sm"
                  >
                    {row.name}
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm text-foreground">
                  <span className="inline-flex items-center gap-2">
                    <span
                      aria-hidden="true"
                      className="inline-block h-2.5 w-2.5 rounded-full shrink-0"
                      style={{
                        backgroundColor: row.colorHex,
                        border: isLightColor(row.colorHex)
                          ? "1px solid var(--border)"
                          : undefined,
                      }}
                    />
                    <span>{row.color}</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-foreground">{row.bloei}</td>
                <td
                  className="px-4 py-3 text-sm text-foreground"
                  style={liningFigures}
                >
                  {row.height}
                </td>
                <td
                  className="px-4 py-3 text-sm text-foreground"
                  style={liningFigures}
                >
                  {row.width}
                </td>
                <td
                  className="px-4 py-3 text-sm text-foreground"
                  style={liningFigures}
                >
                  {row.growth}
                </td>
                <td className="px-4 py-3 text-sm text-foreground">{row.sun}</td>
                <td
                  className="px-4 py-3 text-sm text-foreground"
                  style={liningFigures}
                >
                  Zone {row.hardiness}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted-foreground italic text-center sm:hidden">
        ← swipe voor meer →
      </p>
    </div>
  )
}
