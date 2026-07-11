import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/section-heading'

const points = [
  'Un team di esperti con esperienza pluriennale',
  'Soluzioni su misura, mai preconfezionate',
  'Rete di partner strategica sul territorio',
]

export function AboutPreview() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-border">
            <Image
              src="/images/about.png"
              alt="Il team di GAM Group in riunione"
              width={720}
              height={640}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl border border-border bg-card p-5 shadow-xl sm:block">
            <p className="font-display text-4xl font-bold text-primary">2001</p>
            <p className="text-sm text-muted-foreground">Fondata a Treviso</p>
          </div>
        </div>

        <div>
          <SectionHeading
            eyebrow="Chi siamo"
            title="La nostra esperienza è il nostro biglietto da visita"
          />
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            GAM Group è un&apos;azienda italiana fondata nel 2001, con sede a Treviso, che si
            distingue per l&apos;approccio innovativo e personalizzato nella consulenza alle imprese.
            Il nostro punto di forza è il capitale umano: un team di esperti che supporta i clienti
            in diversi settori guidandoli verso il miglioramento continuo.
          </p>
          <ul className="mt-7 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="size-3.5" />
                </span>
                <span className="text-foreground">{point}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8 rounded-full">
            <Link href="/chi-siamo">
              Scopri di più
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
