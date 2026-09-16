import type { ReactNode } from 'react'

export default function Kicker({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-gold-400">
      <span className="h-px w-6 bg-gold-400/60" />
      {children}
    </div>
  )
}
