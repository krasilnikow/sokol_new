import type { ReactNode } from 'react'
import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Kicker from './Kicker'

export default function PageHero({
  kicker,
  title,
  description,
  crumbs,
  icon,
}: {
  kicker: string
  title: string
  description?: string
  crumbs: { label: string; to?: string }[]
  icon?: ReactNode
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/5 pb-14 pt-12 md:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-gold-500/8 blur-[120px]" />

      <div className="container-page relative">
        <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-mist-300/70">
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {c.to ? (
                <Link to={c.to} className="transition-colors hover:text-gold-300">
                  {c.label}
                </Link>
              ) : (
                <span className="text-mist-200">{c.label}</span>
              )}
            </span>
          ))}
        </nav>

        <div className="flex items-start justify-between gap-6">
          <div className="max-w-2xl">
            <Kicker>{kicker}</Kicker>
            <h1 className="mt-4 text-balance font-display text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 text-balance text-base leading-relaxed text-mist-300 md:text-lg">
                {description}
              </p>
            )}
          </div>
          {icon && (
            <div className="hidden h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-gold-400/10 text-gold-400 ring-1 ring-gold-400/20 md:flex">
              {icon}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
