import type { Locale } from "./i18n"

export type Messages = {
  nav: {
    inicio: string
    nosotros: string
    montajes: string
    directora: string
    hitos: string
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
  director: {
    label: string
    title: string
    name: string
    roles: string
    p1: string
    p2: string
    imageAlt: string
  }
  repertoire: {
    label: string
    title: string
    description: string
    items: Array<{ title: string; description: string }>
  }
  milestones: {
    label: string
    title: string
    intlTitle: string
    natTitle: string
    intlItems: Array<{ place: string; desc: string }>
    natItems: Array<{ place: string; desc: string }>
  }
}

const es: Messages = {
  nav: {
    inicio: "Inicio",
    nosotros: "Nosotros",
    montajes: "Montajes",
    directora: "Directora",
    hitos: "Hitos",
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
    p2: "El Ballet está formado por bailarines de 14 a 35 años. En total somos 135 personas entre dirección, bailarines y músicos, distribuidos en 6 elencos que interpretan folklore nacional e internacional. Se formó con el objetivo de promover la cultura y el arte de la danza en nuestro territorio, logrando presentaciones de calidad.",
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
  director: {
    label: "Nuestra Directora",
    title: "Liderazgo y Pasión",
    name: "Carla Vidal Sepúlveda",
    roles: "Fundadora, Directora y Coreógrafa",
    p1: "Docente de Educación Física y Licenciada en Educación por la Universidad Autónoma de Chile. Cuenta con 20 años de trayectoria en el ámbito artístico y 10 años en el ámbito pedagógico. Fue integrante del Ballet Folclórico de Temuco (BAFOTE) entre 2018 y 2023.",
    p2: "Desde 2018 dirige la Academia Weliwen. Es especialista en danza folclórica nacional e internacional, ritmos latinos, jazz y show dance, destacando además por su experiencia en logística y organización de eventos culturales.",
    imageAlt: "Carla Vidal Sepúlveda, Directora de Weliwen",
  },
  repertoire: {
    label: "Nuestros Montajes",
    title: "Un Viaje por la Tradición",
    description: "Explora nuestra diversidad de cuadros artísticos, inspirados en las ricas raíces culturales de Chile y Latinoamérica.",
    items: [
      { title: "Norte Festivo", description: "Obra inspirada en la Anata Aymara. Celebra la fertilidad de la Pacha Mama con personajes como los 'Carnavalonones', destacando la euforia y alegría." },
      { title: "Cantores Chilenos", description: "Cuadro de neofolclore que fusiona danza contemporánea y folclórica. Homenaje a Violeta Parra, Víctor Jara, Inti Illimani, Illapu y Los Jaivas." },
      { title: "Patagonia", description: "Representación de la zona austral. Se centra en la figura del gaucho y bailes de pareja como el chamamé y la ranchera." },
      { title: "Fantasía Chilena", description: "Homenaje a las tradiciones campesinas de la zona central con jota, polka, cueca, corridos y resbalosa." },
      { title: "Fantasía Chilota", description: "Basada en las tradiciones del sur de Chile y Chiloé. Conecta la danza con la vida rural y la mitología espiritual de la isla." },
      { title: "Rapanui", description: "Inspirada en la cultura polinésica. Representa la conexión con la naturaleza y honra a los antepasados con vestuario de fibras y plumas." },
      { title: "Caporales", description: "Danza de origen boliviano (Yungas) con raíces en la Saya africana. Destaca por saltos atléticos en los varones y sensualidad en las mujeres." }
    ]
  },
  milestones: {
    label: "Hitos y Experiencia",
    title: "Nuestra Trayectoria Escénica",
    intlTitle: "Reconocimientos Internacionales",
    natTitle: "Presencia Nacional",
    intlItems: [
      { place: "Kosovo", desc: "3er lugar en la competencia del 'New Born Festival' (4ta edición)." },
      { place: "Macedonia del Norte", desc: "Participación en la 19° edición del Festival Internacional de Danza 'Skupi'." }
    ],
    natItems: [
      { place: "La Araucanía", desc: "Festival Araucanía en Danzas (Traiguén, Lumaco, Capitán Pastene) y Encuentro Regional de Danza en Temuco." },
      { place: "Villarrica", desc: "7° y 8° Encuentro Folclórico Newen Ayeweun." },
      { place: "Chiloé", desc: "Festival de Intercambio Cultural (Dalcahue) y Festival de Folklore (Curaco de Vélez)." },
      { place: "Otros Destinos", desc: "Festival Aires de Ceniza (Pitrufquén), Encuentro de Danza (Valdivia) y Feria Costumbrista (Lonquimay)." }
    ]
  },
}

const en: Messages = {
  nav: {
    inicio: "Home",
    nosotros: "About",
    montajes: "Repertoire",
    directora: "Director",
    hitos: "Milestones",
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
    p2: "The Ballet is made up of dancers aged 14 to 35. In total, we are 135 people including directors, dancers, and musicians, distributed across 6 ensembles performing national and international folklore. It was formed to promote culture and the art of dance in our region, achieving high-quality performances.",
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
  director: {
    label: "Our Director",
    title: "Leadership and Passion",
    name: "Carla Vidal Sepúlveda",
    roles: "Founder, Director and Choreographer",
    p1: "Physical Education Teacher and Bachelor of Education from the Universidad Autónoma de Chile. She has 20 years of artistic experience and 10 years of teaching experience. She was a member of the Temuco Folk Ballet (BAFOTE) between 2018 and 2023.",
    p2: "Since 2018 she has been directing the Weliwen Academy. She specializes in national and international folk dance, Latin rhythms, jazz, and show dance, and also stands out for her expertise in logistics and cultural event organization.",
    imageAlt: "Carla Vidal Sepúlveda, Director of Weliwen",
  },
  repertoire: {
    label: "Our Repertoire",
    title: "A Journey Through Tradition",
    description: "Explore our diverse artistic pieces, inspired by the rich cultural roots of Chile and Latin America.",
    items: [
      { title: "Festive North", description: "Inspired by the Anata Aymara. Celebrates the fertility of Pacha Mama with characters like the 'Carnavalonones', highlighting euphoria and joy." },
      { title: "Chilean Singers", description: "Neo-folklore piece blending contemporary and folk dance. A tribute to Violeta Parra, Víctor Jara, Inti Illimani, Illapu, and Los Jaivas." },
      { title: "Patagonia", description: "Representation of the southern zone. Focuses on the figure of the gaucho and couple dances like the chamamé and ranchera." },
      { title: "Chilean Fantasy", description: "Tribute to the peasant traditions of the central zone featuring jota, polka, cueca, corridos, and resbalosa." },
      { title: "Chilota Fantasy", description: "Based on the traditions of southern Chile and Chiloé. Connects dance with rural life and the island's spiritual mythology." },
      { title: "Rapanui", description: "Inspired by Polynesian culture. Represents the connection with nature and honors ancestors using fiber and feather costumes." },
      { title: "Caporales", description: "Bolivian dance (Yungas) with roots in African Saya. Notable for athletic jumps by men and sensuality by women." }
    ]
  },
  milestones: {
    label: "Milestones & Experience",
    title: "Our Stage Journey",
    intlTitle: "International Recognition",
    natTitle: "National Presence",
    intlItems: [
      { place: "Kosovo", desc: "3rd place at the 'New Born Festival' competition (4th edition)." },
      { place: "North Macedonia", desc: "Participation in the 19th edition of the 'Skupi' International Dance Festival." }
    ],
    natItems: [
      { place: "La Araucanía", desc: "Araucanía en Danzas Festival (Traiguén, Lumaco, Capitán Pastene) and Regional Dance Encounter in Temuco." },
      { place: "Villarrica", desc: "7th and 8th Newen Ayeweun Folklore Encounter." },
      { place: "Chiloé", desc: "Cultural Exchange Festival (Dalcahue) and Folklore Festival (Curaco de Vélez)." },
      { place: "Other Destinations", desc: "Aires de Ceniza Festival (Pitrufquén), Dance Encounter (Valdivia), and Traditional Fair (Lonquimay)." }
    ]
  },
}

const pt: Messages = {
  nav: {
    inicio: "Início",
    nosotros: "Sobre",
    montajes: "Repertório",
    directora: "Diretora",
    hitos: "Marcos",
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
    p2: "O Ballet é formado por bailarinos de 14 a 35 anos. No total, somos 135 pessoas, entre diretores, bailarinos e músicos, distribuídos em 6 elencos que interpretam folclore nacional e internacional. Foi formado com o objetivo de promover a cultura e a arte da dança em nosso território, alcançando apresentações de qualidade.",
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
  director: {
    label: "Nossa Diretora",
    title: "Liderança e Paixão",
    name: "Carla Vidal Sepúlveda",
    roles: "Fundadora, Diretora e Coreógrafa",
    p1: "Professora de Educação Física e Bacharel em Educação pela Universidade Autónoma do Chile. Possui 20 anos de experiência artística e 10 anos de experiência pedagógica. Foi membro do Ballet Folclórico de Temuco (BAFOTE) entre 2018 e 2023.",
    p2: "Desde 2018 dirige a Academia Weliwen. É especialista em dança folclórica nacional e internacional, ritmos latinos, jazz e show dance, destacando-se também por sua experiência em logística e organização de eventos culturais.",
    imageAlt: "Carla Vidal Sepúlveda, Diretora da Weliwen",
  },
  repertoire: {
    label: "Nosso Repertório",
    title: "Uma Viagem pela Tradição",
    description: "Explore nossa diversidade de quadros artísticos, inspirados nas ricas raízes culturais do Chile e da América Latina.",
    items: [
      { title: "Norte Festivo", description: "Inspirado na Anata Aymara. Celebra a fertilidade da Pacha Mama com personagens como os 'Carnavalonones', destacando a euforia e alegria." },
      { title: "Cantores Chilenos", description: "Quadro de neo-folclore que funde dança contemporânea e folclórica. Homenagem a Violeta Parra, Víctor Jara, Inti Illimani, Illapu e Los Jaivas." },
      { title: "Patagônia", description: "Representação da zona austral. Centra-se na figura do gaúcho e em danças de casal como o chamamé e a ranchera." },
      { title: "Fantasia Chilena", description: "Homenagem às tradições camponesas da zona central com jota, polka, cueca, corridos e resbalosa." },
      { title: "Fantasia Chilota", description: "Baseada nas tradições do sul do Chile e de Chiloé. Conecta a dança com a vida rural e a mitologia espiritual da ilha." },
      { title: "Rapanui", description: "Inspirado na cultura polinésia. Representa a conexão com a natureza e honra os antepassados com trajes de fibras e penas." },
      { title: "Caporales", description: "Dança de origem boliviana (Yungas) com raízes na Saya africana. Destaca-se por saltos atléticos nos homens e sensualidade nas mulheres." }
    ]
  },
  milestones: {
    label: "Marcos e Experiência",
    title: "Nossa Trajetória Cênica",
    intlTitle: "Reconhecimento Internacional",
    natTitle: "Presença Nacional",
    intlItems: [
      { place: "Kosovo", desc: "3º lugar na competição do 'New Born Festival' (4ª edição)." },
      { place: "Macedônia do Norte", desc: "Participação na 19ª edição do Festival Internacional de Dança 'Skupi'." }
    ],
    natItems: [
      { place: "La Araucanía", desc: "Festival Araucanía em Danças (Traiguén, Lumaco, Capitán Pastene) e Encontro Regional de Dança em Temuco." },
      { place: "Villarrica", desc: "7º e 8º Encontro Folclórico Newen Ayeweun." },
      { place: "Chiloé", desc: "Festival de Intercâmbio Cultural (Dalcahue) e Festival de Folclore (Curaco de Vélez)." },
      { place: "Outros Destinos", desc: "Festival Aires de Ceniza (Pitrufquén), Encontro de Dança (Valdivia) e Feira Costumbrista (Lonquimay)." }
    ]
  },
}

export const translations: Record<Locale, Messages> = {
  es,
  en,
  pt,
}
