import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, Phone, X } from 'lucide-react'
import { company } from '../data/company'
import { services } from '../data/services'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Главная', end: true },
  { to: '/uslugi', label: 'Услуги', end: false },
  { to: '/o-kompanii', label: 'О компании', end: true },
  { to: '/kontakty', label: 'Контакты', end: true },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-ink-950/90 backdrop-blur-md border-b border-white/5' : 'bg-transparent'
      }`}
    >
      <div className="container-page flex h-18 items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <Logo className="h-10 w-10 text-gold-400 transition-transform group-hover:scale-105" />
          <div className="leading-tight text-left">
            <div className="font-display text-lg font-extrabold tracking-wide text-white">
              {company.name}
            </div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-mist-300">
              группа компаний
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-gold-400'
                    : 'text-mist-200 hover:text-white'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={company.phones[0].href}
            className="flex items-center gap-2 text-sm font-semibold text-white hover:text-gold-400 transition-colors"
          >
            <Phone className="h-4 w-4 text-gold-400" />
            {company.phones[0].value}
          </a>
          <Link
            to="/kontakty"
            className="rounded-full bg-gold-400 px-5 py-2.5 text-sm font-bold text-ink-950 shadow-[0_0_0_1px_rgba(227,179,76,0.4)] transition-all hover:bg-gold-300 hover:shadow-[0_0_24px_rgba(227,179,76,0.35)]"
          >
            Заказать звонок
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Открыть меню"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-ink-950 lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2.5 text-base font-medium ${
                    isActive ? 'bg-white/5 text-gold-400' : 'text-mist-200'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-white/5 pt-4">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  to={`/uslugi/${s.slug}`}
                  onClick={() => setOpen(false)}
                  className="px-3 py-1 text-sm text-mist-300 hover:text-white"
                >
                  {s.shortTitle}
                </Link>
              ))}
            </div>
            <a
              href={company.phones[0].href}
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-gold-400 px-5 py-3 text-sm font-bold text-ink-950"
            >
              <Phone className="h-4 w-4" />
              {company.phones[0].value}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
