import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import StatsBar from '../components/StatsBar'
import ServiceCard from '../components/ServiceCard'
import SpecialOfferBanner from '../components/SpecialOfferBanner'
import ProcessSteps from '../components/ProcessSteps'
import WhyUs from '../components/WhyUs'
import CTASection from '../components/CTASection'
import Kicker from '../components/Kicker'
import Reveal from '../components/Reveal'
import { services } from '../data/services'
import { useSeo } from '../lib/useSeo'

export default function Home() {
  useSeo({
    description:
      'ООО ЧОО «Сокол» — физическая охрана, видеонаблюдение, охранная и пожарная сигнализация, СКУД в Ярославле. На рынке охранных услуг с 2004 года.',
  })

  return (
    <>
      <Hero />

      <section className="container-page -mt-4 pb-20 md:pb-28">
        <StatsBar />
      </section>

      <section className="container-page pb-20 md:pb-28">
        <Reveal className="grid gap-10 md:grid-cols-2 md:items-center md:gap-16">
          <div>
            <Kicker>О компании</Kicker>
            <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-white md:text-4xl">
              Практический опыт, которому доверяют
            </h2>
            <p className="mt-5 text-base leading-relaxed text-mist-300">
              За годы работы мы накопили большой практический опыт организации охраны объектов
              различного назначения: защита жизни и здоровья граждан, охрана имущества, в том
              числе при его транспортировке.
            </p>
            <p className="mt-4 text-base leading-relaxed text-mist-300">
              Сегодня нашими клиентами являются крупные торговые и промышленные компании,
              предприятия малого и среднего бизнеса, федеральные и муниципальные учреждения на
              территории Ярославской области.
            </p>
            <Link
              to="/o-kompanii"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gold-400 hover:text-gold-300"
            >
              Подробнее о компании
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'Пультовая охрана', text: 'Стационарные объекты и культурно-массовые мероприятия' },
              { title: 'КПП и порядок', text: 'Контрольно-пропускной режим и общественный порядок' },
              { title: 'Монтаж и сервис', text: 'ОПС, СКУД — от проекта до техобслуживания' },
              { title: 'Проектирование', text: 'Видеонаблюдение любой сложности под объект' },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/8 bg-ink-900/50 p-5"
              >
                <div className="font-display text-sm font-bold text-white">{item.title}</div>
                <div className="mt-2 text-xs leading-relaxed text-mist-300">{item.text}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <Reveal className="mb-10 max-w-2xl">
          <Kicker>Направления работы</Kicker>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-white md:text-4xl">
            Комплексные решения для безопасности объекта
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist-300">
            От физической охраны до технических систем безопасности — проектируем, монтируем и
            обслуживаем под ключ.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <ServiceCard service={service} index={i} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <SpecialOfferBanner />
      </section>

      <section className="container-page pb-20 md:pb-28">
        <Reveal className="mb-10 max-w-2xl">
          <Kicker>Как мы работаем</Kicker>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-white md:text-4xl">
            Путь от заявки до охраняемого объекта
          </h2>
        </Reveal>
        <ProcessSteps />
      </section>

      <section className="container-page pb-20 md:pb-28">
        <Reveal className="mb-10 max-w-2xl">
          <Kicker>Почему «Сокол»</Kicker>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-white md:text-4xl">
            Подготовленные люди и жёсткий контроль качества
          </h2>
        </Reveal>
        <WhyUs />
      </section>

      <section className="container-page pb-24">
        <CTASection />
      </section>
    </>
  )
}
