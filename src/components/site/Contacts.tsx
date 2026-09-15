import { Clock, MapPin, Phone, Mail, Send, ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LogoMark } from '@/components/site/Logo'
import { Reveal } from '@/components/site/Reveal'
import { site } from '@/content/site'

export function Contacts() {
  return (
    <section id="kontakty" className="scroll-mt-20 bg-card py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-6">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Контакты</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="flex gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.8} />
              <div>
                <dt className="text-sm text-muted-foreground">Адрес</dt>
                <dd className="font-medium">
                  {site.city}, {site.address}
                </dd>
                <dd className="text-sm text-muted-foreground">{site.addressNote}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.8} />
              <div>
                <dt className="text-sm text-muted-foreground">Режим работы</dt>
                <dd className="font-medium">{site.hours}</dd>
                <dd className="text-sm text-muted-foreground">{site.hoursNote}</dd>
              </div>
            </div>
            <div className="flex gap-3">
              <Phone className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.8} />
              <div>
                <dt className="text-sm text-muted-foreground">Телефоны</dt>
                {site.phones.map((p) => (
                  <dd key={p.href}>
                    <a href={p.href} className="font-medium hover:text-primary">
                      {p.display}
                    </a>
                  </dd>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Mail className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.8} />
              <div>
                <dt className="text-sm text-muted-foreground">Почта</dt>
                <dd>
                  <a href={`mailto:${site.email}`} className="font-medium hover:text-primary">
                    {site.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-2">
            <Button href={site.mapUrl} variant="outline">
              Открыть в 2ГИС
              <ExternalLink />
            </Button>
            {site.socials.map((s) => (
              <Button key={s.href} href={s.href} variant="ghost">
                {s.name}
              </Button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6">
          <div className="flex h-full flex-col justify-between rounded-2xl border bg-background p-6 sm:p-8">
            <div className="flex items-center gap-4">
              <LogoMark size={56} className="rounded-2xl" />
              <div>
                <div className="text-lg font-semibold tracking-tight">Записаться на консультацию</div>
                <div className="text-sm text-muted-foreground">Ответим лично, без бота и колл-центра</div>
              </div>
            </div>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              Напишите, какая зона интересует, и пришлите фото при дневном свете. Подскажем технику, стоимость и
              ближайшее свободное время. Консультация ни к чему не обязывает.
            </p>
            <div className="mt-6 grid gap-2 sm:grid-cols-2">
              <Button href={site.booking.href} size="lg" className="sm:col-span-2">
                <Send />
                {site.booking.label} в Telegram
              </Button>
              {site.messengers
                .filter((m) => m.name !== 'Telegram')
                .map((m) => (
                  <Button key={m.href} href={m.href} variant="outline">
                    Написать в {m.name}
                  </Button>
                ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
