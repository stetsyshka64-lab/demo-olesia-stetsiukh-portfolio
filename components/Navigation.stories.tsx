import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "./Navigation";

const meta = {
  title: "Components/Navigation",
  component: Navigation,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Навігація сайту: пункти меню в шапці. На вузькому екрані меню згортається в кнопку з іконкою бургер (відкрите меню показує хрестик). Щоб побачити це, відкрий Viewport у тулбарі Storybook і вибери мобільний розмір.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`items\` | список пунктів \`{ label, href }\` | Роботи, Про мене, Контакти |
| \`activeHref\` | адреса активного пункту | немає |
| \`menuLabel\` | доступна назва кнопки-бургера (\`aria-label\`) | «Меню» |

### Варіанти і стани

Пункт меню:

- **default** — текст \`ink\`, межа прозора (\`transparent\`), відступи 16 і 8 px, текст \`text-caption\` великими літерами. Від \`md\` пункти стоять впритул: між текстами 32 px, а між \`md\` і \`lg\` бокові відступи 8 px, тож між текстами 16 px.
- **hover** — текст стає кольору \`accent\` (11,56:1 на \`canvas\`) і підкреслюється лінією знизу.
- **focus** — те саме підкреслення й колір \`accent\`, плюс контур 2 px кольору \`ink\` з відступом, видно з клавіатури (Tab). Контраст контуру до фону \`canvas\` 19,85:1.
- **активний** — межа \`ink-muted\` (7,81:1 на \`canvas\`), пункт має \`aria-current="page"\`.

Вузький екран (менше ширини \`md\`):

- пункти ховаються за кнопкою-бургером (\`aria-expanded\`, \`aria-controls\`): іконка 40 px у квадратній рамці, без власної рамки кнопки;
- відкрите меню лежить поверх контенту (не зсуває сторінку), вирівняне по правому краю кнопки, на фоні \`canvas\` з межею \`line-subtle\`;
- закривається клавішею Escape (фокус повертається на кнопку) і вибором пункту.

### Токени

\`canvas\`, \`line-subtle\` (рамка меню та hover кнопки-бургера, яка є \`Button\` з \`variant="secondary"\` і \`iconOnly\`), \`accent\`, \`ink\`, \`ink-muted\`, \`rounded-control\`, \`text-caption\` (пункти).

### Коли використовувати

- Одна навігація в шапці кожної сторінки.
- \`activeHref\` став на поточну сторінку, щоб людина бачила, де вона.
- Пунктів має бути небагато (до п'яти), назви короткі.

### Як брати в код

\`\`\`tsx
import { Navigation } from "@/components/Navigation";

<Navigation activeHref="/works" />

<Navigation
  items={[
    { label: "Роботи", href: "/works" },
    { label: "Контакти", href: "/contacts" },
  ]}
  activeHref="/contacts"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    activeHref: {
      control: "select",
      options: [undefined, "/works", "/about", "/contacts"],
    },
    menuLabel: { control: "text" },
    items: { control: false },
  },
  args: {
    activeHref: "/works",
    menuLabel: "Меню",
  },
  decorators: [
    (Story) => (
      <div className="w-full p-4">
        <Story />
        <p className="p-6 text-body text-ink-muted">
          Контент сторінки під меню. Відкрите меню на вузькому екрані лежить поверх нього й не
          зсуває його вниз.
        </p>
      </div>
    ),
  ],
} satisfies Meta<typeof Navigation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
