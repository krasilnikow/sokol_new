import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { company } from '../data/company'
import Reveal from './Reveal'

export default function ContactInfo() {
  return (
    <div className="grid gap-5 sm:grid-cols-2">
      <Reveal className="rounded-2xl border border-white/8 bg-ink-900/50 p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 ring-1 ring-gold-400/20">
          <Phone className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h4 className="mt-4 font-display text-base font-bold text-white">Телефоны</h4>
        <ul className="mt-2 space-y-1.5">
          {company.phones.map((p) => (
            <li key={p.href}>
              <a href={p.href} className="text-sm text-mist-300 transition-colors hover:text-gold-300">
                {p.value} <span className="text-mist-300/60">— {p.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      <Reveal delay={0.08} className="rounded-2xl border border-white/8 bg-ink-900/50 p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 ring-1 ring-gold-400/20">
          <Mail className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h4 className="mt-4 font-display text-base font-bold text-white">Email</h4>
        <a
          href={`mailto:${company.email}`}
          className="mt-2 block text-sm text-mist-300 transition-colors hover:text-gold-300"
        >
          {company.email}
        </a>
      </Reveal>

      <Reveal delay={0.16} className="rounded-2xl border border-white/8 bg-ink-900/50 p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 ring-1 ring-gold-400/20">
          <MapPin className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h4 className="mt-4 font-display text-base font-bold text-white">Адрес офиса</h4>
        <p className="mt-2 text-sm leading-relaxed text-mist-300">
          {company.addressIndex}, {company.address}
        </p>
      </Reveal>

      <Reveal delay={0.24} className="rounded-2xl border border-white/8 bg-ink-900/50 p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 ring-1 ring-gold-400/20">
          <Clock className="h-5 w-5" strokeWidth={1.75} />
        </div>
        <h4 className="mt-4 font-display text-base font-bold text-white">Часы работы</h4>
        <p className="mt-2 text-sm leading-relaxed text-mist-300">{company.hours}</p>
      </Reveal>
    </div>
  )
}
