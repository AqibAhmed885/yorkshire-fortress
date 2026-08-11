import type { Metadata } from "next";
import { ArrowDown, Check, Mail, MapPin, ShieldCheck } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Contact Yorkshire Fortress Security",
  description: "Request a security review for guarding, key holding, alarm response, door supervision, mobile patrols or event security.",
};

const steps = [
  { number: "01", title: "Tell us about the site", copy: "Share the location, operating pattern, service you need and the risks you want to address." },
  { number: "02", title: "We review the requirement", copy: "Our team considers the right people, coverage and response plan for your environment." },
  { number: "03", title: "Receive a clear proposal", copy: "We set out the recommended service, mobilisation approach and next steps without unnecessary complexity." },
];

export default function ContactPage() {
  return <main>
    <SiteHeader />
    <section className="yfs-contact-hero" id="top">
      <div className="yfs-contact-hero-copy">
        <p className="yfs-kicker tan">Contact Yorkshire Fortress</p>
        <h1>Let’s plan protection that fits.</h1>
        <p>Whether you need a single officer, reliable out-of-hours response or a coordinated security plan, start the conversation here.</p>
        <a href="#enquiry">Make an enquiry <ArrowDown size={18} /></a>
        <div className="yfs-contact-proof"><span><Check /> Clear, practical advice</span><span><Check /> Site-led planning</span><span><Check /> Six focused services</span></div>
      </div>
      <div className="yfs-contact-hero-image">
        <img src="/media/security-patrol-poster.jpg" alt="Security officers patrolling a commercial environment" />
        <div className="yfs-contact-hero-card"><ShieldCheck /><span><small>Yorkshire rooted</small><strong>Protection focused.</strong></span></div>
      </div>
    </section>

    <section className="yfs-contact-main" id="enquiry">
      <aside className="yfs-contact-details">
        <p className="yfs-kicker">Start a conversation</p>
        <h2>Good security starts with understanding the site.</h2>
        <p className="lead">Tell us what you are protecting, what cover you need and when you need it. We’ll help shape the right next step.</p>
        <a className="yfs-contact-detail-card" href="mailto:info@yorkshirefortresssecurity.co.uk">
          <Mail />
          <span><small>Email our team</small><strong>info@yorkshirefortresssecurity.co.uk</strong></span>
        </a>
        <div className="yfs-contact-detail-card">
          <MapPin />
          <span><small>Service area</small><strong>Yorkshire and UK-wide capability</strong></span>
        </div>
        <div className="yfs-contact-checklist">
          <h3>Useful details to include</h3>
          <span><Check /> Site type and location</span>
          <span><Check /> Preferred service or cover</span>
          <span><Check /> Dates and operating hours</span>
          <span><Check /> Any known risks or priorities</span>
        </div>
      </aside>
      <ContactForm />
    </section>

    <section className="yfs-contact-steps">
      <div className="yfs-contact-steps-intro"><p className="yfs-kicker tan">What happens next</p><h2>A straightforward route to stronger security.</h2></div>
      <div className="yfs-contact-step-grid">{steps.map((step) => <article key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p></article>)}</div>
    </section>
    <SiteFooter hideContactBand />
  </main>;
}
