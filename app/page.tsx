import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Navigation } from "@/components/Navigation";
import { WorkCard } from "@/components/WorkCard";
import { StickyHeader } from "./StickyHeader";
import workCover from "@/assets/work-cover-example.svg";
import circle from "@/assets/hero-circle-soft.svg";
import circleMobile from "@/assets/hero-circle-soft-mobile.svg";
import circleTablet from "@/assets/hero-circle-soft-tablet.svg";
import portrait from "@/assets/hero-portrait-cutout.png";
import portraitCircle from "@/assets/hero-portrait-circle-grain.svg";
import portraitCircleWide from "@/assets/hero-portrait-circle-grain-wide.svg";
import questionExclamation from "@/assets/hero-question-exclamation-3d.png";
import socialBehance from "@/assets/social-behance.svg";
import socialLinkedin from "@/assets/social-linkedin.svg";
import socialTelegram from "@/assets/social-telegram.svg";
import sticker from "@/assets/hero-sticker-3d.png";

// Сторінок «Роботи», «Про мене», «Контакти» ще немає, тому пункти меню ведуть на якорі.
const navItems = [
  { label: "Роботи", href: "#cases" },
  { label: "Про мене", href: "#about" },
  { label: "Контакти", href: "#contacts" },
];

const processSteps = [
  "UI/UX",
  "Research",
  "User flow",
  "CJM",
  "Wireframe",
  "Adaptive design",
  "Prototyping",
];

// На телефоні етапи стоять поруч із портретом у такі рядки, як у макеті 375.
const processRows = [
  processSteps.slice(0, 2),
  processSteps.slice(2, 4),
  processSteps.slice(4, 5),
  processSteps.slice(5, 6),
  processSteps.slice(6),
];

const works = [
  {
    title: "Застосунок для трекінгу звичок",
    description:
      "Роль: UI-дизайнерка. Навчальний проєкт: мобільні екрани, user flow і прототип у Figma.",
  },
  {
    title: "Сайт кав'ярні",
    description:
      "Роль: UI-дизайнерка. Навчальний проєкт: адаптивний лендінг з меню та формою бронювання.",
  },
  {
    title: "Кабінет онлайн-курсу",
    description:
      "Роль: UX/UI-дизайнерка. Навчальний проєкт: дослідження, CJM і дизайн особистого кабінету.",
  },
];

const socials = [
  { label: "Telegram", href: "https://t.me/OlaStetsukh", icon: socialTelegram },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olesia-stetsiukh-aa0279408/",
    icon: socialLinkedin,
  },
  { label: "Behance", href: "https://www.behance.net/970dfa27", icon: socialBehance },
];

