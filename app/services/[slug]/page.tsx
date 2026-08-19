import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  ClipboardCheck,
  PhoneCall,
} from "lucide-react";
import { ServiceIcon } from "../../components/ServiceIcon";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { services } from "../../data";
import { kicker, kickerTan, navyButton, sectionHeading } from "../../styles";
import Link from "next/link";

const legacyServiceSlugs: Record<string, string> = {
  "vehicle-patrol-inspections": "vacant-property-inspection",
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = legacyServiceSlugs[slug] ?? slug;
  const service = services.find((item) => item.slug === canonicalSlug);
  return service
    ? { title: `${service.title} | Yorkshire Fortress Security`, description: service.summary }
    : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const canonicalSlug = legacyServiceSlugs[slug] ?? slug;
  if (canonicalSlug !== slug) redirect(`/services/${canonicalSlug}`);
  const service = services.find((item) => item.slug === canonicalSlug);
  if (!service) notFound();
  const currentIndex = services.findIndex((item) => item.slug === canonicalSlug);
  const next = services[(currentIndex + 1) % services.length];
  return (
    <main>
      <SiteHeader />
      <section
        className="grid min-h-screen grid-cols-[1fr_1fr] overflow-hidden bg-navy-deep pt-[142px] text-white max-lg:grid-cols-1 max-sm:pt-[126px]"
        id="top"
      >
        <div className="self-center py-[75px] pr-[6vw] pl-[max(24px,calc((100vw_-_1440px)/2))] max-lg:px-6 max-sm:px-[18px]">
          <div className="mb-8 flex items-center gap-2 text-xs text-[#bbc5d0]">
            <Link className="hover:text-tan" href="/services">
              Services
            </Link>
            <ChevronRight size={14} />
            <span>{service.shortTitle}</span>
          </div>
          <p className={kickerTan}>{service.eyebrow}</p>
          <h1 className="m-0 text-[clamp(50px,5.6vw,82px)] leading-[.96] tracking-[-.045em]">
            {service.title}
          </h1>
          <p className="mt-6 max-w-[620px] text-[19px] text-[#dbe2ea]">{service.summary}</p>
          <a
            className="mt-7 inline-flex items-center gap-3 bg-tan px-[19px] py-3.5 font-extrabold text-onyx"
            href="/contact"
          >
            Discuss your requirements <ArrowRight />
          </a>
        </div>
        <div className="relative min-h-[578px] overflow-hidden rounded-l-[50%] max-lg:min-h-[480px] max-lg:rounded-t-[250px] max-lg:rounded-b-none max-sm:min-h-[370px]">
          <img className="h-full w-full object-cover" src={service.image} alt="" />
          <span className="absolute right-[8%] bottom-[8%] grid size-16 place-items-center border border-white/40 bg-navy-deep/90 text-tan">
            <ServiceIcon name={service.icon} size={32} />
          </span>
        </div>
      </section>
      <section
        className="mx-auto grid w-[calc(100%_-_48px)] max-w-[1240px] grid-cols-[330px_1fr] gap-[8vw] py-[110px] max-lg:grid-cols-1 max-sm:w-[calc(100%_-_32px)] max-sm:py-[75px]"
        id="main"
      >
        <aside className="sticky top-[110px] h-fit border-t-4 border-tan bg-paper p-7 max-lg:static">
          <div className="mb-6 grid size-14 place-items-center bg-navy text-tan">
            <ServiceIcon name={service.icon} size={30} />
          </div>
          <h3 className="text-xl text-navy">At a glance</h3>
          {service.features.map((item) => (
            <span className="mb-3 flex items-start gap-2 text-sm" key={item}>
              <Check className="mt-0.5 shrink-0 text-tan" size={17} />
              {item}
            </span>
          ))}
          <a
            className="mt-6 flex items-center justify-center gap-2 bg-navy px-4 py-3 font-extrabold text-white"
            href="/contact"
          >
            <PhoneCall size={18} /> Request a callback
          </a>
        </aside>
        <article>
          <p className={kicker}>About this service</p>
          <p className="mb-10 text-[23px] leading-[1.48] font-semibold text-navy">
            {service.intro}
          </p>
          {service.sections.map((item) => (
            <section
              className="border-t border-line py-8 first:border-0 first:pt-0"
              key={item.title}
            >
              <h2 className="mt-0 text-[clamp(30px,4vw,44px)] leading-[1.08] text-navy">
                {item.title}
              </h2>
              <p className="text-muted">{item.copy}</p>
            </section>
          ))}
        </article>
      </section>
      <section className="grid grid-cols-2 max-lg:grid-cols-1">
        <div className="bg-paper px-[max(24px,calc((100vw_-_1240px)/2))] py-[85px] lg:pr-[6vw]">
          <Building2 className="mb-8 text-tan" size={42} />
          <p className={kicker}>Where it fits</p>
          <h2 className={`${sectionHeading} text-[clamp(34px,4vw,50px)]`}>
            Designed for real operating environments.
          </h2>
          <ul className="mt-7 grid gap-3 p-0">
            {service.suitableFor.map((item) => (
              <li className="flex items-start gap-3 text-sm font-bold" key={item}>
                <Check className="mt-0.5 shrink-0 text-tan" size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-navy px-[clamp(24px,6vw,100px)] py-[85px] text-white">
          <ClipboardCheck className="mb-8 text-tan" size={42} />
          <p className={kickerTan}>What you receive</p>
          <h2 className={`${sectionHeading} text-[clamp(34px,4vw,50px)] !text-white`}>
            A defined service, not a vague promise.
          </h2>
          <ul className="mt-7 grid gap-3 p-0">
            {service.clientReceives.map((item) => (
              <li className="flex items-start gap-3 text-sm font-bold" key={item}>
                <Check className="mt-0.5 shrink-0 text-tan" size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="flex flex-col items-center bg-navy-deep px-6 py-[95px] text-center text-white">
        <img className="mb-7 w-[60px]" src="/brand/mark-light.png" alt="" />
        <blockquote className="m-0 max-w-[900px] text-[clamp(27px,4vw,45px)] leading-[1.15] font-bold">
          “Security is strongest when good people, clear procedures and responsive support work as
          one.”
        </blockquote>
        <span className="mt-6 text-xs uppercase tracking-[.16em] text-tan">
          The Yorkshire Fortress approach
        </span>
      </section>
      <section className="flex items-end justify-between gap-8 px-[max(24px,calc((100vw_-_1240px)/2))] py-[80px] max-lg:flex-col max-lg:items-start max-sm:px-[18px]">
        <div>
          <p className={kicker}>Continue exploring</p>
          <h2 className="m-0 text-[clamp(34px,4vw,52px)] text-navy">{next.title}</h2>
          <p className="mb-0 max-w-[780px] text-muted">{next.summary}</p>
        </div>
        <a className={`${navyButton} shrink-0`} href={`/services/${next.slug}`}>
          Next service <ArrowRight />
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
