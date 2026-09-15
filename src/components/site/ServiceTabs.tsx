import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ReviewCard } from '@/components/ui/review-card'
import { Reveal } from '@/components/site/Reveal'
import { services, type Service } from '@/content/services'
import { asset, site } from '@/content/site'
import { cn } from '@/lib/utils'

export function ServiceTabs() {
  const [activeId, setActiveId] = useState(services[0].id)
  const active = services.find((s) => s.id === activeId) ?? services[0]
  const reduce = useReducedMotion()
  const tabsRef = useRef<HTMLDivElement>(null)

  // Открытие вкладки по якорю вида #uslugi-guby
  useEffect(() => {
    const apply = () => {
      const m = window.location.hash.match(/^#uslugi-(.+)$/)
      if (m && services.some((s) => s.id === m[1])) setActiveId(m[1])
    }
    apply()
    window.addEventListener('hashchange', apply)
    return () => window.removeEventListener('hashchange', apply)
  }, [])

  // Активная вкладка всегда видна в горизонтальной ленте.
  // Двигаем только scrollLeft контейнера, чтобы не прокручивать страницу по вертикали.
  useEffect(() => {
    const wrap = tabsRef.current
    const el = wrap?.querySelector<HTMLElement>(`[data-id="${activeId}"]`)
    if (!wrap || !el) return
    const left = el.offsetLeft - (wrap.clientWidth - el.offsetWidth) / 2
    wrap.scrollTo({ left, behavior: reduce ? 'auto' : 'smooth' })
  }, [activeId, reduce])

  return (
    <section id="uslugi" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Услуги и цены</h2>
          <p className="mt-3 max-w-[60ch] text-muted-foreground">
            Выберите направление: покажем работы, цены и отзывы клиентов именно на эту процедуру.
          </p>
        </Reveal>

        {/* Вкладки в духе 2ГИС: горизонтальная лента чипов */}
        <div
          ref={tabsRef}
          role="tablist"
          aria-label="Направления"
          className="no-scrollbar -mx-4 mt-8 flex snap-x gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:px-0"
        >
          {services.map((s) => {
            const selected = s.id === activeId
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                data-id={s.id}
                aria-selected={selected}
                aria-controls={`panel-${s.id}`}
                onClick={() => setActiveId(s.id)}
                className={cn(
                  'relative shrink-0 snap-start rounded-full border px-4 py-2 text-sm font-medium transition-colors active:scale-[0.98]',
                  selected
                    ? 'border-primary bg-primary text-primary-foreground'
                    : 'border-border bg-card text-muted-foreground hover:text-foreground',
                )}
              >
                {s.tab}
                <span className="ml-1.5 text-xs opacity-70">{s.reviews.length}</span>
              </button>
            )
          })}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={active.id}
            id={`panel-${active.id}`}
            role="tabpanel"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8"
          >
            <ServicePanel service={active} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

function ServicePanel({ service }: { service: Service }) {
  const [lead, ...rest] = service.photos
  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      {/* Фото работ: одно крупное + сетка мелких */}
      <div className="lg:col-span-6">
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          <img
            src={asset(`img/work/${lead.src}.webp`)}
            alt={lead.alt}
            loading="lazy"
            decoding="async"
            width={1200}
            height={900}
            className="col-span-3 aspect-[4/3] w-full rounded-2xl bg-muted object-cover"
          />
          {rest.slice(0, 3).map((p) => (
            <img
              key={p.src}
              src={asset(`img/work/${p.src}-sm.webp`)}
              alt={p.alt}
              loading="lazy"
              decoding="async"
              width={600}
              height={600}
              className="aspect-square w-full rounded-xl bg-muted object-cover"
            />
          ))}
        </div>
      </div>

      {/* Описание и прайс */}
      <div className="lg:col-span-6">
        <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{service.title}</h3>
        <p className="mt-3 max-w-[60ch] leading-relaxed text-muted-foreground">{service.lead}</p>

        <ul className="mt-5 space-y-2">
          {service.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-[15px]">
              <Check className="mt-1 size-4 shrink-0 text-primary" strokeWidth={2.2} />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        <div className="mt-7 space-y-4">
          {service.prices.map((group) => (
            <div key={group.master} className="overflow-hidden rounded-2xl border bg-card">
              <div className="border-b bg-muted/60 px-4 py-2.5 text-sm font-semibold">{group.master}</div>
              <dl>
                {group.rows.map((row) => (
                  <div key={row.title} className="flex items-baseline justify-between gap-4 px-4 py-3 [&+&]:border-t">
                    <dt className="text-[15px]">
                      {row.title}
                      {row.note && <span className="block text-xs text-muted-foreground">{row.note}</span>}
                    </dt>
                    <dd className="shrink-0 font-semibold tabular-nums">{row.price}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button href={site.booking.href}>
            <Send />
            {site.booking.label}
          </Button>
          <span className="text-sm text-muted-foreground">{site.booking.hint}</span>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Цены не являются публичной офертой. {site.disclaimer}</p>
      </div>

      {/* Отзывы именно на эту услугу */}
      <div className="lg:col-span-12">
        <h4 className="text-lg font-semibold">Отзывы клиентов: {service.tab.toLowerCase()}</h4>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {service.reviews.map((r) => (
            <ReviewCard key={r.name + r.meta} review={r} />
          ))}
        </div>
      </div>
    </div>
  )
}
