# UX Improvements: Top Rhododendrons Landing Page

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Устранить оставшиеся UX-проблемы лендинга — доверие, конверсия, соответствие нидерландским юридическим требованиям.

**Architecture:** Все изменения — компонентный уровень (React/Next.js). Новые страницы — Next.js App Router (`app/privacy/page.tsx`, `app/voorwaarden/page.tsx`). Новая секция Testimonials — отдельный компонент в `components/`. Визуальные улучшения — через Tailwind классы без новых зависимостей.

**Tech Stack:** Next.js 16, React 19, Tailwind CSS 4, Lucide React, TypeScript

**Контекст проекта:**
- Рабочая директория: `/Users/gadzha/Desktop/rhododendron-landing-page`
- Главная страница: `app/page.tsx`
- Компоненты: `components/*.tsx`
- Цвета: `--primary` = тёмно-зелёный, `--accent` = розовый (цвет рododendron), `--foreground` = почти чёрный
- Шрифты: Playfair Display (serif, заголовки) / DM Sans (body)
- Уже сделано: sticky header, TrustBar после Hero, poster для видео, рабочая форма, кликабельные телефоны, WhatsApp в контакт-секции

---

## Файловая карта

| Файл | Действие | Ответственность |
|------|----------|-----------------|
| `components/hero-section.tsx` | Изменить | Вторичная CTA + scroll indicator + конкретный подзаголовок |
| `components/header.tsx` | Изменить | Логотип с иконкой + анимация мобильного меню |
| `components/about-section.tsx` | Изменить | Убрать дублирующий заголовок, добавить цифры |
| `components/benefits-section.tsx` | Изменить | Убрать дублирующий заголовок, добавить CTA |
| `components/testimonials-section.tsx` | Создать | Новая секция с отзывами клиентов |
| `components/footer.tsx` | Изменить | KvK, рабочие часы, Instagram, рабочие ссылки |
| `app/page.tsx` | Изменить | Вставить Testimonials между Products и Contact |
| `app/privacy/page.tsx` | Создать | Страница Privacy Policy (AVG/GDPR) |
| `app/voorwaarden/page.tsx` | Создать | Страница Algemene Voorwaarden |

---

## Task 1: Hero — конкретный подзаголовок + вторичная CTA + scroll indicator

**Файлы:**
- Изменить: `components/hero-section.tsx`

**Проблема:** Подзаголовок "Kwaliteit en vakmanschap in Otterlo" — пустая фраза. Одна CTA не закрывает пользователей готовых к контакту прямо сейчас. Нет визуальной подсказки что контент продолжается ниже.

- [ ] **Шаг 1: Заменить подзаголовок**

В `components/hero-section.tsx` строка 30, заменить:
```tsx
<p className="mt-6 text-lg text-primary-foreground/90 sm:text-xl md:text-2xl max-w-2xl mx-auto text-pretty">
  Kwaliteit en vakmanschap in Otterlo
</p>
```
На:
```tsx
<p className="mt-6 text-lg text-primary-foreground/90 sm:text-xl md:text-2xl max-w-2xl mx-auto text-pretty">
  Meer dan 10.000 planten direct leverbaar — voor particulieren en hoveniers in heel Nederland
</p>
```

- [ ] **Шаг 2: Добавить вторичную CTA кнопку рядом с основной**

Заменить блок с одной кнопкой:
```tsx
<div className="mt-10 flex items-center justify-center">
  <Button
    size="lg"
    className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 font-medium"
    asChild
  >
    <a href="#assortiment">
      Bekijk volledig assortiment
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  </Button>
</div>
```
На два варианта действия:
```tsx
<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
  <Button
    size="lg"
    className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6 font-medium"
    asChild
  >
    <a href="#assortiment">
      Bekijk ons assortiment
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  </Button>
  <Button
    size="lg"
    variant="outline"
    className="border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 text-base px-8 py-6 font-medium"
    asChild
  >
    <a href="#contact">Offerte aanvragen</a>
  </Button>
</div>
```

