import type { Metadata } from "next";
import { ArrowRight, Mail } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { SiteFooter } from "../components/SiteFooter";
import { SiteHeader } from "../components/SiteHeader";
import { Button } from "../components/ui/Button";
import { Container } from "../components/ui/Container";
import { Heading } from "../components/ui/Heading";
import { InsightCard } from "../components/ui/InsightCard";
import { Paragraph } from "../components/ui/Paragraph";
import { insights } from "../data";
import { kicker, kickerTan } from "../styles";

export const metadata: Metadata = {
  title: "Insights & News | Yorkshire Fortress Security",
  description: "Practical security guidance for safer people, places and operations.",
};

export default function InsightsPage() {
  return (
    <main>
      <SiteHeader />
      <PageHero
        eyebrow="Insights & news"
        title="Practical guidance for safer places."
        copy="Clear thinking on guarding, response, patrols, events and the risks security leaders face every day."
        image="/media/alarm-response.jpg"
      />

      <Container id="main">
        <div className="mb-12 max-w-[820px]">
          <p className={kicker}>Latest thinking</p>
          <Heading>Useful, considered and ready to apply.</Heading>
          <Paragraph className="mt-5 max-w-[720px]" tone="muted">
            Detailed guidance written for people responsible for sites, teams, venues and business
            continuity.
          </Paragraph>
        </div>
        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
          {insights.map((item) => (
            <InsightCard {...item} key={item.slug} />
          ))}
        </div>
      </Container>

      <section className="flex items-center gap-7 bg-navy px-[max(24px,calc((100vw_-_1240px)/2))] py-[75px] text-white max-lg:flex-wrap max-sm:px-[18px]">
        <Mail className="shrink-0 text-tan" size={48} />
        <div className="mr-auto">
          <p className={kickerTan}>Stay informed</p>
          <Heading tone="white">Security insight, without the noise.</Heading>
          <Paragraph className="mb-0" tone="light">
            Occasional practical guidance for people responsible for sites, teams and operations.
          </Paragraph>
        </div>
        <Button href="mailto:info@yorkshirefortresssecurity.co.uk">
          Join the update list <ArrowRight size={18} />
        </Button>
      </section>
      <SiteFooter />
    </main>
  );
}
