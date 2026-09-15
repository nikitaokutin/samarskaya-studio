import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Stars, VerifiedBadge } from '@/components/ui/rating'
import { ReviewCard } from '@/components/ui/review-card'
import { Reveal } from '@/components/site/Reveal'
import { reviewTags, studioReviews } from '@/content/reviews'
import { site } from '@/content/site'

export function Reviews() {
  return (
    <section id="otzyvy" className="scroll-mt-20 overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Отзывы</h2>
            <p className="mt-3 max-w-[60ch] text-muted-foreground">
              Все отзывы ниже опубликованы клиентами на {site.rating.source}. Отмеченные значком подтверждены визитом
              или оплатой.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Что чаще всего отмечают клиенты">
              {reviewTags.map((t) => (
                <li key={t} className="rounded-full border bg-card px-3 py-1 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Сводка рейтинга как в карточке 2ГИС */}
          <div className="rounded-2xl border bg-card p-6 lg:col-span-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl font-semibold tracking-tight">{site.rating.value}</span>
                <Stars size={18} />
              </div>
              <VerifiedBadge />
            </div>
            <dl className="mt-4 grid grid-cols-3 gap-3 text-sm">
              <div>
                <dt className="text-muted-foreground">Оценок</dt>
                <dd className="text-lg font-semibold tabular-nums">{site.rating.count}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Отзывов</dt>
                <dd className="text-lg font-semibold tabular-nums">{site.rating.reviews}</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Фото</dt>
                <dd className="text-lg font-semibold tabular-nums">{site.rating.photos}</dd>
              </div>
            </dl>
            <Button href={site.rating.reviewsUrl} variant="outline" className="mt-5 w-full">
              Читать все отзывы на {site.rating.source}
              <ExternalLink />
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Единственная бегущая лента на странице. Под reduced-motion превращается в обычную прокрутку. */}
      <div className="group relative mt-12">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-background to-transparent sm:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-background to-transparent sm:w-24" />
        <div className="marquee-viewport no-scrollbar">
          <div className="marquee-track">
            {[...studioReviews, ...studioReviews].map((r, i) => (
              <ReviewCard
                key={r.name + i}
                review={r}
                className="w-[300px] shrink-0 sm:w-[360px]"
                aria-hidden={i >= studioReviews.length ? true : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
