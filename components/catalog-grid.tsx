import Image from "next/image"
import Link from "next/link"
import type { Product, Accessory } from "@/lib/products"

const liningFigures = { fontVariantNumeric: "lining-nums tabular-nums" } as const

const rowLinkBase =
  "group block -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 transition-colors duration-200 ease-out hover:bg-secondary/40 focus-visible:outline-none focus-visible:bg-secondary/40 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"

function formatEurPrice(value: string | number): string {
  if (typeof value === "string") return `€${value}`
  return `€${value.toFixed(2).replace(".", ",")}`
}

export function CatalogGrid({
  products,
  toebehoren,
}: {
  products: Product[]
  toebehoren?: Accessory
}) {
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <ul>
        {products.map((product, idx) => (
          <li
            key={product.slug}
            className={idx === 0 ? "" : "border-t border-border"}
          >
            <Link
              href={`/assortiment/${product.slug}`}
              className={`${rowLinkBase} py-12 lg:py-16`}
            >
              <div
                className={`flex flex-col gap-8 lg:flex-row lg:gap-12 lg:items-center ${
                  idx % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="lg:w-7/12">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={`Rhododendron ${product.name}, ${product.color.toLowerCase()}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 58vw"
                      priority={idx === 0}
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="lg:w-5/12">
                  <h2 className="font-serif text-3xl lg:text-4xl font-medium tracking-tight text-foreground">
                    {product.name}
                  </h2>

                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="inline-block h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: product.colorHex ?? "currentColor" }}
                    />
                    <span>{product.color}</span>
                    <span aria-hidden="true" className="text-muted-foreground/60">·</span>
                    <span>{product.bloeiperiode}</span>
                    <span aria-hidden="true" className="text-muted-foreground/60">·</span>
                    <span>{product.maxHoogte}</span>
                  </div>

                  <p className="mt-5 text-base text-foreground/85 leading-relaxed max-w-prose">
                    {product.description}
                  </p>

                  <dl className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-5">
                    {product.sizes.map((size) => (
                      <div key={size.label}>
                        <dt className="text-xs uppercase tracking-wider text-muted-foreground">
                          {size.label}
                        </dt>
                        <dd
                          className="mt-1 font-serif text-xl text-foreground"
                          style={liningFigures}
                        >
                          {formatEurPrice(size.price)}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      {toebehoren && (
        <section className="mt-20 lg:mt-32 pt-12 lg:pt-16 border-t border-border">
          <span className="text-accent text-xs font-medium uppercase tracking-wider">
            Toebehoren
          </span>
          <h2 className="mt-2 font-serif text-2xl lg:text-3xl font-medium tracking-tight text-foreground">
            Voor optimale aanslag
          </h2>

          <Link
            href={`/assortiment/${toebehoren.slug}`}
            className={`${rowLinkBase} mt-8 py-8 lg:py-10`}
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:gap-12 lg:items-center">
              <div className="lg:w-5/12">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={toebehoren.image || "/placeholder.svg"}
                    alt={toebehoren.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="lg:w-7/12">
                <h3 className="font-serif text-2xl lg:text-3xl font-medium tracking-tight text-foreground">
                  {toebehoren.name}
                </h3>
                <p className="mt-4 text-base text-foreground/85 leading-relaxed max-w-prose">
                  {toebehoren.description}
                </p>
                <div className="mt-6 flex items-baseline gap-3">
                  <span
                    className="font-serif text-xl text-foreground"
                    style={liningFigures}
                  >
                    {formatEurPrice(toebehoren.price)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {toebehoren.unit}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}
    </div>
  )
}
