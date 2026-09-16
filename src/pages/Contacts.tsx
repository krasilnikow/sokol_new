import { PhoneCall } from 'lucide-react'
import PageHero from '../components/PageHero'
import ContactInfo from '../components/ContactInfo'
import ContactForm from '../components/ContactForm'
import Reveal from '../components/Reveal'
import Kicker from '../components/Kicker'
import { company } from '../data/company'

export default function Contacts() {
  return (
    <>
      <PageHero
        kicker="Контакты"
        title="Свяжитесь с нами"
        description="Ответим на вопросы, бесплатно проконсультируем и организуем выезд специалиста на объект."
        crumbs={[{ label: 'Главная', to: '/' }, { label: 'Контакты' }]}
        icon={<PhoneCall className="h-9 w-9" strokeWidth={1.5} />}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_420px]">
          <div>
            <Kicker>Реквизиты и адрес</Kicker>
            <h2 className="mt-4 text-balance font-display text-2xl font-extrabold text-white md:text-3xl">
              {company.fullName}
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-mist-300">
              Офис расположен по адресу {company.addressIndex}, {company.address}. Работаем{' '}
              {company.hours.toLowerCase()}.
            </p>

            <div className="mt-8">
              <ContactInfo />
            </div>

            <Reveal delay={0.2} className="mt-8 overflow-hidden rounded-2xl border border-white/8">
              <iframe
                title="Карта — Ярославль, ул. Песочная, 55"
                src="https://yandex.ru/map-widget/v1/?text=Ярославль%2C%20улица%20Песочная%2C%2055"
                className="h-80 w-full grayscale invert-[0.92] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>

            <div className="mt-8 rounded-2xl border border-white/8 bg-ink-900/40 p-6">
              <div className="text-xs font-bold uppercase tracking-widest text-gold-400">
                Юридические лица группы
              </div>
              <ul className="mt-3 flex flex-wrap gap-3">
                {company.legalNames.map((name) => (
                  <li
                    key={name}
                    className="rounded-full border border-white/10 px-4 py-1.5 text-sm text-mist-200"
                  >
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