- [ ] **Шаг 3: Добавить scroll indicator (анимированная стрелка внизу Hero)**

В самом конце section, перед закрывающим тегом `</section>`, добавить:
```tsx
{/* Scroll indicator */}
<div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
  <a href="#trust" aria-label="Scroll naar beneden">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-primary-foreground/60"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </a>
</div>
```

- [ ] **Шаг 4: Добавить `id="trust"` к TrustBar**

В `components/trust-bar.tsx` добавить `id="trust"` к `<section>`:
```tsx
<section id="trust" className="bg-card py-8 border-b border-border">
```

- [ ] **Шаг 5: Проверить в браузере**

Открыть http://localhost:3000. Убедиться:
- Подзаголовок конкретный с числами
- Две кнопки рядом, на мобайле — стопкой
- Анимированная стрелка внизу Hero исчезает при скролле (animate-bounce)

- [ ] **Шаг 6: Commit**
```bash
git add components/hero-section.tsx components/trust-bar.tsx
git commit -m "ux: hero — concrete subtitle, dual CTA, scroll indicator"
```

---

## Task 2: Header — логотип с иконкой + анимация мобильного меню

**Файлы:**
- Изменить: `components/header.tsx`

**Проблема:** Логотип только текст — нет визуальной идентификации. Мобильное меню открывается без анимации — ощущение сырости.

- [ ] **Шаг 1: Добавить SVG-иконку рododendron рядом с логотипом**

В `components/header.tsx`, заменить блок логотипа:
```tsx
<Link href="/" className="flex items-center gap-2">
  <span className="font-serif text-2xl font-bold text-primary-foreground drop-shadow-md">
    Top Rhododendrons
  </span>
</Link>
```
На:
```tsx
<Link href="/" className="flex items-center gap-2.5">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    className="h-8 w-8 text-accent fill-accent drop-shadow-sm"
    aria-hidden="true"
  >
    {/* Стилизованный цветок рododendron — 5 лепестков */}
    <circle cx="16" cy="16" r="3.5" fill="currentColor" opacity="0.9"/>
    <ellipse cx="16" cy="7" rx="3" ry="5" fill="currentColor" opacity="0.8"/>
    <ellipse cx="16" cy="7" rx="3" ry="5" fill="currentColor" opacity="0.8" transform="rotate(72 16 16)"/>
    <ellipse cx="16" cy="7" rx="3" ry="5" fill="currentColor" opacity="0.8" transform="rotate(144 16 16)"/>
    <ellipse cx="16" cy="7" rx="3" ry="5" fill="currentColor" opacity="0.8" transform="rotate(216 16 16)"/>
    <ellipse cx="16" cy="7" rx="3" ry="5" fill="currentColor" opacity="0.8" transform="rotate(288 16 16)"/>
  </svg>
  <span className="font-serif text-2xl font-bold text-primary-foreground drop-shadow-md">
    Top Rhododendrons
  </span>
</Link>
```

- [ ] **Шаг 2: Добавить CSS-анимацию для мобильного меню**

В `components/header.tsx` заменить блок мобильного меню (вся `{isOpen && (...)}`):
```tsx
{isOpen && (
  <nav className="flex flex-col gap-4 bg-primary/95 backdrop-blur-sm p-6 rounded-lg md:hidden animate-in slide-in-from-top-2 duration-200">
    <Link
      href="#over-ons"
      className="text-sm font-medium text-primary-foreground"
      onClick={() => setIsOpen(false)}
    >
      Over Ons
    </Link>
    <Link
      href="#contact"
      className="text-sm font-medium text-primary-foreground"
      onClick={() => setIsOpen(false)}
    >
      Contact
    </Link>
    <a
      href="https://wa.me/31620297849"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1.5 text-sm font-medium text-primary-foreground"
      onClick={() => setIsOpen(false)}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      WhatsApp
    </a>
    <Button
      className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
      asChild
    >
      <a href="#contact" onClick={() => setIsOpen(false)}>Offerte aanvragen</a>
    </Button>
  </nav>
)}
```

