@AGENTS.md

# Портфоліо UI-дизайнера

## Стек

- Next.js (App Router), TypeScript, Tailwind CSS.

## Робота з Git

- Уся робота йде в гілці `main`.
- Нових гілок не створюй, поки я прямо не попрошу.
- Пуш у `main` публікує сайт (Vercel публікує кожен пуш), тому перед пушем питай мене.

## Токени

Значення живуть тільки в блоці `@theme` у `app/globals.css`. Hex, px і значення в квадратних дужках у компонентах не пишемо. Токени дивимось у Storybook (Foundations/Tokens). Назви за роллю, не за кольором. Стандартні палітру, радіуси й розміри тексту Tailwind скинуто.

- Кольори (`--color-*`): `canvas` (фон сторінки), `surface` (поверхня), `line` (рамки кнопок), `line-subtle` (розділювачі й межі карток), `accent`, `on-accent` (текст на акценті), `ink` (текст), `ink-muted` (приглушений текст і межа поля форми, не `line`), `danger` (помилка: текст і межа поля). Класи: `bg-canvas`, `bg-surface`, `border-line`, `bg-accent`, `text-on-accent`, `text-ink`, `text-ink-muted`, `text-danger`, `border-danger`.
- Шрифт (`--font-sans`): Unbounded, підключений у `app/fonts.ts` з `latin` і `cyrillic`.
- Розміри тексту (`--text-*`, з висотою рядка, трекінгом і жирністю): `text-caption`, `text-button`, `text-body`, `text-lead`, `text-heading`, `text-display`.
- Радіуси (`--radius-*`): `rounded-control` (кнопки, поля), `rounded-card` (картки, портрет).
- Пропорції картинок (`--aspect-*`): `aspect-portrait`, `aspect-cover`.
- Ширина контенту (`--container-page`, клас `max-w-page`): лише для сторінок, не для компонентів.
- Відступи окремих токенів не мають: тільки числа 2, 3, 4, 6, 8 у класах (8, 12, 16, 24, 32 px), наприклад `p-4`. Більші відступи з макета складаємо з дозволених кроків, а не вводимо нові числа: 48 px = два по 24 (наприклад, `gap-6` двічі або два вкладені відступи по `6`), 60 px = два по 32 (фактично 64 px), 96 px = три по 32. Відстань між великими секціями (`--spacing-section`) поки не визначена.

## Компоненти

Компоненти лежать у `components/`, історія й docs поруч (`<Компонент>.stories.tsx`, title `Components/<Назва>`). Подробиці дивись у Storybook.

- `Button` (`components/Button.tsx`): кнопка. Параметри: `variant` (`primary` на `accent`, `secondary` без заливки з межею `ink-muted`, `tinted` із заливкою `surface` і межею `line` для шапки), `size` (`md`, `lg`), `icon` (`none`, `arrow`: стрілка вправо після тексту), `href` (з ним кнопка стає посиланням `next/link`, для сторінок і якорів; `disabled`, `type`, `onClick` тоді не діють), `disabled`, `disabledReason`. Вимкнена кнопка робиться через `aria-disabled`, не `disabled`: лишається у фокусі, пояснення під нею зв'язане через `aria-describedby`. Імпорт: `import { Button } from "@/components/Button"`.
- `FormField` (`components/FormField.tsx`): текстове поле з підписом над ним. Параметри: `label` (обов'язковий), `error`, `errorMessage` (текст і іконка `danger` під полем, межа теж `danger`), `disabled` (нативний `disabled`), решта атрибутів `input`. Межа поля `ink-muted`. Помилка зв'язана з полем через `aria-invalid` і `aria-describedby`. Імпорт: `import { FormField } from "@/components/FormField"`.
- `WorkCard` (`components/WorkCard.tsx`): картка роботи, уся клікабельна (`next/link`). Параметри: `title`, `description`, `cover` (картинка, імпортована з `assets/`, не з `public`), `coverAlt`, `href`. Кути `rounded-control` (2 px), обкладинка `aspect-cover`. При hover і Tab картка збільшується на 16 px по ширині (`-m-2`), тож навколо потрібно 8 px вільного місця. Імпорт: `import { WorkCard } from "@/components/WorkCard"`.
- `Navigation` (`components/Navigation.tsx`, клієнтський): меню сайту. Параметри: `items` (`{ label, href }`, за замовчуванням Роботи, Про мене, Контакти), `activeHref` (активний пункт: межа `ink-muted`, `aria-current="page"`), `menuLabel`. Hover і Tab: текст `accent` з підкресленням. На вузькому екрані (менше `md`) меню згортається в кнопку, відкрите лежить поверх контенту й закривається клавішею Escape. Імпорт: `import { Navigation } from "@/components/Navigation"`.

## Правила

- Виняток для разового декору (рожеві кола, «?!», стікер, портрет у героя на `app/page.tsx`): розміри й позиції задані частками (`w-5/6`, `top-1/12`) і кутами повороту (`-rotate-15`), токенів для них немає. Це свідоме рішення, перевірка на відхилення від системи його не рахує помилкою. Для компонентів виняток не діє.

Решту правил заповнимо далі.

## Посилання

- План сайту: `План сайту-портфоліо UI-дизайнера чернетка.md` (у корені проєкту).
