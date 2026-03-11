export type Locale = "en" | "pt";

export const MESSAGES: Record<Locale, Record<string, string>> = {
  en: {
    // Nav
    "nav.about": "About",
    "nav.services": "Services",
    "nav.contact": "Contact",
    "nav.getQuote": "Get a quote",
    "nav.openMenu": "Open menu",

    // Footer
    "footer.blurb":
      "Engineering procurement and service partner based in South Africa, with access to multiple OEM brands and strong Incoterms capability for global delivery.",
    "footer.company": "Company",
    "footer.industries": "Industries",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.builtWith": "Built with Next.js + Django + React Native",
    "footer.southAfrica": "South Africa",

    // Home
    "home.kicker": "Engineering procurement & services",
    "home.title":
      "Reliable sourcing, logistics, and support for critical industrial projects.",
    "home.lead":
      "NAS Global (Pty) is based in South Africa with access to multiple OEM brands. We work towards being a one-stop engineering procurement and service provider, backed by comprehensive Incoterms capability for global delivery.",
    "home.cta.quote": "Request a quotation",
    "home.cta.explore": "Explore services",
    "home.benefit.1": "Fast, competitive pricing via OEM access",
    "home.benefit.2": "Incoterms-ready shipping models",
    "home.benefit.3": "Quality-first sourcing and documentation",
    "home.benefit.4": "Responsive, client-focused communication",
    "home.card.procurement.title": "Procurement",
    "home.card.procurement.desc":
      "Sourcing across brands with clear traceability and documentation.",
    "home.card.logistics.title": "Logistics",
    "home.card.logistics.desc":
      "Flexible transport models with Incoterms-aligned support.",
    "home.card.assurance.title": "Assurance",
    "home.card.assurance.desc":
      "Quality-driven supply process and responsive after-sales support.",
    "home.card.contact": "Contact",
    "home.card.email": "Email",
    "home.serve.title": "Who we serve",
    "home.serve.lead":
      "Industry-aligned procurement and support for demanding environments.",
    "home.serve.cta": "Talk to us",
    "home.industry.blurb":
      "Procurement, spares, and service support tailored to your project needs.",
    "home.pricing.title": "Get affordable, competitive pricing.",
    "home.pricing.lead":
      "Customer satisfaction is our priority. Share your requirements and we’ll respond quickly with the right sourcing and delivery approach.",
    "home.pricing.cta": "Contact sales",

    // About
    "about.badge": "About NAS Global",
    "about.title": "A client-first procurement and services partner.",
    "about.lead":
      "NAS Global (Pty) takes pride in all‑round customer satisfaction. We focus on understanding the needs and requirements of our clients to deliver clear, practical solutions that exceed expectations.",
    "about.card.1.title": "Based in South Africa",
    "about.card.1.body":
      "Local presence with global reach and a reliable supplier network.",
    "about.card.2.title": "OEM access across brands",
    "about.card.2.body":
      "Versatile sourcing to meet spec, lead time, and budget requirements.",
    "about.card.3.title": "Incoterms capability",
    "about.card.3.body":
      "Confident support for international destinations and transport models.",
    "about.focus": "Our focus",
    "about.focus.1": "Procurement for project-critical requirements",
    "about.focus.2": "Competitive pricing and clear communication",
    "about.focus.3": "Quality-driven sourcing and documentation",
    "about.focus.4": "Responsive after-sales support",

    // Services
    "services.badge": "Services",
    "services.title": "Procurement, logistics, and support—end to end.",
    "services.lead":
      "We’re working towards a one‑stop engineering procurement and service provider status. Our approach balances speed, transparency, and quality so you can deliver confidently.",
    "services.card.1.title": "Engineering procurement",
    "services.card.1.body":
      "Sourcing and procurement across OEM brands with clear specifications and documentation support.",
    "services.card.2.title": "Logistics & delivery models",
    "services.card.2.body":
      "Transport model options aligned with Incoterms and destination requirements.",
    "services.card.3.title": "Service & after-sales support",
    "services.card.3.body":
      "Responsive communication, issue handling, and practical support post-delivery.",
    "services.cta.title": "Tell us what you need. We’ll source it.",
    "services.cta.lead":
      "Share your specs, quantities, and destination. We’ll respond with pricing, lead times, and the recommended delivery model.",
    "services.cta.button": "Contact sales",

    // Contact
    "contact.badge": "Contact",
    "contact.title": "Tell us what you need—get a quote fast.",
    "contact.lead":
      "Send your specs, part numbers, quantities, and destination. We’ll respond with pricing, lead times, and delivery options.",
    "contact.phoneOptional": "Phone numbers can be added here (optional).",
    "contact.privacy": "Your details are used only to respond to your request.",
    "contact.form.title": "Request a quotation",
    "contact.form.lead.prefix": "Prefer email? Send your request to",

    // Form
    "form.name": "Name",
    "form.email": "Email",
    "form.companyOptional": "Company (optional)",
    "form.message": "Message",
    "form.placeholder.name": "Your full name",
    "form.placeholder.email": "name@company.com",
    "form.placeholder.company": "Company / site",
    "form.placeholder.message":
      "What do you need quoted? Include part numbers, quantities, and delivery destination.",
    "form.note": "We typically respond within 1 business day.",
    "form.sent": "Sent. We’ll get back to you shortly.",
    "form.send": "Send request",
    "form.sending": "Sending…",
    "form.validation.name": "Please enter your name.",
    "form.validation.email": "Please enter a valid email address.",
    "form.validation.message": "Please add a short message (10+ characters).",
    "form.error": "Something went wrong. Please email sales@nas-global.co.za.",
  },
  pt: {
    // Nav
    "nav.about": "Sobre",
    "nav.services": "Serviços",
    "nav.contact": "Contato",
    "nav.getQuote": "Pedir cotação",
    "nav.openMenu": "Abrir menu",

    // Footer
    "footer.blurb":
      "Parceiro de compras de engenharia e serviços baseado na África do Sul, com acesso a diversas marcas OEM e forte capacidade em Incoterms para entregas globais.",
    "footer.company": "Empresa",
    "footer.industries": "Indústrias",
    "footer.contact": "Contato",
    "footer.rights": "Todos os direitos reservados.",
    "footer.builtWith": "Feito com Next.js + Django + React Native",
    "footer.southAfrica": "África do Sul",

    // Home
    "home.kicker": "Compras e serviços de engenharia",
    "home.title":
      "Sourcing confiável, logística e suporte para projetos industriais críticos.",
    "home.lead":
      "A NAS Global (Pty) está sediada na África do Sul com acesso a várias marcas OEM. Trabalhamos para ser um provedor completo de compras de engenharia e serviços, com capacidade abrangente em Incoterms para entrega global.",
    "home.cta.quote": "Solicitar cotação",
    "home.cta.explore": "Ver serviços",
    "home.benefit.1": "Preços rápidos e competitivos via acesso OEM",
    "home.benefit.2": "Modelos de envio prontos para Incoterms",
    "home.benefit.3": "Qualidade em primeiro lugar e documentação",
    "home.benefit.4": "Comunicação ágil e focada no cliente",
    "home.card.procurement.title": "Compras",
    "home.card.procurement.desc":
      "Sourcing entre marcas com rastreabilidade e documentação claras.",
    "home.card.logistics.title": "Logística",
    "home.card.logistics.desc":
      "Modelos de transporte flexíveis com suporte alinhado a Incoterms.",
    "home.card.assurance.title": "Garantia",
    "home.card.assurance.desc":
      "Processo de fornecimento orientado à qualidade e suporte pós-venda responsivo.",
    "home.card.contact": "Contato",
    "home.card.email": "E-mail",
    "home.serve.title": "Quem atendemos",
    "home.serve.lead":
      "Compras e suporte alinhados ao setor para ambientes exigentes.",
    "home.serve.cta": "Fale conosco",
    "home.industry.blurb":
      "Compras, sobressalentes e suporte de serviços sob medida para sua necessidade.",
    "home.pricing.title": "Obtenha preços acessíveis e competitivos.",
    "home.pricing.lead":
      "A satisfação do cliente é nossa prioridade. Compartilhe suas necessidades e responderemos rapidamente com a melhor abordagem de sourcing e entrega.",
    "home.pricing.cta": "Falar com vendas",

    // About
    "about.badge": "Sobre a NAS Global",
    "about.title": "Um parceiro de compras e serviços focado no cliente.",
    "about.lead":
      "A NAS Global (Pty) se orgulha da satisfação total do cliente. Buscamos entender as necessidades e requisitos dos nossos clientes para entregar soluções claras e práticas que superem as expectativas.",
    "about.card.1.title": "Sediada na África do Sul",
    "about.card.1.body":
      "Presença local com alcance global e uma rede confiável de fornecedores.",
    "about.card.2.title": "Acesso a OEMs e marcas",
    "about.card.2.body":
      "Sourcing versátil para atender especificações, prazo e orçamento.",
    "about.card.3.title": "Capacidade em Incoterms",
    "about.card.3.body":
      "Suporte confiante para destinos internacionais e modelos de transporte.",
    "about.focus": "Nosso foco",
    "about.focus.1": "Compras para requisitos críticos de projeto",
    "about.focus.2": "Preços competitivos e comunicação clara",
    "about.focus.3": "Sourcing orientado à qualidade e documentação",
    "about.focus.4": "Suporte pós-venda responsivo",

    // Services
    "services.badge": "Serviços",
    "services.title": "Compras, logística e suporte—de ponta a ponta.",
    "services.lead":
      "Trabalhamos para ser um provedor completo de compras de engenharia e serviços. Nossa abordagem equilibra velocidade, transparência e qualidade para você entregar com confiança.",
    "services.card.1.title": "Compras de engenharia",
    "services.card.1.body":
      "Sourcing e compras entre marcas OEM com especificações claras e suporte de documentação.",
    "services.card.2.title": "Logística e modelos de entrega",
    "services.card.2.body":
      "Opções de transporte alinhadas às Incoterms e às exigências do destino.",
    "services.card.3.title": "Serviço e pós-venda",
    "services.card.3.body":
      "Comunicação responsiva, tratativa de problemas e suporte prático após a entrega.",
    "services.cta.title": "Diga o que você precisa. Nós buscamos.",
    "services.cta.lead":
      "Compartilhe suas especificações, quantidades e destino. Responderemos com preços, prazos e o modelo de entrega recomendado.",
    "services.cta.button": "Falar com vendas",

    // Contact
    "contact.badge": "Contato",
    "contact.title": "Diga o que você precisa—receba uma cotação rápido.",
    "contact.lead":
      "Envie suas especificações, códigos, quantidades e destino. Responderemos com preços, prazos e opções de entrega.",
    "contact.phoneOptional": "Números de telefone podem ser adicionados aqui (opcional).",
    "contact.privacy": "Seus dados são usados apenas para responder sua solicitação.",
    "contact.form.title": "Solicitar cotação",
    "contact.form.lead.prefix": "Prefere e-mail? Envie sua solicitação para",

    // Form
    "form.name": "Nome",
    "form.email": "E-mail",
    "form.companyOptional": "Empresa (opcional)",
    "form.message": "Mensagem",
    "form.placeholder.name": "Seu nome completo",
    "form.placeholder.email": "nome@empresa.com",
    "form.placeholder.company": "Empresa / unidade",
    "form.placeholder.message":
      "O que você precisa cotar? Inclua códigos, quantidades e destino de entrega.",
    "form.note": "Normalmente respondemos em até 1 dia útil.",
    "form.sent": "Enviado. Retornaremos em breve.",
    "form.send": "Enviar solicitação",
    "form.sending": "Enviando…",
    "form.validation.name": "Por favor, informe seu nome.",
    "form.validation.email": "Por favor, informe um e-mail válido.",
    "form.validation.message": "Por favor, escreva uma mensagem (10+ caracteres).",
    "form.error": "Algo deu errado. Envie um e-mail para sales@nas-global.co.za.",
  },
};