> `animate-in slide-in-from-top-2 duration-200` — из `tw-animate-css`, уже в зависимостях.

- [ ] **Шаг 3: Проверить в браузере**

Открыть http://localhost:3000, сузить до мобильного размера (< 768px). Убедиться:
- Иконка цветка рядом с текстом логотипа
- Меню открывается с анимацией сверху вниз (~200ms)

- [ ] **Шаг 4: Commit**
```bash
git add components/header.tsx
git commit -m "ux: header — flower logo icon, mobile menu slide animation"
```

---

## Task 3: About + Benefits — убрать дублирование заголовков, добавить цифры и CTA

**Файлы:**
- Изменить: `components/about-section.tsx`
- Изменить: `components/benefits-section.tsx`

**Проблема:** Оба компонента имеют заголовок "Waarom Top Rhododendrons" — одинаковый вопрос на одной странице дважды. AboutSection не содержит конкретных цифр. BenefitsSection заканчивается в никуда — нет CTA.

- [ ] **Шаг 1: Обновить AboutSection — новый заголовок + цифры в буллетах**

В `components/about-section.tsx` заменить массив `benefits` и заголовок:
```tsx
const benefits = [
  "Direct van de kweker — geen tussenpersoon, eerlijke prijs",
  "Extra sterke wortels — geteeld in kluitverband voor optimale aangroei",
  "Op bestelling gerooid — dagvers, maximale vitaliteit",
]
```

Заменить блок заголовка:
```tsx
<span className="text-accent font-medium text-sm uppercase tracking-wider">
  Gekweekt met passie
</span>
<h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
  Al 25 jaar uw specialist in Otterlo
</h2>
<p className="mt-4 text-muted-foreground leading-relaxed">
  Wij kweken meer dan 15 soorten rhododendrons op eigen terrein. 
  Elk jaar verzorgen wij duizenden particulieren en hoveniers in heel Nederland.
</p>
```

- [ ] **Шаг 2: Обновить BenefitsSection — новый заголовок + CTA**

В `components/benefits-section.tsx` заменить label и заголовок:
```tsx
<span className="text-accent font-medium text-sm uppercase tracking-wider">
  Uw voordelen
</span>
<h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
  Meer dan alleen een plant
</h2>
```

После closing `</div>` грида добавить CTA:
```tsx
{/* CTA */}
<div className="mt-12 text-center">
  <Button
    size="lg"
    className="bg-accent text-accent-foreground hover:bg-accent/90 px-8"
    asChild
  >
    <a href="#contact">
      Vraag gratis advies aan
      <ArrowRight className="ml-2 h-5 w-5" />
    </a>
  </Button>
</div>
```

Добавить импорт в начало файла:
```tsx
import { ArrowRight, Leaf, MessageCircle, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
```

- [ ] **Шаг 3: Проверить в браузере**

Открыть http://localhost:3000, прокрутить до About и Benefits. Убедиться:
- Нет двух одинаковых заголовков "Waarom Top Rhododendrons"
- AboutSection начинается с "Al 25 jaar..."
- BenefitsSection заканчивается кнопкой "Vraag gratis advies aan"

- [ ] **Шаг 4: Commit**
```bash
git add components/about-section.tsx components/benefits-section.tsx
git commit -m "ux: remove duplicate headings, add social proof numbers, benefits CTA"
```

---

## Task 4: Testimonials секция

**Файлы:**
- Создать: `components/testimonials-section.tsx`
- Изменить: `app/page.tsx`

**Проблема:** Нет отзывов клиентов. Для нидерландского local business это критичный фактор доверия — особенно при заказе растений без физического осмотра.

- [ ] **Шаг 1: Создать `components/testimonials-section.tsx`**

