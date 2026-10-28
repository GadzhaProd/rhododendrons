# Аудит сайта Top Rhododendrons (2026-10-28)

Ветка `claude/top-rhododendrons-21st-audit-bq5aqn`, аудит без правок. Сайт собран (`next build` + `next start -p 3123`) и отснят Playwright/Chromium на 1440 и 390 px; скриншоты лежат в `/tmp/claude-0/-home-user-rhododendrons/ea06b3df-d2fe-5c2d-bb9e-efb9e206c315/scratchpad/shots/` (ниже обозначаются как `shots/<имя>.png`), нарезка по экранам в `.../scratchpad/tiles/`. Контраст измерен по вычисленным цветам в браузере (`scratchpad/contrast.js`), вес страниц по реально переданным байтам (`scratchpad/verify.js`).

## 1. Вердикт

Сайт структурно почти готов: `/assortiment`, `/plantgids` и нижние 8 секций `/groothandel` уже выдержаны в «Otterlo Domaine» и их трогать не надо. Но запускать его в таком виде нельзя, и три главные проблемы не решаются заменой компонентов из каталога:

1. **Весь визуальный ряд, кроме `B2BHERO.jpg`, — сгенерированный.** Видео хиро имеет водяной знак «Veo» в каждом кадре и C2PA-подпись Google; все 16 остальных JPEG в `public/images` несут C2PA-манифест `digitalSourceType: trainedAlgorithmicMedia` (OpenAI `gpt-image 2.0` для `nova-zembla`, `roseum-elegans`, `ponticum`, `tuinturf`; Google C2PA для `owner.jpg` и всех 3584×4800). Это прямое нарушение PRODUCT.md, принцип 4 («Stock photography, AI imagery … are fatal»). Фото «реального владельца» в репозитории реальным не является: пока владелец не положит настоящие снимки, любая замена блоков косметика.
2. **Главная измеримая цель (корзина) заканчивается тупиком.** Кнопка «Afrekenen» в `cart-drawer.tsx:131-140` задизейблена («Online betalen komt binnenkort beschikbaar»); у покупателя 45–70 лет нет пути «корзина → заказ». Плюс главная весит 97 МБ (91 МБ картинок + 4,5 МБ видео), `/assortiment` 79 МБ: на мобильном интернете это не откроется.
3. **Три «диалекта» из PRODUCT.md на месте.** Хиро `/groothandel` — это ровно запрещённый SaaS-шаблон (hero-metric 25+/10.000+/100%, два декоративных градиентных «orb», шум, 7 слоёв оверлеев); карточка товара и `OfferteModal` — Dutch-retail/SaaS (warm-brown тени, `#faf6f0`, border-2 плитки, иконки в кружках); при этом розовый акцент как цвет текста (кикеры, цены) и белый на розовом (все CTA) не проходят WCAG AA: 3,2–3,6:1 вместо 4,5:1.

Готовность: содержание и копи — 80 %, дизайн-система — 60 %, медиа и конверсионный путь — 20 %.

## 2. Таблица блоков

