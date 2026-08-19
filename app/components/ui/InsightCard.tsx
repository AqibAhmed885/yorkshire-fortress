import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { Insight } from "../../data";
import { Heading } from "./Heading";
import { Paragraph } from "./Paragraph";

type InsightCardProps = Pick<Insight, "category" | "copy" | "date" | "image" | "slug" | "title">;

export function InsightCard({ category, copy, date, image, slug, title }: InsightCardProps) {
  const href = `/insights/${slug}`;

  return (
    <article className="group flex h-full flex-col border-b-4 border-navy bg-paper">
      <Link className="relative block h-[270px] overflow-hidden" href={href}>
        <img
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          src={image}
          alt=""
        />
        <span className="absolute bottom-0 left-0 bg-tan px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.12em] text-onyx">
          {category}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <small className="text-[11px] uppercase tracking-[.1em] text-muted">{date}</small>
        <Heading as="h3" className="my-3" size="sm" weight="semibold">
          {title}
        </Heading>
        <Paragraph className="mt-0" size="small" tone="muted">
          {copy}
        </Paragraph>
        <Link
          className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-extrabold text-navy"
          href={href}
        >
          Read full insight <ArrowRight size={17} />
        </Link>
      </div>
    </article>
  );
}
