import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { services } from '@/lib/content'
import { SectionHeading } from '@/components/section-heading'

export function ServicesSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="I nostri servizi"
            title="Competenze end-to-end per la tua trasformazione digitale"
            className="max-w-2xl"
          />
          <Link
            href="/servizi"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
          >
            Tutti i servizi
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <service.icon className="size-6" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
