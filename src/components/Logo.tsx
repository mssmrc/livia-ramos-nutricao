import { SITE } from '~/content/site'

/** Logo provisório: um prato visto de cima com uma folha. Troque pelo logo real quando houver. */
export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`logo${light ? ' logo--light' : ''}`}>
      <svg viewBox="0 0 40 40" aria-hidden="true" className="logo-mark">
        <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="20" cy="20" r="10" fill="none" stroke="currentColor" strokeWidth="1.5" opacity=".45" />
        <path d="M14 25c0-7 5-11 12-11 0 7-5 11-12 11Z" fill="var(--citrus)" />
        <path d="M14 25l8-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span className="logo-text">
        <b>{SITE.professional}</b>
        <small>nutrição</small>
      </span>
    </span>
  )
}
