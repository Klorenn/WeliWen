import type { Locale } from "./i18n"

export type Messages = {
  nav: {
    inicio: string
    nosotros: string
    galeria: string
    contacto: string
    openMenu: string
    closeMenu: string
  }
  lang: {
    es: string
    en: string
    pt: string
    switchLabel: string
    /** Nombre del idioma en la lista del desplegable */
    nameEs: string
    nameEn: string
    namePt: string
  }
  hero: {
    tagline: string
    cta: string
    scrollLabel: string
    scrollAria: string
    posterAlt: string
  }
  about: {
    label: string
    title: string
    p1: string
    p2: string
    p3: string
    p4: string
    imageAlt: string
  }
  gallery: {
    label: string
    title: string
    prevAria: string
    nextAria: string
    viewMore: string
    instagramEmbed: (shortcode: string) => string
    previewRange: (from: number, to: number, total: number) => string
  }
  footer: {
    generalDirector: string
    location: string
    rights: (year: number) => string
  }
}

const es: Messages = {
  nav: {
    inicio: "Inicio",
    nosotros: "Nosotros",
    galeria: "Galería",
    contacto: "Contacto",
    openMenu: "Abrir menú",
    closeMenu: "Cerrar menú",
  },
  lang: {
    es: "ES",
    en: "EN",
    pt: "PT",
    switchLabel: "Idioma",
    nameEs: "Español",
    nameEn: "Inglés",
    namePt: "Portugués",
  },
  hero: {
    tagline: "Ballet Folklórico Temuco — Chile",
    cta: "Descubre nuestra danza",
    scrollLabel: "SCROLL",
    scrollAria: "Desplazar hacia abajo",
    posterAlt: "Weliwen Ballet Folklórico",
  },
  about: {
    label: "Nuestra Historia",
    title: "Pasión por el Folclor Chileno",
    p1: 'El ballet folklórico Weliwen Chile, cuyo nombre tiene como significado "Nuevo Amanecer" en lengua mapuche, fue fundado el 6 de agosto de 2019 por Carla Vidal Sepúlveda, actualmente directora y fundadora de la academia de danza Weliwen de Temuco y bailarina con más de 20 años de experiencia en el folklore.',
    p2: "El Ballet está formado por bailarines de 14 a 35 años. Se formó con el objetivo de promover la cultura y el arte de la danza folclórica en nuestro territorio y en todas aquellas personas interesadas en aprender, logrando, a partir de una importante inspiración folclórica, presentaciones caracterizadas por ser espectáculos de calidad.",
    p3: "Ha participado en diferentes festivales y presentaciones a nivel nacional, destacando entre ellos su paso por Chiloé, Valdivia, Traiguén, Lumaco, Capitán Pastene, Lonquimay, Villarrica y Pitrufquén.",
    p4: 'A nivel internacional se destaca su participación en el festival internacional Skupi, Macedonia del Norte, y el festival "NEW BORN FESTIVAL" en Kosovo, obteniendo el 3er lugar en la competencia.',
    imageAlt:
      "Bailarina de Weliwen en escena con traje folclórico chileno",
  },
  gallery: {
    label: "Nuestra Esencia",
    title: "Síguenos en Instagram",
    prevAria: "Publicaciones anteriores",
    nextAria: "Siguientes publicaciones",
    viewMore: "Ver más en Instagram",
    instagramEmbed: (shortcode) => `Publicación de Instagram ${shortcode}`,
    previewRange: (from, to, total) =>
      `Vista previa ${from}–${to} de ${total}`,
  },
  footer: {
    generalDirector: "Dirección general",
    location: "Temuco, Chile",
    rights: (year) =>
      `© ${year} Weliwen Ballet Folklórico Chile. Todos los derechos reservados.`,
  },
}

