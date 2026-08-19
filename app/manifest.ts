import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yorkshire Fortress Security",
    short_name: "Yorkshire Fortress",
    description:
      "Professional security services for organisations across Yorkshire and the United Kingdom.",
    start_url: "/",
    display: "standalone",
    background_color: "#07172b",
    theme_color: "#07172b",
    icons: [
      {
        src: "/favicon.png",
        sizes: "367x509",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
