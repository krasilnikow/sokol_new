import { GraduationCap, Handshake, ShieldCheck, Siren } from 'lucide-react'
import Reveal from './Reveal'

const points = [
  {
    icon: GraduationCap,
    title: 'Подготовленный персонал',
    text: 'Принимаем сотрудников с опытом в охранных услугах, многие с высшим образованием. Ежемесячные аттестации и учения по ЧС.',
  },
  {
    icon: Siren,
    title: 'Группы быстрого реагирования',
    text: 'При необходимости к охране объекта привлекаются вооружённые группы быстрого реагирования.',
  },
  {
    icon: ShieldCheck,
    title: 'Контроль на каждом объекте',
    text: 'Начальник охраны и старший смены на объекте, круглосуточный контроль работы постов инспекторами.',
  },
  {
    icon: Handshake,
    title: 'Гибкие условия',
    text: 'Индивидуальный подход к стоимости и условиям — с учётом специфики объекта и пожеланий партнёра.',
  },
]

export default function WhyUs() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {points.map((p, i) => (
        <Reveal key={p.title} delay={i * 0.08} className="flex gap-4 rounded-2xl border border-white/8 bg-ink-900/40 p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-400/10 text-gold-400 ring-1 ring-gold-400/20">
            <p.icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <div>
            <h4 className="font-display text-base font-bold text-white">{p.title}</h4>
            <p className="mt-1.5 text-sm leading-relaxed text-mist-300">{p.text}</p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
