import { cn } from "@/lib/utils"

// Facts line under a dark hero: one ruled row of plain sentences, no numerals
// set large, no icons. Replaces the TrustBar strip and the 25+/10.000+/100%
// metric trio. Expects an ancestor with the dark hero colours.
export function HeroFacts({
  items,
  className,
}: {
  items: readonly string[]
  className?: string
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap gap-x-10 gap-y-2 border-t border-primary-foreground/25 pt-5 text-base text-primary-foreground/90",
        className,
      )}
    >
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}
