---
name: Top Rhododendrons
description: Family-run rhododendron nursery in Otterlo. Producer-led editorial landing site.
colors:
  mist-cream: "oklch(0.98 0.005 150)"
  mist-soft: "oklch(0.95 0.01 150)"
  mist-muted: "oklch(0.93 0.01 150)"
  mist-border: "oklch(0.88 0.02 150)"
  mist-input: "oklch(0.92 0.01 150)"
  moss-fog: "oklch(0.45 0.03 150)"
  moss-deep: "oklch(0.35 0.08 150)"
  moss-night: "oklch(0.2 0.04 150)"
  bloom-magenta: "oklch(0.65 0.2 340)"
  bloom-ring: "oklch(0.5 0.15 340)"
typography:
  display:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(2.25rem, 6vw, 3.75rem)"
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: "-0.02em"
    fontVariation: "lining-nums tabular-nums"
  headline:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "clamp(1.875rem, 4vw, 2.25rem)"
    fontWeight: 500
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  title:
    fontFamily: "'Cormorant Garamond', Georgia, serif"
    fontSize: "1.25rem"
    fontWeight: 500
    lineHeight: 1.3
    letterSpacing: "normal"
  body:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "'DM Sans', system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.05em"
rounded:
  sm: "4px"
  md: "6px"
  lg: "8px"
  xl: "12px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "32px"
  xl: "48px"
  2xl: "64px"
  3xl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.moss-deep}"
    textColor: "{colors.mist-cream}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-primary-hover:
    backgroundColor: "{colors.moss-night}"
  button-outline:
    backgroundColor: "{colors.mist-cream}"
    textColor: "{colors.moss-night}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  button-outline-hover:
    backgroundColor: "{colors.mist-muted}"
  button-accent:
    backgroundColor: "{colors.bloom-magenta}"
    textColor: "{colors.mist-cream}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  input:
    backgroundColor: "{colors.mist-cream}"
    textColor: "{colors.moss-night}"
    rounded: "{rounded.md}"
    padding: "10px 14px"
    height: "44px"
  kicker:
    textColor: "{colors.bloom-magenta}"
    padding: "0"
  row-link:
    backgroundColor: "{colors.mist-cream}"
    textColor: "{colors.moss-night}"
    padding: "48px 0"
  row-link-hover:
    backgroundColor: "{colors.mist-soft}"
---

# Design System: Top Rhododendrons

## 1. Overview

**Creative North Star: "The Otterlo Domaine"**

The system applies the producer-led winery register (Burgundy domaine, not Champagne house) to a Dutch rhododendron nursery on the Veluwe. Identity comes from typography and restraint, not from chrome. Cormorant Garamond carries every display moment; DM Sans carries every word that exists to be read. Color is held at one accent, a magenta-pink lifted from the rhododendron bloom itself, used so sparingly that its rarity is the point.

The page registers as editorial first, e-commerce second. Spec sheets, ruled tables, alternating image rows, numbered grower's wisdom: these are the affordances. Cards exist sparingly. Decorative shadows do not exist at all. Where other nursery sites compress every plant into a hover-glow tile and shout "Aanbieding!", this site presents six varieties as a curated preview on the homepage and the full catalog as alternating editorial rows on `/assortiment`, with full price strips visible per variety.

The system explicitly rejects every register listed in PRODUCT.md: the SaaS landing page (hero cards, decorative orbs, gradient CTAs), the Dutch tuincentrum (garish color, exclamation marks, banner sales), the old-school nursery (fussy ornaments, clipart, marquee text), and aggressive e-commerce (countdown timers, "ONLY 3 LEFT", popup spam, push notifications). It also actively distinguishes itself from the saturated "editorial-typographic" AI lane: where that lane reaches for italic display serif + small mono labels + ruled separators as monochromatic restraint, the Otterlo Domaine register is anchored by real plant photography, producer voice in plain Dutch, and concrete specificity in every label.

