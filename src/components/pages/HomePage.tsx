import {
  ABOUT,
  AREAS,
  CREDENTIALS,
  FAQ,
  HERO,
  ONLINE,
  PLANS,
  POSTS,
  POSTS_NOTE,
  SITE,
  STEPS,
  TESTIMONIALS,
} from '~/content/site'
import { BookingForm } from '../BookingForm'
import { Faq } from '../Faq'
import { Photo } from '../Photo'
import { PostCard } from '../PostCard'
import { WaterCalculator } from '../WaterCalculator'

/**
 * Página inicial em formato de revista: retrato em altura total à esquerda (fica fixo enquanto a
 * apresentação e as especialidades rolam à direita), depois consulta online, carta da Lívia,
 * etapas, planos + calculadora, dicas, depoimentos, dúvidas e agendamento.
 */
export function HomePage() {
  return (
    <>
      <section className="cover" aria-labelledby="cover-title">
        <figure className="cover-portrait">
          <Photo k="livia" eager />
          <figcaption>{HERO.caption}</figcaption>
        </figure>

        <div className="cover-pages">
          <div className="cover-intro">
            <p className="cover-name">
              <strong>{SITE.professional}</strong>
              <span>
                {SITE.title}, {SITE.register}
              </span>
            </p>
            <h1 id="cover-title">{HERO.title}</h1>
            <p className="cover-lead">{HERO.lead}</p>
            <div className="ctas">
              <a href="#agendar" className="btn btn--citrus btn--lg">
                Agendar consulta
              </a>
              <a href="#planos" className="btn btn--line btn--lg">
                Ver planos e valores
              </a>
            </div>
          </div>

          <div className="cover-areas" id="atendimento">
            <h2 className="cover-areas-title">Com o que eu posso te ajudar</h2>
            <ul>
              {AREAS.map((a) => (
                <li key={a.title}>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="online" aria-labelledby="online-title">
        <div className="wrap online-grid">
          <div>
            <p className="online-tag">Atendimento para todo o Brasil</p>
            <h2 id="online-title" className="online-title">
              {ONLINE.title}
            </h2>
            <p className="online-text">{ONLINE.text}</p>
            <a href="#agendar" className="btn btn--citrus btn--lg">
              Agendar consulta online
            </a>
          </div>
          <ul className="online-points">
            {ONLINE.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section" id="sobre">
        <div className="wrap letter">
          <blockquote className="letter-quote">
            <p>{ABOUT.quote}</p>
          </blockquote>
          <div className="letter-body">
            <h2 className="h2">Oi, eu sou a Lívia.</h2>
            {ABOUT.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <p className="letter-sign">{SITE.professional}</p>
          </div>
          <aside className="letter-side" aria-label="Formação">
            <div className="letter-photo">
              <Photo k="cozinha" />
            </div>
            <h3>Formação</h3>
            <ul className="creds">
              {CREDENTIALS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--sage" id="como-funciona">
        <div className="wrap">
          <div className="steps-head">
            <h2 className="h2">Como funciona o acompanhamento</h2>
            <div className="steps-photo">
              <Photo k="consulta" />
            </div>
          </div>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.title}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="menu-block" id="planos">
        <div className="menu">
          <h2 className="h2">Planos e valores</h2>
          <p className="lead">
            Mesmo valor para consulta online ou presencial. Pix, cartão em até 6x ou recibo para reembolso.
          </p>
          <ul className="menu-list">
            {PLANS.map((p) => (
              <li key={p.name} className={`menu-item${p.featured ? ' menu-item--featured' : ''}`}>
                <div className="menu-row">
                  <h3>{p.name}</h3>
                  <span className="menu-dots" aria-hidden="true" />
                  <p className="menu-price">{p.price}</p>
                </div>
                <p className="menu-detail">
                  {p.featured && <strong className="menu-badge">Mais escolhido</strong>}
                  {p.detail}
                </p>
                <ul className="menu-includes">
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <a href="#agendar" className={`btn ${p.featured ? 'btn--citrus' : 'btn--line'}`}>
                  Quero este plano
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="water" id="agua">
          <h2 className="water-title">Quanta água você precisa por dia?</h2>
          <p className="water-lead">Uma conta rápida para começar. Na consulta, ajustamos para o seu caso.</p>
          <WaterCalculator />
        </div>
      </section>

      <section className="section" id="dicas">
        <div className="wrap">
          <div className="journal-head">
            <h2 className="h2">Do caderno da Lívia</h2>
            <p className="lead">
              Receitas da semana e respostas para as perguntas que mais aparecem no consultório.
            </p>
          </div>
          <div className="journal">
            {POSTS.map((p, i) => (
              <PostCard key={p.title} post={p} featured={i === 0} />
            ))}
          </div>
          <p className="note">{POSTS_NOTE}</p>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <h2 className="h2">Quem já passou por aqui</h2>
          <p className="note">Depoimentos ilustrativos para este site demonstrativo.</p>
          <div className="quotes">
            {TESTIMONIALS.map((t) => (
              <figure key={t.name}>
                <blockquote>{t.text}</blockquote>
                <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.detail}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="duvidas">
        <div className="wrap faq-wrap">
          <div>
            <h2 className="h2">Dúvidas frequentes</h2>
            <p className="lead">Não achou a sua? Pergunte no formulário abaixo ou pelo WhatsApp.</p>
          </div>
          <Faq items={FAQ} />
        </div>
      </section>

      <section className="section section--citrus" id="agendar">
        <div className="wrap booking">
          <div>
            <h2 className="h2">Vamos marcar sua primeira consulta?</h2>
            <p className="lead">
              Preencha ao lado e a mensagem abre pronta no seu WhatsApp. Respondo no mesmo dia, de segunda a
              sexta.
            </p>
            <dl className="booking-info">
              <div>
                <dt>Consultório</dt>
                <dd>
                  {SITE.address.street}
                  <br />
                  {SITE.address.district}, {SITE.address.city}
                </dd>
              </div>
              <div>
                <dt>Horários</dt>
                <dd>{SITE.hours}</dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="form-card">
            <BookingForm />
          </div>
        </div>
      </section>
    </>
  )
}
