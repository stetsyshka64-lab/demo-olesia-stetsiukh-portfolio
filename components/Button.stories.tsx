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
| \`variant\` | \`primary\`, \`secondary\` | \`primary\` |
| \`size\` | \`md\`, \`lg\` | \`md\` |
| \`disabled\` | \`true\`, \`false\` | \`false\` |
| \`disabledReason\` | текст пояснення під вимкненою кнопкою | немає |

Решта звичайних атрибутів кнопки (\`onClick\`, \`type\`, \`aria-*\`) передаються далі. \`type\` за замовчуванням \`button\`.

### Варіанти і стани

- **primary** — заливка \`accent\`, текст \`on-accent\` (контраст 11,56:1). Hover: заливка й межа стають \`ink\` (19,85:1).
- **secondary** — без заливки, межа \`ink-muted\` (7,81:1 на \`canvas\`), текст \`ink\`. Hover: заливка \`surface\`.
- **focus** — контур 2 px кольору \`ink\` з відступом, видно лише з клавіатури (Tab). Контраст до фону \`canvas\` 19,85:1.
- **disabled** — приглушені кольори (\`surface\` + \`ink-muted\` для primary, \`line-subtle\` + \`ink-muted\` для secondary). Кнопка лишається у фокусі: замість атрибута \`disabled\` стоїть \`aria-disabled\`, клік нічого не робить. Якщо задано \`disabledReason\`, пояснення показується під кнопкою й зв'язане з нею через \`aria-describedby\`.
- **розміри** — \`md\` (відступи 24 і 12 px, текст \`text-button\`) і \`lg\` (32 і 16 px, текст \`text-body\`).

### Токени

\`accent\`, \`on-accent\`, \`ink\`, \`ink-muted\`, \`surface\`, \`line-subtle\`, \`rounded-control\`, \`text-button\`, \`text-body\`, \`text-caption\` (пояснення).

### Коли використовувати

- \`primary\` — одна головна дія в блоці (наприклад, «Написати мені»).
- \`secondary\` — другорядна дія поруч із головною.
- Вимкнену кнопку завжди супроводжуй \`disabledReason\`: людина має зрозуміти, чому дія недоступна.
- Не використовуй кнопку для переходу на іншу сторінку, там потрібне посилання.

### Як брати в код

\`\`\`tsx
import { Button } from "@/components/Button";

<Button variant="primary" size="lg">Написати мені</Button>

<Button disabled disabledReason="Заповніть усі поля форми">
  Надіслати
</Button>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary"] },
    size: { control: "select", options: ["md", "lg"] },
    disabled: { control: "boolean" },
    disabledReason: { control: "text" },
  },
  args: {
    children: "Написати мені",
    variant: "primary",
    size: "md",
    disabled: false,
    disabledReason: "Заповніть усі поля форми",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
