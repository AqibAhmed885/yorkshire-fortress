import type { Metadata } from "next";

const fallbackSiteUrl = "https://aegis-support-services-redesign.leafier-fetes-7qiw8r.chatgpt.site";

export const siteConfig = {
  name: "Yorkshire Fortress Security",
  legalName: "Yorkshire Fortress Security",
  url: (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, ""),
  locale: "en_GB",
  language: "en-GB",
  email: "info@yorkshirefortresssecurity.co.uk",
  phone: "+447435677545",
  areaServed: "Yorkshire and the United Kingdom",
  defaultTitle: "Yorkshire Fortress Security | Professional Security Services",
  defaultDescription:
    "Professional security guards, key holding, alarm response, door supervisors, vacant property inspection and event security across Yorkshire and the UK.",
  defaultImage: "/og.png",
} as const;

export function absoluteUrl(path = "/") {
  if (/^https?:\/\//.test(path)) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
};

const coreKeywords = [
  "security company Yorkshire",
  "professional security services UK",
  "SIA licensed security",
];

export function createPageMetadata({
  title,
  description,
  path,
  image = siteConfig.defaultImage,
  imageAlt = "Yorkshire Fortress Security professional security services",
  keywords = [],
  type = "website",
  publishedTime,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image);
  const images = [
    {
      url: socialImage,
      ...(image === siteConfig.defaultImage ? { width: 1731, height: 909 } : {}),
      alt: imageAlt,
    },
  ];
  const openGraph =
    type === "article"
      ? {
          title,
          description,
          url: canonical,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
          type: "article" as const,
          publishedTime,
          authors: [siteConfig.name],
          images,
        }
      : {
          title,
          description,
          url: canonical,
          siteName: siteConfig.name,
          locale: siteConfig.locale,
          type: "website" as const,
          images,
        };

  return {
    title,
    description,
    keywords: [...coreKeywords, ...keywords],
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteConfig.url,
  logo: absoluteUrl("/brand/logo-dark.png"),
  image: absoluteUrl(siteConfig.defaultImage),
  email: siteConfig.email,
  telephone: siteConfig.phone,
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: "GB",
    availableLanguage: "English",
  },
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.defaultDescription,
  inLanguage: siteConfig.language,
  publisher: { "@id": `${siteConfig.url}/#organization` },
};