function SocialLinks({ className, itemClassName }: { className: string; itemClassName?: string }) {
  return (
    <ul className={className}>
      {socials.map((social) => (
        <li key={social.label} className={itemClassName}>
          <a
            href={social.href}
            aria-label={social.label}
            target="_blank"
            rel="noopener noreferrer"
            className="block outline-offset-2 motion-safe:transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-ink"
          >
            <Image src={social.icon} alt="" aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
}

function Bullet({ className }: { className?: string }) {
  return (
    <span aria-hidden="true" className={className}>
      •
    </span>
  );
}

export default function Home() {
  return (
    <main id="top" className="relative overflow-clip bg-canvas">
      {/*
        Декор: великі рожеві кола. Шар повторює пропорції кадрів макета
        (375×1180, 768×1080, 1024×1080, 1300×1080, 1440×1080, 1920×1080),
        тому позиції частками збігаються з макетом на цих ширинах.
      */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 aspect-375/1180 md:aspect-32/45 lg:aspect-128/135 xl:aspect-65/54 wide:aspect-4/3 2xl:aspect-video"
      >
        {/* Телефон */}
        <div className="contents md:hidden">
          <Image src={circleMobile} alt="" className="absolute -top-71/590 -left-37/75 w-98/75 max-w-none" />
          <Image src={circleMobile} alt="" className="absolute top-107/295 left-169/375 w-98/75 max-w-none" />
          <Image src={circleMobile} alt="" className="absolute top-104/295 -left-334/375 w-98/75 max-w-none" />
        </div>
        {/* Планшет: на 1024 верхнього кола немає */}
        <div className="hidden md:contents xl:hidden">
          <Image
            src={circleTablet}
            alt=""
            className="absolute -top-11/1080 -left-173/384 w-95/96 max-w-none lg:top-19/360 lg:-left-109/512 lg:w-95/128"
          />
          <Image
            src={circleTablet}
            alt=""
            className="absolute -top-307/540 left-31/256 w-95/96 max-w-none lg:hidden"
          />
          <Image
            src={circleTablet}
            alt=""
            className="absolute top-29/1080 left-443/768 w-95/96 max-w-none lg:top-19/360 lg:left-531/1024 lg:w-95/128"
          />
        </div>
        {/* Десктоп */}
        <div className="hidden xl:contents">
          <Image
            src={circle}
            alt=""
            className="absolute top-57/1080 left-671/1300 w-803/1300 max-w-none wide:top-1/19 wide:left-18/35 wide:w-39/70 2xl:top-1/20 2xl:left-25/47 2xl:w-9/19"
          />
          <Image
            src={circle}
            alt=""
            className="absolute top-57/1080 -left-111/1300 w-803/1300 max-w-none wide:top-1/19 wide:-left-1/13 wide:w-39/70 2xl:top-1/20 2xl:-left-3/50 2xl:w-9/19"
          />
          <Image
            src={circle}
            alt=""
            className="absolute -top-633/1080 left-310/1300 w-803/1300 max-w-none wide:-top-27/46 wide:left-3/13 wide:w-39/70 2xl:-top-22/35 2xl:left-31/125 2xl:w-9/19"
          />
        </div>
      </div>

      {/* Шапка стоїть поза обгорткою героя, щоб лишатися вгорі на всій сторінці */}
      <StickyHeader>
        {/* Бокові поля: 16 px на телефоні, 32 від md, 60 від lg */}
        <div className="px-4 md:px-8 lg:mx-auto lg:w-113/128 lg:px-0 xl:w-59/65 wide:w-11/12 2xl:w-15/16">
          <div className="flex items-center justify-between gap-4 pt-6 md:pt-8">
            <Link
              href="/"
              className={
                "inline-block origin-left text-lead-mobile text-ink md:text-heading motion-safe:transition-transform " +
                "hover:scale-110 hover:text-accent focus-visible:scale-110 focus-visible:text-accent " +
                "outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink"
              }
            >
              Олеся Стецюх
            </Link>
            {/* Між меню й кнопкою 24 px на 768 і 48 px далі (разом із полем пункту меню) */}
            <div className="flex items-center gap-4 lg:gap-8">
              <Navigation items={navItems} />
              {/* На телефоні кнопки в шапці немає */}
              <div className="hidden md:flex">
                <Button href="#contacts" variant="tinted" className="md:px-4">
                  Написати
                </Button>
              </div>
            </div>
          </div>
        </div>
      </StickyHeader>

      <div className="relative flex min-h-screen flex-col">
        {/* Перший екран. Разом із нижнім полем шапки відступ зверху 24 px, від md 32 px */}
        <section className="mx-auto w-full max-w-page px-4 pt-2 pb-8 md:px-8 md:pt-4 md:pb-0lg:w-113/128 lg:px-0 xl:w-59/65 xl:pr-6 wide:w-11/12 2xl:w-5/6 2xl:pr-0">
          <div className="flex flex-col md:flex-row md:items-start xl:items-center xl:justify-between xl:pt-3 xl:pr-6 wide:pr-8 2xl:pt-6 2xl:pr-0">
            <div className="flex flex-col gap-8 md:w-29/60 md:shrink-0 lg:w-5/12 xl:w-1/2 wide:w-6/13 2xl:w-2/5">
              <div className="relative flex flex-col items-center gap-4 text-center md:items-start md:gap-6 md:text-left xl:gap-8">
                <p className="text-caption uppercase md:text-body">UI-дизайнерка · Figma</p>
                <h1 className="text-display-mobile break-words md:text-display-tablet md:whitespace-nowrap xl:text-display">
                  Від ідеї
                  <br aria-hidden="true" />
                  до екранів
                  <br aria-hidden="true" />
                  разом.
                </h1>
                <p className="text-lead-mobile w-full md:text-lead xl:w-9/10 wide:w-7/8 2xl:w-5/6">
                  Допоможу стартапам і малому бізнесу пройти шлях від ідеї до готових UI-екранів у Figma —
                  разом, крок за кроком.
                </p>
                {/* «?!» на телефоні стоїть біля заголовка */}
                <Image
                  src={questionExclamation}
                  alt=""
                  aria-hidden="true"
                  sizes="30vw"
                  className="absolute top-1/13 left-17/22 w-12/53 rotate-25 md:hidden"
                />
              </div>
              {/* З 1280 px відступ 96 px: три кроки по 32 px */}
              <div className="xl:pt-8">
                <div className="xl:pt-8">
                  <div className="flex flex-col gap-6 xl:flex-row xl:items-center">
                    <Button href="#cases" icon="arrow" className="max-md:h-15">
                      Переглянути роботи
                    </Button>
                    <Button href="#contacts" variant="secondary" icon="arrow" className="max-md:h-15">
                      Написати мені
                    </Button>
                  </div>
                </div>
              </div>
              {/* На телефоні соцмережі в ряд під кнопками; 48 px між іконками: gap 24 + по 12 px з боків */}
              <SocialLinks
                className="flex items-center justify-center gap-6 md:hidden"
                itemClassName="px-3"
              />
            </div>

            {/*
              Портрет зі стікером і декором. До 1280 px позиції рахуються від внутрішнього блока
              (його пропорції вміщують стікер), з 1280 px від зовнішнього.
              Від 1024 до 1379 px весь блок зменшений на 10%, нижній край лишається на місці.
            */}
            <div className="sm:mx-auto sm:w-2/3 md:mx-0 md:w-auto md:flex-1 md:pt-6 lg:max-roomy:origin-bottom lg:max-roomy:scale-90 lg:pt-0 xl:relative xl:w-25/53 xl:flex-none xl:pt-8 xl:pb-4 wide:w-41/80 wide:pb-0 2xl:w-10/21">
              <div className="pt-6 lg:pt-2 xl:pt-0">
                <div className="relative aspect-343/298 md:aspect-364/445 lg:aspect-527/548 xl:static xl:aspect-auto xl:pt-2 wide:pt-6">
                  <Image
                    src={portraitCircle}
                    alt=""
                    aria-hidden="true"
                    className="absolute top-1/6 left-7/45 hidden w-29/35 max-w-none xl:block wide:top-3/14 wide:left-7/24 wide:w-13/18 2xl:hidden"
                  />
                  <Image
                    src={portraitCircleWide}
                    alt=""
                    aria-hidden="true"
                    className="absolute top-2/21 left-2/7 hidden w-29/40 max-w-none 2xl:block"
                  />
                  <div className="relative ml-auto aspect-portrait w-4/7 overflow-hidden md:left-4/27 md:ml-0 md:w-7/9 lg:left-6/35 lg:w-31/42 xl:left-0 xl:w-19/21 wide:w-3/4 2xl:w-19/28">
                    <Image
                      src={portrait}
                      alt="Портрет Олесі Стецюх з квітковим татуюванням"
                      preload
                      sizes="(min-width: 1280px) 560px, (min-width: 768px) 450px, 70vw"
                      className="absolute -top-3/17 -left-2/25 w-8/7 max-w-none"
                    />
                  </div>
                  <ul
                    aria-label="Етапи роботи"
                    className="absolute top-2/25 left-1/25 flex flex-col items-center text-micro uppercase md:hidden"
                  >
                    {processRows.map((row) => (
                      <li key={row[0]} className="flex gap-2">
                        <Bullet />
                        {row.map((step) => (
                          <span key={step} className="contents">
                            <span>{step}</span>
                            <Bullet />
                          </span>
                        ))}
                      </li>
                    ))}
                  </ul>
                  <Image
                    src={sticker}
                    alt="Нічого складного, лише робочі рішення!"
                    sizes="(min-width: 1536px) 400px, (min-width: 768px) 320px, 65vw"
                    className="absolute top-21/58 -left-1/26 w-34/55 max-w-none md:top-3/7 md:w-7/9 lg:top-23/43 lg:-left-1/30 lg:w-7/13 xl:top-23/35 xl:-left-5/27 xl:w-11/21 wide:top-31/50 wide:-left-3/17 wide:w-9/19 2xl:top-14/25 2xl:-left-11/39 2xl:w-17/31"
                  />
                  {/* На 768 «?!» у макеті немає */}
                  <Image
                    src={questionExclamation}
                    alt=""
                    aria-hidden="true"
                    className="absolute -top-2/31 left-20/31 hidden w-3/8 max-w-none rotate-23 lg:block xl:-top-1/29 xl:left-3/5 xl:w-15/31 wide:-top-1/100 wide:left-8/15 wide:w-13/27 2xl:-top-1/15 2xl:left-27/58 2xl:w-13/22"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Стрічка процесу: з 768 px під героєм, з 1280 px в один рядок. Від 821 до 1023 px на 24 px ближче */}
        <div className="hidden md:block md:px-8 md:pt-6 compact:pt-0 lg:mx-auto lg:w-113/128 lg:px-8 lg:pt-0 xl:w-53/65 xl:px-0 xl:pt-8 wide:w-5/6 2xl:w-7/8">
          {/* Відступ зверху з 2xl 96 px: три кроки по 32 px */}
          <div className="2xl:pt-8">
            <ul
              aria-label="Етапи роботи"
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-6 text-body uppercase lg:py-4 xl:justify-between xl:gap-2 xl:px-0 xl:py-8"
            >
              <li aria-hidden="true" className="text-lead font-light">
                •
              </li>
              {processSteps.map((step, index) => (
                <li key={step} className="contents">
                  <span>{step}</span>
                  {/* На 768 після останнього етапу крапки немає */}
                  <Bullet
                    className={
                      "text-lead font-light" +
                      (index === processSteps.length - 1 ? " md:max-lg:hidden" : "")
                    }
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Роботи */}
      <section id="cases" className="relative mx-auto w-full max-w-page px-4 pt-8 pb-8 md:px-8">
        {/* Відступ зверху 96 px: три кроки по 32 px */}
        <div className="pt-8">
          <div className="pt-8">
            <div className="flex flex-col gap-8 lg:px-6 xl:px-8">
              <h2 className="text-display-mobile break-words md:text-display-tablet xl:text-display">
                Роботи
              </h2>
              <ul className="grid gap-6 md:grid-cols-3">
                {works.map((work) => (
                  <li key={work.title} className="flex">
                    <WorkCard
                      title={work.title}
                      description={work.description}
                      cover={workCover}
                      href="#cases"
                    />
                  </li>
                ))}
              </ul>
              <div>
                <Button href="#contacts" icon="arrow" className="max-md:h-15">
                  Написати мені
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Соцмережі з 768 px: висота від верху рахується в тому ж кадрі, що й декор */}
      <div className="pointer-events-none absolute inset-x-0 top-0 hidden md:block md:aspect-32/45 lg:aspect-128/135 xl:aspect-65/54 wide:aspect-4/3 2xl:aspect-video">
        {/* Між іконками 24 px, з 1280 px 48 px (gap 24 + по 12 px зверху й знизу) */}
        <SocialLinks
          className="pointer-events-auto absolute top-26/135 right-8 flex flex-col items-center gap-6 lg:top-151/540 lg:pr-8 xl:top-5/18 xl:pr-6 wide:pr-8 2xl:top-31/90 2xl:pr-6"
          itemClassName="xl:py-3"
        />
      </div>
    </main>
  );
}
