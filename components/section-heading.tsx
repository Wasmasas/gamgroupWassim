import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  invert?: boolean
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  invert = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === 'center' ? 'mx-auto text-center' : 'text-left',
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            'inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest',
            invert ? 'text-accent' : 'text-accent',
          )}
        >
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          'mt-4 text-balance font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]',
          invert ? 'text-primary-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-pretty text-lg leading-relaxed',
            invert ? 'text-primary-foreground/70' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