```tsx
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Jan de Vries",
    location: "Arnhem",
    rating: 5,
    text: "Prachtige planten, stevig en gezond aangekomen. Direct na het planten al bloemen. Zeker voor herhaling vatbaar!",
  },
  {
    name: "Maria Bakker",
    location: "Utrecht",
    rating: 5,
    text: "Uitstekend advies gekregen over welke soort het beste past bij mijn tuin. De Nova Zembla bloeit geweldig.",
  },
  {
    name: "Peter Smits",
    location: "Nijmegen",
    rating: 5,
    text: "Al meerdere keren besteld. Kwaliteit is altijd top, levering snel en betrouwbaar. Aanrader voor elke tuinliefhebber.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 lg:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Wat onze klanten zeggen
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
            Ervaringen van tuinliefhebbers
          </h2>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm flex flex-col gap-4"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed flex-1">"{t.text}"</p>
              <div className="pt-2 border-t border-border/50">
                <p className="font-medium text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Bekijk alle beoordelingen op{" "}
          <a
            href="https://www.google.com/maps/search/Top+Rhododendrons+Otterlo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline underline-offset-4 hover:text-accent/80 transition-colors"
          >
            Google Reviews
          </a>
        </p>
      </div>
    </section>
  )
}
```

- [ ] **Шаг 2: Добавить TestimonialsSection в `app/page.tsx`**

```tsx
import { TestimonialsSection } from "@/components/testimonials-section"
```

Вставить после `<ProductsSection />`:
```tsx
<Header />
<HeroSection />
<TrustBar />
<AboutSection />
<BenefitsSection />
<ProductsSection />
<TestimonialsSection />   {/* ← добавить здесь */}
<ContactForm />
<Footer />
```

- [ ] **Шаг 3: Проверить в браузере**

Прокрутить до отзывов. Убедиться:
- 3 карточки в сетке (1 колонка мобайл, 3 на десктопе)
- Жёлтые/акцентные звёзды
- Ссылка на Google Reviews внизу

- [ ] **Шаг 4: Commit**
```bash
git add components/testimonials-section.tsx app/page.tsx
git commit -m "feat: add testimonials section with google reviews link"
```

---

## Task 5: Footer — KvK, рабочие часы, Instagram, рабочие ссылки

**Файлы:**
- Изменить: `components/footer.tsx`

**Проблема:** Privacy и Voorwaarden ведут на `#` (сломано). Нет KvK номера (юридическое требование в NL). Нет рабочих часов — клиент не знает когда приехать. Нет Instagram — упущенный визуальный канал.

> ⚠️ **Заполнить перед деплоем:** KvK номер, реальные часы работы, ссылка на Instagram

- [ ] **Шаг 1: Обновить footer полностью**

Заменить весь `components/footer.tsx`:
```tsx
import Link from "next/link"
import { Mail, MapPin, Phone, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* Brand */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block">
                <span className="font-serif text-2xl font-bold text-primary-foreground">
                  Top Rhododendrons
                </span>
              </Link>
              <p className="mt-4 text-primary-foreground/80 max-w-md leading-relaxed">
                Uw specialist in premium rhododendrons. Direct van eigen kwekerij
                in Otterlo. Kwaliteit en vakmanschap, daar staan wij voor.
              </p>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/toprhododendrons"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                aria-label="Volg ons op Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="text-sm">@toprhododendrons</span>
              </a>
              {/* KvK */}
              <p className="mt-4 text-xs text-primary-foreground/50">
                KvK: 12345678 {/* ← vervang door echt KvK-nummer */}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-primary-foreground mb-4">Snelle Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#over-ons" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Over Ons
                  </Link>
                </li>
                <li>
                  <Link href="#assortiment" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Assortiment
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-semibold text-primary-foreground mb-4">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <a
                    href="https://maps.google.com/?q=Esserbroekweg+2,+6731+DB+Otterlo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    Esserbroekweg 2<br />
                    6731 DB Otterlo<br />
                    Nederland
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0" />
                  <a href="mailto:info@toprhododendrons.nl" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    info@toprhododendrons.nl
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div className="flex flex-col gap-1">
                    <a href="tel:+31620104312" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      +31 (0)6 20 10 43 12
                    </a>
                    <a href="tel:+31620297849" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                      +31 (0)6 20 29 78 49
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <div className="text-primary-foreground/80 text-sm leading-relaxed">
                    {/* ← vervang door echte openingstijden */}
                    Ma – Vr: 08:00 – 17:00<br />
                    Za: 09:00 – 13:00<br />
                    Zo: Gesloten
                  </div>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/70">
              © {new Date().getFullYear()} Top Rhododendrons. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Privacybeleid
              </Link>
              <Link href="/voorwaarden" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

- [ ] **Шаг 2: Проверить в браузере**

Прокрутить вниз до Footer. Убедиться:
- Иконка Clock + часы работы
- Ссылка Instagram с иконкой
- KvK номер (placeholder — нужно заменить реальным)
- Адрес кликабельный (открывает Google Maps)
- Privacy и Voorwaarden не ведут на `#`

