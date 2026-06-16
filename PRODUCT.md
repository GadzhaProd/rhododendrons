# Product

## Register

brand

## Users

Two audiences served by one site, balanced in weight:

- **Homeowners (B2C)**: garden owners across the Netherlands, typically 45–70, buying 1–20 plants for their own tuin. They arrive via search, word of mouth, or social. They expect to recognise quality at a glance and want a low-friction path from "this looks like the right grower" to "in the cart". Older end of the range matters for type sizing and contrast, but not as a binding WCAG-AA+ floor.
- **Wholesale buyers (B2B)**: landscapers, hoveniers, and garden centres buying volume via `/groothandel`. They are not self-checkout buyers — they need to see scale ("10.000 planten"), terroir, and a real owner, then start a conversation (offerte / WhatsApp / contact).

The homepage must speak credibly to both without splitting into two sites. The producer story is the common spine.

## Product Purpose

Top Rhododendrons is a family-run rhododendron specialist in Otterlo, on the Veluwe, growing on veenrijke bodem since 2001. The site exists to convert that real-world advantage — a focused grower with a deep root system, vers gerooid planten, aangroeigarantie, and a named founder — into:

1. **Direct cart orders** from homeowners (the primary measurable outcome).
2. **Qualified wholesale conversations** through `/groothandel`, offerte modal, and WhatsApp.
3. **Standing brand presence** that holds up when someone Googles the name before phoning.

Success looks like a visitor who, within ten seconds, understands they are looking at a specialist grower — not a tuincentrum, not a marketplace, not a generic plant retailer — and within thirty seconds finds the plant or the conversation they came for.

## Brand Personality

Premium kwekerij, rustig en zelfverzekerd. Three words: **vakkundig, rustig, geworteld** (expert, calm, grounded).

- **Voice**: Dutch, specific, understated. Plain sentences over marketing claims. The copy already in place — *"Wij kweken rhododendrons. Niet meer, niet minder."* / *"Een gezonde plant is geen toeval. Dat is onze standaard."* — is the register.
- **Emotional goal**: the visitor should feel they have walked into a grower's office, not a showroom. Calm, slightly serious, proud without performance. No urgency, no exclamation, no winks.
- **Closest analogues**: a Domaine or producer-led winery website, not a tuincentrum or garden retailer. Producer pride is the spine; e-commerce is the mechanism.

## Anti-references

The site must visibly reject all four of these. Currently the homepage edges toward editorial/premium retail, `/groothandel` edges toward producer/Domaine, and the product cards edge toward Dutch garden brand — this three-dialect drift is the central problem this design context is meant to fix.

- **Generic Dutch tuincentrum** (Intratuin sale pages, Tuincentrum websites): cluttered grids, neon-yellow sale stickers, sidebar widgets, big-box retail feel, low-trust visual era.
- **Generic SaaS landing page**: gradient hero text, hero-metric template (big-number / small-label / supporting-stat), identical 3-up card grids, AI-illustrations, fake "Trusted by" logo bars, glassmorphism as default.
- **Old-school nursery website** (Wordpress-2014 era): cramped layouts, stock photography, sidebar navigation, Comic-Sans-adjacent type, low-trust visual signals.
- **Aggressive e-commerce** (Bol/AliExpress register): loud red CTAs, countdown timers, urgency badges, discount stickers, anything that screams "SALE".

If a proposed design could pass for any of these four, it is wrong, regardless of how polished it looks.

## Design Principles

1. **One site, one voice.** Domaine identity above, e-commerce mechanics below, but shared tokens — one type system, one palette, one spacing rhythm. The current three-dialect drift (editorial homepage / Domaine wholesale / Dutch-retail product cards) must collapse to one. Every new surface gets checked against the others before it ships.
2. **Producer pride, not retail performance.** The family story, the veen-rich soil, the named founder, the 10.000 planten — these are the spine. The site does not sell *plants*; it lets people buy plants from *this grower*. Anything that could be lifted onto a competitor's site unchanged is a failure of identity.
3. **Quiet confidence.** Restraint is the brand. Fewer words, longer silences, no urgency theatre, no superlatives. Trust comes from specificity ("Otterlo sinds 2001", "aangroeigarantie", "vers gerooid"), not from adjectives ("amazing", "premium", "the best").
4. **Show the real thing.** Real photographs of real plants, real owner, real Veluwe ground. Stock photography, AI imagery, or generic botanical illustrations are fatal — they collapse the brand into anti-reference #1 or #3 instantly.
5. **Two doors, one house.** Homeowner cart flow and wholesale conversation flow are equal first-class paths, but they live inside the same architecture. A B2B visitor on the homepage should still feel addressed; a B2C visitor on `/groothandel` should still feel welcome. Never make a visitor feel they are on the wrong site.

## Accessibility & Inclusion

WCAG AA as the baseline:

- Colour contrast ≥4.5:1 for body text, ≥3:1 for large text and meaningful UI.
- Keyboard navigation for all interactive elements; visible focus states.
- Meaningful `alt` text on plant and owner photography; decorative images marked as such.
- Form labels, error messages in Dutch, and proper `aria` where needed (cart drawer, modals, mobile menu).
- No motion that violates `prefers-reduced-motion`.

No binding older-audience floor beyond AA, but given the 45–70 skew, default to the upper end of acceptable body sizes and avoid light-grey-on-white microcopy where it would otherwise pass contrast technically.
