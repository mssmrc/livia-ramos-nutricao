import { SITE } from './site'

export type LegalDoc = { title: string; sections: { heading: string; paragraphs: string[] }[] }

/** Modelo simples de política de privacidade (LGPD). Revisar com advogado antes de usar de verdade. */
export const PRIVACY_POLICY: LegalDoc = {
  title: 'Política de privacidade',
  sections: [
    {
      heading: 'Quais dados coletamos',
      paragraphs: [
        'Este site não tem cadastro nem guarda dados em servidor. O formulário de agendamento monta uma mensagem com os dados que você digitar e a envia pelo seu próprio WhatsApp. A calculadora de água funciona só no seu navegador.',
      ],
    },
    {
      heading: 'Como usamos os dados',
      paragraphs: [
        'Os dados recebidos servem apenas para agendar e realizar o atendimento. Informações de saúde ficam no prontuário, sob sigilo profissional, conforme o Código de Ética do Nutricionista.',
      ],
    },
    {
      heading: 'Seus direitos',
      paragraphs: [
        `Você pode pedir acesso, correção ou exclusão dos seus dados pelo e-mail ${SITE.email} ou pelo WhatsApp ${SITE.whatsapp}.`,
      ],
    },
    {
      heading: 'Cookies',
      paragraphs: ['Este site não usa cookies de rastreamento ou publicidade.'],
    },
  ],
}
