import type { Metadata } from 'next'
import { Mail, MapPin, Phone } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contatti | GAM Group',
  description:
    'Contatta GAM Group. Sede a Treviso, Via Callalta 31/E. Telefono +39 0422 583693, email info@gamgroup.it.',
}

const details = [
  {
    icon: MapPin,
    label: 'Sede',
    value: 'Via Callalta 31/E, 31100 Treviso (TV)',
  },
  {
    icon: Phone,
    label: 'Telefono',
    value: '+39 0422 583693',
    href: 'tel:+390422583693',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'info@gamgroup.it',
    href: 'mailto:info@gamgroup.it',
  },
]

export default function ContattiPage() {
  return (
    <>
      <PageHero
        eyebrow="Contatti"
        title="Parliamo del tuo prossimo progetto"
        description="Raccontaci la tua sfida: il nostro team è pronto ad ascoltarti e a costruire con te la soluzione giusta."
      />

      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-2xl font-bold text-foreground">Come raggiungerci</h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Siamo a Treviso, nel cuore del Nord-Est produttivo. Scrivici o chiamaci: ti
              risponderemo il prima possibile.
            </p>
            <ul className="mt-8 space-y-5">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-display text-lg font-semibold text-foreground transition-colors hover:text-primary"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-display text-lg font-semibold text-foreground">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 overflow-hidden rounded-2xl border border-border">
              <iframe
                title="Mappa sede GAM Group"
                src="https://www.openstreetmap.org/export/embed.html?bbox=12.24%2C45.66%2C12.26%2C45.67&layer=mapnik"
                className="h-64 w-full"
                loading="lazy"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  )
}
