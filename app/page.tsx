import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import { Navigation } from "@/components/Navigation";
import circle from "@/assets/hero-circle.svg";
import exclamation from "@/assets/hero-exclamation.svg";
import portrait from "@/assets/hero-portrait.png";
import portraitCircle from "@/assets/hero-portrait-circle.svg";
import question from "@/assets/hero-question.svg";
import socialBehance from "@/assets/social-behance.svg";
import socialLinkedin from "@/assets/social-linkedin.svg";
import socialTelegram from "@/assets/social-telegram.svg";
import sticker from "@/assets/hero-sticker.svg";

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

const socials = [
  { label: "Telegram", href: "https://t.me/OlaStetsukh", icon: socialTelegram },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/olesia-stetsiukh-aa0279408/",
    icon: socialLinkedin,
  },
  { label: "Behance", href: "https://www.behance.net/970dfa27", icon: socialBehance },
];

export default function Home() {
  return (
    <main id="top" className="relative overflow-hidden bg-canvas">
      {/* Декор: великі рожеві кола */}
      <Image src={circle} alt="" aria-hidden="true" className="absolute -left-1/24 top-1/12 w-11/25" />
      <Image src={circle} alt="" aria-hidden="true" className="absolute left-1/2 top-1/8 w-11/25" />
      <Image src={circle} alt="" aria-hidden="true" className="absolute left-1/4 -top-3/5 w-11/25" />

      <div className="relative flex min-h-screen flex-col">
        {/* Шапка */}
        <header className="px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-6">
            <Link
              href="/"
              className={
                "inline-block origin-left text-heading text-ink motion-safe:transition-transform " +
                "hover:scale-110 hover:text-accent focus-visible:scale-110 focus-visible:text-accent " +
                "outline-offset-2 focus-visible:outline-2 focus-visible:outline-ink"
              }
            >
              Олеся Стецюх
            </Link>
            <div className="flex flex-wrap items-center gap-6">
              <Navigation items={navItems} />
              <Button href="#contacts" variant="tinted">
                Написати
              </Button>
            </div>
          </div>
        </header>

        {/* Перший екран */}
        <section className="mx-auto flex w-full max-w-page items-center px-8 pt-8 pb-8">
          <div className="grid w-full items-center gap-8 lg:grid-cols-2">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-8">
                <p className="text-body uppercase">UI-дизайнерка · Figma</p>
                <h1 className="text-display break-words">
                  Від ідеї
                  <br aria-hidden="true" />
                  до екранів
                  <br aria-hidden="true" />
                  разом.
                </h1>
                <p className="text-lead w-full lg:w-2/3">
                  Допоможу стартапам і малому бізнесу пройти шлях від ідеї до готових UI-екранів у Figma —
                  разом, крок за кроком.
                </p>
              </div>
              {/* 96 px у макеті: три кроки по 32 px */}
              <div className="pt-8">
                <div className="pt-8">
                  <div className="flex flex-wrap items-center gap-6">
                    <Button href="#cases" icon="arrow">
                      Переглянути роботи
                    </Button>
                    <Button href="#contacts" variant="secondary" icon="arrow">
                      Написати мені
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Портрет зі стікером і декором */}
            <div className="relative">
              <Image
                src={portraitCircle}
                alt=""
                aria-hidden="true"
                className="absolute right-0 top-0 w-5/6"
              />
              <div className="relative pt-8">
                <div className="pt-8">
                  <div className="relative aspect-portrait w-2/3 overflow-hidden rounded-card">
                    <Image
                      src={portrait}
                      alt="Портрет Олесі Стецюх з квітковим татуюванням"
                      fill
                      priority
                      sizes="(min-width: 1024px) 33vw, 67vw"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>
              <Image
                src={question}
                alt=""
                aria-hidden="true"
                className="absolute -top-1/6 left-7/12 w-3/10 -rotate-15"
              />
              <Image
                src={exclamation}
                alt=""
                aria-hidden="true"
                className="absolute -top-1/12 left-3/4 w-1/5 rotate-8"
              />
              <div className="absolute -left-1/3 top-2/3 w-1/2">
                <Image src={sticker} alt="" aria-hidden="true" className="w-full" />
                <p className="text-heading absolute inset-0 m-auto flex w-3/5 items-center justify-center text-center">
                  Нічого складного, лише робочі рішення!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Стрічка процесу */}
        <div className="px-8 pt-8">
          <ul className="flex flex-wrap items-center justify-between gap-4 px-8 py-8 text-body uppercase">
            <li aria-hidden="true" className="text-lead font-light">
              •
            </li>
            {processSteps.map((step) => (
              <li key={step} className="contents">
                <span>{step}</span>
                <span aria-hidden="true" className="text-lead font-light">
                  •
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Соцмережі */}
      <ul className="absolute right-8 top-1/3 hidden flex-col gap-6 lg:flex">
        {socials.map((social) => (
          // 48 px між іконками: gap 24 + по 12 px зверху й знизу
          <li key={social.label} className="py-3">
            <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer" className="block outline-offset-2 motion-safe:transition-transform hover:scale-110 focus-visible:scale-110 focus-visible:outline-2 focus-visible:outline-ink">
              <Image src={social.icon} alt="" aria-hidden="true" className="size-8" />
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
}
