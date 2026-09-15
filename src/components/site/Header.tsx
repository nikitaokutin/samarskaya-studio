import { useEffect, useState } from 'react'
import { Menu, X, Send } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/site/Logo'
import { nav, site } from '@/content/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const reduce = useReducedMotion()

  // Закрываем меню при переходе на десктопную ширину и блокируем скролл под открытым меню
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const mq = window.matchMedia('(min-width: 1024px)')
    const onChange = () => mq.matches && setOpen(false)
    mq.addEventListener('change', onChange)
    return () => {
      document.body.style.overflow = prev
      mq.removeEventListener('change', onChange)
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px]">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Разделы сайта">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phones[0].href}
            className="hidden text-sm font-medium text-foreground hover:text-primary xl:block"
          >
            {site.phones[0].display}
          </a>
          <Button href={site.booking.href} size="sm" className="hidden sm:inline-flex">
            <Send />
            {site.booking.label}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduce ? false : { opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t bg-background lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6" aria-label="Разделы сайта">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-base font-medium hover:bg-muted"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid gap-2 border-t pt-3">
                {site.phones.map((p) => (
                  <a key={p.href} href={p.href} className="px-3 py-1 text-sm text-muted-foreground">
                    {p.display}
                  </a>
                ))}
                <Button href={site.booking.href} className="w-full">
                  <Send />
                  {site.booking.label}
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
