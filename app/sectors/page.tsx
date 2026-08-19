import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { sectors } from "../data";
import { kicker, lead, navyButton, section, sectionHeading } from "../styles";

export const metadata: Metadata = {
  title: "Sectors | Yorkshire Fortress Security",
  description:
    "Security for construction, commercial property, education, retail, events and vacant premises.",
};

export default function SectorsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Sectors"
        title="Security that fits your environment."
        copy="The risks are different. The standard should never be. We adapt our people and procedures to the setting."
        image="/media/construction-night.jpg"
      />
      <section className={section} id="main">
        <div className="mb-14 grid grid-cols-[.9fr_1.1fr] gap-[10vw] max-lg:grid-cols-1 max-lg:gap-6">
          <div>
            <p className={kicker}>Sector experience</p>
            <h2 className={sectionHeading}>Prepared for the way your site really works.</h2>
          </div>
          <div>
            <p className={lead}>
              Security is more effective when the team understands the environment, the people using
              it and the operational pressures behind it.
            </p>
            <p className="text-muted">
              We design each deployment around your opening hours, access patterns, risk profile and
              customer experience.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
          {sectors.map((sector, index) => (
            <article
              className="group relative min-h-[530px] overflow-hidden text-white"
              key={sector.title}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                src={sector.image}
                alt=""
              />
              <span className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-transparent" />
              <span className="absolute top-6 left-6 text-xs tracking-[.16em]">0{index + 1}</span>
              <div className="absolute right-7 bottom-8 left-7">
                <h2 className="mb-3 text-[clamp(30px,4vw,44px)] leading-none">{sector.title}</h2>
                <p className="max-w-[570px] text-sm text-[#dce1e5]">{sector.copy}</p>
                <a
                  className="inline-flex items-center gap-2 font-extrabold text-tan"
                  href="/contact"
                >
                  Discuss this sector <ArrowRight />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="flex items-center justify-between gap-10 bg-paper px-[max(24px,calc((100vw_-_1240px)/2))] py-[75px] max-lg:flex-col max-lg:items-start max-sm:px-[18px]">
        <div>
          <h2 className="m-0 text-[clamp(32px,4vw,48px)] leading-[1.05] text-navy">
            Not sure which services fit your site?
          </h2>
          <p className="mb-0 max-w-[850px] text-muted">
            We can review your environment and recommend a proportionate mix of people, patrols and
            response cover.
          </p>
        </div>
        <a className={`${navyButton} shrink-0`} href="/contact">
          Request a security review <ArrowRight />
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
