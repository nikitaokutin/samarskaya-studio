import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/site/Reveal'
import { asset, site } from '@/content/site'

/** Подборка работ для «масонри». Порядок подобран так, чтобы чередовались зоны. */
const shots: { src: string; alt: string; tall?: boolean }[] = [
  { src: 'p03', alt: 'Клиентка после перманентного макияжа губ', tall: true },
  { src: 'p05', alt: 'Перманентный макияж губ' },
  { src: 'p06', alt: 'Перманентный макияж бровей' },
  { src: 'p10', alt: 'Естественный перманент бровей и губ', tall: true },
  { src: 'p39', alt: 'Трихопигментация' },
  { src: 'p04', alt: 'Межресничный перманентный макияж' },
  { src: 'p20', alt: 'Клиентка после перманентного макияжа', tall: true },
  { src: 'p32', alt: 'Художественная татуировка' },
  { src: 'p15', alt: 'Перманентный макияж губ крупным планом' },
  { src: 'p21', alt: 'Клиентка после перманентного макияжа бровей и губ', tall: true },
  { src: 'p11', alt: 'Брови после перманентного макияжа' },
  { src: 'p38', alt: 'Трихопигментация до и после' },
]

export function Gallery() {
  return (
    <section id="raboty" className="scroll-mt-20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Работы Ольги</h2>
            <p className="mt-3 max-w-[60ch] text-muted-foreground">
              Фото до и после заживления, без ретуши. Ещё {site.rating.photos} фото в карточке студии.
            </p>
          </div>
          <Button href={`${site.rating.url}/tab/photos`} variant="outline">
            Все фото на {site.rating.source}
            <ExternalLink />
          </Button>
        </Reveal>

        <div className="mt-10 columns-2 gap-3 md:columns-3 lg:columns-4 [&>*]:mb-3">
          {shots.map((s, i) => (
            <Reveal key={s.src} delay={(i % 4) * 0.05} className="break-inside-avoid">
              <img
                src={asset(`img/work/${s.src}${s.tall ? '' : '-sm'}.webp`)}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                width={s.tall ? 1200 : 600}
                height={s.tall ? 1500 : 600}
                className={`w-full rounded-2xl bg-muted object-cover ${s.tall ? 'aspect-[4/5]' : 'aspect-square'}`}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
