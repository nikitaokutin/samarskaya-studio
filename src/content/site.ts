/**
 * Основные данные студии. Всё, что связано с контактами и ссылками, правится здесь.
 *
 * ВАЖНО: сайт "прогревает" и ведёт на личный аккаунт мастера.
 * Куда именно ведут все кнопки "Записаться", задаётся в `booking.href`.
 */

export const site = {
  name: 'Студия Ольги Самарской',
  fullName: 'Академия перманентного макияжа и трихопигментации Ольги Самарской',
  shortName: 'SAMARSKAYA',
  city: 'Владивосток',
  address: 'пр. Красного Знамени, 120а, 1 этаж',
  addressNote: 'Ленинский район, рядом с ТЦ «Приморье» (3 минуты пешком)',
  hours: 'Ежедневно с 09:00 до 20:00',
  hoursNote: 'по предварительной записи',
  legal: 'ИП Самарская Ольга Александровна',
  disclaimer: 'Имеются противопоказания, необходима консультация специалиста.',
  rating: {
    value: '5,0',
    count: 114,
    reviews: 104,
    photos: 107,
    source: '2ГИС',
    url: 'https://2gis.ru/vladivostok/firm/70000001082971990',
    reviewsUrl: 'https://2gis.ru/vladivostok/firm/70000001082971990/tab/reviews',
  },
  phones: [
    { display: '+7 914 710-00-14', href: 'tel:+79147100014' },
    { display: '+7 953 226-63-23', href: 'tel:+79532266323' },
  ],
  email: 'samarskaya376@gmail.com',
  /** Главная кнопка записи: личный аккаунт в Telegram. Поменяйте href при необходимости. */
  booking: {
    label: 'Записаться',
    href: 'https://t.me/+79532266323',
    hint: 'Ответим лично в Telegram',
  },
  messengers: [
    { name: 'Telegram', href: 'https://t.me/+79532266323' },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/79532266323?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20%D0%A5%D0%BE%D1%87%D1%83%20%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F',
    },
    { name: 'Max', href: 'https://max.ru/u/f9LHodD0cOIVNalPQirWZ5BNMxJSqPqK0WvkHviABceFMu4ZFYDIgPR4QP0' },
  ],
  socials: [
    { name: 'ВКонтакте', href: 'https://vk.com/club200369722' },
    { name: 'YouTube', href: 'https://youtube.com/@OSAMARSKAYA' },
  ],
  mapUrl: 'https://2gis.ru/vladivostok/firm/70000001082971990?m=131.929433%2C43.119595%2F16',
} as const

export const nav = [
  { label: 'Услуги', href: '#uslugi' },
  { label: 'Мастер', href: '#mastera' },
  { label: 'Работы', href: '#raboty' },
  { label: 'Отзывы', href: '#otzyvy' },
  { label: 'Обучение', href: '#obuchenie' },
  { label: 'Контакты', href: '#kontakty' },
] as const

/** Путь к статике с учётом base (GitHub Pages). */
export const asset = (p: string) => `${import.meta.env.BASE_URL}${p.replace(/^\//, '')}`