| Блок | Файл | Вердикт | Причина (одной строкой) |
|---|---|---|---|
| Header + mobile menu | `components/header.tsx` | polish | Структура верна; меню без `aria-expanded`/Escape, корзина 20×20 px, нет sticky на длинных страницах |
| Hero (главная) | `components/hero-section.tsx` | **replace** | Veo-видео с моделью, нет CTA, постер 404, под reduced-motion серый градиент |
| TrustBar | `components/trust-bar.tsx` | **replace** | Типовая USP-полоса 4×(иконка+11px label), чисто-белый фон `bg-card` |
| ProductsSection (6 карточек) | `components/products-section.tsx` | **replace** | Шесть одинаковых плиток без названий и цен; на тач-устройствах имя сорта не видно вообще |
| AboutSection | `components/about-section.tsx` | keep | Образцовый блок системы: ruled `<dl>`, цитата, портрет (после замены фото) |
| BloomSection + BloomTimeline | `components/bloom-section.tsx`, `bloom-timeline.tsx` | keep | Фирменный паттерн; только добавить sr-only текст ячейкам |
| FaqSection | `components/faq-section.tsx` | keep | shadcn Accordion, JSON-LD, хороший копи; центрирование можно убрать |
| ContactForm | `components/contact-form.tsx` | polish | Сегмент-контрол без ролей, нет `aria-invalid`, hovenier-карточка в SaaS-манере |
| Footer | `components/footer.tsx` | polish | Контраст /40 и /50 ниже AA, «Snelle Links» как заголовок |
| CartDrawer | `components/cart-drawer.tsx` | polish | Radix-диалог корректен; тупик «Afrekenen», B2B-ссылка ведёт на `/#contact` |
| OfferteModal | `components/offerte-modal.tsx` | **replace** | Самописный модал без `role="dialog"`, фокус-ловушки и Escape; две «тарифные» карточки с иконками |
| PrijslijstModal/Button | `components/prijslijst-modal.tsx`, `prijslijst-button.tsx` | polish | `<label>` без `htmlFor`, `text-red-400`, `#0a1912`, «Download PDF» ≠ лид-форма |
| WhatsappSticky | `components/whatsapp-sticky.tsx` | **replace** (или удалить) | Другой номер WhatsApp, другие часы работы, кнопка закрытия 14×14, на `/groothandel` «Offerte» ничего не делает |
| CatalogGrid (`/assortiment`) | `components/catalog-grid.tsx` | keep | Signature-компонент системы; одна правка: имя сорта как ссылка вместо ссылки-строки |
| Hero `/assortiment`, `/plantgids` | `app/assortiment/page.tsx`, `app/plantgids/page.tsx` | keep | Левый заголовок, кикер, `bg-secondary/50` — по спецификации |
| ProductGallery | `components/product-gallery.tsx` | polish | `shadow-xl` + hover-scale (оба запрещены), лайтбокс без фокус-ловушки |
| ProductActions (размер/кол-во/upsell) | `app/assortiment/[slug]/product-actions.tsx` | polish | Dutch-retail диалект: border-2 плитки, розовые цены 3,2:1, upsell-бокс, «Toegevoegd ✓» |
| Kenmerken + B2B-бокс на странице товара | `app/assortiment/[slug]/page.tsx:157-196`, `tuinturf-substraat/page.tsx:86-121` | **replace** | Warm-brown тени и `#faf6f0` (Eviction Rule), жёстко вшитые цвета, ссылка на `/#contact` вместо `/groothandel` |
| Hero `/groothandel` | `app/groothandel/page.tsx:192-348` | **replace** | Hero-metric шаблон, градиентные orb-ы, шум, `bg-[#0a1a12]`, «25+ jaar» |
| Секции 2–9 `/groothandel` | `app/groothandel/page.tsx:350-589` | keep | Таблицы, `<dl>`, `<ol>`, `<details>` — лучший «Domaine» на сайте |
| GroothandelForm | `app/groothandel/groothandel-form.tsx` | keep (мини-polish) | Валидация и ошибки на голландском; добавить `aria-invalid`, убрать `bg-white` |
| Comparison table + 7 tips (`/plantgids`) | `components/plantgids-comparison-table.tsx`, `app/plantgids/page.tsx` | keep | Signature-компоненты; Cormorant 16px в колонке сорта нарушает 20px-порог |
| TestimonialsSection, TuinturfBanner | `components/testimonials-section.tsx`, `tuinturf-banner.tsx` | удалить | Нигде не импортируются; отзывы выглядят вымышленными |

## 3. Блоки replace / polish

### 3.1 Hero главной — replace (high)
**Факты.** `shots/home-1440-fold.png`, `shots/home-390-fold.png`, кадры `scratchpad/frames/sheet.jpg`: в кадре блондинка в белом платье в формальном саду, в правом нижнем углу каждого кадра логотип «Veo»; контейнер `public/videos/hero.mp4` имеет C2PA-подпись «Google LLC», `encoder=Google`, 720×1280 (портрет, растягивается на десктопе). `hero-section.tsx:14,23` ссылаются на `/images/hero-rhododendrons.jpg`, которого нет (HTTP 404, файл никогда не коммитился): постер пустой, а при `prefers-reduced-motion` хиро превращается в серый градиент со значком битой картинки (`shots/home-reduced-motion-1440.png`). CTA в хиро нет вообще: оба «входа» (каталог / groothandel) появляются только после 2–3 экранов. H1 на `/85` непрозрачности, оверлей `hero-section.tsx:28` на произвольных oklch-значениях вне токенов.
**Нарушает.** PRODUCT.md принцип 4 и 5 («Two doors, one house»), DESIGN.md «Real photography always», Reduced-Motion Rule.
**21st search brief.** `editorial full-bleed hero with image and two buttons`, `split hero left aligned heading image right`, `minimal hero with background photo and overlay`. Требования: слот под реальное фото/видео владельца (пока заменить на `B2BHERO.jpg` через `components/site-image.tsx` или `asset()`), H1 по The Producer's Signature Rule (`text-6xl…lg:text-9xl` допустимо только здесь), левое или центрированное выравнивание без карточек, два CTA: primary `Bekijk assortiment` (Moss Deep) и outline `Voor hoveniers` c `ArrowRight`; никаких метрик, градиентного текста, orb-ов; `motion-reduce` для любого видео; статичное изображение-постер обязательно. Перенести: копи «Rhododendrons uit eigen kwekerij» / «Gekweekt in Otterlo sinds 2001.».

