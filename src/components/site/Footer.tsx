import { Logo } from '@/components/site/Logo'
import { nav, site } from '@/content/site'

export function Footer() {
  return (
    <footer className="border-t py-10 pb-28 sm:pb-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 sm:px-6 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-md">
          <Logo compact />
          <p className="mt-4 text-sm text-muted-foreground">{site.fullName}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {site.legal}. {site.disclaimer}
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:grid-cols-3" aria-label="Карта сайта">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="text-muted-foreground hover:text-foreground">
              {n.label}
            </a>
          ))}
          <a href="#faq" className="text-muted-foreground hover:text-foreground">
            Вопросы
          </a>
        </nav>
      </div>
      <div className="mx-auto mt-8 max-w-7xl px-4 text-xs text-muted-foreground sm:px-6">
        {site.city}, {site.address}. {site.hours}, {site.hoursNote}.
      </div>
    </footer>
  )
}
