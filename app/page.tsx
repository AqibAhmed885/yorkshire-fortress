import {
  ArrowRight,
  Castle,
  Check,
  ClipboardCheck,
  Eye,
  MapPin,
  Radio,
  ShieldCheck,
} from "lucide-react";
import { ServiceGrid } from "./components/ServiceGrid";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { Button } from "./components/ui/Button";
import { Container } from "./components/ui/Container";
import { Heading } from "./components/ui/Heading";
import { ImageCard } from "./components/ui/ImageCard";
import { InsightCard } from "./components/ui/InsightCard";
import { Metric } from "./components/ui/Metric";
import { Paragraph } from "./components/ui/Paragraph";
import { SectionHeader } from "./components/ui/SectionHeader";
import { insights, sectors } from "./data";

const standards = [
  "People selected for professionalism and judgement",
  "Site-specific instructions and measured performance",
  "Responsive support when circumstances change",
];

const metrics = [
  { icon: Castle, title: "Yorkshire", copy: "rooted and responsive" },
  { icon: ShieldCheck, title: "6 focused", copy: "security services" },
  { icon: MapPin, title: "UK-wide", copy: "service capability" },
];

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section
        className="relative grid min-h-screen grid-cols-[1fr_1fr] overflow-hidden bg-navy-deep text-white max-lg:flex max-lg:min-h-0 max-lg:flex-col max-lg:pt-[126px]"
        id="top"
      >
        <div className="relative z-10 self-center py-[190px] pr-[5vw] pl-[max(24px,calc((100vw_-_1440px)/2))] max-lg:order-2 max-lg:px-6 max-lg:py-[70px] max-sm:px-[18px] max-sm:py-[55px]">
          <Heading as="h1" className="max-w-[720px] " size="xl" tone="white">
            Protection with
            <br />
            Yorkshire strength.
          </Heading>
          <Paragraph className="mt-7 max-w-[610px]" size="lead" tone="light">
            Professional guarding, vacant property inspection and response services that keep your
            people, premises and reputation secure.
          </Paragraph>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/services" size="large">
              Explore our services <ArrowRight size={19} />
            </Button>
            <Button href="/contact" size="large" variant="outline-light">
              Talk to our team
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-5 text-xs font-semibold text-[#dbe2ea]">
            <span className="flex items-center gap-2">
              <ShieldCheck className="text-tan" size={19} />
              SIA-licensed personnel
            </span>
            <span className="flex items-center gap-2">
              <Eye className="text-tan" size={19} />
              Visible, accountable service
            </span>
          </div>
        </div>

        <div className="relative min-h-[810px] overflow-hidden rounded-bl-[50%] max-lg:order-1 max-lg:min-h-[500px] max-lg:rounded-t-[260px] max-lg:rounded-b-none max-sm:min-h-[390px] max-sm:rounded-t-[195px]">
          <video
            className="absolute inset-0 h-full  w-full object-cover motion-reduce:hidden"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster="/media/yorkshire-fortress-protection-poster.jpg"
            aria-hidden="true"
          >
            <source src="/media/yorkshire-fortress-protection.mp4" type="video/mp4" />
          </video>
          <img
            className="absolute inset-0 -bottom-16 hidden h-full w-full object-cover motion-reduce:block"
            src="/media/security-patrol-poster.jpg"
            alt="Security officers patrolling a commercial environment"
          />
          <span className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-black/10" />
          <div className="absolute right-[7%] bottom-[7%] flex items-center gap-4 border-l-4 border-tan bg-navy-deep/90 px-5 py-4 backdrop-blur">
            <img className="w-11" src="/brand/mark-light.png" alt="" />
            <span className="text-xs leading-[1.4] text-[#dbe2ea]">
              Yorkshire rooted.
              <br />
              <strong className="text-white">Protection focused.</strong>
            </span>
          </div>
        </div>
      </section>

      <Container id="main">
        <SectionHeader
          title={
            <>
              Six services.
              <br />
              One dependable team.
            </>
          }
          className=""
        >
          <div>
            <Paragraph className=" max-w-[760px]" size="lead">
              Yorkshire Fortress Security provides focused protection for organisations that need
              standards they can see and people they can trust.
            </Paragraph>
            <Paragraph className="mb-0 max-w-[720px]" tone="muted">
              Choose a single service or combine guarding, vacant property inspection and response
              into one joined-up security plan.
            </Paragraph>
          </div>
        </SectionHeader>
        <ServiceGrid />
        <div className="mt-9 flex justify-end">
          <Button href="/services" variant="text-navy">
            View all six services <ArrowRight size={18} />
          </Button>
        </div>
      </Container>

      <section className="grid grid-cols-2 bg-navy text-white max-lg:grid-cols-1">
        <div className="flex flex-col justify-center px-[clamp(35px,7vw,110px)] py-[90px]">
          {/* <Eyebrow className="text-tan">The Fortress standard</Eyebrow> */}
          <Heading className="max-w-[680px]" tone="white">
            Visible when needed. Dependable always.
          </Heading>
          <Paragraph className="mt-6 max-w-[650px]" tone="light">
            Security should feel calm, organised and reassuring. We combine capable people with
            clear procedures, active supervision and useful reporting.
          </Paragraph>
          <ul className="my-7 grid gap-3 p-0">
            {standards.map((item) => (
              <li className="flex items-start gap-3 text-sm font-semibold" key={item}>
                <Check className="mt-0.5 shrink-0 text-tan" size={18} />
                {item}
              </li>
            ))}
          </ul>
          <Button className="w-fit" href="/about" variant="text-light">
            Why clients choose us <ArrowRight size={18} />
          </Button>
        </div>
        <div className="min-h-[670px] max-lg:min-h-[500px] max-sm:min-h-[390px]">
          <img
            className="h-full w-full object-cover object-bottom-right"
            src="/media/security-guard.jpeg"
            alt="Security officer protecting a client site"
          />
        </div>
      </section>

      <section className="relative overflow-hidden bg-paper">
        <Container className="grid grid-cols-[.92fr_1.08fr] items-center gap-[8vw] max-lg:grid-cols-1">
          <div className="relative mx-auto flex w-full max-w-[590px] items-center justify-center py-2 max-lg:mt-10">
            <span className="absolute top-[8%] -right-[8%] h-48 w-48 rounded-full bg-tan/25 max-sm:right-0" />
            <span className="absolute bottom-[5%] -left-[5%] h-40 w-40 rounded-full border-[30px] border-navy/8 max-sm:left-0" />
            <span className="absolute top-1/2 right-[2%] left-[2%] h-3/5 -translate-y-1/2 rounded-[48%] bg-navy/5 blur-3xl" />
            <img
              className="relative z-10 h-auto max-h-[790px] w-full object-contain drop-shadow-[0_35px_35px_rgba(16,31,50,.22)]"
              src="/media/app.png"
              alt="Fortress Control mobile security management app showing live officer status, patrol checkpoints and incident reports"
            />
          </div>

          <div>
            <Heading className="max-w-[720px]">
              Smart Technology.
              <br />
              Better Security.
            </Heading>
            <Paragraph className="mt-7 max-w-[740px]" size="lead">
              Our dedicated security management app allows us to monitor and manage our security
              officers in real time, helping us ensure they are where they need to be and carrying
              out their duties effectively.
            </Paragraph>
            <Paragraph className="max-w-[740px]" tone="muted">
              This technology gives our management team greater oversight, faster response and
              improved accountability—helping us deliver a safer, more secure environment for your
              premises.
            </Paragraph>

            <div className="mt-9 grid grid-cols-3 gap-3 max-md:grid-cols-1">
              {[
                {
                  icon: MapPin,
                  title: "Live officer visibility",
                  copy: "Real-time oversight of attendance and assigned locations.",
                },
                {
                  icon: ClipboardCheck,
                  title: "Verified activity",
                  copy: "Clear records of patrol checks and completed site duties.",
                },
                {
                  icon: Radio,
                  title: "Faster response",
                  copy: "Quicker management awareness when attention is required.",
                },
              ].map(({ icon: Icon, title, copy }) => (
                <article className="border-t-4 border-tan bg-white p-5" key={title}>
                  <Icon className="mb-5 text-navy" size={25} />
                  <h3 className="mb-2 text-base font-extrabold text-navy">{title}</h3>
                  <p className="m-0 text-sm leading-[1.6] text-muted">{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <SectionHeader
          action={
            <Button href="/sectors" variant="text-navy">
              Explore sectors <ArrowRight size={18} />
            </Button>
          }
          eyebrow="Sectors"
          title="Security that understands your environment."
        />
        <div className="grid grid-cols-4 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {sectors.slice(0, 4).map((sector) => (
            <ImageCard
              description={sector.copy}
              href="/sectors"
              image={sector.image}
              // index={index}
              key={sector.title}
              title={sector.title}
            />
          ))}
        </div>
      </Container>

      <section className="grid grid-cols-3 bg-paper px-[max(24px,calc((100vw_-_1240px)/2))] py-[65px] max-md:grid-cols-1 max-md:gap-8">
        {metrics.map((metric) => (
          <Metric {...metric} key={metric.title} />
        ))}
      </section>

      <Container>
        <SectionHeader
          action={
            <Button href="/insights" variant="text-navy">
              View all insights <ArrowRight size={18} />
            </Button>
          }
          eyebrow="Insights & news"
          title="Practical thinking for safer places."
        />
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {insights.slice(0, 3).map((item) => (
            <InsightCard {...item} key={item.title} />
          ))}
        </div>
      </Container>

      <SiteFooter />
    </main>
  );
}
