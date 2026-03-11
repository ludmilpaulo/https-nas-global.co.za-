import * as Localization from "expo-localization";

export type Locale = "en" | "pt";

const MESSAGES: Record<Locale, Record<string, string>> = {
  en: {
    "tabs.home": "Home",
    "tabs.services": "Services",
    "tabs.contact": "Contact",

    "home.kicker": "NAS Global",
    "home.title": "Procurement and services for critical industrial projects.",
    "home.subtitle":
      "Based in South Africa with access to multiple OEM brands, competitive pricing, and Incoterms-ready logistics capability.",
    "home.industries": "Industries",

    "services.title": "Services",
    "services.subtitle": "Procurement, logistics, and support—end to end.",
    "services.s1.title": "Engineering procurement",
    "services.s1.body":
      "Sourcing across brands with documentation support and clear specifications.",
    "services.s2.title": "Logistics & delivery models",
    "services.s2.body":
      "Flexible transport options aligned with Incoterms and destination requirements.",
    "services.s3.title": "Service & after-sales support",
    "services.s3.body": "Responsive communication and practical support post-delivery.",

    "contact.title": "Contact",
    "contact.subtitle": "Send your request and we’ll respond with pricing and lead times.",
    "form.name": "Name",
    "form.email": "Email",
    "form.companyOptional": "Company (optional)",
    "form.message": "Message",
    "form.placeholder.name": "Your full name",
    "form.placeholder.email": "name@company.com",
    "form.placeholder.company": "Company / site",
    "form.placeholder.message": "Include part numbers, quantities, and destination.",
    "form.send": "Send request",
    "form.sending": "Sending…",
    "form.noteEmail": "Email:",
    "form.validation.name": "Please enter your name.",
    "form.validation.email": "Please enter a valid email address.",
    "form.validation.message": "Please add a short message (10+ characters).",
    "alert.checkDetails.title": "Check details",
    "alert.sent.title": "Sent",
    "alert.sent.body": "Thanks—our team will get back to you shortly.",
    "alert.failed.title": "Could not send",
    "alert.failed.body": "Please check your connection or email sales@nas-global.co.za.",
  },
  pt: {
    "tabs.home": "Início",
    "tabs.services": "Serviços",
    "tabs.contact": "Contato",

    "home.kicker": "NAS Global",
    "home.title": "Compras e serviços para projetos industriais críticos.",
    "home.subtitle":
      "Sediada na África do Sul com acesso a várias marcas OEM, preços competitivos e capacidade logística alinhada às Incoterms.",
    "home.industries": "Indústrias",

    "services.title": "Serviços",
    "services.subtitle": "Compras, logística e suporte—de ponta a ponta.",
    "services.s1.title": "Compras de engenharia",
    "services.s1.body":
      "Sourcing entre marcas com suporte de documentação e especificações claras.",
    "services.s2.title": "Logística e modelos de entrega",
    "services.s2.body":
      "Opções de transporte alinhadas às Incoterms e às exigências do destino.",
    "services.s3.title": "Serviço e pós-venda",
    "services.s3.body": "Comunicação responsiva e suporte prático após a entrega.",

    "contact.title": "Contato",
    "contact.subtitle": "Envie sua solicitação e responderemos com preços e prazos.",
    "form.name": "Nome",
    "form.email": "E-mail",
    "form.companyOptional": "Empresa (opcional)",
    "form.message": "Mensagem",
    "form.placeholder.name": "Seu nome completo",
    "form.placeholder.email": "nome@empresa.com",
    "form.placeholder.company": "Empresa / unidade",
    "form.placeholder.message": "Inclua códigos, quantidades e destino.",
    "form.send": "Enviar solicitação",
    "form.sending": "Enviando…",
    "form.noteEmail": "E-mail:",
    "form.validation.name": "Por favor, informe seu nome.",
    "form.validation.email": "Por favor, informe um e-mail válido.",
    "form.validation.message": "Por favor, escreva uma mensagem (10+ caracteres).",
    "alert.checkDetails.title": "Verifique os dados",
    "alert.sent.title": "Enviado",
    "alert.sent.body": "Obrigado—nossa equipe retornará em breve.",
    "alert.failed.title": "Não foi possível enviar",
    "alert.failed.body":
      "Verifique sua conexão ou envie um e-mail para sales@nas-global.co.za.",
  },
};

export function getSystemLocale(): Locale {
  const locales = Localization.getLocales();
  const tag = locales?.[0]?.languageTag?.toLowerCase() ?? "";
  if (tag.startsWith("pt")) return "pt";
  return "en";
}

export function t(key: string, locale = getSystemLocale()) {
  return MESSAGES[locale]?.[key] ?? MESSAGES.en[key] ?? key;
}

