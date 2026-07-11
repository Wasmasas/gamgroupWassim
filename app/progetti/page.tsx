import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBanner } from '@/components/cta-banner'
import { industries } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Progetti | GAM Group',
  description:
    'Scopri i progetti realizzati da GAM Group nei settori Automotive, Fashion, Manufacturing e Farmaceutico.',
}

const projects = [
  {
    sector: 'Manufacturing',
    title: 'Integrazione MES-ERP per una linea di produzione',
    text: 'Abbiamo connesso impianti, sistemi gestionali e reporting in tempo reale, riducendo i fermi macchina e migliorando la pianificazione.',
    image: '/images/manufacturing.png',
  },
  {
    sector: 'Fashion',
    title: 'Piattaforma PLM per la gestione delle collezioni',
    text: 'Dal design al retail: un flusso digitale unico che ha accelerato il time-to-market e ridotto gli errori di produzione.',
    image: '/images/fashion.png',
  },
  {
    sector: 'Automotive',
    title: 'Tracciabilità di filiera end-to-end',
    text: 'Digitalizzazione della supply chain con tracciamento completo dei componenti e dashboard di controllo qualità.',
    image: '/images/automotive.png',
  },
  {
    sector: 'Farmaceutico',
    title: 'Gestione documentale conforme alle normative',
    text: 'Un sistema sicuro e validato per la gestione dei documenti e dei processi critici, in piena compliance normativa.',
    image: '/images/pharma.png',
  },
]

export default function ProgettiPage() {
  return (
    <>
      <PageHero
        eyebrow="I progetti"
        title="Scopri cosa abbiamo fatto nel mondo"
        description="Ogni progetto è una sfida diversa. Ecco alcune delle soluzioni che abbiamo costruito per i nostri clienti nei diversi settori."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-8">
            {projects.map((project, i) => (
              <div
                key={project.title}
                className={`grid items-center gap-8 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div className="relative h-64 w-full lg:h-full lg:min-h-[22rem]">
                  <Image src={project.image || '/placeholder.svg'} alt={project.title} fill className="object-cover" />
                </div>
                <div className="p-8 lg:p-12">
                  <span className="inline-flex rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-accent">
                    {project.sector}
                  </span>
                  <h2 className="mt-4 text-balance font-display text-2xl font-bold text-foreground lg:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{project.text}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    Caso studio
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold text-foreground">I settori in cui operiamo</h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {industries.map((ind) => (
                <span
                  key={ind.slug}
                  className="rounded-full border border-border bg-secondary/50 px-5 py-2 text-sm font-medium text-foreground"
                >
                  {ind.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
