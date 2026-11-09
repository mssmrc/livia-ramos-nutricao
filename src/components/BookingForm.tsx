import { useState, type FormEvent } from 'react'
import { AREAS, SITE } from '~/content/site'
import { buildMessage, whatsappLink } from '~/lib/whatsapp'

/** Formulário de agendamento: monta a mensagem e abre o WhatsApp do visitante. Nada vai para servidor. */
export function BookingForm() {
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const get = (k: string) => String(data.get(k) ?? '').trim()
    if (!get('nome') || get('telefone').replace(/\D/g, '').length < 10) {
      setError('Preencha seu nome e um WhatsApp com DDD.')
      return
    }
    setError('')
    const message = buildMessage('Oi, Lívia! Quero agendar uma consulta.', [
      ['Nome', get('nome')],
      ['WhatsApp', get('telefone')],
      ['Objetivo', get('objetivo')],
      ['Modalidade', get('modalidade')],
      ['Sobre mim', get('mensagem')],
    ])
    window.open(whatsappLink(SITE.whatsappNumber, message), '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <label>
        Seu nome
        <input name="nome" autoComplete="name" required />
      </label>
      <label>
        WhatsApp com DDD
        <input
          name="telefone"
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder="(19) 90000-0000"
          required
        />
      </label>
      <label>
        O que você busca
        <select name="objetivo" defaultValue="">
          <option value="">Ainda não sei</option>
          {AREAS.map((a) => (
            <option key={a.title}>{a.title}</option>
          ))}
        </select>
      </label>
      <fieldset className="radio-row">
        <legend>Prefere atendimento</legend>
        <label>
          <input type="radio" name="modalidade" value="Online" defaultChecked /> Online
        </label>
        <label>
          <input type="radio" name="modalidade" value="Presencial (Cambuí)" /> Presencial
        </label>
      </fieldset>
      <label>
        Conte um pouco sobre você (opcional)
        <textarea
          name="mensagem"
          rows={3}
          placeholder="Ex.: treino 4x por semana e sinto muita fome à noite"
        />
      </label>
      {error && (
        <p className="form-error" role="alert">
          {error}
        </p>
      )}
      {sent && !error && (
        <p className="form-ok" role="status">
          Abrimos o WhatsApp com sua mensagem. É só tocar em enviar.
        </p>
      )}
      <button className="btn btn--citrus btn--lg" type="submit">
        Enviar pelo WhatsApp
      </button>
    </form>
  )
}
