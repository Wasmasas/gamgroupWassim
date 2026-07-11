interface PageHeroProps {
  eyebrow: string
  title: string
  description?: string
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-secondary/40 pt-28 lg:pt-36">
      <div className="pointer-events-none absolute -right-32 top-0 size-[30rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 lg:pb-20">
        <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-accent">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
        <h1 className="mt-4 max-w-4xl text-balance font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
