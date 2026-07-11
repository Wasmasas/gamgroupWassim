import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { CtaBanner } from '@/components/cta-banner'
import { services } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Servizi | GAM Group',
  description:
    'System integration, cloud, data & analytics, digital transformation, software su misura e cybersecurity: le competenze di GAM Group.',
}

const approach = [
  { step: '01', title: 'Ascolto e analisi', text: 'Studiamo processi, obiettivi e vincoli per capire davvero le tue esigenze.' },
  { step: '02', title: 'Progettazione', text: 'Disegniamo una soluzione su misura, scalabile e sostenibile nel tempo.' },
  { step: '03', title: 'Implementazione', text: 'Integriamo, sviluppiamo e rilasciamo con metodo e attenzione alla qualità.' },
  { step: '04', title: 'Supporto continuo', text: 'Restiamo al tuo fianco con manutenzione, evoluzioni e assistenza dedicata.' },
]

export default function ServiziPage() {
  return (
    <>
      <PageHero
        eyebrow="I nostri servizi"
        title="Competenze complete per la trasformazione digitale"
        description="Dalla consulenza strategica all'integrazione dei sistemi: un unico partner per ogni fase del tuo percorso tecnologico."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5"
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Il metodo"
            title="Come lavoriamo insieme a te"
            description="Un processo chiaro e collaudato che riduce i rischi e massimizza il valore di ogni progetto."
            className="max-w-3xl"
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((item) => (
              <div key={item.step} className="rounded-2xl border border-border bg-card p-7">
                <span className="font-display text-5xl font-bold text-primary/15">{item.step}</span>
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
