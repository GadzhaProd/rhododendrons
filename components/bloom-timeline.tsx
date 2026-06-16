interface BloomRow {
  name: string
  color: string
  colorHex?: string
  bloom: number[]
  plant?: number[]
}

interface BloomTimelineProps {
  data: BloomRow[]
  currentMonthIdx: number
  showPlantPeriod?: boolean
  todayLabel?: string
  minWidthClass?: string
}

const months = ["Feb", "Mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt"]

export const bloomTimelineGradient = "oklch(0.65 0.2 340)"

export const bloomTimelinePlantPattern = "oklch(0.35 0.08 150 / 0.2)"

function isLightColor(hex: string): boolean {
  const c = hex.replace("#", "")
  if (c.length !== 6) return false
  const r = parseInt(c.slice(0, 2), 16)
  const g = parseInt(c.slice(2, 4), 16)
  const b = parseInt(c.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
  return luminance > 0.85
}

export function BloomTimeline({
  data,
  currentMonthIdx,
  showPlantPeriod = false,
  todayLabel = "Vandaag",
  minWidthClass = "min-w-[760px]",
}: BloomTimelineProps) {
  return (
    <>
      <div className="overflow-x-auto">
        <div className={minWidthClass}>

          {/* Month headers */}
          <div className="grid grid-cols-[200px_repeat(9,1fr)] items-center pt-2 pb-12 border-b border-border">
            <div className="sticky left-0 z-10 bg-background px-4 font-sans text-xs uppercase font-semibold tracking-wider text-muted-foreground">
              Variëteit
            </div>
            {months.map((m, i) => {
              const isCurrent = i === currentMonthIdx
              return (
                <div key={m} className="text-center relative">
                  <span
                    className={`font-sans text-xs uppercase font-semibold tracking-wider ${
                      isCurrent ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {m}
                  </span>
                  {isCurrent && (
                    <span className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-0.5 text-[10px] uppercase font-bold tracking-wider rounded-full whitespace-nowrap bg-accent text-accent-foreground">
                      {todayLabel}
                    </span>
                  )}
                </div>
              )
            })}
          </div>

          {/* Rows */}
          {data.map((row, rowIdx) => {
            const isLast = rowIdx === data.length - 1
            return (
              <div
                key={row.name}
                className={`group grid grid-cols-[200px_repeat(9,1fr)] items-center transition-colors duration-200 ease-out hover:bg-secondary/40 ${
                  isLast ? "" : "border-b border-border"
                }`}
              >
                {/* Variety name cell */}
                <div className="sticky left-0 z-10 bg-background group-hover:bg-secondary/40 transition-colors px-4 py-5 flex items-center gap-2.5">
                  {row.colorHex && (
                    <span
                      aria-hidden="true"
                      className="shrink-0 inline-block h-2.5 w-2.5 rounded-full"
                      style={{
                        backgroundColor: row.colorHex,
                        border: isLightColor(row.colorHex)
                          ? "1px solid var(--border)"
                          : undefined,
                      }}
                    />
                  )}
                  <div className="min-w-0">
                    <div className="font-sans font-semibold text-base leading-tight text-foreground">
                      {row.name}
                    </div>
                    <div className="italic text-xs mt-1 text-muted-foreground">
                      {row.color}
                    </div>
                  </div>
                </div>

                {/* Month cells */}
                {months.map((_, monthIdx) => {
                  const isBloom = row.bloom.includes(monthIdx)
                  const isPlant = showPlantPeriod && row.plant?.includes(monthIdx)
                  const isCurrent = monthIdx === currentMonthIdx
                  return (
                    <div key={monthIdx} className="px-1 py-2 flex items-center justify-center">
                      {isBloom ? (
                        <div
                          className={`w-full h-3.5 rounded-full bg-accent ${
                            isCurrent
                              ? "ring-2 ring-accent ring-offset-2 ring-offset-background"
                              : ""
                          }`}
                        />
                      ) : isPlant ? (
                        <div className="w-full h-3.5 rounded-full bg-primary/20" />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="shrink-0 inline-block h-1 w-1 rounded-full bg-muted-foreground/30"
                        />
                      )}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
      </div>
      <p className="mt-3 text-xs text-muted-foreground italic text-center sm:hidden">
        ← swipe voor meer →
      </p>
    </>
  )
}