### 3.2 TrustBar — replace (medium)
**Факты.** `tiles/home-1440-00.png` (низ): четыре колонки «иконка + ERVARING/LEVERING/VOORRAAD/ADVIES + значение» на чисто-белом `bg-card` (`trust-bar.tsx:28`, `--card: oklch(1 0 0)` в `globals.css:9`), подписи 11 px (`trust-bar.tsx:39`). Читается как USP-полоса тuincentrum/SaaS, а абстрактные подписи нарушают Running Head Rule.
**Нарушает.** PRODUCT.md анти-референсы 1 и 2; DESIGN.md Forest-Or-Night (`#fff`), Running Head Rule.
**21st search brief.** `single line feature list with dividers text only`, `editorial stats strip without icons`, `definition list horizontal facts row`. Требования: без иконок или с одной тонкой `lucide` на всех, фон `bg-background`/`bg-secondary/50`, разделители `border-border`, текст ≥ 14 px DM Sans; четыре факта как есть: «Sinds 2001 · Eigen transport · 10.000+ planten · Persoonlijk advies». Альтернатива: удалить блок и перенести факты в подзаголовок хиро.

### 3.3 ProductsSection — replace (high)
**Факты.** `tiles/home-1440-01.png`, `tiles/home-390-01.png`: шесть одинаковых 4:3 плиток `rounded-2xl` без текста; название сорта выезжает только на hover (`products-section.tsx:65`, `-translate-x-full group-hover:translate-x-4`, `duration-500` вместо 200), на 390 px — шесть безымянных фото подряд, цен нет. Это «editorial»-диалект, который даёт покупателю 45–70 лет ноль информации для выбора. Заголовок «Populaire Rhododendrons» + подзаголовок «Direct van eigen kwekerij in Otterlo» дублируют кикер «Direct uit Otterlo».
**Нарушает.** DESIGN.md «Ruled lists over card grids», «Don't use identical card grids»; PRODUCT.md «within thirty seconds finds the plant».
**21st search brief.** `product list with image name and price minimal`, `editorial product grid with caption below image`, `alternating image rows catalog preview`. Требования: имя сорта (`font-serif ≥ text-xl`) и строка «Vanaf €22,00» всегда видимы под фото; данные из `lib/products.ts` (`name`, `color`, `colorHex`, `sizes[0].price`, `image`) через `displayOrder`; `Image` из `components/site-image.tsx`; одна hover-реакция (`bg-secondary/40` или `text-accent`); фокус-кольцо `ring-2 ring-accent`; без теней и `rounded-2xl` (макс. `rounded-lg`). Лучший вариант — компактная версия `CatalogGrid` (3 ряда), чтобы на сайте остался один «язык» карточек.

