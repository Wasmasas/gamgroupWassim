import Link from 'next/link'
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react'

const columns = [
  {
    title: 'Azienda',
    links: [
      { label: 'Chi Siamo', href: '/chi-siamo' },
      { label: 'Servizi', href: '/servizi' },
      { label: 'Progetti', href: '/progetti' },
      { label: 'Job Board', href: '/job-board' },
    ],
  },
  {
    title: 'Settori',
    links: [
      { label: 'Automotive', href: '/progetti' },
      { label: 'Fashion', href: '/progetti' },
      { label: 'Manufacturing', href: '/progetti' },
      { label: 'Farmaceutico', href: '/progetti' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="font-display text-lg font-bold leading-none">G</span>
              </span>
              <span className="font-display text-xl font-bold tracking-tight">
                GAM<span className="text-accent">.</span>Group
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              Consulenza informatica e system integration dal 2001. Trasformiamo la complessità in
              soluzioni su misura.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-foreground">
              Contatti
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>Via Callalta 31/E, 31100 Treviso (TV)</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" />
                <a href="tel:+390422583693" className="transition-colors hover:text-foreground">
                  +39 0422 583693
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-accent" />
                <a
                  href="mailto:info@gamgroup.it"
                  className="transition-colors hover:text-foreground"
                >
                  info@gamgroup.it
                </a>
              </li>
            </ul>
            <Link
              href="/contatti"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
            >
              Richiedi una consulenza
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} GAM Group S.r.l. — P.IVA 04123456789</p>
          <p>Treviso · Italia</p>
        </div>
      </div>
    </footer>
  )
}
