'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const nav = [
  { label: 'Home', href: '/' },
  { label: 'Chi Siamo', href: '/chi-siamo' },
  { label: 'Servizi', href: '/servizi' },
  { label: 'Progetti', href: '/progetti' },
  { label: 'Job Board', href: '/job-board' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:h-20">
        <Link href="/" className="flex items-center gap-2.5" aria-label="GAM Group home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <span className="font-display text-lg font-bold leading-none">G</span>
          </span>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            GAM<span className="text-accent">.</span>Group
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigazione principale">
          {nav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-full px-4 py-2 text-sm font-medium transition-colors',
                  active
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="hidden lg:block">
          <Button asChild className="rounded-full">
            <Link href="/contatti">
              Contattaci
              <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex size-10 items-center justify-center rounded-lg text-foreground lg:hidden"
          aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4" aria-label="Navigazione mobile">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'rounded-lg px-4 py-3 text-base font-medium transition-colors',
                  pathname === item.href
                    ? 'bg-secondary text-foreground'
                    : 'text-muted-foreground hover:bg-secondary hover:text-foreground',
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="mt-2 rounded-full">
              <Link href="/contatti">
                Contattaci
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
