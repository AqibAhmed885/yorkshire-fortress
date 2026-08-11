import { ArrowDown } from "lucide-react";

export function PageHero({ eyebrow, title, copy, image }: { eyebrow: string; title: string; copy: string; image: string }) {
  return <section className="yfs-page-hero" id="top"><div className="yfs-page-hero-copy"><p className="yfs-kicker tan">{eyebrow}</p><h1>{title}</h1><p>{copy}</p><a href="#main">Explore <ArrowDown size={18} /></a></div><div className="yfs-page-hero-image"><img src={image} alt="" /></div></section>;
}
