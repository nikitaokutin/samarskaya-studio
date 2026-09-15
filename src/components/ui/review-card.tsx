import type { Review } from '@/content/services'
import { Stars, VerifiedBadge } from '@/components/ui/rating'
import { cn } from '@/lib/utils'

/** Детерминированный оттенок аватара из имени, чтобы карточки различались. */
function hueFromName(name: string) {
  let h = 0
  for (const ch of name) h = (h * 31 + ch.charCodeAt(0)) % 360
  return h
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/)
  return parts
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? '')
    .join('')
}

type ReviewCardProps = React.HTMLAttributes<HTMLElement> & { review: Review }

export function ReviewCard({ review, className, ...props }: ReviewCardProps) {
  const hue = hueFromName(review.name)
  return (
    <figure className={cn('flex h-full flex-col rounded-2xl border bg-card p-5', className)} {...props}>
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="grid size-10 shrink-0 place-items-center rounded-full text-sm font-semibold"
          style={{
            background: `oklch(0.9 0.05 ${hue})`,
            color: `oklch(0.38 0.08 ${hue})`,
          }}
        >
          {initials(review.name)}
        </span>
        <figcaption className="min-w-0">
          <div className="truncate font-medium leading-tight">{review.name}</div>
          <div className="truncate text-xs text-muted-foreground">{review.meta}</div>
        </figcaption>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <Stars size={14} />
        {review.verified && <VerifiedBadge className="px-2 py-0.5 text-[11px]">Отзыв подтверждён</VerifiedBadge>}
      </div>
      <blockquote className="mt-3 text-[15px] leading-relaxed text-foreground/90">{review.text}</blockquote>
    </figure>
  )
}
