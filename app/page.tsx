import { ArrowRight, Castle, Check, Eye, MapPin, ShieldCheck } from "lucide-react";
import { ServiceGrid } from "./components/ServiceGrid";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { insights, sectors } from "./data";

export default function Home() {
  return <main>
    <SiteHeader />
    <section className="yfs-home-hero" id="top">
      <div className="yfs-home-copy">
        <p className="yfs-kicker tan">Security built around you</p>
        <h1>Protection with Yorkshire strength.</h1>
        <p>Professional guarding, patrol and response services that keep your people, premises and reputation secure.</p>
        <div className="yfs-hero-actions"><a href="/services">Explore our services <ArrowRight /></a><a href="/contact" className="ghost">Talk to our team</a></div>
        <div className="yfs-hero-proof"><span><ShieldCheck /> SIA-licensed personnel</span><span><Eye /> Visible, accountable service</span></div>
      </div>
      <div className="yfs-home-visual">
        <video autoPlay muted loop playsInline preload="metadata" poster="/media/security-patrol-poster.jpg" aria-hidden="true">
          <source src="/media/security-patrol.mp4" type="video/mp4" />
        </video>
        <img className="yfs-video-fallback" src="/media/security-patrol-poster.jpg" alt="Security officers patrolling a commercial environment" />
        <div className="yfs-hero-mark"><img src="/brand/mark-light.png" alt="" /><span>Yorkshire rooted.<br /><strong>Protection focused.</strong></span></div>
      </div>
    </section>

    <section className="yfs-section" id="main">
      <div className="yfs-section-intro"><div><p className="yfs-kicker">What we do</p><h2>Six services.<br />One dependable team.</h2></div><div><p className="lead">Yorkshire Fortress Security provides focused protection for organisations that need standards they can see and people they can trust.</p><p>Choose a single service or combine guarding, patrol and response into one joined-up security plan.</p></div></div>
      <ServiceGrid />
      <div className="yfs-row-link"><a href="/services">View all six services <ArrowRight /></a></div>
    </section>

    <section className="yfs-values">
      <div className="yfs-values-image"><img src="/media/security-guard.jpg" alt="Security officer protecting a client site" /></div>
      <div className="yfs-values-copy"><p className="yfs-kicker tan">The Fortress standard</p><h2>Visible when needed. Dependable always.</h2><p>Security should feel calm, organised and reassuring. We combine capable people with clear procedures, active supervision and useful reporting.</p><ul><li><Check /> People selected for professionalism and judgement</li><li><Check /> Site-specific instructions and measured performance</li><li><Check /> Responsive support when circumstances change</li></ul><a href="/about">Why clients choose us <ArrowRight /></a></div>
    </section>

    <section className="yfs-section">
      <div className="yfs-title-row"><div><p className="yfs-kicker">Sectors</p><h2>Security that understands your environment.</h2></div><a href="/sectors">Explore sectors <ArrowRight /></a></div>
      <div className="yfs-sector-strip">{sectors.slice(0,4).map((sector) => <a href="/sectors" key={sector.title}><img src={sector.image} alt="" /><span><strong>{sector.title}</strong><small>{sector.copy}</small></span></a>)}</div>
    </section>

    <section className="yfs-stats"><div><Castle /><strong>Yorkshire</strong><span>rooted and responsive</span></div><div><ShieldCheck /><strong>6 focused</strong><span>security services</span></div><div><MapPin /><strong>UK-wide</strong><span>service capability</span></div></section>

    <section className="yfs-section yfs-insight-preview">
      <div className="yfs-title-row"><div><p className="yfs-kicker">Insights & news</p><h2>Practical thinking for safer places.</h2></div><a href="/insights">View all insights <ArrowRight /></a></div>
      <div className="yfs-news-grid">{insights.slice(0,3).map((item) => <article key={item.title}><a href="/insights" className="yfs-news-image"><img src={item.image} alt="" /><span>{item.category}</span></a><div><small>{item.date}</small><h3>{item.title}</h3><p>{item.copy}</p><a href="/insights">Read insight <ArrowRight size={17} /></a></div></article>)}</div>
    </section>
    <SiteFooter />
  </main>;
}
