import { stats } from '@/lib/content'

export function StatsSection() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="font-display text-5xl font-bold tracking-tight lg:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-primary-foreground/70">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
