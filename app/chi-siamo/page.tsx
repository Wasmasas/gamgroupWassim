import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CtaBanner } from '@/components/cta-banner'
import { stats, values } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Chi Siamo | GAM Group',
  description:
    'Fondata nel 2001 a Treviso, GAM Group è una realtà di consulenza e system integration guidata dal valore del capitale umano.',
}

const timeline = [
  { year: '2001', title: 'La nascita', text: 'GAM Group viene fondata a Treviso con una visione: mettere la tecnologia al servizio delle imprese.' },
  { year: '2008', title: 'Espansione verticale', text: 'Sviluppiamo competenze dedicate ai settori Automotive e Manufacturing.' },
  { year: '2015', title: 'Verso il cloud', text: 'Guidiamo i primi grandi progetti di migrazione cloud e digital transformation.' },
  { year: '2026', title: 'Innovazione continua', text: 'Oltre 150 progetti consegnati e una rete di partner sempre più solida sul territorio.' },
]

export default function ChiSiamoPage() {
  return (
    <>
      <PageHero
        eyebrow="Chi siamo"
        title="Persone, competenze e visione al servizio delle imprese"
        description="Da oltre vent'anni affianchiamo le aziende nel loro percorso di innovazione con un approccio concreto e su misura."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/about.png"
              alt="Il team di GAM Group"
              width={720}
              height={620}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <SectionHeading eyebrow="La nostra storia" title="Un approccio innovativo e personalizzato" />
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              GAM Group è un&apos;azienda italiana fondata nel 2001, con sede a Treviso, che si
              distingue per l&apos;approccio innovativo e personalizzato nella consulenza alle
              imprese. Il punto di forza dell&apos;azienda è il capitale umano: un team di esperti
              con anni di esperienza che supporta i clienti in diversi settori, tra cui Automotive,
              Fashion, Manufacturing e altri.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Ci impegniamo a fornire soluzioni su misura, adattandoci alle specifiche esigenze di
              ogni industria, per guidare le aziende verso il miglioramento continuo e
              l&apos;innovazione, affidandoci ad una rete di partner strategica radicata nel
              territorio.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-border bg-card p-7 text-center">
                <p className="font-display text-5xl font-bold tracking-tight text-primary">{stat.value}</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="I nostri valori"
            title="Cosa ci rende diversi"
            className="max-w-2xl"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-2xl border border-border bg-card p-8">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <value.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Il percorso" title="Oltre vent'anni di crescita" className="max-w-2xl" />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item) => (
              <div key={item.year} className="relative rounded-2xl border border-border bg-card p-7">
                <span className="font-display text-3xl font-bold text-accent">{item.year}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
