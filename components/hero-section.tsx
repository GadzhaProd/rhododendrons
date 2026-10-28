import { asset } from "@/lib/base-path"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] flex items-end justify-center overflow-hidden pb-24">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          poster={asset("/images/hero-rhododendrons.jpg")}
          className="absolute inset-0 w-full h-full object-cover [object-position:center_15%] scale-100 motion-reduce:hidden"
        >
          <source
            src={asset("/videos/hero.mp4")}
            type="video/mp4"
          />
        </video>
        <img
          src={asset("/images/hero-rhododendrons.jpg")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover [object-position:center_15%] hidden motion-reduce:block"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.08_0.02_155/0.6)] via-[oklch(0.08_0.02_155/0.25)] to-[oklch(0.08_0.02_155/0.7)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-6xl font-semibold tracking-tight text-primary-foreground/85 sm:text-7xl md:text-8xl lg:text-9xl text-balance">
            Rhododendrons{' '}
            <span className="block">uit eigen kwekerij</span>
          </h1>
          <p className="mt-6 text-base text-primary-foreground/80 sm:text-lg md:text-xl max-w-xl mx-auto tracking-wide">
            Gekweekt in Otterlo sinds 2001.
          </p>
        </div>
      </div>

    </section>
  )
}