### 3.4 OfferteModal — replace (high)
**Факты.** `shots/offerte-modal-1440.png`, `-390.png`; `offerte-modal.tsx:34-39`: `div.fixed` без `role="dialog"`, `aria-modal`, фокус-ловушки, возврата фокуса; Escape не закрывает (проверено Playwright: «still open after Escape: true»); `shadow-2xl`, `backdrop-blur`, `animate-in zoom-in` без `motion-reduce`. Две карточки `border-2` с иконкой в кружке и чек-листом (`:58-102`) — SaaS «choose your plan»; `hover:shadow-md transition-all` — hover-каскад.
**Нарушает.** PRODUCT.md a11y («proper aria … modals»), анти-референс 2; DESIGN.md No-Glow, Single-Hover-Signal, Reduced-Motion.
**21st search brief.** `shadcn dialog with two option cards`, `radio card group choose option dialog`, `accessible modal choice between two paths`. Требования: на базе `components/ui/dialog.tsx` (Radix: роль, фокус, Escape уже есть, как в `PrijslijstModal`); два варианта как ruled rows или `RadioGroup` без иконок-кружков; текст: «Particulier» / «Hovenier · Groothandel» и их списки оставить; действия: particulier → `offerte-type-selected` + скролл к `#contact`, hovenier → `router.push("/groothandel")` (логика `:19-29`); кнопка-строка с `ArrowRight`; без теней.

### 3.5 WhatsappSticky — replace или удалить (high)
**Факты.** `tiles/product-nova-zembla-1440-00.png` (слева внизу), `shots/whatsapp-sticky-390.png`; `whatsapp-sticky.tsx:94` ведёт на `wa.me/31318592483`, тогда как header, footer и форма используют `31620297849`; `:88` «ma–za 09:00–17:00» противоречит футеру (ma–vr 08:00–17:00, za 09:00–13:00); на `/groothandel` кнопка «Offerte» диспатчит `open-offerte-modal`, а `OfferteModal` там не смонтирован — клик ничего не делает (проверено); кнопка закрытия 14×14 px, кнопки 28 px высотой; `#25D366`, `text-white`, `shadow-2xl`, `transition-opacity hover:opacity-90` (`:97,108`); на 390 px занимает 358×115 px и перекрывает контент. Всплывающая панель при скролле вверх — «popup spam» по смыслу анти-референса 4.
**Нарушает.** PRODUCT.md анти-референс 4, a11y (tap targets); DESIGN.md No-Glow, hover-правила, No-Framework-Color.
**21st search brief.** `sticky bottom bar with two buttons dismissible`, `floating contact bar minimal`. Требования: если оставлять, то один компонент на `--primary`, кнопки ≥ 44 px, закрытие ≥ 44 px, номер из `lib/site-config.ts` (`business.phones[1]`), часы из `openingHours`, `motion-reduce`, не показывать на `/groothandel` или давать ему `scrollToOfferteForm`. Рекомендация: удалить и заменить на статичную ruled-строку «Vragen? WhatsApp / bel» внутри секции `ProductActions`.

### 3.6 Hero `/groothandel` — replace (high)
**Факты.** `tiles/groothandel-1440-00.png`, `tiles/groothandel-390-00.png`; `groothandel/page.tsx:193` `bg-[#0a1a12]`; `:247-268` два радиальных «glow» (магента и зелёный), `:280-289` шумовая текстура, `:291-299` градиентная линия, всего 7 оверлеев + контент на `z-[100]`; `:330-346` три колонки «25+ / Jaar specialist / In rhododendrons sinds 2001» и т.д. — буквально hero-metric шаблон из PRODUCT.md; `:332` «25+ jaar» — относительная дата (запрещено в DESIGN.md). Копи H1 и три CTA (offerte / prijslijst / телефон) хорошие.
**Нарушает.** PRODUCT.md анти-референс 2 (hero-metric, gradient orbs); DESIGN.md «no decorative gradient orbs», No-Glow, Forest-Or-Night, правило «Sinds 2001».
**21st search brief.** `dark hero with background image left aligned heading three buttons`, `editorial hero with photo and definition list`, `hero with key facts as text row`. Требования: один тонированный оверлей на `--primary`/Moss Night, фото `B2BHERO.jpg` (пока единственный файл без AI-манифеста; происхождение не подтверждено), H1 `text-4xl sm:text-5xl lg:text-6xl`, кикер «Groothandel · Direct van de kweker» оставить, три CTA как есть (accent / dark-outline / dark-outline с `Phone`), факты как одна строка `<dl>` текстом («Sinds 2001 · 10.000+ planten op stam · Aangroeigarantie»), без крупных цифр, без шума и orb-ов, `ring-offset` на цвете фона.

