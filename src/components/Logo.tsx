export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M24 3 L42 10 V22 C42 33 34.5 41 24 45 C13.5 41 6 33 6 22 V10 L24 3 Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.08"
      />
      <path
        d="M24 12 C19 16 12 17.5 12 17.5 C15.5 19 18 22 19.5 25.5 C21 22.5 22 20 24 18 C26 20 27 22.5 28.5 25.5 C30 22 32.5 19 36 17.5 C36 17.5 29 16 24 12 Z"
        fill="currentColor"
      />
      <path
        d="M24 25 L24 33"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="24" cy="34.5" r="1.4" fill="currentColor" />
    </svg>
  )
}
