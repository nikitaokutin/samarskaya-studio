import { Reveal } from '@/components/site/Reveal'
import { asset } from '@/content/site'

// TODO: заменить фото на портрет Ольги, когда его пришлёт студия.
const master = {
  name: 'Ольга Самарская',
  role: 'Топ-мастер, основатель академии',
  photo: 'p24',
  alt: 'Ольга Самарская с аппаратом для перманентного макияжа',
  text: 'Перманентный макияж всех зон, трихопигментация, камуфляж рубцов, удаление старого перманента лазером и ремувером, художественная татуировка. Обучает мастеров и ведёт наставничество.',
  facts: [
    'Все направления студии',
    'Сложные случаи и исправления',
    'Преподаватель академии',
    'Гарантия результата на первую процедуру',
  ],
}

export function Masters() {
  return (
    <section id="mastera" className="scroll-mt-20 bg-card py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Мастер</h2>
          <p className="mt-3 max-w-[60ch] text-muted-foreground">
            Все процедуры в студии выполняет Ольга лично: от эскиза до коррекции.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <article className="grid overflow-hidden rounded-2xl border bg-background md:grid-cols-2">
            <img
              src={asset(`img/work/${master.photo}.webp`)}
              alt={master.alt}
              loading="lazy"
              decoding="async"
              width={1200}
              height={900}
              className="aspect-[4/3] h-full w-full object-cover md:aspect-auto md:min-h-[360px]"
            />
            <div className="flex flex-col p-6 md:p-8 lg:p-10">
              <h3 className="text-2xl font-semibold tracking-tight">{master.name}</h3>
              <div className="text-sm text-primary">{master.role}</div>
              <p className="mt-4 max-w-[52ch] text-[15px] leading-relaxed text-muted-foreground">{master.text}</p>
              <ul className="mt-auto flex flex-wrap gap-2 pt-6">
                {master.facts.map((f) => (
                  <li key={f} className="rounded-full bg-muted px-3 py-1 text-xs font-medium">
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