**Key Characteristics:**
- Restrained color: one accent, ≤10% of any screen
- Producer-voiced copy: specific, calm, "wij" not "you deserve". No buzzwords. No aphoristic-cadence punchlines.
- Ruled lists over card grids: `<dl>`, `<ol>`, `<ul>`, `<table>` are signature affordances
- Cormorant Garamond at every display weight; never below 20px
- 3-tier section rhythm (compact / standard / generous) with deliberate variance
- Flat surfaces by default: no shadows on cards, depth via tonal layering and 1px borders
- Editorial alignment: left-aligned section headers as default (centered allowed only for symmetric data viz blocks where a centered legend + centered disclaimer earn the column)
- Real photography always: hero video, owner portrait, plant variety photographs. Stock + AI imagery are forbidden per PRODUCT.md Principle 4.

## 2. Colors

A palette of tinted moss neutrals (mist-cream through moss-night, all chroma 0.005–0.08 at hue 150) paired with one rhododendron-bloom magenta accent at hue 340. No pure neutrals; every "gray" carries a trace of the brand hue.

### Primary
- **Moss Deep** `oklch(0.35 0.08 150)`: the primary action color. Button backgrounds, the Header on internal pages, the "Top Rhododendrons" logo, the numerals in the `/plantgids` tips list, the Footer band. Carries the producer's authority without shouting.

### Secondary (accent)
- **Bloom Magenta** `oklch(0.65 0.2 340)`: the only saturated color in the system. Kicker labels above every section header, primary-action affordances (the "Offerte aanvragen" CTA, the focus ring on every interactive element), the colored dot next to each variety name, the active-month indicator + bloom cells in the BloomTimeline. Lifted from the actual color of a Nova Zembla bloom. Used sparingly so it reads as a voice, not a UI hint.

### Neutral
- **Mist Cream** `oklch(0.98 0.005 150)`: page background and primary surface. Tinted very slightly toward moss so it never reads as white.
- **Mist Soft** `oklch(0.95 0.01 150)`: secondary surface, used for section bands (`bg-secondary/50` on the hero band of internal pages, `bg-secondary/30` on the bloom-section band) and for row-hover tints (`bg-secondary/40` on catalog rows, table rows, bloom-timeline rows).
- **Mist Muted** `oklch(0.93 0.01 150)`: muted surface, reserved for low-emphasis zones where a flatter neutral is needed.
- **Mist Border** `oklch(0.88 0.02 150)`: 1px border between editorial rows (catalog, comparison table, tips list, bloom-timeline rows), and the only "elevation" indicator the system uses.
- **Mist Input** `oklch(0.92 0.01 150)`: form input backgrounds (when not `bg-transparent`).
- **Moss Fog** `oklch(0.45 0.03 150)`: muted-foreground text. Body copy that isn't the primary message: subtitles, captions, secondary metadata, the `Vanaf €X` label preceding a price, the bloom-section legend labels, the bloom-section disclaimer.
- **Moss Night** `oklch(0.2 0.04 150)`: primary foreground text. All headings, body emphasis, table cell values. Tinted so dark it reads as black at a glance, but never `#000`.

### Named Rules

**The One Accent Rule.** Bloom Magenta appears on ≤10% of any rendered screen. Kicker labels, focus rings, the colored dot in product/variety identification, the active-month bloom-timeline indicator, and the Offerte CTA are its only sanctioned uses. Cumulative pill stacks, repeated badge fields, and decorative "splash of color" applications are forbidden.

**The Running Head Rule.** Kickers (small uppercase Bloom Magenta labels above section headers) are a deliberate brand system, not section grammar. Each kicker must name a specific thing: a place ("Otterlo • Sinds 2001"), a person ("Bloei- & Plantkalender"), a date, an action ("Vergelijken"), or a brand attribute ("De geheimen van de kweker"). Abstract category labels ("ABOUT", "PROCESS", "PRICING", "FEATURES") are forbidden — those are the AI eyebrow tell. A kicker that could appear unchanged on any competitor's site has failed the test.

