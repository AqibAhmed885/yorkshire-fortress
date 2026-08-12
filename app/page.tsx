import { ArrowRight, Castle, Check, Eye, MapPin, ShieldCheck } from "lucide-react";
import { ServiceGrid } from "./components/ServiceGrid";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { insights, sectors } from "./data";
import { kicker, kickerTan, lead, primaryButton, section, sectionHeading, textLink } from "./styles";

export default function Home() {
  return <main>
    <SiteHeader />
    <section className="relative grid min-h-[810px] grid-cols-[.92fr_1.08fr] overflow-hidden bg-navy-deep text-white max-lg:flex max-lg:min-h-0 max-lg:flex-col max-lg:pt-[126px]" id="top">
      <div className="relative z-10 self-center py-[190px] pr-[5vw] pl-[max(24px,calc((100vw_-_1240px)/2))] max-lg:order-2 max-lg:px-6 max-lg:py-[70px] max-sm:px-[18px] max-sm:py-[55px]">
        <p className={kickerTan}>Security built around you</p>
        <h1 className="m-0 max-w-[670px] text-[clamp(55px,6.2vw,94px)] leading-[.92] font-extrabold tracking-[-.055em] max-sm:text-[48px]">Protection with Yorkshire strength.</h1>
        <p className="mt-7 max-w-[610px] text-[20px] leading-[1.5] text-[#dbe2ea]">Professional guarding, patrol and response services that keep your people, premises and reputation secure.</p>
        <div className="mt-8 flex flex-wrap gap-3"><a className={primaryButton} href="/services">Explore our services <ArrowRight /></a><a className="inline-flex items-center justify-center border border-white/45 px-[19px] py-3.5 font-extrabold transition hover:border-white hover:bg-white hover:text-navy" href="/contact">Talk to our team</a></div>
        <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-5 text-[12px] font-bold text-[#dbe2ea]"><span className="flex items-center gap-2"><ShieldCheck className="text-tan" size={19} /> SIA-licensed personnel</span><span className="flex items-center gap-2"><Eye className="text-tan" size={19} /> Visible, accountable service</span></div>
      </div>
      <div className="relative min-h-[810px] overflow-hidden rounded-l-[50%] max-lg:order-1 max-lg:min-h-[500px] max-lg:rounded-t-[260px] max-lg:rounded-b-none max-sm:min-h-[390px] max-sm:rounded-t-[195px]">
        <video className="absolute inset-0 h-full w-full object-cover motion-reduce:hidden" autoPlay muted loop playsInline preload="metadata" poster="/media/security-patrol-poster.jpg" aria-hidden="true"><source src="/media/security-patrol.mp4" type="video/mp4" /></video>
        <img className="absolute inset-0 hidden h-full w-full object-cover motion-reduce:block" src="/media/security-patrol-poster.jpg" alt="Security officers patrolling a commercial environment" />
        <span className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/10" />
        <div className="absolute right-[7%] bottom-[7%] flex items-center gap-4 border-l-4 border-tan bg-navy-deep/90 px-5 py-4 backdrop-blur"><img className="w-11" src="/brand/mark-light.png" alt="" /><span className="text-xs leading-[1.4] text-[#dbe2ea]">Yorkshire rooted.<br /><strong className="text-white">Protection focused.</strong></span></div>
      </div>
    </section>

    <section className={section} id="main">
      <div className="mb-14 grid grid-cols-[.9fr_1.1fr] gap-[10vw] max-lg:grid-cols-1 max-lg:gap-6"><div><p className={kicker}>What we do</p><h2 className={sectionHeading}>Six services.<br />One dependable team.</h2></div><div><p className={lead}>Yorkshire Fortress Security provides focused protection for organisations that need standards they can see and people they can trust.</p><p className="text-muted">Choose a single service or combine guarding, patrol and response into one joined-up security plan.</p></div></div>
      <ServiceGrid />
      <div className="mt-9 text-right"><a className={textLink} href="/services">View all six services <ArrowRight /></a></div>
    </section>

    <section className="grid grid-cols-2 bg-navy text-white max-lg:grid-cols-1">
      <div className="min-h-[670px] max-lg:min-h-[500px] max-sm:min-h-[390px]"><img className="h-full w-full object-cover" src="/media/security-guard.jpg" alt="Security officer protecting a client site" /></div>
      <div className="flex flex-col justify-center px-[clamp(35px,7vw,110px)] py-[90px]"><p className={kickerTan}>The Fortress standard</p><h2 className={`${sectionHeading} !text-white`}>Visible when needed. Dependable always.</h2><p className="mt-6 max-w-[650px] text-[#d4dce6]">Security should feel calm, organised and reassuring. We combine capable people with clear procedures, active supervision and useful reporting.</p><ul className="my-7 grid gap-3 p-0">{["People selected for professionalism and judgement", "Site-specific instructions and measured performance", "Responsive support when circumstances change"].map((item) => <li className="flex items-start gap-3 text-sm font-bold" key={item}><Check className="mt-0.5 shrink-0 text-tan" size={18} />{item}</li>)}</ul><a className="flex w-fit items-center gap-2.5 border-b border-tan pb-1.5 font-extrabold text-tan" href="/about">Why clients choose us <ArrowRight /></a></div>
    </section>

    <section className={section}>
      <div className="mb-12 flex items-end justify-between gap-8 max-md:items-start max-sm:flex-col"><div><p className={kicker}>Sectors</p><h2 className={`${sectionHeading} max-w-[790px]`}>Security that understands your environment.</h2></div><a className={`${textLink} shrink-0`} href="/sectors">Explore sectors <ArrowRight /></a></div>
      <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">{sectors.slice(0,4).map((sector) => <a className="group relative min-h-[440px] overflow-hidden text-white" href="/sectors" key={sector.title}><img className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" src={sector.image} alt="" /><span className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" /><span className="absolute right-5 bottom-6 left-5"><strong className="mb-2 block text-xl">{sector.title}</strong><small className="block leading-[1.45] text-[#dde2e6]">{sector.copy}</small></span></a>)}</div>
    </section>

    <section className="grid grid-cols-3 bg-paper px-[max(24px,calc((100vw_-_1240px)/2))] py-[65px] max-md:grid-cols-1 max-md:gap-8">{[[Castle, "Yorkshire", "rooted and responsive"], [ShieldCheck, "6 focused", "security services"], [MapPin, "UK-wide", "service capability"]].map(([Icon, title, copy]) => { const ItemIcon = Icon as typeof Castle; return <div className="flex items-center justify-center gap-4 border-r border-line last:border-0 max-md:justify-start max-md:border-r-0 max-md:border-b max-md:pb-8 max-md:last:border-0 max-md:last:pb-0" key={String(title)}><ItemIcon className="text-tan" size={34} /><span><strong className="block text-2xl text-navy">{String(title)}</strong><small className="text-muted">{String(copy)}</small></span></div>; })}</section>

    <section className={section}>
      <div className="mb-12 flex items-end justify-between gap-8 max-sm:flex-col max-sm:items-start"><div><p className={kicker}>Insights & news</p><h2 className={`${sectionHeading} max-w-[800px]`}>Practical thinking for safer places.</h2></div><a className={`${textLink} shrink-0`} href="/insights">View all insights <ArrowRight /></a></div>
      <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">{insights.slice(0,3).map((item) => <article className="border-b-4 border-navy bg-paper" key={item.title}><a className="relative block h-[270px] overflow-hidden" href="/insights"><img className="h-full w-full object-cover transition duration-500 hover:scale-105" src={item.image} alt="" /><span className="absolute bottom-0 left-0 bg-tan px-3 py-2 text-[10px] font-extrabold uppercase tracking-[.12em] text-onyx">{item.category}</span></a><div className="p-6"><small className="text-[11px] uppercase tracking-[.1em] text-muted">{item.date}</small><h3 className="my-3 text-[23px] leading-[1.15] text-navy">{item.title}</h3><p className="text-sm text-muted">{item.copy}</p><a className="flex items-center gap-2 text-sm font-extrabold text-navy" href="/insights">Read insight <ArrowRight size={17} /></a></div></article>)}</div>
    </section>
    <SiteFooter />
  </main>;
}
