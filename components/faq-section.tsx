import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    id: "levering",
    question: "Hoe en wanneer wordt mijn rhododendron geleverd?",
    answer:
      "Wij leveren met eigen transport door heel Nederland. Na uw bestelling of offerte nemen wij contact met u op om een leveringsmoment af te stemmen dat voor u uitkomt. Uw plant wordt vers gerooid en direct geleverd, zo komt hij in optimale conditie aan.",
  },
  {
    id: "aanplanten",
    question: "Wanneer kan ik een rhododendron aanplanten?",
    answer:
      "Een rhododendron kunt u het hele jaar door aanplanten, behalve tijdens vorstperiodes. De ideale momenten zijn vroege lente (maart–april) en herfst (september–oktober). Plant u in de zomer, zorg dan voor voldoende water in de eerste weken na het planten.",
  },
  {
    id: "grond",
    question: "Welke grond heeft een rhododendron nodig?",
    answer:
      "De rhododendron gedijt het beste op zure, luchtige grond: denk aan zandgrond of veengrond met een pH tussen 4,5 en 6. Op zware kleigrond groeit de plant minder goed. Voeg bij het aanplanten rododendrongrond toe voor de beste start. Twijfelt u? Wij geven graag advies op maat.",
  },
  {
    id: "garantie",
    question: "Wat houdt de aangroeigarantie in?",
    answer:
      "Al onze planten worden geleverd met aangroeigarantie. Groeit een plant niet aan ondanks de juiste verzorging? Neem dan contact met ons op, wij zoeken samen naar een passende oplossing. Onze reputatie is gebouwd op kwaliteit, en die nemen wij serieus.",
  },
  {
    id: "minimumbestelling",
    question: "Kunt u ook 1 plant leveren?",
    answer:
      "Voor particulieren geldt geen minimumbestelling; u kunt gewoon 1 plant bestellen. Heeft u een kleinere opdracht als hovenier? Neem contact op, we denken graag mee.",
  },
  {
    id: "snoeien",
    question: "Moet ik mijn rhododendron snoeien?",
    answer:
      "Snoeien is niet noodzakelijk, maar kan wel. Snoei bij voorkeur direct na de bloei, van eind april tot halverwege juni. Zo heeft de plant de rest van het seizoen tijd om nieuwe bloemknoppen te vormen voor volgend jaar. Radicaal snoeien raden wij af: dit vertraagt de bloei met twee tot drie jaar.",
  },
]

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
}

export function FaqSection() {
  return (
    <section className="py-12 lg:py-20 bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Vraag & advies
          </span>
          <h2 className="mt-4 font-serif text-4xl font-medium tracking-tight text-foreground sm:text-5xl lg:text-6xl text-balance">
            Alles wat u wilt weten
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Staat uw vraag er niet tussen? Neem gerust contact met ons op, wij helpen u persoonlijk verder.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id}>
                <AccordionTrigger className="text-base font-medium text-foreground hover:no-underline hover:text-accent py-5 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
