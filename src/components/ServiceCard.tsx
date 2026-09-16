import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../data/services'
import { serviceIcons } from '../lib/icons'

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = serviceIcons[service.icon]

  return (
    <Link
      to={`/uslugi/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/8 bg-ink-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400/40 hover:bg-ink-850"
    >
      <div className="absolute -right-6 -top-6 font-display text-7xl font-extrabold text-white/[0.03] transition-colors group-hover:text-gold-400/[0.06]">
        0{index + 1}
      </div>

      <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 ring-1 ring-gold-400/20">
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </div>

      <h3 className="relative mt-5 font-display text-lg font-bold text-white">
        {service.title}
      </h3>
      <p className="relative mt-2 text-sm leading-relaxed text-mist-300">
        {service.shortDescription}
      </p>

      <div className="relative mt-5 flex items-center gap-1.5 text-sm font-semibold text-gold-400 opacity-90">
        Подробнее
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  )
}
