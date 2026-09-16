import { stats } from '../data/company'
import Reveal from './Reveal'

export default function StatsBar() {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/5 md:grid-cols-4">
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08} className="bg-ink-950 px-5 py-7 text-center md:text-left">
          <div className="font-display text-3xl font-extrabold text-white md:text-4xl">
            {s.value}
            <span className="text-gold-400">{s.suffix}</span>
          </div>
          <div className="mt-1.5 text-xs leading-snug text-mist-300 md:text-sm">{s.label}</div>
        </Reveal>
      ))}
    </div>
  )
}
