import {
  ArrowRight,
  Check,
  ClipboardCheck,
  Eye,
  Handshake,
  MessagesSquare,
  Route,
  ShieldCheck,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { createPageMetadata } from "../seo";
import { kicker, kickerTan, navyButton, section, sectionHeading } from "../styles";
import Link from "next/link";

export const metadata = createPageMetadata({
  title: "About Yorkshire Fortress Security | Professional Security",
  description:
    "Meet the Yorkshire-rooted security company built around professional people, clear standards, accountable delivery and dependable protection.",
  path: "/about",
  keywords: ["about Yorkshire Fortress Security", "Yorkshire security company"],
});

export default function AboutPage() {
  const values = [
    [
      ShieldCheck,
      "01",
      "Professional",
      "Well-presented, well-briefed people who understand the responsibility placed in them.",
    ],
    [
      Eye,
      "02",
      "Vigilant",
      "Active observation, useful reporting and early action when something is not right.",
    ],
    [
      Handshake,
      "03",
      "Dependable",
      "Clear communication and consistent delivery—during routine shifts and unexpected incidents.",
    ],
  ];
  const model = [
    [
      Route,
      "01",
      "Understand the environment",
      "We consider the site, operating hours, access patterns, people, assets, known incidents and the outcome the client needs.",
    ],
    [
      ClipboardCheck,
      "02",
      "Define the assignment",
      "Roles, patrols, checkpoints, escalation contacts and reporting expectations are written clearly before the service begins.",
    ],
    [
      MessagesSquare,
      "03",
      "Keep communication open",
      "Useful reporting and a clear management route keep clients informed during routine delivery and when circumstances change.",
    ],
    [
      Eye,
      "04",
      "Review and improve",
      "Performance, incidents and operational changes inform adjustments to the security plan so the service stays relevant.",
    ],
  ];
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="About Yorkshire Fortress"
        title="Strong values. Capable people. Safer places."
        copy="A Yorkshire-rooted security partner committed to professional standards and dependable protection."
        image="/media/school.jpg"
      />
      <section
        className={`${section} grid grid-cols-[.8fr_1.2fr] gap-[10vw] max-lg:grid-cols-1 max-lg:gap-7`}
        id="main"
      >
        <div>
          <p className={kicker}>About our company</p>
          <h2 className={sectionHeading}>
            Professional security, shaped around the people and places it protects.
          </h2>
        </div>
        <div className="space-y-5 text-muted">
          <p className="text-[21px] leading-[1.46] font-semibold text-onyx">
            Yorkshire Fortress Security is a Yorkshire-rooted security company providing guarding,
            key holding, alarm response, door supervision, vacant property inspection and event
            security.
          </p>
          <p>
            We support organisations that want more than a uniform at the door. Our role is to
            understand how a site operates, identify where security can reduce risk and build a
            service with clear responsibilities, communication and evidence of delivery.
          </p>
          <p>
            That may mean a dedicated guarding presence during operating hours, controlled access
            outside them, scheduled checks of an unoccupied property or a planned team for a busy
            event. Services can stand alone or work together under one coordinated approach.
          </p>
          <p>
            We bring Yorkshire directness, care and practical judgement to every assignment. Clients
            should know who is protecting them, what that person is expected to do, how incidents
            will be escalated and how performance will be reviewed.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-3 bg-paper px-[max(24px,calc((100vw_-_1440px)/2))] py-[85px] max-lg:grid-cols-1 max-lg:gap-px">
        {values.map(([Icon, number, title, copy]) => {
          const ValueIcon = Icon as typeof ShieldCheck;
          return (
            <div
              className="border-r border-line px-10 first:pl-0 last:border-0 max-lg:border-r-0 max-lg:border-b max-lg:px-0 max-lg:py-8 max-lg:first:pt-0 max-lg:last:border-0 max-lg:last:pb-0"
              key={String(title)}
            >
              <ValueIcon className="mb-8 text-tan" size={38} />
              <span className="text-xs tracking-[.16em] text-muted">{String(number)}</span>
              <h3 className="my-2 text-2xl text-navy">{String(title)}</h3>
              <p className="m-0 text-sm text-muted">{String(copy)}</p>
            </div>
          );
        })}
      </section>
      <section className="grid grid-cols-2 bg-navy text-white max-lg:grid-cols-1">
        <div className="min-h-[650px] max-sm:min-h-[390px]">
          <img
            className="h-full w-full object-cover"
            src="/media/insight-security-review-uk.jpg"
            alt="Security professional managing a busy public event"
          />
        </div>
        <div className="flex flex-col justify-center px-[clamp(35px,7vw,110px)] py-[90px]">
          <p className={kickerTan}>Our people</p>
          <h2 className={`${sectionHeading} !text-white`}>
            The standard starts with who we put on your site.
          </h2>
          <p className="text-[#d4dce6]">
            We look for calm judgement, communication and pride in the job. Site-specific briefings
            and active supervision help officers understand not only what to do, but why it matters.
          </p>
          <ul className="my-6 grid gap-3 p-0">
            {[
              "Role and site-appropriate selection",
              "Clear responsibilities and escalation routes",
              "Ongoing performance support",
            ].map((item) => (
              <li className="flex items-center gap-3 text-sm font-bold" key={item}>
                <Check className="text-tan" size={18} />
                {item}
              </li>
            ))}
          </ul>
          <Link
            className="flex w-fit items-center gap-2 border-b border-tan pb-1 font-extrabold text-tan"
            href="/services"
          >
            Explore our services <ArrowRight />
          </Link>
        </div>
      </section>
      <section className={section}>
        <div className="mb-12">
          <p className={kicker}>Our service model</p>
          <h2 className={`${sectionHeading} max-w-[800px]`}>
            Clear from first review to everyday delivery.
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-px bg-line max-lg:grid-cols-2 max-sm:grid-cols-1">
          {model.map(([Icon, number, title, copy]) => {
            const ModelIcon = Icon as typeof Route;
            return (
              <article className="bg-white p-7" key={String(title)}>
                <ModelIcon className="mb-10 text-tan" size={34} />
                <span className="text-xs tracking-[.14em] text-muted">{String(number)}</span>
                <h3 className="my-3 text-xl text-navy">{String(title)}</h3>
                <p className="m-0 text-sm text-muted">{String(copy)}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="flex items-center justify-between gap-10 bg-paper px-[max(24px,calc((100vw_-_1240px)/2))] py-[75px] max-lg:flex-col max-lg:items-start max-sm:px-[18px]">
        <div className="grid grid-cols-[45px_1fr] gap-5">
          <ShieldCheck className="text-tan" size={42} />
          <span>
            <h2 className="m-0 text-[clamp(32px,4vw,48px)] leading-[1.05] text-navy">
              Need a security plan built around your site?
            </h2>
            <p className="mb-0 text-muted">
              Tell us what you protect, when you operate and where the pressure points are. We can
              help shape a proportionate service.
            </p>
          </span>
        </div>
        <a className={`${navyButton} shrink-0`} href="/contact">
          Talk to our team <ArrowRight />
        </a>
      </section>
      <SiteFooter />
    </main>
  );
}
