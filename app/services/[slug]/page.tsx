import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowRight, Check, ChevronRight, PhoneCall } from "lucide-react";
import { ServiceIcon } from "../../components/ServiceIcon";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { services } from "../../data";

export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const service = services.find((item) => item.slug === slug);
  return service ? { title: `${service.title} | Yorkshire Fortress Security`, description: service.summary } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const service = services.find((item) => item.slug === slug); if (!service) notFound();
  const currentIndex = services.findIndex((item) => item.slug === slug); const next = services[(currentIndex + 1) % services.length];
  return <main><SiteHeader />
    <section className="yfs-service-hero" id="top"><div className="yfs-service-hero-copy"><div className="yfs-breadcrumb"><a href="/services">Services</a><ChevronRight /> <span>{service.shortTitle}</span></div><p className="yfs-kicker tan">{service.eyebrow}</p><h1>{service.title}</h1><p>{service.summary}</p><a href="/contact">Discuss your requirements <ArrowRight /></a></div><div className="yfs-service-hero-image"><img src={service.image} alt="" /><span><ServiceIcon name={service.icon} size={32} /></span></div></section>
    <section className="yfs-service-content" id="main"><aside><div className="yfs-service-icon-large"><ServiceIcon name={service.icon} size={38} /></div><h3>At a glance</h3>{service.features.map((item) => <span key={item}><Check />{item}</span>)}<a href="/contact"><PhoneCall /> Request a callback</a></aside><article><p className="lead">{service.intro}</p>{service.sections.map((section) => <section key={section.title}><h2>{section.title}</h2><p>{section.copy}</p></section>)}</article></section>
    <section className="yfs-service-quote"><img src="/brand/mark-light.png" alt="" /><blockquote>“Security is strongest when good people, clear procedures and responsive support work as one.”</blockquote><span>The Yorkshire Fortress approach</span></section>
    <section className="yfs-next-service"><div><p className="yfs-kicker">Continue exploring</p><h2>{next.title}</h2><p>{next.summary}</p></div><a href={`/services/${next.slug}`}>Next service <ArrowRight /></a></section>
    <SiteFooter />
  </main>;
}