### 3.7 Kenmerken + B2B-бокс на странице товара — replace (high)
**Факты.** `tiles/product-nova-zembla-1440-01.png`, `tiles/product-nova-zembla-390-01.png`; `[slug]/page.tsx:160-181` и `tuinturf-substraat/page.tsx:89-120`: `rounded-3xl`, `backgroundColor: #faf6f0`, `border: rgba(120,100,80,0.15)`, `boxShadow: … rgba(120,100,80,0.08)`, цвета текста `#2d2418`/`#8b7355` (контраст 4,17:1 — FAIL). Это именно тот warm-brown паттерн, который DESIGN.md объявляет изгнанным «с каждой страницы». Блок «Voor hoveniers en grootverbruikers» (`:185-196`) в той же карточке, ссылка «Bekijk groothandel-condities →» ведёт на `/#contact` вместо `/groothandel` и использует текстовую стрелку.
**Нарушает.** DESIGN.md Warm-Brown-Shadow Eviction, No-Framework/hard-coded colours, «Don't use plain text arrows», card doctrine; PRODUCT.md принцип 1 (три диалекта).
**21st search brief.** `specification table two column minimal`, `definition list product specs rows`, `key value spec sheet`. Требования: `<dl>` или `<table>` с `border-b border-border`, `dt` DM Sans 14–16 px `text-muted-foreground`, `dd` `text-foreground`, фон `bg-background`, hover `bg-secondary/40`; данные `product.kenmerken` из `lib/products.ts` без изменений; B2B-строка как ruled row с `Link href="/groothandel"` и `ArrowRight`.

### 3.8 ProductActions — polish (medium)
**Факты.** `product-actions.tsx:50-62`: размер — четыре `button` без `role="radio"`/`aria-checked`, `border-2 rounded-xl`, цена `text-accent` 14 px (3,18:1 FAIL); `:97-128` upsell-бокс «Vergeet de Tuinturf niet» с `+€14,95` 12 px акцентом (3,29:1 FAIL); `:135` CTA белым на магенте (3,59:1 FAIL); `:138` «Toegevoegd ✓»; кнопки «Aantal» 44 px (в `tuinturf-actions.tsx:42,50` — 40 px). Description из `lib/products.ts` содержит тире «—» (строки 42, 112, 147, 182) — запрещено DESIGN.md.
**Нарушает.** WCAG AA контраст, DESIGN.md One Accent Rule (акцент как цвет цены), card doctrine, em-dash rule.
**21st search brief.** `size selector radio group shadcn`, `quantity stepper accessible`, `add to cart section with price summary`. Требования: `RadioGroup` (`components/ui/radio-group.tsx`) с видимой ценой в `text-foreground` + lining figures, выбранное состояние через `border-primary`/`bg-secondary`; CTA «Voeg toe aan winkelwagen» на `bg-primary` (магента оставить только для Offerte в хедере); upsell Tuinturf как `Checkbox` + одна строка текста, без бокса; подтверждение через `aria-live` текст «Toegevoegd aan winkelwagen» без «✓». Логику `handleAddToCart`/`useCart` перенести как есть.

### 3.9 ProductGallery — polish (low)
**Факты.** `product-gallery.tsx:46` `rounded-2xl shadow-xl`, `:53` `group-hover:scale-[1.02]`; лайтбокс `:85-91` имеет `role="dialog"`, но нет фокус-ловушки и возврата фокуса; `bg-black/90`.
**Нарушает.** DESIGN.md No-Glow, Flat-Then-Float (hover-scale запрещён явно), Forest-Or-Night.
**21st search brief.** `image gallery with thumbnails and lightbox shadcn dialog`. Требования: лайтбокс на `components/ui/dialog.tsx`, превью `ring-2 ring-accent` для активного (уже так), без тени и масштаба, `alt` вида «Rhododendron {name}, {color}» как в `catalog-grid.tsx:43`.

