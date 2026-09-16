import { Building2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import StatsBar from '../components/StatsBar'
import WhyUs from '../components/WhyUs'
import ProcessSteps from '../components/ProcessSteps'
import CTASection from '../components/CTASection'
import Kicker from '../components/Kicker'
import Reveal from '../components/Reveal'
import { company } from '../data/company'
import { useSeo } from '../lib/useSeo'

export default function About() {
  useSeo({
    title: 'О компании',
    description: `${company.fullName} — ${company.claim.toLowerCase()} с ${company.since} года. Опытный персонал, индивидуальный подход, лицензии на все виды охранной деятельности.`,
  })

  return (
    <>
      <PageHero
        kicker="О компании"
        title={`${company.fullName} — безопасность как система`}
        description={`${company.claim}. На рынке охранных услуг с ${company.since} года, работаем на территории ${company.regionGenitive}.`}
        crumbs={[{ label: 'Главная', to: '/' }, { label: 'О компании' }]}
        icon={<Building2 className="h-9 w-9" strokeWidth={1.5} />}
      />

      <section className="container-page py-16 md:py-24">
        <StatsBar />
      </section>

      <section className="container-page pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <Kicker>Наш путь</Kicker>
            <h2 className="mt-4 text-balance font-display text-2xl font-extrabold text-white md:text-3xl">
              Практический опыт с 2004 года
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-mist-300 md:text-base">
              <p>
                За годы работы мы накопили большой практический опыт по организации охраны
                объектов различного назначения: защита жизни и здоровья граждан, охрана
                имущества — в том числе при его транспортировке, находящегося в собственности,
                во владении, пользовании, хозяйственном ведении, оперативном или доверительном
                управлении.
              </p>
              <p>
                Сегодня нашими клиентами являются крупные торговые и промышленные компании,
                предприятия малого и среднего бизнеса, федеральные и муниципальные учреждения на
                территории {company.regionGenitive}.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Kicker>Подход к работе</Kicker>
            <h2 className="mt-4 text-balance font-display text-2xl font-extrabold text-white md:text-3xl">
              Гибкость и индивидуальные условия
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-mist-300 md:text-base">
              <p>
                Если вы остановите выбор на нашей частной охранной организации и пригласите
                наших специалистов для детального обсуждения взаимодействия, мы предложим для вас
                наиболее выгодные условия. Мы открыты к обсуждению предлагаемых вами условий
                охраны объекта.
              </p>
              <p>
                При определении конечной стоимости услуги {company.fullName} всегда исходит из
                принципа гибкости и индивидуальности подхода к каждому партнёру, его пожеланиям.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container-page pb-20 md:pb-28">
        <Reveal className="mb-10 max-w-2xl">
          <Kicker>Люди и контроль качества</Kicker>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-white md:text-4xl">
            Профессиональная подготовка сотрудников охраны
          </h2>
        </Reveal>
        <WhyUs />
      </section>

      <section className="container-page pb-20 md:pb-28">
        <Reveal className="mb-10 max-w-2xl">
          <Kicker>Как мы работаем</Kicker>
          <h2 className="mt-4 text-balance font-display text-3xl font-extrabold text-white md:text-4xl">
            От заявки до охраняемого объекта
          </h2>
        </Reveal>
        <ProcessSteps />
      </section>

      <section className="container-page pb-24">
        <CTASection />
      </section>
    </>
  )
}