const en: Messages = {
  nav: {
    inicio: "Home",
    nosotros: "About",
    galeria: "Gallery",
    contacto: "Contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  lang: {
    es: "ES",
    en: "EN",
    pt: "PT",
    switchLabel: "Language",
    nameEs: "Spanish",
    nameEn: "English",
    namePt: "Portuguese",
  },
  hero: {
    tagline: "Folk Ballet Temuco — Chile",
    cta: "Discover our dance",
    scrollLabel: "SCROLL",
    scrollAria: "Scroll down",
    posterAlt: "Weliwen Folk Ballet",
  },
  about: {
    label: "Our Story",
    title: "Passion for Chilean Folklore",
    p1: 'Weliwen Chile Folk Ballet, whose name means "New Dawn" in the Mapuche language, was founded on August 6, 2019 by Carla Vidal Sepúlveda, currently director and founder of the Weliwen dance academy in Temuco and a dancer with more than 20 years of experience in folklore.',
    p2: "The company brings together dancers aged 14 to 35. It was created to promote the culture and art of folk dance in our region and among everyone eager to learn; drawing on deep folkloric inspiration, its performances are known as high-quality shows.",
    p3: "It has performed at festivals and events across the country, including Chiloé, Valdivia, Traiguén, Lumaco, Capitán Pastene, Lonquimay, Villarrica, and Pitrufquén.",
    p4: 'Internationally, it has stood out at the Skupi festival in North Macedonia and the "NEW BORN FESTIVAL" in Kosovo, earning third place in the competition.',
    imageAlt:
      "Weliwen dancer on stage in traditional Chilean folk costume",
  },
  gallery: {
    label: "Our Essence",
    title: "Follow us on Instagram",
    prevAria: "Previous posts",
    nextAria: "Next posts",
    viewMore: "See more on Instagram",
    instagramEmbed: (shortcode) => `Instagram post ${shortcode}`,
    previewRange: (from, to, total) => `Preview ${from}–${to} of ${total}`,
  },
  footer: {
    generalDirector: "General direction",
    location: "Temuco, Chile",
    rights: (year) =>
      `© ${year} Weliwen Folk Ballet Chile. All rights reserved.`,
  },
}

const pt: Messages = {
  nav: {
    inicio: "Início",
    nosotros: "Sobre",
    galeria: "Galeria",
    contacto: "Contato",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
  },
  lang: {
    es: "ES",
    en: "EN",
    pt: "PT",
    switchLabel: "Idioma",
    nameEs: "Espanhol",
    nameEn: "Inglês",
    namePt: "Português",
  },
  hero: {
    tagline: "Ballet Folclórico Temuco — Chile",
    cta: "Conheça nossa dança",
    scrollLabel: "SCROLL",
    scrollAria: "Rolar para baixo",
    posterAlt: "Weliwen Ballet Folclórico",
  },
  about: {
    label: "Nossa História",
    title: "Paixão pelo Folclore Chileno",
    p1: 'O ballet folclórico Weliwen Chile, cujo nome significa "Novo Amanhecer" na língua mapuche, foi fundado em 6 de agosto de 2019 por Carla Vidal Sepúlveda, atualmente diretora e fundadora da academia de dança Weliwen de Temuco e bailarina com mais de 20 anos de experiência em folclore.',
    p2: "O Ballet é formado por bailarinos de 14 a 35 anos. Foi criado para promover a cultura e a arte da dança folclórica em nosso território e entre todas as pessoas interessadas em aprender, alcançando, a partir de uma forte inspiração folclórica, apresentações reconhecidas como espetáculos de qualidade.",
    p3: "Participou de diversos festivais e apresentações em nível nacional, destacando-se passagens por Chiloé, Valdivia, Traiguén, Lumaco, Capitán Pastene, Lonquimay, Villarrica e Pitrufquén.",
    p4: 'Em nível internacional destaca-se sua participação no festival internacional Skupi, Macedônia do Norte, e no festival "NEW BORN FESTIVAL" no Kosovo, obtendo o 3.º lugar na competição.',
    imageAlt:
      "Bailarina da Weliwen em cena com traje folclórico chileno",
  },
  gallery: {
    label: "Nossa Essência",
    title: "Siga-nos no Instagram",
    prevAria: "Publicações anteriores",
    nextAria: "Próximas publicações",
    viewMore: "Ver mais no Instagram",
    instagramEmbed: (shortcode) => `Publicação do Instagram ${shortcode}`,
    previewRange: (from, to, total) =>
      `Pré-visualização ${from}–${to} de ${total}`,
  },
  footer: {
    generalDirector: "Direção geral",
    location: "Temuco, Chile",
    rights: (year) =>
      `© ${year} Weliwen Ballet Folclórico Chile. Todos os direitos reservados.`,
  },
}

export const translations: Record<Locale, Messages> = {
  es,
  en,
  pt,
}
