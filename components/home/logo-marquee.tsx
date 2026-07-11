import { clients } from '@/lib/content'

export function LogoMarquee() {
  const items = [...clients, ...clients]
  return (
    <section className="border-y border-border bg-secondary/30 py-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="text-center text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Alcuni dei nostri clienti
        </p>
        <div className="relative mt-8 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max animate-marquee items-center gap-12">
            {items.map((name, i) => (
              <span
                key={`${name}-${i}`}
                className="whitespace-nowrap font-display text-xl font-semibold text-muted-foreground/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
