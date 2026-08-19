import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ChevronRight, Clock, UserRound } from "lucide-react";
import Link from "next/link";
import { StructuredData } from "../../components/StructuredData";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteHeader } from "../../components/SiteHeader";
import { Button } from "../../components/ui/Button";
import { Container } from "../../components/ui/Container";
import { Heading } from "../../components/ui/Heading";
import { InsightCard } from "../../components/ui/InsightCard";
import { Paragraph } from "../../components/ui/Paragraph";
import { insights } from "../../data";
import { absoluteUrl, createPageMetadata, siteConfig } from "../../seo";

type InsightPageProps = { params: Promise<{ slug: string }> };

const legacyInsightSlugs: Record<string, string> = {
  "vehicle-patrol-inspection-checklist": "vacant-property-inspection-checklist",
};

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = legacyInsightSlugs[slug] ?? slug;
  const insight = insights.find((item) => item.slug === canonicalSlug);
  if (!insight) return {};

  return createPageMetadata({
    title: `${insight.title} | Yorkshire Fortress Security`,
    description: insight.copy,
    path: `/insights/${insight.slug}`,
    image: insight.image,
    imageAlt: insight.title,
    keywords: [insight.category, insight.title, "UK security advice"],
    type: "article",
    publishedTime: insight.publishedAt,
  });
}

export default async function InsightDetailPage({ params }: InsightPageProps) {
  const { slug } = await params;
  const canonicalSlug = legacyInsightSlugs[slug] ?? slug;
  if (canonicalSlug !== slug) redirect(`/insights/${canonicalSlug}`);
  const insight = insights.find((item) => item.slug === canonicalSlug);
  if (!insight) notFound();

  const related = insights.filter((item) => item.slug !== canonicalSlug).slice(0, 3);
  const articleUrl = absoluteUrl(`/insights/${insight.slug}`);
  const articleJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": `${articleUrl}#article`,
      headline: insight.title,
      description: insight.copy,
      image: absoluteUrl(insight.image),
      datePublished: insight.publishedAt,
      dateModified: insight.publishedAt,
      mainEntityOfPage: articleUrl,
      inLanguage: siteConfig.language,
      author: { "@id": `${siteConfig.url}/#organization` },
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteConfig.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insights & news",
          item: absoluteUrl("/insights"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: insight.title,
          item: articleUrl,
        },
      ],
    },
  ];

  return (
    <main>
      <StructuredData data={articleJsonLd} />
      <SiteHeader />
      <article>
        <header className="bg-navy-deep pt-[175px] pb-[90px] text-white max-sm:pt-[135px] max-sm:pb-[65px]">
          <Container as="div" spacing="none">
            <nav
              className="mb-10 flex items-center gap-2 text-xs text-white/65"
              aria-label="Breadcrumb"
            >
              <Link className="transition-colors hover:text-tan" href="/insights">
                Insights & news
              </Link>
              <ChevronRight size={14} />
              <span>{insight.category}</span>
            </nav>
            <p className="mb-4 text-xs font-extrabold uppercase tracking-[.18em] text-tan">
              {insight.category}
            </p>
            <Heading as="h1" className="max-w-[1050px]" size="2xl" tone="white">
              {insight.title}
            </Heading>
            <Paragraph className="mt-7 max-w-[780px]" size="lead" tone="light">
              {insight.copy}
            </Paragraph>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/15 pt-5 text-xs text-white/70">
              <span>{insight.date}</span>
              <span className="flex items-center gap-2">
                <Clock size={15} />
                {insight.readTime}
              </span>
              <span className="flex items-center gap-2">
                <UserRound size={15} />
                {insight.author}
              </span>
            </div>
          </Container>
        </header>

        <figure className="m-0 h-[clamp(360px,55vw,690px)] overflow-hidden bg-paper">
          <img className="h-full w-full object-cover" src={insight.image} alt={insight.title} />
        </figure>

        <Container className="grid grid-cols-[minmax(0,780px)_300px] items-start justify-between gap-[8vw] max-lg:grid-cols-1">
          <div>
            <p className="mb-8 text-[23px] leading-[1.55] font-semibold text-navy">
              {insight.copy}
            </p>
            <div className="space-y-11">
              {insight.content.map((paragraph, index) => (
                <section key={`${insight.slug}-${index}`}>
                  <Heading as="h2" className="mb-4" size="sm" weight="bold">
                    {insight.paragraphHeadings[index]}
                  </Heading>
                  <Paragraph className="m-0 text-[18px] leading-[1.75] text-[#3e4650]">
                    {paragraph}
                  </Paragraph>
                </section>
              ))}
            </div>
            <div className="mt-12 border-l-4 border-tan bg-paper p-7">
              <Heading as="h2" size="md">
                Ready to review your security plan?
              </Heading>
              <Paragraph tone="muted">
                Tell us about your site, operating hours and current concerns. Our team can help
                turn the guidance in this article into a proportionate working plan.
              </Paragraph>
              <Button href="/contact" variant="navy">
                Talk to our team <ArrowRight size={18} />
              </Button>
            </div>
          </div>

          <aside className="sticky top-[110px] border-t-4 border-tan bg-paper p-6 max-lg:static">
            <p className="mt-0 text-xs font-extrabold uppercase tracking-[.16em] text-navy">
              Key takeaways
            </p>
            <div className="mt-5 grid gap-4">
              {insight.takeaways.map((takeaway) => (
                <span
                  className="flex items-start gap-3 text-sm leading-[1.55] text-[#3e4650]"
                  key={takeaway}
                >
                  <Check className="mt-0.5 shrink-0 text-tan" size={18} />
                  {takeaway}
                </span>
              ))}
            </div>
            <Link
              className="mt-7 flex items-center gap-2 border-t border-line pt-5 text-sm font-extrabold text-navy"
              href="/insights"
            >
              <ArrowLeft size={17} />
              All insights
            </Link>
          </aside>
        </Container>
      </article>

      <section className="bg-paper">
        <Container>
          <div className="mb-10 flex items-end justify-between gap-6 max-sm:flex-col max-sm:items-start">
            <Heading>Continue reading.</Heading>
            <Button href="/insights" variant="text-navy">
              View every insight <ArrowRight size={18} />
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">
            {related.map((item) => (
              <InsightCard {...item} key={item.slug} />
            ))}
          </div>
        </Container>
      </section>
      <SiteFooter />
    </main>
  );
}
