import { Star, BadgeCheck } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Stars({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <span className={cn('inline-flex items-center gap-0.5 text-primary', className)} aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} width={size} height={size} className="fill-current" strokeWidth={1.5} />
      ))}
    </span>
  )
}

/** Бейдж «Подтверждён» в духе карточки 2ГИС. */
export function VerifiedBadge({ children = 'Подтверждён', className }: { children?: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground',
        className,
      )}
    >
      <BadgeCheck className="size-3.5" strokeWidth={2} />
      {children}
    </span>
  )
}
