import { Link } from '@tanstack/react-router'
import { useState } from 'react'
import { NAV, SITE } from '~/content/site'
import { Logo } from './Logo'

/** Site de uma página: os links levam às seções da página inicial (funcionam também a partir de /privacidade). */
export function Header() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <>
      <a className="skip" href="#conteudo">
        Ir para o conteúdo
      </a>
      <header className="header">
        <div className="wrap header-in">
          <Link to="/" aria-label={`${SITE.name}, início`} onClick={close}>
            <Logo />
          </Link>
          <nav className={`nav${open ? ' open' : ''}`} id="nav" aria-label="Seções">
            {NAV.map((n) => (
              <a key={n.href} href={`/${n.href}`} onClick={close}>
                {n.label}
              </a>
            ))}
            <a href="/#agendar" className="btn btn--citrus nav-cta-mobile" onClick={close}>
              Agendar consulta
            </a>
          </nav>
          <a href="/#agendar" className="btn btn--citrus header-cta">
            Agendar consulta
          </a>
          <button
            className="burger"
            type="button"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-controls="nav"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Fechar' : 'Menu'}
          </button>
        </div>
      </header>
    </>
  )
}
