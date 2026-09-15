import { Phone, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { site } from '@/content/site'

/** Нижняя панель на мобильных: запись и звонок всегда под рукой. */
export function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t bg-background/90 p-3 backdrop-blur sm:hidden">
      <div className="grid grid-cols-[1fr_auto] gap-2">
        <Button href={site.booking.href} size="lg">
          <Send />
          {site.booking.label}
        </Button>
        <Button href={site.phones[0].href} variant="outline" size="lg" aria-label="Позвонить">
          <Phone />
        </Button>
      </div>
    </div>
  )
}