**The Warm-Brown-Shadow Eviction Rule.** No `rgba(120, 100, 80, *)` shadows. Anywhere. The pattern was systematically removed from every page (homepage, /groothandel, /assortiment, /plantgids) and every component (catalog-grid, bloom-timeline, bloom-section legend); it is not to return as "depth" or "elevation". If a card needs distinction, use a 1px border in Mist Border. If it needs elevation, reconsider whether it needs to be a card.

**The Forest-Or-Night Rule.** Dark surfaces use Moss Night, never `#000`. Light surfaces use Mist Cream, never `#fff`. The brand hue is in every neutral, always. This is non-negotiable per the OKLCH chroma 0.005–0.08 doctrine in the frontmatter.

**The No-Framework-Color Rule.** Tailwind's default named colors (`amber-*`, `green-*`, `orange-*`, `red-*`, `blue-*`, `purple-*`) are prohibited in component code. If a semantic state needs color, it draws from the project palette: Moss Deep for "go", Moss Fog for "neutral", Bloom Magenta for "voice/action". The `SpeedBadge` component on `/plantgids` was rewritten because it imported these defaults; the lesson stands.

## 3. Typography

**Display Font:** Cormorant Garamond (fallback: Georgia, serif). Loaded via `next/font` at weights 400/500/600/700 plus italic.
**Body Font:** DM Sans (fallback: system-ui, sans-serif). Loaded via `next/font`.
**Label/Mono Font:** None. DM Sans handles labels.

**Character:** Cormorant carries the producer's voice: antique without being precious, narrow enough to fit long Dutch compound words like *"Sortimentsvergelijking"* on a single line. DM Sans is the geometric body counterweight; it disappears in the read and never competes with Cormorant for attention. Pairing rule: Cormorant for anything bigger than 20px and decorative; DM Sans for everything else.

### Hierarchy
- **Display** (`font-serif`, weight 600, `text-4xl sm:text-5xl lg:text-6xl`, line-height 1.05, tracking-tight): page H1. Used once per page. The hero of every internal landing page on the site (/assortiment, /plantgids, /groothandel). The homepage hero H1 ramps larger per The Producer's Signature Rule below.
- **Headline** (`font-serif`, weight 500, `text-3xl sm:text-4xl`, line-height 1.15, tracking-tight): section H2 on internal pages. Subordinate to H1, harmonized across `/assortiment`, `/plantgids`, `/groothandel`, AboutSection. The bloom-section H2 (`text-4xl sm:text-5xl lg:text-6xl`) is a deliberate exception: that section's centered title + centered legend + centered disclaimer form a coherent column around the data viz block.
- **Title** (`font-serif`, weight 500 or 600, `text-xl` to `text-3xl`, line-height 1.3): variety names in catalog rows, tip titles, h3-level. Always ≥20px (Cormorant Twenty-Pixel Floor).
- **Body** (`font-sans`, weight 400, `text-base`, leading-relaxed): paragraph copy. Max line length capped at `max-w-prose` (~65ch) for editorial reading; tightened to `max-w-2xl` for hero subtitles.
- **Label / Kicker** (`font-sans`, weight 500, `text-xs uppercase tracking-wider text-accent`): the signature kicker pattern. See **The Running Head Rule** above.

### Named Rules

**The Cormorant Twenty-Pixel Floor Rule.** Cormorant Garamond is never rendered below 20px. Smaller than that, its terminals get fuzzy and its width inconsistencies dominate. If a piece of copy needs to be smaller than 20px, it uses DM Sans.

**The Lining-Figures Rule.** Every Cormorant numeric (prices, sizes, zone numbers, tip numbers, table cells with numbers) gets `font-variant-numeric: lining-nums tabular-nums` (inline style, via the `liningFigures` helper constant used across `components/catalog-grid.tsx` and `components/plantgids-comparison-table.tsx`). Without it, Cormorant defaults to old-style figures which look broken in a price strip or aligned column.

**The Single-Family-Per-Role Rule.** Cormorant for display roles only. DM Sans for body, labels, inputs, button text, table cell values. A body paragraph never switches to Cormorant for emphasis (it switches weight instead).

