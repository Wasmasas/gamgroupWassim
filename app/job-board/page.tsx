import type { Metadata } from 'next'
import { ArrowUpRight, MapPin, Clock, Heart, GraduationCap, Users } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Job Board | GAM Group',
  description:
    'Unisciti al team di GAM Group. Scopri le posizioni aperte in ambito IT, consulenza e system integration.',
}

const jobs = [
  { role: 'System Integration Consultant', location: 'Treviso', type: 'Full-time', area: 'Consulenza' },
  { role: 'Cloud Solutions Engineer', location: 'Treviso / Ibrido', type: 'Full-time', area: 'Cloud' },
  { role: 'Data Analyst', location: 'Treviso', type: 'Full-time', area: 'Data & Analytics' },
  { role: 'Full-Stack Developer', location: 'Remoto', type: 'Full-time', area: 'Sviluppo' },
  { role: 'Cybersecurity Specialist', location: 'Treviso', type: 'Full-time', area: 'Security' },
  { role: 'Stage IT Consultant', location: 'Treviso', type: 'Stage', area: 'Consulenza' },
]

const perks = [
  { icon: GraduationCap, title: 'Formazione continua', text: 'Percorsi di crescita, certificazioni e accesso a tecnologie all\'avanguardia.' },
  { icon: Heart, title: 'Work-life balance', text: 'Lavoro ibrido e flessibilità per conciliare al meglio vita e carriera.' },
  { icon: Users, title: 'Team affiatato', text: 'Un ambiente collaborativo dove le persone contano davvero.' },
]

export default function JobBoardPage() {
  return (
    <>
      <PageHero
        eyebrow="Job board"
        title="Costruisci il futuro digitale con noi"
        description="Il nostro punto di forza è il capitale umano. Cerchiamo persone curiose, competenti e appassionate di tecnologia."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Posizioni aperte" title="Le opportunità del momento" className="max-w-2xl" />
          <div className="mt-12 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
            {jobs.map((job) => (
              <div
                key={job.role}
                className="group flex flex-col gap-4 p-6 transition-colors hover:bg-secondary/40 sm:flex-row sm:items-center sm:justify-between sm:px-8"
              >
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-accent">{job.area}</span>
                  <h3 className="mt-1 font-display text-lg font-semibold text-foreground">{job.role}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="size-4" />
                      {job.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="size-4" />
                      {job.type}
                    </span>
                  </div>
                </div>
                <Button asChild variant="outline" className="rounded-full sm:shrink-0">
                  <a href="mailto:info@gamgroup.it?subject=Candidatura%20-%20{job.role}">
                    Candidati
                    <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="Perché GAM" title="Cosa offriamo al nostro team" className="max-w-2xl" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {perks.map((perk) => (
              <div key={perk.title} className="rounded-2xl border border-border bg-card p-8">
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <perk.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{perk.title}</h3>
                <p className="mt-2.5 text-pretty leading-relaxed text-muted-foreground">{perk.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-balance font-display text-3xl font-bold text-foreground">
            Non trovi la posizione giusta?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Inviaci comunque la tua candidatura spontanea: siamo sempre alla ricerca di nuovi
            talenti da inserire nel nostro team.
          </p>
          <Button asChild size="lg" className="mt-8 rounded-full">
            <a href="mailto:info@gamgroup.it?subject=Candidatura%20spontanea">
              Invia candidatura spontanea
              <ArrowUpRight className="size-4" />
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
