# Студия Ольги Самарской: лендинг

Одностраничный сайт студии перманентного макияжа и трихопигментации (Владивосток).
Ведёт на личный аккаунт мастера в Telegram.

**Стек:** Vite, React 19, TypeScript, Tailwind CSS v4, shadcn-структура (`src/components/ui`), framer-motion, lucide-react.

## Запуск

```bash
npm install
npm run dev
```

Сборка: `npm run build`, результат в `dist/`.

## Где что править

| Что                                        | Файл                             |
| ------------------------------------------ | -------------------------------- |
| Контакты, адрес, ссылка кнопки «Записаться» | `src/content/site.ts`            |
| Услуги, цены, фото, отзывы по услугам      | `src/content/services.ts`        |
| Общие отзывы и теги                        | `src/content/reviews.ts`         |
| Часто задаваемые вопросы                   | `src/content/faq.ts`             |
| Мастера                                    | `src/components/site/Masters.tsx` |
| Галерея работ                              | `src/components/site/Gallery.tsx` |
| Цвета и шрифт                              | `src/index.css`                  |

Фото работ лежат в `public/img/work` (`pNN.webp` для крупных, `pNN-sm.webp` для превью),
интерьер в `public/img/studio`, логотип `public/img/logo.png`.

## Деплой

Пуш в `main` автоматически собирает сайт и публикует его на GitHub Pages
(`.github/workflows/deploy.yml`). Для своего домена достаточно снять `BASE_PATH` в workflow.