- [ ] **Шаг 3: Commit**
```bash
git add components/footer.tsx
git commit -m "ux: footer — KvK, opening hours, instagram, google maps, real legal links"
```

---

## Task 6: Страницы Privacy Policy и Algemene Voorwaarden

**Файлы:**
- Создать: `app/privacy/page.tsx`
- Создать: `app/voorwaarden/page.tsx`

**Проблема:** В Нидерландах AVG (GDPR) обязывает любой сайт, собирающий личные данные (контактная форма), иметь публичную Privacy Policy. Страницы ведут на `#` — нарушение.

- [ ] **Шаг 1: Создать `app/privacy/page.tsx`**

```tsx
import Link from "next/link"

export const metadata = {
  title: "Privacybeleid — Top Rhododendrons",
  description: "Hoe wij omgaan met uw persoonsgegevens.",
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Privacybeleid</h1>
        <div className="prose prose-green max-w-none text-foreground space-y-6">
          <p className="text-muted-foreground">Laatste update: {new Date().getFullYear()}</p>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">1. Wie zijn wij?</h2>
          <p>
            Top Rhododendrons, gevestigd aan Esserbroekweg 2, 6731 DB Otterlo, Nederland.
            KvK: <strong>12345678</strong> {/* ← vervang */}<br />
            E-mail: info@toprhododendrons.nl
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">2. Welke gegevens verzamelen wij?</h2>
          <p>Via ons contactformulier verzamelen wij:</p>
          <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
            <li>Naam</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer (optioneel)</li>
            <li>Inhoud van uw bericht</li>
          </ul>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">3. Waarvoor gebruiken wij uw gegevens?</h2>
          <p className="text-muted-foreground">
            Uitsluitend voor het beantwoorden van uw contactverzoek of offerte-aanvraag.
            Wij verkopen uw gegevens nooit aan derden.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">4. Bewaartermijn</h2>
          <p className="text-muted-foreground">
            Wij bewaren uw gegevens maximaal 2 jaar na het laatste contact, tenzij wettelijk anders vereist.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">5. Uw rechten (AVG)</h2>
          <p className="text-muted-foreground">
            U heeft het recht op inzage, correctie en verwijdering van uw gegevens.
            Stuur een verzoek naar info@toprhododendrons.nl.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">6. Cookies</h2>
          <p className="text-muted-foreground">
            Deze website gebruikt geen tracking-cookies van derden.
          </p>
        </div>
        <Link href="/" className="mt-12 inline-block text-accent hover:text-accent/80 transition-colors">
          ← Terug naar home
        </Link>
      </div>
    </main>
  )
}
```

- [ ] **Шаг 2: Создать `app/voorwaarden/page.tsx`**

