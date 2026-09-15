import { Reveal } from '@/components/site/Reveal'
import { asset } from '@/content/site'

const steps = [
  {
    title: 'Консультация',
    text: 'Разбираем пожелания, тип кожи и противопоказания. Показываем похожие работы и честно говорим, чего ждать.',
  },
  {
    title: 'Эскиз и цвет',
    text: 'Рисуем форму карандашом прямо на лице и подбираем пигмент. Ничего не начинаем, пока вам не нравится в зеркале.',
  },
  {
    title: 'Процедура',
    text: 'Крем-анестезия, одноразовые иглы, чай или кофе. В среднем 1,5-2,5 часа с перерывами.',
  },
  {
    title: 'Коррекция',
    text: 'Через 1-2 месяца закрепляем результат. Всё время заживления мастер остаётся на связи.',
  },
]

export function Process() {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
        <Reveal className="lg:col-span-5">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Как проходит визит</h2>
          <p className="mt-3 text-muted-foreground">
            Студия на первом этаже, отдельный кабинет, стерильность и спокойная обстановка.
          </p>
          <ol className="mt-8 space-y-6">
            {steps.map((s) => (
              <li key={s.title} className="border-l-2 border-primary/70 pl-5">
                <h3 className="font-semibold">{s.title}</h3>
                <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-3">
            <img
              src={asset('img/studio/i07.webp')}
              alt="Зона ожидания студии: синяя стена с логотипом и бархатные кресла"
              loading="lazy"
              decoding="async"
              width={1200}
              height={960}
              className="row-span-2 h-full w-full rounded-2xl bg-muted object-cover"
            />
            <img
              src={asset('img/studio/i02.webp')}
              alt="Ресепшен студии"
              loading="lazy"
              decoding="async"
              width={1200}
              height={960}
              className="aspect-[4/3] w-full rounded-2xl bg-muted object-cover"
            />
            <img
              src={asset('img/studio/i06.webp')}
              alt="Рабочий кабинет с кушеткой и кольцевой лампой"
              loading="lazy"
              decoding="async"
              width={1200}
              height={960}
              className="aspect-[4/3] w-full rounded-2xl bg-muted object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
