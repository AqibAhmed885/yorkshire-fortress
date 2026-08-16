import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") || "localhost:3003";
  const origin = `${host.includes("localhost") ? "http" : "https"}://${host}`;
  const title = "Yorkshire Fortress Security | Professional Security Services";
  const description = "Security guards, key holding, alarm response, door supervisors, vehicle patrol inspections and event security.";
  return {
    title,
    description,
    icons: { icon: "/favicon.png" },
    openGraph: { title, description, type: "website", images: [{ url: `${origin}/og.png`, width: 1536, height: 805, alt: "Yorkshire Fortress Security — Protection with Yorkshire strength" }] },
    twitter: { card: "summary_large_image", title, description, images: [`${origin}/og.png`] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