### 3.10 ContactForm — polish (medium)
**Факты.** `shots/contact-errors-1440.png`, `shots/contact-hovenier-1440.png`; `contact-form.tsx:178-209` сегмент-контрол из двух `button` с анимированным индикатором `transition-all duration-300`, без `role="radiogroup"`/`aria-pressed`; `:212-229` hovenier-состояние — карточка с иконкой в кружке (SaaS-манера), хотя копи хороший; поля без `aria-invalid`/`aria-describedby` (DESIGN.md Inputs требует); ошибки на голландском есть — хорошо; заголовок H2 «Contact en Offerte aanvragen» 48–60 px (ок). Кнопка «Offerte aanvragen» из корзины ведёт сюда, а не на `/groothandel`, так что hovenier попадает в «Particulier»-форму и должен сам найти переключатель.
**Нарушает.** DESIGN.md Inputs/Error spec, Single-Hover-Signal; PRODUCT.md a11y.
**21st search brief.** `segmented control tabs accessible shadcn`, `contact form with tabs for customer type`, `two column contact section with form`. Требования: `Tabs` или `RadioGroup` из `components/ui`, без скользящего индикатора; состояние hovenier — ruled-строка с текстом и primary-кнопкой «Naar de groothandelpagina» без иконки-кружка; `Input`/`Textarea`/`Label` из `components/ui`, `aria-invalid` + `aria-describedby`; схема zod, honeypot и событие `offerte-type-selected` переносятся без изменений.

### 3.11 CartDrawer — polish (high по UX, low по дизайну)
**Факты.** `shots/cart-drawer-1440.png`, `-390.png`: Radix `Sheet` с `role="dialog"`, `aria-labelledby` — корректно; `cart-drawer.tsx:131-140` «Afrekenen» `disabled` + «Online betalen komt binnenkort beschikbaar» — покупатель не может завершить заказ; `:153` B2B-ссылка на `/#contact`, а не `/groothandel`; «(1 artikel)» внутри `SheetTitle font-serif` → Cormorant 14 px.
**Нарушает.** PRODUCT.md цель 1 (direct cart orders); DESIGN.md Cormorant Twenty-Pixel Floor.
**21st search brief.** `cart drawer with order request form`, `shopping cart sheet summary with contact submit`. Требования: пока нет платежей — заменить «Afrekenen» на рабочий primary «Bestelling aanvragen», который отправляет содержимое корзины в `/api/contact` (или открывает `#contact` с предзаполненным `message` из `items`), и явно сообщает «Wij bevestigen per e-mail, betaling bij levering/op factuur»; B2B-ссылка на `/groothandel`; счётчик артикулов в DM Sans.

### 3.12 PrijslijstModal/Button — polish (medium)
**Факты.** `shots/prijslijst-modal-1440.png`; `prijslijst-modal.tsx:65` `bg-[#0a1912] border-white/10`; `:82-84,96,110` `<label>` без `htmlFor`, `input` без `id` (скринридер не свяжет); `:123` `text-red-400`; описание обещает «direct per e-mail», успех — «binnen 24 uur» (`:76` vs `:150`); кнопка называется «Download prijslijst (PDF)», а открывает лид-форму без PDF; `fetch` «fire-and-forget» — успех показывается даже при ошибке.
**Нарушает.** DESIGN.md No-Framework-Color, Forest-Or-Night, Inputs spec; PRODUCT.md «quiet confidence» (обещание не совпадает с действием).
**21st search brief.** `simple lead capture dialog shadcn form`, `email gate dialog with name and email`. Требования: `Dialog` светлый на `bg-background` (как у `ContactForm`), `Label htmlFor` + `Input id`, ошибка `text-destructive`, честная подпись кнопки «Prijslijst aanvragen» и единый срок; демо-режим `isDemoMode` сохранить.

### 3.13 Header — polish (medium)
**Факты.** `header.tsx:86-97` десктоп-кнопка корзины 20×20 px без паддинга; `:129-135` кнопка меню без `aria-expanded`/`aria-controls`, Escape не закрывает (проверено), `:141` `animate-in` без `motion-reduce`; `:28` `drop-shadow-md` на логотипе, `:29` `style={undefined}`; хедер `absolute` — на `/groothandel` (7500 px) навигация и корзина уходят со второго экрана; `Contact` ведёт на `/#contact`. Белый на магенте «Offerte aanvragen» — 3,59:1 (FAIL для 14 px). На 390 логотип переносится в две строки (`shots/mobile-menu-390.png`), приемлемо.
**Нарушает.** PRODUCT.md a11y (aria для мобильного меню, tap targets), контраст; DESIGN.md No-Glow (drop-shadow).
**21st search brief.** `sticky navbar transparent to solid on scroll shadcn`, `accessible mobile navigation sheet`. Требования: мобильное меню на `components/ui/sheet.tsx` (роль, Escape, фокус уже есть); кнопка корзины ≥ 44 px; CTA Offerte либо текст Moss Night на магенте, либо магента темнее (`bloom-ring`, 0.5 L — даёт ≈ 5:1 с белым); сохранить `usePathname` логику (`isHeroPage`, `isGroothandel`, `scrollToOfferteForm`) и бейдж `totalItems`.

