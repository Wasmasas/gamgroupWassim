import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function CtaBanner() {
  return (
    <section className="bg-background pb-20 lg:pb-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-primary-foreground sm:px-14 lg:py-20">
          <Image
            src="/images/office.png"
            alt=""
            fill
            aria-hidden
            className="object-cover opacity-20"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/60" />
          <div className="relative max-w-2xl">
            <h2 className="text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Pronti a trasformare la tua impresa?
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-primary-foreground/80">
              Raccontaci la tua sfida. Costruiamo insieme la soluzione tecnologica giusta per il tuo
              business.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="rounded-full">
                <Link href="/contatti">
                  Contattaci ora
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              >
                <Link href="/servizi">I nostri servizi</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
