import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-28 lg:pt-36">
      <div className="pointer-events-none absolute -right-40 -top-40 size-[36rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 top-40 size-[28rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm font-medium text-muted-foreground">
              <Sparkles className="size-4 text-accent" />
              Consulenza IT dal 2001
            </span>
            <h1 className="mt-6 text-balance font-display text-5xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              La tecnologia che fa crescere la tua impresa
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              GAM Group è una realtà di consulenza e system integration. Trasformiamo processi
              complessi in soluzioni digitali su misura per Automotive, Fashion, Manufacturing e
              Pharma.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/contatti">
                  Parliamo del tuo progetto
                  <ArrowUpRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <Link href="/servizi">Scopri i servizi</Link>
              </Button>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:120ms]">
            <div className="relative overflow-hidden rounded-3xl border border-border shadow-2xl shadow-primary/10">
              <Image
                src="/images/hero.png"
                alt="Team di consulenti GAM Group al lavoro"
                width={900}
                height={720}
                priority
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-border/50 bg-background/85 px-5 py-4 backdrop-blur-md">
                <div>
                  <p className="font-display text-2xl font-bold text-foreground">20+ anni</p>
                  <p className="text-sm text-muted-foreground">di innovazione al fianco delle imprese</p>
                </div>
                <span className="flex size-11 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