### 3.14 Footer — polish (low)
**Факты.** `footer.tsx:39,125` текст `/50` — 3,84:1; `:103` «Gesloten» `/40` — 3,01:1 (FAIL); «Snelle Links» — заголовок-заглушка; в остальном `<ul>`, адрес, часы, KvK — хорошо.
**Нарушает.** WCAG AA; PRODUCT.md «avoid light-grey-on-white microcopy».
**Правка без поиска.** Поднять до `/80`, «Gesloten» обычным цветом, заголовок «Navigatie»/«Pagina's».

### 3.15 Мелкие keep-блоки с одной правкой
- `CatalogGrid` (`catalog-grid.tsx:30-33`): вся строка — одна `<a>`, accessible name = все цены и текст; по спецификации DESIGN.md имя сорта должно быть ссылкой, клик по строке — JS-бонус.
- `PlantgidsComparisonTable` (`:161`): `font-serif text-base` = Cormorant 16 px (измерено) — поднять до `text-xl` или перевести в DM Sans.
- `BloomTimeline` (`:111-128`): ячейки — пустые `div` без текста; добавить `sr-only` «Bloei: april–mei, planten: feb–mrt, sep–okt» на строку.
- `FaqSection`, `BloomSection`, `ProductsSection`: центрированные заголовки; по DESIGN.md центр разрешён только для bloom-блока.
- Кикеры «Plantgids» (`plantgids/page.tsx:170`), «Projecten», «Tarieven», «Het proces», «Veelgestelde vragen», «Projectofferte» (`groothandel/page.tsx`) — абстрактные подписи, которые Running Head Rule запрещает; «Otterlo • Sinds 2001», «De geheimen van de kweker», «Bloei- & Plantkalender» — правильные.

## 4. Сквозные проблемы (не решаются заменой одного блока)

1. **Медиа.** Все изображения кроме `B2BHERO.jpg` и видео имеют AI-происхождение (C2PA `trainedAlgorithmicMedia`; подписи OpenAI Media Service / Google C2PA Media Services; у видео водяной знак Veo, край которого виден на 390 px в правом нижнем углу хиро). `owner.jpg` используется также как OG-image и `image` организации в JSON-LD (`lib/site-config.ts:15-20`, `app/layout.tsx:81`). Нужен настоящий фотосет: владелец на поле, растения в контейнерах/на стволе, Veluwe; до этого любой «replace» лишь меняет рамку вокруг той же проблемы.
2. **Вес и доставка.** `next.config.mjs:44-46` `images.unoptimized: true`, в `public/images` оригиналы 17–22 МБ (3584×4800): главная 97 МБ, `/assortiment` 79 МБ (измерено). Скрипт `scripts/shrink-preview-images.mjs` применяется только в GitHub Pages workflow. Для продакшена: ужать до ≤ 2000 px/≤ 300 КБ в репозитории или включить оптимизатор; видео 720×1280 для десктопа непригодно.
3. **Токены и контраст.** `--card`, `--popover`, `--accent-foreground` = `oklch(1 0 0)` (`globals.css:9,11,20`) — чистый белый против Forest-Or-Night; `--destructive-foreground` равен `--destructive` (`:21-22`); `bloomPulse` (`:136-139`) не используется. Магента `oklch(0.65 0.2 340)` как цвет **текста** (все кикеры 3,2–3,4:1, цены, «+€14,95») и как **фон под белым** (все CTA 3,59:1) не проходит AA при размерах 12–14 px. Решение на уровне токенов: ввести `--accent-text` = `bloom-ring` (0.5 L) для кикеров/цен и `text-primary`/темнее для текста на accent-кнопках, либо поднять кикеры до ≥ 18,66 px bold (3:1 порог).
4. **Жёсткие цвета вне токенов.** `#0a1a12`, `#0a1912`, `#faf6f0`, `#2d2418`, `#8b7355`, `rgba(120,100,80,…)`, `#25D366`, `text-white`, `border-white/*`, `bg-black/*`, `text-red-400`, inline `rgba(255,255,255,0.16)` (`about-section.tsx:99`) — в хиро groothandel, карточке товара, PrijslijstModal, WhatsappSticky, галерее. Все должны стать `var(--primary|--foreground|--border|--destructive)`.
5. **Копи-правила DESIGN.md.** Em-dash в `lib/products.ts` (4 описания) и `tuinturf-substraat/page.tsx:62`; текстовые стрелки «→» и «✓» (`[slug]/page.tsx:194`, `product-actions.tsx:138`, `tuinturf-actions.tsx:71`); «25+ jaar» (`groothandel/page.tsx:332`); промис «Direct contact. Direct voordeel. / Voor uw tuin. Voor uw bedrijf. Voor het resultaat.» (`about-section.tsx:15-17`) — единственный пункт `<dl>` без содержания, третий подряд «афористический» ритм.
6. **Типографика для 45–70.** Много 12 px (`text-xs`) и 11 px: TrustBar, подписи цен в каталоге, футер, upsell, дисклеймеры, swipe-подсказки; навигация 14 px. PRODUCT.md просит держаться верхней границы: минимум 14 px для microcopy, 16 px для навигации.
7. **Путь B2C.** Хиро без CTA → плитки без имён → страница товара → корзина с выключенным «Afrekenen». Единственный рабочий выход — форма контакта. Нужен либо платёжный провайдер, либо честный «bestelling aanvragen» через форму/WhatsApp с содержимым корзины.
8. **Путь B2B.** На главной B2B-«дверь» — только outline-кнопка «Groothandel» в About и пункт меню; корзина и страница товара отправляют hovenier на `/#contact`, а не на `/groothandel`; на `/groothandel` нет `OfferteModal`, поэтому sticky-«Offerte» мёртв. Все три точки должны вести на `/groothandel#offerte-form`.
9. **Ландмарки и чистота.** `app/page.tsx:14` оборачивает `Header`/`Footer` в `<main>` (на других страницах — снаружи); `metadata.generator: 'v0.app'` (`layout.tsx:33`); 50+ неиспользуемых `components/ui/*`, `theme-provider.tsx`, `TestimonialsSection`, `TuinturfBanner`; `.dark`-тема без переключателя.

