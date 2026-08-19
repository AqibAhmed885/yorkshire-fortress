import type { Metadata } from "next";
import { StructuredData } from "./components/StructuredData";
import "./globals.css";
import { createPageMetadata, organizationJsonLd, siteConfig, websiteJsonLd } from "./seo";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    path: "/",
    imageAlt: "Yorkshire Fortress Security — protection with Yorkshire strength",
    keywords: [
      "security guards Yorkshire",
      "key holding Yorkshire",
      "alarm response Yorkshire",
      "event security Yorkshire",
    ],
  }),
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "Security services",
  icons: { icon: "/favicon.png", apple: "/favicon.png" },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={siteConfig.language}>
      <body>
        <StructuredData data={[organizationJsonLd, websiteJsonLd]} />
        {children}
      </body>
    </html>
  );
}
