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
Навігація сайту: пункти меню в шапці. На вузькому екрані меню згортається в кнопку «Меню». Щоб побачити це, відкрий Viewport у тулбарі Storybook і вибери мобільний розмір.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`items\` | список пунктів \`{ label, href }\` | Роботи, Про мене, Контакти |
| \`activeHref\` | адреса активного пункту | немає |
| \`menuLabel\` | текст кнопки на вузькому екрані | «Меню» |

### Варіанти і стани

Пункт меню:

- **default** — текст \`ink\`, межа прозора (\`transparent\`), відступи 16 і 8 px, текст \`text-caption\` великими літерами.
- **hover** — текст стає кольору \`accent\` (11,56:1 на \`canvas\`) і підкреслюється лінією знизу.
- **focus** — те саме підкреслення й колір \`accent\`, плюс контур 2 px кольору \`ink\` з відступом, видно з клавіатури (Tab). Контраст контуру до фону \`canvas\` 19,85:1.
- **активний** — межа \`ink-muted\` (7,81:1 на \`canvas\`), пункт має \`aria-current="page"\`.

Вузький екран (менше ширини \`md\`):

- пункти ховаються за кнопкою «Меню» (\`aria-expanded\`, \`aria-controls\`);
- відкрите меню лежить поверх контенту (не зсуває сторінку), на фоні \`canvas\` з межею \`line-subtle\`;
- закривається клавішею Escape (фокус повертається на кнопку) і вибором пункту.

### Токени

\`canvas\`, \`surface\` (hover кнопки «Меню»), \`accent\`, \`ink\`, \`ink-muted\`, \`line-subtle\`, \`rounded-control\`, \`text-caption\` (пункти), \`text-button\` (кнопка меню).

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