## 5. Порядок работ

1. Получить от владельца реальные фото и видео (владелец, поле, сорта), заменить все файлы в `public/images` и `public/videos`, ужать до web-размеров; убрать упоминания `hero-rhododendrons.jpg` или добавить файл. Без этого шаги 2–8 не имеют смысла для бренда.
2. Токены: `--card`/`--popover`/`--accent-foreground` на moss-оттенки, ввести `--accent-text` (bloom-ring) и применить к кикерам/ценам, пересчитать CTA на accent; одновременно поднять microcopy до 14 px.
3. Hero главной (3.1) + TrustBar (3.2): один блок с двумя CTA; затем hero `/groothandel` (3.6).
4. ProductsSection (3.3) как компактный `CatalogGrid`; удалить `TestimonialsSection`, `TuinturfBanner`.
5. Страница товара: Kenmerken/B2B (3.7) → ProductActions (3.8) → Gallery (3.9); исправить ссылки на `/groothandel`, тире и стрелки в `lib/products.ts`.
6. OfferteModal на `Dialog` (3.4), Header-меню на `Sheet` + aria (3.13), WhatsappSticky удалить или переписать (3.5) с единым номером и часами из `site-config.ts`.
7. CartDrawer: рабочий «Bestelling aanvragen» (3.11); ContactForm/PrijslijstModal aria и цвета (3.10, 3.12); Footer контраст (3.14).
8. Повторный прогон `scratchpad/contrast.js`/`verify.js` + ручная проверка клавиатуры и reduced-motion на всех пяти страницах.

**Не удалось проверить.** Реальность `B2BHERO.jpg` (нет ни EXIF, ни C2PA — происхождение неизвестно); контраст текста хиро поверх видео (фон динамический, не измерялся); отправка форм (`/api/*` требуют SMTP-переменных, не настраивались); правдивость «Uitgelichte projecten» и цифр «10.000+», «–12/–22/–30 %»; `/privacy` и `/voorwaarden` не снимались; поведение на реальных тач-устройствах (эмуляция Chromium); фактический фокус-порядок внутри `CartDrawer`/лайтбокса проверялся только по коду.
