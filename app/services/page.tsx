import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { ServiceGrid } from "../components/ServiceGrid";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { kicker, kickerTan, lead, primaryButton, section, sectionHeading } from "../styles";

export const metadata: Metadata = { title: "Security Services | Yorkshire Fortress Security", description: "Security guards, key holding, alarm response, door supervisors, vehicle patrol inspections and event security." };

export default function ServicesPage() {
  const steps = [["01", "Understand", "We learn your risks, environment and service expectations."], ["02", "Design", "We create clear post instructions, routes and escalation plans."], ["03", "Mobilise", "We brief the right people and make the transition controlled."], ["04", "Improve", "We review performance, reports and changing requirements."]];
  return <main><SiteHeader /><PageHero eyebrow="Our services" title="Protection that fits the way you operate." copy="Six focused security services, delivered individually or combined into one coordinated plan." image="/media/mobile-patrol.jpg" />
    <section className={section} id="main"><div className="mb-14 grid grid-cols-[.9fr_1.1fr] gap-[10vw] max-lg:grid-cols-1 max-lg:gap-6"><div><p className={kicker}>Built for real-world risk</p><h2 className={sectionHeading}>Clear services.<br />Flexible delivery.</h2></div><div><p className={lead}>Every assignment begins with your people, property, hours and priorities—not a generic package.</p><p className="text-muted">We agree the risks, responsibilities, escalation routes and reporting you need, then shape the service around them.</p></div></div><ServiceGrid /></section>
    <section className="bg-navy px-[max(24px,calc((100vw_-_1240px)/2))] py-[100px] text-white max-sm:px-[18px] max-sm:py-[75px]"><div className="mb-12 max-w-[760px]"><p className={kickerTan}>How we work</p><h2 className={`${sectionHeading} !text-white`}>From first conversation to confident cover.</h2></div><ol className="grid grid-cols-4 gap-px bg-white/20 p-0 max-lg:grid-cols-2 max-sm:grid-cols-1">{steps.map(([number, title, copy]) => <li className="list-none bg-navy-deep p-7" key={number}><span className="text-xs font-extrabold tracking-[.16em] text-tan">{number}</span><strong className="mt-10 mb-2 block text-xl">{title}</strong><p className="m-0 text-sm text-[#cdd5df]">{copy}</p></li>)}</ol></section>
    <section className="flex items-center justify-between gap-10 bg-paper px-[max(24px,calc((100vw_-_1240px)/2))] py-[75px] max-lg:flex-col max-lg:items-start max-sm:px-[18px]"><div className="grid grid-cols-[45px_1fr] items-start gap-5"><CheckCircle2 className="text-tan" size={42} /><span><h2 className="m-0 text-[clamp(32px,4vw,48px)] leading-[1.05] text-navy">Need more than one service?</h2><p className="mb-0 max-w-[800px] text-muted">Combine guarding, key holding, alarm response and mobile patrols under one accountable security partner.</p></span></div><a className={`${primaryButton} shrink-0 !bg-navy !text-white hover:!bg-navy-deep`} href="/contact">Build your security plan <ArrowRight /></a></section>
    <SiteFooter />
  </main>;
}
