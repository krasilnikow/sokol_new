import { Navigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { CheckCircle2, Phone } from 'lucide-react'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { serviceIcons } from '../lib/icons'
import { services } from '../data/services'
import { company } from '../data/company'
import { useSeo } from '../lib/useSeo'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  useSeo({
    title: service?.title,
    description: service?.shortDescription ?? 'Услуги группы компаний «Сокол» в Ярославле.',
    noindex: !service,
  })

  if (!service) return <Navigate to="/uslugi" replace />

  const Icon = serviceIcons[service.icon]
  const otherServices = services.filter((s) => s.slug !== service.slug)

  return (
    <>
      <PageHero
        kicker="Услуга"
        title={service.title}
        description={service.shortDescription}
        crumbs={[
          { label: 'Главная', to: '/' },
          { label: 'Услуги', to: '/uslugi' },
          { label: service.shortTitle },
        ]}
        icon={<Icon className="h-9 w-9" strokeWidth={1.5} />}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_340px]">
          <div className="min-w-0">
            <Reveal className="space-y-5">
              {service.intro.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-mist-300">
                  {p}
                </p>
              ))}
            </Reveal>

            <div className="mt-12 space-y-12">
              {service.sections.map((section, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  {section.heading && (
                    <h2 className="font-display text-xl font-bold text-white md:text-2xl">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="mt-3 text-sm leading-relaxed text-mist-300 md:text-base">
                      {p}
                    </p>
                  ))}
                  {section.items && (
                    <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                      {section.items.map((item, j) => (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 rounded-xl border border-white/8 bg-ink-900/40 px-4 py-3 text-sm leading-relaxed text-mist-200"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12 rounded-2xl border border-gold-400/20 bg-gold-400/5 p-6">
              <p className="text-sm leading-relaxed text-mist-100 md:text-base">{service.cta}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  to="/kontakty"
                  className="rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-ink-950 transition-all hover:bg-gold-300"
                >
                  Оставить заявку
                </Link>
                <a
                  href={company.phones[0].href}
                  className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-gold-400/50 hover:text-gold-300"
                >
                  <Phone className="h-4 w-4" />
                  {company.phones[0].value}
                </a>
              </div>
            </Reveal>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
            <div className="rounded-2xl border border-white/8 bg-ink-900/50 p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-gold-400">
                Другие услуги
              </div>
              <ul className="mt-4 space-y-1">
                {otherServices.map((s) => {
                  const SIcon = serviceIcons[s.icon]
                  return (
                    <li key={s.slug}>
                      <Link
                        to={`/uslugi/${s.slug}`}
                        className="flex items-center gap-3 rounded-xl px-2.5 py-2.5 text-sm text-mist-200 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        <SIcon className="h-4 w-4 shrink-0 text-gold-400" strokeWidth={1.75} />
                        {s.shortTitle}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div className="rounded-2xl border border-white/8 bg-ink-900/50 p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-gold-400">
                Бесплатная консультация
              </div>
              <p className="mt-3 text-sm leading-relaxed text-mist-300">
                Выезд специалиста и подготовка коммерческого предложения — бесплатно.
              </p>
              <a
                href={company.phones[0].href}
                className="mt-4 flex items-center justify-center gap-2 rounded-full bg-white/5 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                <Phone className="h-4 w-4 text-gold-400" />
                {company.phones[0].value}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-page pb-24">
        <CTASection />
      </section>
    </>
  )
}
