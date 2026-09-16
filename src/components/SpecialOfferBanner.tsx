import { Link } from 'react-router-dom'
import { Camera, Gift } from 'lucide-react'
import { specialOffer } from '../data/services'
import Reveal from './Reveal'

export default function SpecialOfferBanner() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-gold-400/20 bg-gradient-to-br from-ink-900 via-ink-900 to-gold-900/10 p-8 md:p-12">
        <div className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-gold-400/10 blur-3xl" />
        <Camera
          className="pointer-events-none absolute -right-4 bottom-0 h-44 w-44 text-white/[0.04]"
          strokeWidth={1}
        />

        <div className="relative flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-gold-400/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gold-300">
              <Gift className="h-3.5 w-3.5" />
              Спецпредложение
            </div>
            <h3 className="font-display text-2xl font-extrabold text-white md:text-3xl">
              {specialOffer.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-mist-300 md:text-base">
              {specialOffer.description}
            </p>
            <p className="mt-3 text-xs text-mist-300/70">{specialOffer.fine}</p>
          </div>

          <Link
            to="/kontakty"
            className="shrink-0 whitespace-nowrap rounded-full bg-gold-400 px-7 py-3.5 text-sm font-bold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-[0_0_32px_rgba(227,179,76,0.35)]"
          >
            Получить предложение
          </Link>
        </div>
      </div>
    </Reveal>
  )
}
