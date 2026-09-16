import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'
import { company } from '../data/company'
import Reveal from './Reveal'

export default function CTASection() {
  return (
    <Reveal>
      <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-ink-900 p-8 text-center md:p-14">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/10 blur-[110px]" />
        <div className="relative">
          <h3 className="mx-auto max-w-xl text-balance font-display text-2xl font-extrabold text-white md:text-3xl">
            Готовы обсудить безопасность вашего объекта?
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-mist-300 md:text-base">
            Бесплатный выезд специалиста, обследование объекта и расчёт стоимости под ваши задачи.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/kontakty"
              className="group flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-bold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-[0_0_32px_rgba(227,179,76,0.35)]"
            >
              Оставить заявку
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={company.phones[0].href}
              className="flex items-center gap-2.5 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400/50 hover:text-gold-300"
            >
              <Phone className="h-4 w-4" />
              {company.phones[0].value}
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
