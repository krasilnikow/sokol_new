import { ClipboardCheck, FileText, Wrench, HeadphonesIcon } from 'lucide-react'
import Reveal from './Reveal'

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Обследование объекта',
    text: 'Выезд специалиста, оценка рисков и инженерно-технической укреплённости — бесплатно.',
  },
  {
    icon: FileText,
    title: 'Коммерческое предложение',
    text: 'Подбираем оптимальный состав решения и прозрачную стоимость под ваш бюджет.',
  },
  {
    icon: Wrench,
    title: 'Монтаж и пуско-наладка',
    text: 'Устанавливаем оборудование точно в срок, включая работы «в окно» и в выходные.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Обслуживание 24/7',
    text: 'Регламентные работы, оперативный выезд и техподдержка на весь срок договора.',
  },
]

export default function ProcessSteps() {
  return (
    <div className="grid gap-6 md:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal key={step.title} delay={i * 0.1} className="relative">
          <div className="flex h-full flex-col rounded-2xl border border-white/8 bg-ink-900/50 p-6">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-400/10 text-gold-400 ring-1 ring-gold-400/20">
                <step.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <span className="font-display text-3xl font-extrabold text-white/10">
                {i + 1}
              </span>
            </div>
            <h4 className="mt-4 font-display text-base font-bold text-white">{step.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-mist-300">{step.text}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="absolute -right-3 top-1/2 hidden h-px w-6 -translate-y-1/2 bg-white/10 md:block" />
          )}
        </Reveal>
      ))}
    </div>
  )
}