**The Producer's Signature Rule.** The homepage hero H1 (`components/hero-section.tsx`) ramps `text-6xl sm:text-7xl md:text-8xl lg:text-9xl` (60px to 128px at the largest breakpoint), exceeding the v3 brand-register 96px display-heading ceiling. The hero is the producer's signature moment on the entry surface; monumental scale earns the violation. The exception is scoped strictly to the homepage hero. All other H1s across the site (/assortiment, /plantgids, /groothandel internal pages) cap at the standard `text-4xl sm:text-5xl lg:text-6xl` (60 to 96px) range per the Display entry above.

**The Identity-Preservation Clause.** Both Cormorant Garamond and DM Sans appear on the v3 brand-register reflex-reject list (saturated training-data fonts). They are grandfathered into this project per the v3 escape clause: identity-preservation wins when the existing brand has committed to fonts as part of its identity. New surfaces or variants on existing surfaces use the same two families. Departure-mode font experiments belong in `live` panel variants, not in production code.

**The Sequenced-Only-Number Rule.** Large numerals as section markers (`1.`, `2.`, `3.`, …) are reserved for content that IS a real sequence. The `/plantgids` 7-tips list qualifies: it's an ordered set of producer's wisdom where reading order matters. Numbered eyebrows that scaffold otherwise-unordered sections ("01 About / 02 Process / 03 Pricing") are forbidden. The system has exactly one numbered sequence; it earns its numbers.

## 4. Elevation

The system is flat by default. There are no shadow tokens. Surfaces sit on the page; elevation reads through tonal layering of the moss neutrals.

Depth comes from three mechanisms:
1. **Tonal stacking:** `bg-background` (Mist Cream) sits on the page, `bg-secondary/30` and `bg-secondary/50` (Mist Soft, alpha-modulated) carry hero bands and section dividers, `bg-secondary/40` is the canonical row-hover tint across catalog rows, comparison-table rows, and bloom-timeline rows.
2. **1px ruled borders:** `border-border` (Mist Border) divides editorial rows (catalog rows, comparison table rows, tips list dividers via `divide-y divide-border/50`, bloom-timeline rows). The horizontal line is the only "elevation" most surfaces get.
3. **Typography weight:** section H2s land heavier than body. `font-medium tracking-tight` against `font-normal text-muted-foreground` provides the hierarchical separation that a card-shadow system would handle with depth.

### Named Rules

**The Flat-Then-Float Rule.** Surfaces are flat at rest. Elevation is reserved for state response: a row tints to `bg-secondary/40` on hover; a focused element gets a `ring-2 ring-accent` focus ring; nothing translates, scales, or casts a shadow by default. If the design needs a card to "lift," reconsider whether it needs to be a card.

**The Single-Hover-Signal Rule.** One CSS property animates per hover, ever. `bg-secondary/40` tint on row hover, OR `text-accent` shift on link hover, OR `bg-primary/90` on button hover, OR the `translate-x` slide-in on the homepage ProductsSection card pill. Never a cascade (no `scale-105 + translate-x-1 + shadow-xl + text-accent` at once). The 4-property hover cascade was systematically stripped from the homepage product cards and the /assortiment catalog grid. The rule has no exceptions.

**The No-Glow Rule.** No drop-shadows used as glow. No `box-shadow` with chroma. No backdrop-filter blur as decoration. If a focus state needs visibility, it's the ring system or it's nothing. The bloom-timeline cells were rebuilt to flat-color pills explicitly to enforce this rule; the legend in bloom-section was rebuilt to match.

**The Reduced-Motion Rule.** Every animation, including hover transitions and the homepage hero video, must respect `prefers-reduced-motion: reduce`. The hero video should pause; hover-tint transitions should collapse to instant; any reveal animation should crossfade. The system currently has minimal motion (transition-colors on hovers, the video, the hover-scale on homepage product cards) so the surface area is small, but `prefers-reduced-motion` is non-negotiable for anything added later.

## 5. Components

