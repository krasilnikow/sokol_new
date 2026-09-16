import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone } from 'lucide-react'
import { company } from '../data/company'
import { services } from '../data/services'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr_1.1fr]">
        <div>
          <Link to="/" className="flex items-center gap-3">
            <Logo className="h-9 w-9 text-gold-400" />
            <span className="font-display text-lg font-extrabold text-white">
              {company.name}
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist-300">
            {company.claim.toLowerCase()}. На рынке охранных услуг c {company.since} года —
            {' '}
            {company.region}.
          </p>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Услуги</div>
          <ul className="mt-4 space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  to={`/uslugi/${s.slug}`}
                  className="text-sm text-mist-300 transition-colors hover:text-gold-400"
                >
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Компания</div>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link to="/o-kompanii" className="text-sm text-mist-300 transition-colors hover:text-gold-400">
                О компании
              </Link>
            </li>
            <li>
              <Link to="/uslugi" className="text-sm text-mist-300 transition-colors hover:text-gold-400">
                Все услуги
              </Link>
            </li>
            <li>
              <Link to="/kontakty" className="text-sm text-mist-300 transition-colors hover:text-gold-400">
                Контакты
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold text-white">Связаться с нами</div>
          <ul className="mt-4 space-y-3">
            {company.phones.map((p) => (
              <li key={p.href}>
                <a
                  href={p.href}
                  className="flex items-center gap-2.5 text-sm text-mist-300 transition-colors hover:text-gold-400"
                >
                  <Phone className="h-4 w-4 shrink-0 text-gold-400" />
                  {p.value}
                  <span className="text-mist-300/60">— {p.label}</span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2.5 text-sm text-mist-300 transition-colors hover:text-gold-400"
              >
                <Mail className="h-4 w-4 shrink-0 text-gold-400" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-mist-300">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
              <span>{company.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/5">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-mist-300/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {company.fullName}. Все права защищены.</span>
          <span>{company.hours}</span>
        </div>
      </div>
    </footer>
  )
}
