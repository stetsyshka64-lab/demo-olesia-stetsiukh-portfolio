import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import cover from "@/assets/work-cover-example.svg";
import { WorkCard } from "./WorkCard";

const meta = {
  title: "Components/WorkCard",
  component: WorkCard,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Картка роботи в розділі «Роботи»: обкладинка, назва й короткий опис. Уся картка клікабельна й веде на сторінку роботи.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`title\` | назва роботи | немає |
| \`description\` | короткий опис, одне-два речення | немає |
| \`cover\` | обкладинка, імпортована з \`assets\` | немає |
| \`coverAlt\` | опис обкладинки для скрінрідера | порожній (декоративна) |
| \`href\` | адреса сторінки роботи | немає |

### Варіанти і стани

Варіантів і розмірів немає: картка тягнеться на ширину контейнера.

- **default** — межа \`line-subtle\`, фон \`canvas\`, назва \`ink\`, опис \`ink-muted\` (7,81:1).
- **hover** — фон \`surface\`, межа \`ink-muted\`, картка збільшується на 16 px по ширині (по 8 px з кожного боку) і виходить над сусідніми елементами. Опис на \`surface\` має контраст 6,71:1.
- **focus** — те саме збільшення, плюс контур 2 px кольору \`ink\` з відступом, видно з клавіатури (Tab). Контраст до фону \`canvas\` 19,85:1.
- Збільшення робиться від'ємним відступом (\`-m-2\`), тож залиш навколо картки хоча б 8 px вільного місця, інакше збільшена картка зайде на сусідів або за край контейнера. Для користувачів із вимкненою анімацією (\`prefers-reduced-motion\`) картка змінюється без плавного переходу.

### Токени

\`canvas\`, \`surface\`, \`line-subtle\`, \`ink\`, \`ink-muted\`, \`rounded-control\` (кути), \`aspect-cover\` (обкладинка), \`text-heading\` (назва), \`text-body\` (опис).

### Коли використовувати

- Для списку робіт на головній і сторінці «Роботи».
- Назва коротка, опис не довший за два речення.
- Обкладинку клади в \`assets\` і імпортуй у код, не бери з \`public\`.
- Для кнопки-дії на сторінці картка не підходить, там потрібна кнопка.

### Як брати в код

\`\`\`tsx
import cover from "@/assets/work-cover-example.svg";
import { WorkCard } from "@/components/WorkCard";

<WorkCard
  title="Мобільний застосунок для кав'ярні"
  description="Редизайн замовлення: від меню до оплати."
  cover={cover}
  coverAlt="Екрани застосунку"
  href="/works/coffee-app"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    coverAlt: { control: "text" },
    href: { control: "text" },
    cover: { control: false },
  },
  args: {
    title: "Мобільний застосунок для кав'ярні",
    description: "Редизайн замовлення: від меню до оплати.",
    cover,
    coverAlt: "Екрани застосунку",
    href: "#",
  },
  decorators: [
    (Story) => (
      <div className="w-1/2">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof WorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};
