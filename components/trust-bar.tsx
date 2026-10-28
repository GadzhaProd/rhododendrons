import { Award, Truck, Leaf, MessageCircle } from "lucide-react"

const items = [
  {
    icon: Award,
    label: "ERVARING",
    value: "Sinds 2001",
  },
  {
    icon: Truck,
    label: "LEVERING",
    value: "Eigen transport",
  },
  {
    icon: Leaf,
    label: "VOORRAAD",
    value: "10.000+ planten",
  },
  {
    icon: MessageCircle,
    label: "ADVIES",
    value: "Persoonlijk advies",
  },
]

export function TrustBar() {
  return (
    <section id="trust" className="bg-card py-6 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between divide-y sm:divide-y-0 sm:divide-x divide-border">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-1 items-center justify-center gap-3 px-4 py-3 sm:py-0"
            >
              <div className="flex items-center gap-3 w-48 sm:w-auto">
                <item.icon className="h-5 w-5 text-accent shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground leading-none">
                    {item.label}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-foreground leading-none">
                    {item.value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
