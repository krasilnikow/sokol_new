import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Logo from '../components/Logo'
import { useSeo } from '../lib/useSeo'

export default function NotFound() {
  useSeo({
    title: 'Страница не найдена',
    description: 'Страница не найдена. Возможно, она была перемещена или удалена.',
    noindex: true,
  })

  return (
    <section className="container-page flex min-h-[70vh] flex-col items-center justify-center text-center">
      <Logo className="h-16 w-16 text-gold-400/40" />
      <div className="mt-6 font-display text-6xl font-extrabold text-white">404</div>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-mist-300">
        Страница не найдена. Возможно, она была перемещена или удалена.
      </p>
      <Link
        to="/"
        className="mt-7 flex items-center gap-2 rounded-full bg-gold-400 px-6 py-3 text-sm font-bold text-ink-950 transition-all hover:bg-gold-300"
      >
        <ArrowLeft className="h-4 w-4" />
        На главную
      </Link>
    </section>
  )
}
