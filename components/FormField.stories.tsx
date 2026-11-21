import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FormField } from "./FormField";

const meta = {
  title: "Components/FormField",
  component: FormField,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: `
Текстове поле з підписом над ним: ім'я, пошта, повідомлення у формі зворотного зв'язку.

### Параметри

| Параметр | Значення | За замовчуванням |
| --- | --- | --- |
| \`label\` | підпис над полем (обов'язковий) | немає |
| \`defaultValue\` | початкове значення поля (стан «заповнене») | порожньо |
| \`placeholder\` | підказка в порожньому полі | немає |
| \`error\` | \`true\`, \`false\` | \`false\` |
| \`errorMessage\` | текст помилки під полем, показується лише при \`error\` | немає |
| \`disabled\` | \`true\`, \`false\` | \`false\` |

Решта атрибутів поля (\`name\`, \`type\`, \`required\`, \`onChange\`) передаються далі.

### Варіанти і стани

- **default** — межа \`ink-muted\` (7,81:1 на \`canvas\`), текст \`ink\`, підказка \`ink-muted\`.
- **hover** — межа стає \`ink\`.
- **focus** — контур 2 px кольору \`ink\` з відступом, видно з клавіатури й миші (19,85:1 до фону \`canvas\`).
- **заповнене** — те саме, що default, але з текстом у полі (\`defaultValue\`).
- **помилка** — межа \`danger\`, під полем іконка й текст помилки кольору \`danger\` (6,91:1 на \`canvas\`). Поле має \`aria-invalid\`, текст помилки зв'язаний з ним через \`aria-describedby\`.
- **disabled** — атрибут \`disabled\`, заливка \`surface\`, межа \`line-subtle\`, текст \`ink-muted\`. Помилка у вимкненому полі не показується.

Підпис завжди над полем і зв'язаний з ним (\`label\` + \`htmlFor\`).

### Токени

\`ink\`, \`ink-muted\`, \`danger\`, \`canvas\`, \`surface\`, \`line-subtle\`, \`rounded-control\`, \`text-body\` (поле), \`text-caption\` (підпис і помилка). Межа поля — \`ink-muted\`, не \`line\`.

### Коли використовувати

- Для будь-якого короткого тексту у формі. Підпис пиши завжди, підказкою його не замінюй.
- Текст помилки пиши конкретно: що не так і як виправити («Введіть пошту у форматі name@example.com»).
- Для довгого тексту потрібне окреме багаторядкове поле, цей компонент для нього не підходить.

### Як брати в код

\`\`\`tsx
import { FormField } from "@/components/FormField";

<FormField label="Пошта" name="email" type="email" placeholder="name@example.com" />

<FormField
  label="Пошта"
  defaultValue="olesia"
  error
  errorMessage="Введіть пошту у форматі name@example.com"
/>
\`\`\`
`,
      },
    },
  },
  argTypes: {
    label: { control: "text" },
    defaultValue: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "boolean" },
    errorMessage: { control: "text" },
    disabled: { control: "boolean" },
  },
  args: {
    label: "Пошта",
    defaultValue: "",
    placeholder: "name@example.com",
    error: false,
    errorMessage: "Введіть пошту у форматі name@example.com",
    disabled: false,
  },
} satisfies Meta<typeof FormField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  // key змушує поле перемалюватись, коли defaultValue змінюється в Controls.
  render: (args) => <FormField key={String(args.defaultValue)} {...args} />,
};
