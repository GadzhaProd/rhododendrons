import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  BloomTimeline,
  bloomTimelineGradient,
  bloomTimelinePlantPattern,
} from "@/components/bloom-timeline"

const currentMonthIdx = Math.min(Math.max(new Date().getMonth() - 1, 0), 8)

const bloomData = [
  { name: "Cunningham's White",      color: "Wit / lichtroze",   colorHex: "#f5ede3", bloom: [2, 3],    plant: [0, 1, 7, 8] },
  { name: "Nova Zembla",             color: "Helderrood",         colorHex: "#d14343", bloom: [3, 4],    plant: [0, 1, 7, 8] },
  { name: "Roseum Elegans",          color: "Warm roze",          colorHex: "#e07aa6", bloom: [3, 4],    plant: [0, 1, 7, 8] },
  { name: "Catawbiense Boursault",   color: "Paars-lavendel",     colorHex: "#b888d8", bloom: [3, 4],    plant: [0, 1, 7, 8] },
  { name: "Catawbiense Grandiflorum", color: "Lila-roze",         colorHex: "#c090d0", bloom: [3, 4],    plant: [0, 1, 7, 8] },
  { name: "Ponticum Roseum",         color: "Roze / lichtpaars",  colorHex: "#e8a0c0", bloom: [3, 4],    plant: [0, 1, 7, 8] },
  { name: "Ponticum",                color: "Violet-paars",       colorHex: "#7b5ea7", bloom: [3, 4],    plant: [0, 1, 7, 8] },
]

export function BloomSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-medium text-xs uppercase tracking-wider">
            Bloei- &amp; Plantkalender
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Wanneer bloeit úw favoriete soort?
          </h2>
          <p className="mt-4 text-muted-foreground text-pretty">
            Plan uw aankoop rondom het bloeimoment.
          </p>
        </div>

        {/* Timeline */}
        <BloomTimeline
          data={bloomData}
          currentMonthIdx={currentMonthIdx}
          showPlantPeriod
          todayLabel="Vandaag"
        />

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
          <div className="flex items-center gap-3">
            <span
              className="inline-block w-6 h-2.5 rounded-full"
              style={{ background: bloomTimelineGradient }}
            />
            <span className="italic text-sm text-muted-foreground">Bloeiperiode</span>
          </div>
          <div className="flex items-center gap-3">
            <span
              className="inline-block w-6 h-2.5 rounded-full"
              style={{ background: bloomTimelinePlantPattern }}
            />
            <span className="italic text-sm text-muted-foreground">Ideaal plantmoment</span>
          </div>
        </div>

        <p className="mt-6 text-sm text-center italic max-w-2xl mx-auto text-muted-foreground">
          Rhododendrons kunnen het hele jaar door geplant worden, behalve bij strenge vorst of droogte.
        </p>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/plantgids"
            className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium bg-primary text-primary-foreground transition-colors duration-200 ease-out hover:bg-primary/90"
          >
            Bekijk plantgids
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
