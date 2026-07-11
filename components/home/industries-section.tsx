import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { industries } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function IndustriesSection() {
  return (
    <section className="bg-secondary/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="I settori"
          title="Soluzioni verticali per industrie che non si accontentano"
          description="Conosciamo le sfide di ogni settore. Per questo costruiamo soluzioni calibrate sui processi reali dei nostri clienti."
          className="max-w-3xl"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {industries.map((ind) => (
            <Link
              key={ind.slug}
              href="/progetti"
              className="group relative overflow-hidden rounded-3xl border border-border"
            >
              <div className="relative h-72 w-full overflow-hidden sm:h-80">
                <Image
                  src={ind.image || '/placeholder.svg'}
                  alt={ind.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-7 text-primary-foreground">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold uppercase tracking-widest text-accent">
                    {ind.tagline}
                  </span>
                  <span className="flex size-9 items-center justify-center rounded-full bg-background/20 backdrop-blur transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
                <h3 className="mt-2 font-display text-3xl font-bold">{ind.name}</h3>
                <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-primary-foreground/80">
                  {ind.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
