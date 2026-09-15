import { Reveal } from '@/components/site/Reveal'
import { asset } from '@/content/site'

// TODO: заменить фото на портреты мастеров, когда их пришлёт студия.
const masters = [
  {
    name: 'Ольга Самарская',
    role: 'Топ-мастер, основатель академии',
    photo: 'p24',
    alt: 'Ольга Самарская с аппаратом для перманентного макияжа',
    text: 'Перманентный макияж всех зон, трихопигментация, камуфляж рубцов, удаление старого перманента лазером и ремувером, художественное тату. Обучает мастеров и ведёт наставничество.',
    facts: ['Все направления студии', 'Сложные случаи и исправления', 'Преподаватель академии'],
  },
  {
    name: 'Глеб Самарский',
    role: 'Мастер',
    photo: 'p33',
    alt: 'Глеб Самарский за работой',
    text: 'Перманентный макияж бровей и губ, художественная татуировка. Клиенты отмечают аккуратность и быстроту работы.',
    facts: ['Брови и губы', 'Тату до 20 см', 'Доступные цены'],
  },
]

export function Masters() {
  return (
    <section id="mastera" className="scroll-mt-20 bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Мастера</h2>
          <p className="mt-3 max-w-[60ch] text-muted-foreground">
            В студии работают два мастера. Выбирайте по задаче и бюджету: цены различаются, подход один.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          {masters.map((m, i) => (
            <Reveal
              key={m.name}
              delay={i * 0.08}
              className={i === 0 ? 'lg:col-span-3' : 'lg:col-span-2'}
            >
              <article className="grid h-full overflow-hidden rounded-2xl border bg-background sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <img
                  src={asset(`img/work/${m.photo}.webp`)}
                  alt={m.alt}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="aspect-[4/3] h-full w-full object-cover sm:aspect-auto sm:min-h-[280px]"
                />
                <div className="flex flex-col p-6">
                  <h3 className="text-xl font-semibold tracking-tight">{m.name}</h3>
                  <div className="text-sm text-primary">{m.role}</div>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{m.text}</p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-5">
                    {m.facts.map((f) => (
                      <li key={f} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