### Buttons
- **Shape:** subtly rounded (6px / `rounded-md`). Never pill-shaped (avoids the SaaS-CTA look). Never square (too brutalist for the Domaine register).
- **Primary** (`bg-primary text-primary-foreground hover:bg-primary/90`): Moss Deep background, Mist Cream text, ~12px×24px padding. Used for the main page-level action ("Neem contact op" in AboutSection, "Verstuur bericht" in ContactForm, "Bekijk plantgids" in BloomSection CTA).
- **Outline** (shadcn `variant="outline"` + `hover:bg-foreground/5 hover:text-foreground`): for secondary navigational CTAs like "Groothandel" on AboutSection and "Bekijk alle rhododendrons" below the homepage ProductsSection grid. ArrowRight icon at `h-4 w-4` follows the text (the canonical CTA-with-arrow convention used across the site, including the /groothandel hero outline CTAs).
- **Accent** (`bg-accent text-accent-foreground hover:bg-accent/90`): reserved for the "Offerte aanvragen" button in Header + sticky overlay. The only place Bloom Magenta dominates a UI surface.
- **Dark-hero outline** (`border border-primary-foreground/30 hover:bg-primary-foreground/10`): the dark-background outline variant used on `/groothandel`'s hero band (the PDF download + phone-number buttons). Mirror of the light-register outline but tuned for the `bg-[#0a1a12]` hero context.
- **Hover transitions:** `transition-colors duration-200 ease-out`. No translate, no scale, no shadow.
- **Focus-visible:** `ring-2 ring-accent ring-offset-2 ring-offset-background` on every interactive element. The ring is non-negotiable; offset-background ensures it remains visible on tinted surfaces.

### Header CTA (page-aware)
- **Default behavior:** the Header's "Offerte aanvragen" button (and its mobile-menu twin) opens the OfferteModal, which routes the user to either the inline contact form (particulier) or to `/groothandel` (hovenier).
- **On `/groothandel`:** the same Header CTA scrolls to `#offerte-form` instead of opening the modal. Logic lives in `components/header.tsx` via `usePathname()`; the in-page CTA at the top of `/groothandel` uses the same anchor. The user lands on `/groothandel` via the hovenier modal flow and can then call the same Header CTA again, which scrolls to the form they came for.

