import { Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/Reveal'
import { asset, site } from '@/content/site'

export function Training() {
  return (
    <section id="obuchenie" className="scroll-mt-20 px-4 py-8 sm:px-6 lg:py-12">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary text-primary-foreground">
        <img
          src={asset('img/work/p40.webp')}
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          width={1200}
          height={900}
          className="absolute inset-0 h-full w-full object-cover object-center opacity-30 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        <div className="relative grid gap-8 p-8 sm:p-12 lg:grid-cols-12 lg:p-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl font-semibold tracking-tight text-balance md:text-4xl">
              Обучение перманентному макияжу и трихопигментации
            </h2>
            <p className="mt-4 max-w-[52ch] leading-relaxed text-primary-foreground/85">
              Курсы с нуля и повышение квалификации для практикующих мастеров. Малые группы, работа на моделях,
              поддержка Ольги после выпуска.
            </p>
            <ul className="mt-6 grid gap-2 text-[15px] sm:grid-cols-2">
              {['Теория и колористика', 'Отработка на моделях', 'Сертификат академии', 'Наставничество после курса'].map(
                (f) => (
                  <li key={f} className="rounded-xl bg-primary-foreground/10 px-3 py-2">
                    {f}
                  </li>
                ),
              )}
            </ul>
          </div>
          <div className="flex flex-col justify-end gap-3 lg:col-span-5 lg:items-end">
            <Button
              href={site.booking.href}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              <Send />
              {site.booking.label}
            </Button>
            <span className="text-sm text-primary-foreground/75">Программу и даты отправим в личных сообщениях</span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
