import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

export type WorkCardProps = {
  /** Назва роботи. */
  title: string;
  /** Короткий опис: одне-два речення. */
  description: string;
  /** Обкладинка, імпортована з теки `assets`. */
  cover: StaticImageData;
  /** Опис обкладинки для скрінрідера. Порожній рядок, якщо картинка суто декоративна. */
  coverAlt?: string;
  /** Адреса сторінки роботи. */
  href: string;
};

/**
 * Картка роботи: обкладинка, назва й короткий опис. Уся картка — одне посилання.
 */
export function WorkCard({ title, description, cover, coverAlt = "", href }: WorkCardProps) {
  return (
    <Link
      href={href}
      className={
        "flex flex-col overflow-hidden border border-line-subtle bg-canvas text-ink rounded-control " +
        "relative outline-offset-2 hover:border-ink-muted hover:bg-surface " +
        "hover:z-10 hover:-m-2 focus-visible:z-10 focus-visible:-m-2 " +
        "motion-safe:transition-all " +
        "focus-visible:outline-2 focus-visible:outline-ink"
      }
    >
      <div className="relative aspect-cover w-full">
        <Image
          src={cover}
          alt={coverAlt}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 p-6">
        <h3 className="text-heading">{title}</h3>
        <p className="text-body text-ink-muted">{description}</p>
      </div>
    </Link>
  );
}