```tsx
import Link from "next/link"

export const metadata = {
  title: "Algemene Voorwaarden — Top Rhododendrons",
  description: "Onze algemene verkoop- en leveringsvoorwaarden.",
}

export default function VoorwaardenPage() {
  return (
    <main className="min-h-screen bg-background py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl font-bold text-foreground mb-8">Algemene Voorwaarden</h1>
        <div className="text-foreground space-y-6">
          <p className="text-muted-foreground">Laatste update: {new Date().getFullYear()}</p>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">Artikel 1 — Definities</h2>
          <p className="text-muted-foreground">
            Top Rhododendrons, KvK 12345678, gevestigd te Otterlo. {/* ← vervang KvK */}
            "Klant": iedere natuurlijke of rechtspersoon die een bestelling plaatst.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">Artikel 2 — Offertes en prijzen</h2>
          <p className="text-muted-foreground">
            Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen.
            Prijzen zijn inclusief BTW tenzij anders vermeld.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">Artikel 3 — Levering</h2>
          <p className="text-muted-foreground">
            Levering geschiedt met eigen transport. Levertijden zijn indicatief.
            Top Rhododendrons is niet aansprakelijk voor vertraging door overmacht.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">Artikel 4 — Aangroeigarantie</h2>
          <p className="text-muted-foreground">
            Top Rhododendrons biedt aangroeigarantie onder normale teeltomstandigheden.
            De garantie vervalt bij onjuiste verzorging of buitengewone weersomstandigheden.
          </p>

          <h2 className="font-serif text-2xl font-semibold text-foreground mt-8">Artikel 5 — Toepasselijk recht</h2>
          <p className="text-muted-foreground">
            Op alle overeenkomsten is Nederlands recht van toepassing.
            Geschillen worden voorgelegd aan de bevoegde rechter in het arrondissement Gelderland.
          </p>

          <p className="mt-8 text-sm text-muted-foreground">
            Voor vragen: info@toprhododendrons.nl of +31 (0)6 20 10 43 12
          </p>
        </div>
        <Link href="/" className="mt-12 inline-block text-accent hover:text-accent/80 transition-colors">
          ← Terug naar home
        </Link>
      </div>
    </main>
  )
}
```

- [ ] **Шаг 3: Проверить в браузере**

Открыть http://localhost:3000/privacy и http://localhost:3000/voorwaarden. Убедиться что страницы рендерятся, ссылки из Footer работают.

- [ ] **Шаг 4: Commit**
```bash
git add app/privacy/page.tsx app/voorwaarden/page.tsx
git commit -m "legal: add privacy policy and algemene voorwaarden pages (AVG compliance)"
```

---

## Что требует ручного заполнения перед деплоем

| Placeholder | Где | Что вписать |
|-------------|-----|-------------|
| `KvK: 12345678` | `footer.tsx`, `privacy/page.tsx`, `voorwaarden/page.tsx` | Реальный KvK номер |
| Часы работы | `footer.tsx` | Реальное расписание |
| `@toprhododendrons` | `footer.tsx` | Реальный Instagram handle (или убрать) |
| Отзывы | `testimonials-section.tsx` | Заменить на реальные (с разрешения клиентов) |
| Google Reviews URL | `testimonials-section.tsx` | Ссылка на реальный Google профиль бизнеса |
| `.env.local` | корень проекта | SMTP данные для отправки формы |
| `Al 25 jaar` | `about-section.tsx` | Уточнить реальный срок работы |

---

## Итоговый порядок секций после всех изменений

```
Header (sticky, с иконкой)
HeroSection (poster, dual CTA, scroll indicator)
TrustBar (id="trust")
AboutSection (конкретные цифры, уникальный заголовок)
BenefitsSection (уникальный заголовок, CTA)
ProductsSection (без heart-кнопки, рабочие CTA)
TestimonialsSection (новая)
ContactForm (реальная отправка, WhatsApp, кликабельный телефон)
Footer (KvK, часы, Instagram, Maps, рабочие юридические ссылки)
```
