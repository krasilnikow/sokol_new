import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { company } from '../data/company'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '')
    const phone = String(form.get('phone') || '')
    const message = String(form.get('message') || '')

    const subject = encodeURIComponent(`Заявка с сайта от ${name || 'клиента'}`)
    const body = encodeURIComponent(
      `Имя: ${name}\nТелефон: ${phone}\n\nСообщение:\n${message}`,
    )
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-white/8 bg-ink-900/50 p-6 md:p-8"
    >
      <h3 className="font-display text-xl font-bold text-white">Заказать звонок</h3>
      <p className="mt-1.5 text-sm text-mist-300">
        Оставьте заявку — специалист свяжется с вами и бесплатно проконсультирует по объекту.
      </p>

      <div className="mt-6 grid gap-4">
        <div>
          <label className="mb-1.5 block text-xs font-medium text-mist-300">Ваше имя</label>
          <input
            name="name"
            required
            placeholder="Иван Иванов"
            className="w-full rounded-lg border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white placeholder:text-mist-300/40 outline-none transition-colors focus:border-gold-400/50"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-mist-300">Телефон</label>
          <input
            name="phone"
            required
            type="tel"
            placeholder="+7 (___) ___-__-__"
            className="w-full rounded-lg border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white placeholder:text-mist-300/40 outline-none transition-colors focus:border-gold-400/50"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-mist-300">
            Что нужно охранять? (необязательно)
          </label>
          <textarea
            name="message"
            rows={3}
            placeholder="Офис, склад, торговая точка..."
            className="w-full resize-none rounded-lg border border-white/10 bg-ink-950 px-4 py-3 text-sm text-white placeholder:text-mist-300/40 outline-none transition-colors focus:border-gold-400/50"
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-gold-400 px-6 py-3.5 text-sm font-bold text-ink-950 transition-all hover:bg-gold-300 hover:shadow-[0_0_28px_rgba(227,179,76,0.3)]"
      >
        Отправить заявку
        <Send className="h-4 w-4" />
      </button>

      {sent && (
        <p className="mt-3 text-center text-xs text-gold-300">
          Открылся почтовый клиент с заполненным письмом — просто отправьте его.
        </p>
      )}
      <p className="mt-3 text-center text-[11px] text-mist-300/50">
        Нажимая «Отправить», вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  )
}
