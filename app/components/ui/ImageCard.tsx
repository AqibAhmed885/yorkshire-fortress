import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ImageCard({
  description,
  href,
  image,
  title,
}: {
  description: string;
  href: string;
  image: string;
  index?: number;
  title: string;
}) {
  return (
    <Link
      className="group relative isolate min-h-[440px] overflow-hidden bg-navy text-white"
      href={href}
    >
      <Image
        className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        src={image}
        fill
        alt=""
      />
      <span className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/10 to-transparent" />
      {/* {index !== undefined && <span className="absolute top-5 left-5 text-[11px] tracking-[.16em] text-white/75">{String(index + 1).padStart(2, "0")}</span>} */}
      <span className="absolute right-14 bottom-6 left-5">
        <strong className="mb-2 block text-xl leading-[1.15]">{title}</strong>
        <small className="block leading-[1.5] text-[#dde2e6]">{description}</small>
      </span>
      <ArrowUpRight
        className="absolute right-5 bottom-6 text-tan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        size={20}
      />
    </Link>
  );
}
