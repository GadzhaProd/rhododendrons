export type ProductSize = {
  label: string
  price: string
}

export type Product = {
  slug: string
  name: string
  description: string
  longDescription: string
  image: string
  image2?: string
  color: string
  colorHex?: string
  bloeiperiode: string
  standplaats: string
  winterhard: boolean
  sizes: ProductSize[]
  kenmerken: { label: string; value: string }[]
  bloeikleurFilter: string[]
  standplaatsFilter: string[]
  maxHoogte: "tot 1 m" | "1–2 m" | "2–3 m" | "3+ m"
  geschiktVoor: string[]
}

export type Accessory = {
  slug: string
  type: "accessory"
  name: string
  description: string
  price: number
  unit: string
  image: string
}

export const products: Product[] = [
  {
    slug: "nova-zembla",
    name: "Nova Zembla",
    description: "Opvallende helderrode bloemen, de meest populaire rhododendron van Nederland.",
    longDescription:
      "Nova Zembla is de bestverkopende rhododendron van Nederland — en niet zonder reden. De vuurrode bloemtrossen zijn imposant en rijkelijk, en de plant bloeit betrouwbaar elk jaar in mei en juni. Uitstekend winterhard, geschikt als solitair of haag, en meer zontoleranter dan de meeste soorten. Direct van eigen kwekerij in Otterlo — dagvers gerooid bij uw bestelling.",
    image: "/images/nova-zembla.jpg",
    image2: "/images/nova-zembla-2.jpg",
    color: "Helderrood",
    colorHex: "#d14343",
    bloeiperiode: "Mei – juni",
    standplaats: "Halfschaduw / meer zontoleranter",
    winterhard: true,
    sizes: [
      { label: "40–60 cm", price: "29,00" },
      { label: "60–80 cm", price: "45,00" },
      { label: "80–100 cm", price: "65,00" },
      { label: "100–120 cm", price: "89,00" },
    ],
    kenmerken: [
      { label: "Kleur", value: "Helderrood" },
      { label: "Bloeiperiode", value: "Mei – juni" },
      { label: "Standplaats", value: "Halfschaduw / meer zontoleranter" },
      { label: "Max. hoogte", value: "tot 3 m" },
      { label: "Breedte", value: "tot 2,5 m" },
      { label: "Groeisnelheid", value: "Matig" },
      { label: "Winterhard", value: "Ja (zone 5)" },
      { label: "Bladtype", value: "Groenblijvend" },
      { label: "Grondsoort", value: "Zure, losse grond (pH 4,5–6)" },
    ],
    bloeikleurFilter: ["Rood"],
    standplaatsFilter: ["Halfschaduw", "Volle zon"],
    maxHoogte: "2–3 m",
    geschiktVoor: ["Tuin", "Haag"],
  },
  {
    slug: "cunninghams-white",
    name: "Cunningham's White",
    description: "Elegante witte bloemen met subtiele roze accenten, vroegste bloei van alle soorten.",
    longDescription:
      "Cunningham's White is een klassieke rhododendron die als eerste van alle soorten bloeit — al in april kleuren de witte bloemen met subtiele lichtroze tinten uw tuin. De plant groeit gestaag en vormt een mooie volle struik, ideaal als solitair of als haag. Tijdloze schoonheid, uitstekende winterhardheid, weinig onderhoud. Rechtstreeks van eigen kwekerij voor de allerbeste plantkwaliteit.",
    image: "/images/cunninghams-white.jpg",
    image2: "/images/cunninghams-white-2.jpg",
    color: "Wit / lichtroze",
    colorHex: "#f5ede3",
    bloeiperiode: "April – mei",
    standplaats: "Halfschaduw",
    winterhard: true,
    sizes: [
      { label: "40–60 cm", price: "25,00" },
      { label: "60–80 cm", price: "39,00" },
      { label: "80–100 cm", price: "55,00" },
      { label: "100–120 cm", price: "75,00" },
    ],
    kenmerken: [
      { label: "Kleur", value: "Wit / lichtroze" },
      { label: "Bloeiperiode", value: "April – mei" },
      { label: "Standplaats", value: "Halfschaduw" },
      { label: "Max. hoogte", value: "tot 2 m" },
      { label: "Breedte", value: "tot 2 m" },
      { label: "Groeisnelheid", value: "Langzaam" },
      { label: "Winterhard", value: "Ja (zone 4)" },
      { label: "Bladtype", value: "Groenblijvend" },
      { label: "Grondsoort", value: "Zure, losse grond (pH 4,5–6)" },
    ],
    bloeikleurFilter: ["Wit"],
    standplaatsFilter: ["Halfschaduw"],
    maxHoogte: "1–2 m",
    geschiktVoor: ["Tuin", "Haag"],
  },
  {
    slug: "roseum-elegans",
    name: "Roseum Elegans",
    description: "Klassieke warm roze bloemen, hitte- en koudewinterhard, uitstekend als haag.",
    longDescription:
      "Roseum Elegans is een tijdloze klassieker met warme roze bloemtrossen die imposant en rijkelijk bloeien in mei en juni. De plant groeit krachtig en breed, is uitstekend winterhard én hittebestendig — zelfs in zomerse periodes blijft hij gezond. Ideaal als solitair of als haag in grotere tuinen. Een betrouwbare keuze die jaar na jaar verast.",
    image: "/images/roseum-elegans.jpg",
    image2: "/images/roseum-elegans-2.jpg",
    color: "Warm roze / lavendel-roze",
    colorHex: "#e07aa6",
    bloeiperiode: "Mei – juni",
    standplaats: "Halfschaduw / verdraagt zon en hitte",
    winterhard: true,
    sizes: [
      { label: "40–60 cm", price: "27,00" },
      { label: "60–80 cm", price: "42,00" },
      { label: "80–100 cm", price: "60,00" },
      { label: "100–120 cm", price: "82,00" },
    ],
    kenmerken: [
      { label: "Kleur", value: "Warm roze / lavendel-roze" },
      { label: "Bloeiperiode", value: "Mei – juni" },
      { label: "Standplaats", value: "Halfschaduw / verdraagt zon en hitte" },
      { label: "Max. hoogte", value: "tot 2,5 m" },
      { label: "Breedte", value: "tot 2,5 m" },
      { label: "Groeisnelheid", value: "Matig–snel" },
      { label: "Winterhard", value: "Ja (zone 5)" },
      { label: "Bladtype", value: "Groenblijvend" },
      { label: "Grondsoort", value: "Zure, losse grond (pH 4,5–6)" },
    ],
    bloeikleurFilter: ["Roze"],
    standplaatsFilter: ["Halfschaduw", "Volle zon"],
    maxHoogte: "2–3 m",
    geschiktVoor: ["Tuin", "Haag"],
  },
  {
    slug: "catawbiense-boursault",
    name: "Catawbiense Boursault",
    description: "Prachtige paars-lavendel bloemen, ijzersterk en betrouwbaar.",
    longDescription:
      "De Catawbiense Boursault is een van de meest betrouwbare rhododendrons voor de Nederlandse tuin. Met zijn opvallende paars-lavendel bloemen en uitstekende winterhardheid is deze soort ideaal voor vrijwel elke situatie. De plant bloeit rijkelijk in mei en juni, trekt vlinders en bijen, en vormt een compacte, goed vertakte struik. Direct van eigen kwekerij — geen tussenhandel.",
    image: "/images/catawbiense-boursault.jpg",
    image2: "/images/catawbiense-boursault-2.jpg",
    color: "Paars-lavendel",
    colorHex: "#b888d8",
    bloeiperiode: "Mei – juni",
    standplaats: "Halfschaduw / verdraagt zon",
    winterhard: true,
    sizes: [
      { label: "40–60 cm", price: "27,00" },
      { label: "60–80 cm", price: "42,00" },
      { label: "80–100 cm", price: "60,00" },
      { label: "100–120 cm", price: "82,00" },
    ],
    kenmerken: [
      { label: "Kleur", value: "Paars-lavendel" },
      { label: "Bloeiperiode", value: "Mei – juni" },
      { label: "Standplaats", value: "Halfschaduw / verdraagt zon" },
      { label: "Max. hoogte", value: "tot 2,5 m" },
      { label: "Breedte", value: "tot 2,5 m" },
      { label: "Groeisnelheid", value: "Matig" },
      { label: "Winterhard", value: "Ja (zone 5)" },
      { label: "Bladtype", value: "Groenblijvend" },
      { label: "Grondsoort", value: "Zure, losse grond (pH 4,5–6)" },
    ],
    bloeikleurFilter: ["Paars"],
    standplaatsFilter: ["Halfschaduw", "Volle zon"],
    maxHoogte: "2–3 m",
    geschiktVoor: ["Tuin", "Haag"],
  },
  {
    slug: "catawbiense-grandiflorum",
    name: "Catawbiense Grandiflorum",
    description: "Lila-roze bloemen op indrukwekkend formaat, de beste keuze voor grote tuinen.",
    longDescription:
      "De Catawbiense Grandiflorum is de kolos van ons assortiment — groot, krachtig en indrukwekkend. Met zijn lila-roze bloemtrossen en snelle groei is dit de ideale soort voor haagvorming, privacyschermen of grootschalige beplanting. Uitstekend winterhard en vrijwel onderhoudsloos. Populair bij hoveniers en tuineigenaren met ruimte voor iets groots.",
    image: "/images/catawbiense-grandiflorum.jpg",
    image2: "/images/catawbiense-grandiflorum-2.jpg",
    color: "Lila-roze / lavendel",
    colorHex: "#c090d0",
    bloeiperiode: "Mei – juni",
    standplaats: "Halfschaduw / verdraagt zon",
    winterhard: true,
    sizes: [
      { label: "40–60 cm", price: "29,00" },
      { label: "60–80 cm", price: "45,00" },
      { label: "80–100 cm", price: "65,00" },
      { label: "100–120 cm", price: "89,00" },
    ],
    kenmerken: [
      { label: "Kleur", value: "Lila-roze / lavendel" },
      { label: "Bloeiperiode", value: "Mei – juni" },
      { label: "Standplaats", value: "Halfschaduw / verdraagt zon" },
      { label: "Max. hoogte", value: "tot 3 m" },
      { label: "Breedte", value: "tot 3 m" },
      { label: "Groeisnelheid", value: "Matig–snel" },
      { label: "Winterhard", value: "Ja (zone 5)" },
      { label: "Bladtype", value: "Groenblijvend" },
      { label: "Grondsoort", value: "Zure, losse grond (pH 4,5–6)" },
    ],
    bloeikleurFilter: ["Paars", "Roze"],
    standplaatsFilter: ["Halfschaduw", "Volle zon"],
    maxHoogte: "2–3 m",
    geschiktVoor: ["Tuin", "Haag"],
  },
  {
    slug: "ponticum-roseum",
    name: "Ponticum Roseum",
    description: "Roze-lichtpaarse bloemen, robuust en snel groeiend met decoratieve rode stelen.",
    longDescription:
      "Ponticum Roseum combineert de groeikracht van de Ponticum met zachte roze-lichtpaarse bloemen en decoratieve rode jonge stelen. Deze robuuste soort groeit snel tot indrukwekkende hoogte en is uitstekend geschikt als haag of privacyscherm. Weinig onderhoud, uitstekend winterhard, en het hele jaar door sierwaarde dankzij de bijzondere stelen.",
    image: "/images/ponticum-roseum.jpg",
    image2: "/images/ponticum-roseum-2.jpg",
    color: "Roze / lichtpaars",
    colorHex: "#e8a0c0",
    bloeiperiode: "Mei – juni",
    standplaats: "Halfschaduw / schaduw",
    winterhard: true,
    sizes: [
      { label: "40–60 cm", price: "22,00" },
      { label: "60–80 cm", price: "35,00" },
      { label: "80–100 cm", price: "50,00" },
      { label: "100–120 cm", price: "70,00" },
    ],
    kenmerken: [
      { label: "Kleur", value: "Roze / lichtpaars" },
      { label: "Bloeiperiode", value: "Mei – juni" },
      { label: "Standplaats", value: "Halfschaduw / schaduw" },
      { label: "Max. hoogte", value: "tot 4 m" },
      { label: "Breedte", value: "tot 3,5 m" },
      { label: "Groeisnelheid", value: "Snel" },
      { label: "Winterhard", value: "Ja (zone 5)" },
      { label: "Bladtype", value: "Groenblijvend" },
      { label: "Grondsoort", value: "Zure, losse grond (pH 4,5–6)" },
    ],
    bloeikleurFilter: ["Roze"],
    standplaatsFilter: ["Halfschaduw"],
    maxHoogte: "3+ m",
    geschiktVoor: ["Tuin", "Haag", "Bosrand"],
  },
  {
    slug: "ponticum",
    name: "Ponticum",
    description: "Violet-paarse bloemen op een robuuste, snel groeiende struik voor grote tuinen.",
    longDescription:
      "Rhododendron Ponticum is de krachtigste soort uit ons assortiment. Met zijn violet-paarse bloemen en indrukwekkende groeikracht is deze plant ideaal voor grote tuinen, bosranden en privacyschermen. De plant kan tot 4 meter hoog worden en vergt weinig onderhoud. Uitstekend winterhard en geschikt voor zowel halfschaduw als schaduwrijke plekken.",
    image: "/images/ponticum.jpg",
    image2: "/images/ponticum-2.jpg",
    color: "Violet-paars",
    colorHex: "#7b5ea7",
    bloeiperiode: "Mei – juni",
    standplaats: "Halfschaduw / schaduw",
    winterhard: true,
    sizes: [
      { label: "40–60 cm", price: "22,00" },
      { label: "60–80 cm", price: "35,00" },
      { label: "80–100 cm", price: "50,00" },
      { label: "100–120 cm", price: "70,00" },
    ],
    kenmerken: [
      { label: "Kleur", value: "Violet-paars" },
      { label: "Bloeiperiode", value: "Mei – juni" },
      { label: "Standplaats", value: "Halfschaduw / schaduw" },
      { label: "Max. hoogte", value: "tot 4 m" },
      { label: "Breedte", value: "tot 4 m" },
      { label: "Groeisnelheid", value: "Snel" },
      { label: "Winterhard", value: "Ja (zone 5)" },
      { label: "Bladtype", value: "Groenblijvend" },
      { label: "Grondsoort", value: "Zure, losse grond (pH 4,5–6)" },
    ],
    bloeikleurFilter: ["Paars"],
    standplaatsFilter: ["Halfschaduw"],
    maxHoogte: "3+ m",
    geschiktVoor: ["Tuin", "Bosrand"],
  },
]

export const tuinturf: Accessory = {
  slug: "tuinturf-substraat",
  type: "accessory",
  name: "Tuinturf-substraat voor Rhododendrons",
  description:
    "Speciaal samengesteld substraat voor optimale groei en aanslag van rhododendrons. Zuurminnend, vochtregelend en voedingsstoffen-rijk.",
  price: 14.95,
  unit: "per 40L zak",
  image: "/images/tuinturf.jpg",
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug)
}
