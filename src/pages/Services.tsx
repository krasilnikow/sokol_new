import { ShieldHalf } from 'lucide-react'
import PageHero from '../components/PageHero'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { services } from '../data/services'
import { useSeo } from '../lib/useSeo'

export default function Services() {
  useSeo({
    title: 'Услуги',
    description:
      'Физическая охрана, видеонаблюдение, охранная и пожарная сигнализация, СКУД — услуги группы компаний «Сокол» в Ярославле. Бесплатный выезд специалиста и расчёт стоимости.',
  })

  return (
    <>
      <PageHero
        kicker="Направления работы"
        title="Услуги группы компаний «Сокол»"
        description="Пять направлений безопасности объекта — физическая охрана и технические системы, которые проектируем, монтируем и обслуживаем под ключ."
        crumbs={[{ label: 'Главная', to: '/' }, { label: 'Услуги' }]}
        icon={<ShieldHalf className="h-9 w-9" strokeWidth={1.5} />}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <CTASection />
      </section>
    </>
  )
}
