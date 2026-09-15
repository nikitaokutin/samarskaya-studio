import { asset, site } from '@/content/site'
import { cn } from '@/lib/utils'

export function LogoMark({ className, size = 40 }: { className?: string; size?: number }) {
  return (
    <img
      src={asset('img/logo.png')}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      className={cn('rounded-xl object-cover', className)}
    />
  )
}

export function Logo({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <a href="#" className={cn('flex items-center gap-3', className)} aria-label={`${site.name}, на главную`}>
      <LogoMark size={40} />
      <span className="flex flex-col leading-tight">
        <span className="text-[15px] font-semibold tracking-tight">{site.shortName}</span>
        {!compact && (
          <span className="hidden text-xs text-muted-foreground sm:block">Перманентный макияж и трихопигментация</span>
        )}
      </span>
    </a>
  )
}
