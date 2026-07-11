'use client'

import { useState } from 'react'
import { ArrowUpRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-10 text-center">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent/15 text-accent">
          <Check className="size-7" />
        </span>
        <h3 className="mt-5 font-display text-2xl font-bold text-foreground">Messaggio inviato!</h3>
        <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
          Grazie per averci contattato. Il nostro team ti risponderà il prima possibile.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="outline" className="mt-6 rounded-full">
          Invia un altro messaggio
        </Button>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-foreground">
            Nome *
          </label>
          <input
            id="nome"
            name="nome"
            required
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
        <div>
          <label htmlFor="cognome" className="mb-1.5 block text-sm font-medium text-foreground">
            Cognome *
          </label>
          <input
            id="cognome"
            name="cognome"
            required
            className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-foreground">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="azienda" className="mb-1.5 block text-sm font-medium text-foreground">
          Azienda
        </label>
        <input
          id="azienda"
          name="azienda"
          className="w-full rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <div className="mt-5">
        <label htmlFor="messaggio" className="mb-1.5 block text-sm font-medium text-foreground">
          Scrivi qui il tuo messaggio
        </label>
        <textarea
          id="messaggio"
          name="messaggio"
          rows={5}
          className="w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>
      <Button type="submit" size="lg" className="mt-6 w-full rounded-full sm:w-auto">
        Invia messaggio
        <ArrowUpRight className="size-4" />
      </Button>
    </form>
  )
}
