import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Кнопка для дій на сторінці: надіслати форму, перейти до робіт, написати мені.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`variant\` | \`primary\`, \`secondary\`, \`tinted\` | \`primary\` |
| \`size\` | \`md\`, \`lg\` | \`md\` |
| \`icon\` | \`none\` (без іконки), \`arrow\` (стрілка вправо після тексту) | \`none\` |
| \`iconOnly\` | кнопка лише з іконкою в \`children\` (бургер), відступи 12 px з усіх боків; обов'язковий \`aria-label\` | \`false\` |
| \`href\` | адреса сторінки чи якоря (\`#cases\`); з нею кнопка стає посиланням | немає |
| \`disabled\` | \`true\`, \`false\` | \`false\` |
| \`disabledReason\` | текст пояснення під вимкненою кнопкою | немає |

Решта звичайних атрибутів кнопки (\`onClick\`, \`type\`, \`aria-*\`) передаються далі. \`type\` за замовчуванням \`button\`. Якщо задано \`href\`, замість \`<button>\` виходить посилання (\`next/link\`) з тим самим виглядом, а \`disabled\`, \`type\` і \`onClick\` не діють.

### Варіанти і стани

- **primary** — заливка \`accent\`, текст \`on-accent\` (контраст 11,56:1). Hover: заливка й межа стають \`ink\` (19,85:1).
- **secondary** — заливка \`canvas\`, межа \`ink-muted\` (7,81:1 на \`canvas\`), текст \`ink\`. Hover: заливка \`line-subtle\`.
- **tinted** — рожева заливка \`surface\`, межа \`line\`, текст \`ink\`. Hover: заливка \`line-subtle\`. Для кнопки в шапці сайту.
- **focus** — контур 2 px кольору \`ink\` з відступом, видно лише з клавіатури (Tab). Контраст до фону \`canvas\` 19,85:1.
- **disabled** — приглушені кольори (\`surface\` + \`ink-muted\` для primary, \`line-subtle\` + \`ink-muted\` для secondary, \`surface\` + \`line-subtle\` + \`ink-muted\` для tinted). Кнопка лишається у фокусі: замість атрибута \`disabled\` стоїть \`aria-disabled\`, клік нічого не робить. Якщо задано \`disabledReason\`, пояснення показується під кнопкою й зв'язане з нею через \`aria-describedby\`.
- **розміри** — \`md\` (відступи 24 і 12 px, текст \`text-button\`) і \`lg\` (32 і 16 px, текст \`text-body\`).
- **icon** — \`arrow\` додає стрілку 32 px після тексту, колір береться від тексту кнопки (\`currentColor\`). Зі стрілкою бокові відступи вдвічі менші (12 px для \`md\`, 16 px для \`lg\`). Стрілка декоративна, для скрінрідерів прихована.

### Токени

\`accent\`, \`on-accent\`, \`ink\`, \`ink-muted\`, \`surface\`, \`line\`, \`line-subtle\`, \`rounded-control\`, \`text-button\`, \`text-body\`, \`text-caption\` (пояснення).

### Коли використовувати

- \`primary\` — одна головна дія в блоці (наприклад, «Написати мені»).
- \`secondary\` — другорядна дія поруч із головною.
- \`tinted\` — кнопка в шапці сайту («Написати»), яка має виділятися на тлі, але не конкурувати з головною дією героя.
- Вимкнену кнопку завжди супроводжуй \`disabledReason\`: людина має зрозуміти, чому дія недоступна.
- Для переходу на сторінку чи секцію задай \`href\`: вийде посилання, а не кнопка.
- \`icon="arrow"\` — для кнопок, що кудись ведуть («Переглянути роботи»). Для дій на місці (надіслати форму) стрілка не потрібна.

### Як брати в код

\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="primary" size="lg">Написати мені</Button>

<Button href="#cases" icon="arrow">Переглянути роботи</Button>

<Button disabled disabledReason="Заповніть усі поля форми">
  Надіслати
</Button>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "tinted"] },
    size: { control: "select", options: ["md", "lg"] },
    icon: { control: "select", options: ["none", "arrow"] },
    iconOnly: { control: "boolean" },
    href: { control: "text" },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    children: "Написати мені",
    variant: "primary",
    size: "md",
    icon: "none",
    disabled: false,
    disabledReason: "Заповніть усі поля форми",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