### Inputs / Fields (shadcn `<Input>` + `<Label>` + `<Textarea>`)
- **Style:** 1px border in Mist Border, `bg-transparent` (inputs sit on the form panel's `bg-background`), 6px radius. 44px touch target on mobile (the shadcn default `h-9` was the only known sub-44px gap; raise if forms scale).
- **Label:** `<Label htmlFor>` pair, required indicator via trailing `*` in label text plus `aria-required`.
- **Focus:** `ring-2 ring-accent ring-offset-2 ring-offset-background` via the same focus-visible system as buttons.
- **Error:** `text-destructive` for inline validation messages, wired to `aria-describedby` plus `aria-invalid="true"` on the input.

### Cards / Containers
- **Default doctrine: do not use cards.** Editorial rows, ruled lists, and tables are the system's affordances. A "card" is justified only when content genuinely is distinct, contained, and not part of a comparison set.
- **When used** (rarely, e.g., the quote card overlapping the owner photo in AboutSection): no shadow, no border by default, may use `bg-[oklch(0.15_0.025_155_/_0.92)]` for the dark forest-night overlay variant. Internal padding `p-4 lg:p-6`, radius `rounded-xl` only when the card overlaps photography (otherwise `rounded-sm` or no radius). The card is positioned with `-bottom-6 right-4` so it hangs slightly below the image, creating breathing room between the owner's chin and the plate.

### Ruled Lists (signature affordance)
The defining pattern of the system. Replaces card grids for benefit lists, feature lists, step lists, and pricing strips.
- **`<dl>` ruled list** (AboutSection benefit rows, ContactForm price strip): `<dt>` is `font-serif text-xl text-foreground`, `<dd>` is `text-muted-foreground leading-relaxed`. `border-t` on container, `border-b` per `<div>` wrapping each `<dt>/<dd>` pair, no card, no shadow.
- **`<ol>` numbered list** (homepage process, /plantgids tips, /groothandel step list): each item is `grid grid-cols-[64px_1fr] gap-8 py-8` with the number left and content right. Numbers in `font-serif text-4xl font-light leading-none` with `font-variant-numeric: lining-nums tabular-nums` inline style. /plantgids tips render at `text-primary` (Moss Deep), full strength. Numbers earn their place per The Sequenced-Only-Number Rule.
- **`<table>`** (`/plantgids` comparison, BloomTimeline): `<thead>` row with `bg-secondary/40`, sortable `<th>` via `<button>` with `aria-sort` (comparison table only; bloom-timeline is read-only), sticky first column on mobile, `border-b border-border` between `<tr>`s. No vertical column borders.

### Navigation (Header)
- **Style:** sticky `absolute top-0 z-[110]`, transparent on hero pages (`/` and `/groothandel`), `bg-primary` (Moss Deep) on all other pages. Logo as `font-serif text-2xl font-semibold text-primary-foreground` ("Top Rhododendrons" in Cormorant).
- **Nav links:** `text-sm font-medium text-primary-foreground/90 hover:text-primary-foreground`. No underline, no border, no hover lift. Color shift only.
- **Assortiment link:** routes to `/assortiment` (full catalog page), never to a homepage anchor.
- **Mobile:** hamburger reveal of the same links stacked vertically in a `bg-primary/95 backdrop-blur-sm` panel.
- **Cart + Offerte CTA:** Cart icon (lucide `ShoppingCart`) with a Bloom Magenta numeric badge for `totalItems > 0`. Offerte CTA in the Bloom Magenta variant (page-aware per the Header CTA section above).

### Signature Component: Stacked Editorial Row
The catalog pattern on `/assortiment` and the Toebehoren subsection. One row per product:
- 7/12 column landscape image (4:3 aspect), 5/12 info column, alternating image left/right per row.
- Info column: variety name in `font-serif text-3xl lg:text-4xl font-medium`, facts row with color dot plus dimensions, 1-line description, 4-cell price strip with lining figures.
- 1px `border-t` ruled separator between rows. No shadow, no card wrapper, no hover cascade. Single hover signal: `bg-secondary/40` row tint.
- Variety name is a real `<a>` link for keyboard/middle-click; full-row `<tr>` click via JS `onClick` for the mouse-bonus.

### Signature Component: Sortable Comparison Table
The `/plantgids` comparison pattern. 8-column producer-spec-sheet table:
- Sticky variety column on mobile (`position: sticky; left: 0; bg-background`); horizontal scroll for the data columns.
- Sortable columns via `<button>` inside `<th>` with `aria-sort` and chevron indicator (`ChevronUp` / `ChevronDown` active, `ChevronsUpDown` inactive).
- Color dot in the Kleur column uses the variety's `colorHex` inline (the only sanctioned inline-style color in the codebase, defensive 1px `var(--border)` for near-white variants via luminance check).
- Default sort: variety name ascending. Click same column to reverse.

### Signature Component: Bloom Timeline
The bloom calendar pattern on the homepage (`components/bloom-section.tsx` + `components/bloom-timeline.tsx`):
- 9-month × 7-variety grid, `grid-cols-[200px_repeat(9,1fr)]`, mobile horizontal-scroll via `overflow-x-auto`.
- Header row uses `items-center` so VARIËTEIT + month labels align on the same horizontal line. Vertical clearance via `pt-2 pb-12` accommodates the absolute-positioned "Vandaag" pill below the current-month label.
- Bloom cells: flat `bg-accent h-3.5 rounded-full`. Active-month bloom gets a `ring-2 ring-accent ring-offset-2 ring-offset-background`. Plant-period cells: flat `bg-primary/20`. Empty cells: tiny `bg-muted-foreground/30` dot.
- No shadows, no gradients, no pulse animations. The 2 exported constants (`bloomTimelineGradient`, `bloomTimelinePlantPattern`) are flat OKLCH values so the legend in bloom-section renders consistently with the table cells.

### Preview Component: Homepage ProductsSection card
The 6-card grid on the homepage (a curated preview, not the full catalog).
- 4:3 aspect ratio, rounded-2xl card. Static image (no hover-scale; the Single-Hover-Signal Rule has no exceptions).
- Variety name appears as a sliding pill (`-translate-x-full group-hover:translate-x-4 transition-transform duration-200 ease-out motion-reduce:transition-none`) that animates in from the left edge on hover. The pill has `bg-primary` and a chevron disc. This is the card's sole hover signal.
- Display order is explicit (controlled by `displayOrder` array in `components/products-section.tsx`), not derived from `lib/products.ts` order. Six varieties shown; `ponticum` (plain) is excluded from the preview as a deliberate curation choice. Full catalog (all 7 + tuinturf) lives on `/assortiment`.

## 6. Do's and Don'ts

### Do:
- **Do** use Cormorant Garamond for every display/headline/title heading, and never below 20px.
- **Do** apply `font-variant-numeric: lining-nums tabular-nums` to every Cormorant numeric (prices, sizes, tip numbers, table cells with numbers).
- **Do** hold Bloom Magenta to ≤10% of any rendered screen (kickers, focus rings, the Offerte CTA, the variety-identifier dot, the bloom-timeline active-month indicator).
- **Do** use ruled lists (`<dl>`, `<ol>`, `<ul>`, `<table>`) instead of card grids for any "set of similar items" content.
- **Do** apply the 3-tier section rhythm (compact `py-12 lg:py-20` / standard `py-16 lg:py-24` / generous `py-20 lg:py-28`) and vary across sections.
- **Do** left-align section headers by default. Center only when the section is a symmetric data-viz block (bloom-section's centered title + legend + disclaimer + CTA around the timeline) and the centering reads as deliberate column composition.
- **Do** render `Header` + `Footer` + `OfferteModal` on every page including legal pages. Cross-page chrome consistency is non-negotiable.
- **Do** use `bg-secondary/40` as the single hover signal on rows; `transition-colors duration-200 ease-out`.
- **Do** use the focus-visible ring system (`ring-2 ring-accent ring-offset-2 ring-offset-background`) on every interactive element.
- **Do** use Dutch smart quotes (`„…"`) around quoted phrases. Straight ASCII `"…"` is prohibited.
- **Do** use period (`.`) as the article-number separator in legal text and as the tip-number suffix on `/plantgids` (`Artikel 1. Definities`, `1.`, `2.`).
- **Do** use the `|` separator in page metadata titles (`Plantgids | Top Rhododendrons`).
- **Do** include the lucide `ArrowRight` icon after CTA text on outline + ghost buttons ("Bekijk alle rhododendrons", "Bekijk plantgids", "Groothandel", "Vraag offerte aan"). The arrow is the site's canonical CTA punctuation.
- **Do** test heading copy at every breakpoint. Long Dutch compounds plus large clamp scales plus narrow grids will overflow; the viewport is part of the design.
- **Do** ship real photography. Hero video, owner portrait, plant variety photographs. Anything else is a PRODUCT.md Principle 4 violation.
- **Do** respect `prefers-reduced-motion` on every animation, including the hero video.

### Don't:
- **Don't** render a SaaS landing page. PRODUCT.md names this as an anti-reference: no hero card grids with icon plus heading plus 2-line text, no decorative gradient orbs, no rotating testimonial slider, no "trusted by 10,000+ growers" logo strip, no hero-metric template (big-number / small-label / supporting-stat).
- **Don't** render a Dutch tuincentrum. PRODUCT.md anti-reference: no garish primary-color CTAs (`Now 30% OFF!`), no exclamation-mark headlines, no clipart, no banner promotions.
- **Don't** render an old-school nursery. PRODUCT.md anti-reference: no fussy serif ornaments, no `<center>`-tag editorial, no marquee "Welcome!" text, no clipart leaves bordering the page.
- **Don't** render aggressive e-commerce. PRODUCT.md anti-reference: no countdown timers, no "ONLY 3 LEFT", no popup spam, no push-notification prompt on page load, no exit-intent modals.
- **Don't** drift into the saturated editorial-typographic AI lane (italic display serif + small mono labels + ruled separators as monochromatic restraint). The Otterlo Domaine register sits adjacent to this lane but is anchored by real plant photography, Dutch producer voice, and concrete specificity. Italic Cormorant drop caps in body copy, mono labels as section eyebrows, three rule-separated typographic columns: forbidden.
- **Don't** use `#000` or `#fff`. Anywhere. Every neutral carries chroma 0.005–0.08 at hue 150 (the Forest-Or-Night Rule).
- **Don't** use warm-brown shadows (`rgba(120, 100, 80, *)`). Anywhere. The Warm-Brown-Shadow Eviction Rule.
- **Don't** use identical card grids (the absolute ban from the parent skill). 7+ same-sized cards in a grid are always wrong here; use ruled rows or a table.
- **Don't** use Tailwind's default named colors (`amber-*`, `green-*`, `orange-*`, `red-*`, `blue-*`, `purple-*`) for semantic state. Draw from the project palette only.
- **Don't** use abstract category-label kickers ("ABOUT", "PROCESS", "PRICING", "FEATURES"). Per The Running Head Rule, every kicker names a specific place/person/date/action/attribute. A kicker that could appear unchanged on a competitor's site has failed.
- **Don't** add numbered scaffolding to non-sequence sections. Per The Sequenced-Only-Number Rule, large numerals are reserved for the one real sequence (the /plantgids tips). Numbered eyebrows ("01 · About / 02 · Process") on otherwise-unordered sections are AI grammar.
- **Don't** use side-stripe borders (`border-left` / `border-right` > 1px as colored accent). Universal ban.
- **Don't** use gradient text (`background-clip: text` plus gradient). Universal ban.
- **Don't** use glassmorphism as default. `backdrop-blur` and translucent cards are rare and purposeful, never decorative.
- **Don't** use em-dashes (`—` or `--`) in copy. Use comma, colon, semicolon, period, or parentheses. The em-dash sweep was applied across every page; do not reintroduce.
- **Don't** hover-cascade. One CSS property animates per hover, ever. No exceptions.
- **Don't** render Cormorant below 20px. Use DM Sans instead.
- **Don't** use Cormorant numerics without `font-variant-numeric: lining-nums tabular-nums`. Old-style figures break price strips and table columns.
- **Don't** bypass cross-page chrome. Every page renders `Header` + `Footer` + `OfferteModal`, including `/privacy` and `/voorwaarden`.
- **Don't** create page-bottom CTA cards (the floating rounded-3xl `bg-cream` box with centered headline plus button). The pattern was removed from `/plantgids`; it does not return. Inline CTAs in their natural section if a conversion ask is needed.
- **Don't** use ASCII straight quotes (`"…"` or `\"…\"`). Use Dutch smart quotes (`„…"`) per the project typography convention.
- **Don't** use marketing buzzwords (`streamline`, `empower`, `supercharge`, `leverage`, `unleash`, `transform`, `seamless`, `world-class`, `enterprise-grade`, `next-generation`, `cutting-edge`, `game-changer`, `mission-critical`). Pick a specific noun and a verb that describes what the product literally does. PRODUCT.md cites "amazing", "premium", "the best" as the same family of failure modes for this brand.
- **Don't** fall into aphoristic-cadence body copy as a default voice (the rhythm of "serious statement, then punchy short negation"). PRODUCT.md's quoted register — *"Wij kweken rhododendrons. Niet meer, niet minder."* — IS the rhythm, but it earns its place because each instance is specific to its section. Three or more sections all landing on a short rebuttal sentence is the AI tell; rewrite.
- **Don't** ship `transition-opacity hover:opacity-90` for CTA hovers. The Single-Hover-Signal Rule prefers color shifts; use `transition-colors duration-200 ease-out hover:bg-primary/90`.
- **Don't** use plain text arrows (`→`, `->`) where a lucide `ArrowRight` icon belongs. CTA punctuation is part of the design system.
- **Don't** depend on relative-time copy (`25 jaar specialist`, `meer dan 25 jaar`) for founding-year claims. Use the 2001-anchored form (`Sinds 2001`, `Kwekerij in Otterlo sinds 2001`) so claims don't go stale.
