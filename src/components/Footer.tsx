import { Link } from '@tanstack/react-router'
import { DEMO_NOTICE, DEV_CREDIT, NAV, SITE } from '~/content/site'
import { whatsappLink } from '~/lib/whatsapp'
import { Logo } from './Logo'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-top">
        <div>
          <Logo light />
          <p className="footer-tag">{SITE.tagline}</p>
        </div>
        <nav aria-label="Seções do site" className="footer-nav">
          {NAV.map((n) => (
            <a key={n.href} href={`/${n.href}`}>
              {n.label}
            </a>
          ))}
          <Link to="/privacidade">Privacidade</Link>
        </nav>
        <div className="footer-contact">
          <a href={whatsappLink(SITE.whatsappNumber)} target="_blank" rel="noopener noreferrer">
            WhatsApp {SITE.whatsapp}
          </a>
          <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
          <span>
            {SITE.address.street}, {SITE.address.district}, {SITE.address.city}
          </span>
          <span>{SITE.hours}</span>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>
          © {new Date().getFullYear()} {SITE.professional}, {SITE.title.toLowerCase()}, {SITE.register}.{' '}
          {DEMO_NOTICE}
        </p>
        <p className="credit">
          {DEV_CREDIT.text}{' '}
          <a href={DEV_CREDIT.url} target="_blank" rel="noopener noreferrer">
            <strong>{DEV_CREDIT.name}</strong>
          </a>
        </p>
      </div>
    </footer>
  )
}
