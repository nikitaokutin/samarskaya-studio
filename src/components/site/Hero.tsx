import { motion, useReducedMotion } from 'framer-motion'
import { Send, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Stars, VerifiedBadge } from '@/components/ui/rating'
import { LogoMark } from '@/components/site/Logo'
import { asset, site } from '@/content/site'

const ease = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const reduce = useReducedMotion()
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 0.08 * i, ease },
  })

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-16">
        {/* Текст и логотип */}
        <div className="lg:col-span-7">
          <motion.div {...item(0)} className="mb-7 flex items-center gap-4">
            <LogoMark size={72} className="rounded-2xl shadow-card" />
            <div className="leading-tight">
              <div className="text-lg font-semibold tracking-tight">{site.shortName}</div>
              <div className="text-sm text-muted-foreground">Академия перманентного макияжа, {site.city}</div>
            </div>
          </motion.div>

          <motion.h1
            {...item(1)}
            className="max-w-[26ch] text-4xl font-semibold leading-[1.05] tracking-tight text-balance md:text-5xl lg:max-w-none lg:text-[2.375rem] xl:text-[2.625rem]"
          >
            Перманентный макияж, который выглядит естественно
          </motion.h1>

          <motion.p {...item(2)} className="mt-6 max-w-[48ch] text-base leading-relaxed text-muted-foreground md:text-lg">
            Брови, губы, веки, трихопигментация и удаление старого перманента. Форму и цвет согласуем до первой линии.
          </motion.p>

          <motion.div {...item(3)} className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={site.booking.href} size="lg">
              <Send />
              {site.booking.label}
            </Button>
            <Button href="#raboty" variant="outline" size="lg">
              Смотреть работы
            </Button>
          </motion.div>
        </div>

        {/* Фото и карточка рейтинга в духе 2ГИС */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease }}
            className="relative ml-auto aspect-[4/5] w-full max-w-[520px] overflow-hidden rounded-2xl bg-muted"
          >
            <img
              src={asset('img/work/p01.webp')}
              alt="Клиентка студии после перманентного макияжа бровей и губ"
              className="h-full w-full object-cover object-top"
              fetchPriority="high"
              decoding="async"
              width={1200}
              height={1500}
            />
          </motion.div>

          <motion.a
            href={site.rating.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease }}
            className="group absolute -bottom-6 left-0 w-[min(100%,300px)] rounded-2xl border bg-card p-4 shadow-card transition-transform hover:-translate-y-0.5 sm:left-4 lg:-left-8"
          >
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-semibold tracking-tight">{site.rating.value}</span>
                <Stars size={15} />
              </div>
              <VerifiedBadge />
            </div>
            <div className="mt-2 flex items-center justify-between text-sm text-muted-foreground">
              <span>
                {site.rating.count} подтверждённых оценок на {site.rating.source}
              </span>
              <ExternalLink className="size-4 shrink-0 opacity-60 transition-opacity group-hover:opacity-100" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}
