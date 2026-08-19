import type { Metadata } from "next";
import { ArrowDown, Check, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { kicker, kickerTan, lead, sectionHeading } from "../styles";

export const metadata: Metadata = {
  title: "Contact Yorkshire Fortress Security",
  description:
    "Request a security review for guarding, key holding, alarm response, door supervision, vacant property inspection or event security.",
};
const steps = [
  {
    number: "01",
    title: "Tell us about the site",
    copy: "Share the location, operating pattern, service you need and the risks you want to address.",
  },
  {
    number: "02",
    title: "We review the requirement",
    copy: "Our team considers the right people, coverage and response plan for your environment.",
  },
  {
    number: "03",
    title: "Receive a clear proposal",
    copy: "We set out the recommended service, mobilisation approach and next steps without unnecessary complexity.",
  },
];

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section
        className="grid min-h-screen grid-cols-[.95fr_1.05fr] overflow-hidden bg-navy-deep pt-[142px] text-white max-lg:grid-cols-1 max-sm:pt-[126px]"
        id="top"
      >
        <div className="self-center py-[80px] pr-[6vw] pl-[max(24px,calc((100vw_-_1440px)/2))] max-lg:px-6 max-sm:px-[18px]">
          <p className={kickerTan}>Contact Yorkshire Fortress</p>
          <h1 className="m-0 text-[clamp(50px,6vw,82px)] leading-[.96] tracking-[-.045em]">
            Let’s plan protection that fits.
          </h1>
          <p className="mt-6 max-w-[610px] text-[19px] text-[#dbe2ea]">
            Whether you need a single officer, reliable out-of-hours response or a coordinated
            security plan, start the conversation here.
          </p>
          <a
            className="mt-7 inline-flex items-center gap-2 font-extrabold text-tan"
            href="#enquiry"
          >
            Make an enquiry <ArrowDown size={18} />
          </a>
          <div className="mt-8 flex flex-wrap gap-4 border-t border-white/20 pt-5 text-xs">
            {["Clear, practical advice", "Site-led planning", "Six focused services"].map(
              (item) => (
                <span className="flex items-center gap-2" key={item}>
                  <Check className="text-tan" size={16} />
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
        <div className="relative min-h-[578px] overflow-hidden rounded-l-[50%] max-lg:min-h-[480px] max-lg:rounded-t-[250px] max-lg:rounded-b-none max-sm:min-h-[370px]">
          <img
            className="h-full w-full object-cover"
            src="/media/security-patrol-poster.jpg"
            alt="Security officers patrolling a commercial environment"
          />
          <div className="absolute right-[7%] bottom-[7%] flex items-center gap-3 border-l-4 border-tan bg-navy-deep/90 p-4">
            <ShieldCheck className="text-tan" />
            <span>
              <small className="block text-[10px] uppercase tracking-[.12em]">
                Yorkshire rooted
              </small>
              <strong>Protection focused.</strong>
            </span>
          </div>
        </div>
      </section>
      <section
        className="mx-auto grid w-[calc(100%_-_48px)] max-w-[1440px] grid-cols-[.75fr_1.25fr] gap-[7vw] py-[110px] max-lg:grid-cols-1 max-sm:w-[calc(100%_-_32px)] max-sm:py-[75px]"
        id="enquiry"
      >
        <aside>
          <p className={kicker}>Start a conversation</p>
          <h2 className={`${sectionHeading} text-[clamp(36px,4vw,52px)]`}>
            Good security starts with understanding the site.
          </h2>
          <p className={lead}>
            Tell us what you are protecting, what cover you need and when you need it. We’ll help
            shape the right next step.
          </p>
          <a
            className="mt-7 flex items-start gap-4 border border-line p-4 transition hover:border-tan"
            href="mailto:info@yorkshirefortresssecurity.co.uk"
          >
            <Mail className="shrink-0 text-tan" />
            <span>
              <small className="block text-xs text-muted">Email our team</small>
              <strong className="break-all text-sm text-navy">
                info@yorkshirefortresssecurity.co.uk
              </strong>
            </span>
          </a>
          <a
            className="mt-3 flex items-start gap-4 border border-line p-4 transition hover:border-tan"
            href="tel:+447435677545"
          >
            <Phone className="shrink-0 text-tan" />
            <span>
              <small className="block text-xs text-muted">Call our team</small>
              <strong className="text-sm text-navy">07435 677545</strong>
            </span>
          </a>
          <div className="mt-3 flex items-start gap-4 border border-line p-4">
            <MapPin className="shrink-0 text-tan" />
            <span>
              <small className="block text-xs text-muted">Service area</small>
              <strong className="text-sm text-navy">Yorkshire and UK-wide capability</strong>
            </span>
          </div>
          <div className="mt-8 border-l-4 border-tan bg-paper p-5">
            <h3 className="mt-0 text-lg text-navy">Useful details to include</h3>
            {[
              "Site type and location",
              "Preferred service or cover",
              "Dates and operating hours",
              "Any known risks or priorities",
            ].map((item) => (
              <span className="mb-2 flex items-center gap-2 text-sm" key={item}>
                <Check className="text-tan" size={16} />
                {item}
              </span>
            ))}
          </div>
        </aside>
        <ContactForm />
      </section>
      <section className="bg-navy px-[max(24px,calc((100vw_-_1440px)/2))] py-[95px] text-white max-sm:px-[18px]">
        <div className="mb-12 max-w-[800px]">
          <p className={kickerTan}>What happens next</p>
          <h2 className={`${sectionHeading} !text-white`}>
            A straightforward route to stronger security.
          </h2>
        </div>
        <div className="grid grid-cols-3 gap-px bg-white/20 max-lg:grid-cols-1">
          {steps.map((step) => (
            <article className="bg-navy-deep p-7" key={step.number}>
              <span className="text-xs tracking-[.16em] text-tan">{step.number}</span>
              <h3 className="mt-10 mb-2 text-xl">{step.title}</h3>
              <p className="m-0 text-sm text-[#cdd5df]">{step.copy}</p>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter hideContactBand />
    </main>
  );
}
