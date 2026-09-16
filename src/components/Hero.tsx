import { Link } from 'react-router-dom'
import { ArrowRight, Phone, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import { company } from '../data/company'

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[560px] w-[1100px] -translate-x-1/2 rounded-full bg-gold-500/10 blur-[140px]" />

      <div className="container-page relative">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold-400/25 bg-gold-400/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300"
        >
          <ShieldCheck className="h-3.5 w-3.5" />
          На рынке охранных услуг с {company.since} года
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-6 max-w-3xl text-balance font-display text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl md:text-6xl"
        >
          Безопасность — наша цель, ваша уверенность
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-mist-300"
        >
          Группа предприятий «Сокол» — физическая охрана, видеонаблюдение, охранная и пожарная
          сигнализация, системы контроля доступа для бизнеса любого масштаба в Ярославской
          области.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/kontakty"
            className="group flex items-center gap-2 rounded-full bg-gold-400 px-7 py-3.5 text-sm font-bold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-[0_0_32px_rgba(227,179,76,0.35)]"
          >
            Обсудить охрану объекта
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href={company.phones[0].href}
            className="flex items-center gap-2.5 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-gold-400/50 hover:text-gold-300"
          >
            <Phone className="h-4 w-4" />
            {company.phones[0].value}
          </a>
        </motion.div>
      </div>
    </section>
  )
}
