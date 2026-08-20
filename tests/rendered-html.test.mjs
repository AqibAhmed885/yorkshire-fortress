import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const serviceSlugs = [
  "security-guards",
  "key-holding",
  "alarm-response",
  "door-supervisors",
  "vacant-property-inspection",
  "event-security",
];

const insightSlugs = [
  "choosing-the-right-guarding-model",
  "why-employees-should-not-attend-alarms-alone",
  "vacant-property-inspection-checklist",
  "building-safety-into-the-guest-experience",
  "warning-signs-security-plan-needs-review",
  "modern-door-supervision",
];

test("Next.js build contains every public route", async () => {
  const [appPathsSource, routesSource] = await Promise.all([
    readFile(new URL("../.next/server/app-paths-manifest.json", import.meta.url), "utf8"),
    readFile(new URL("../.next/routes-manifest.json", import.meta.url), "utf8"),
  ]);
  const appPaths = JSON.parse(appPathsSource);
  const routes = JSON.parse(routesSource);

  assert.equal(appPaths["/page"], "app/page.js");
  assert.equal(appPaths["/about/page"], "app/about/page.js");
  assert.equal(appPaths["/insights/page"], "app/insights/page.js");
  assert.equal(appPaths["/insights/[slug]/page"], "app/insights/[slug]/page.js");
  assert.equal(appPaths["/sectors/page"], "app/sectors/page.js");
  assert.equal(appPaths["/services/page"], "app/services/page.js");
  assert.equal(appPaths["/contact/page"], "app/contact/page.js");
  assert.equal(appPaths["/api/contact/route"], "app/api/contact/route.js");
  assert.equal(appPaths["/services/[slug]/page"], "app/services/[slug]/page.js");
  assert.ok(routes.staticRoutes.some((route) => route.page === "/"));
  assert.ok(routes.dynamicRoutes.some((route) => route.page === "/services/[slug]"));
  assert.ok(routes.dynamicRoutes.some((route) => route.page === "/insights/[slug]"));
});

test("keeps the completed site and current framework versions in source", async () => {
  const [
    page,
    data,
    layout,
    contact,
    insightPage,
    packageJson,
    globals,
    eslintConfig,
    prettierConfig,
    vercelConfig,
    seo,
    robots,
    sitemap,
    manifest,
    servicePage,
    contactForm,
    contactRoute,
    envExample,
  ] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/contact/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/insights/[slug]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../eslint.config.mjs", import.meta.url), "utf8"),
    readFile(new URL("../.prettierrc.json", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
    readFile(new URL("../app/seo.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/robots.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/sitemap.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/manifest.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/services/[slug]/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/components/ContactForm.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/api/contact/route.ts", import.meta.url), "utf8"),
    readFile(new URL("../.env.example", import.meta.url), "utf8"),
  ]);

  assert.match(page, /yorkshire-fortress-protection\.mp4/);
  assert.match(page, /autoPlay[\s\S]*muted[\s\S]*loop[\s\S]*playsInline/);
  assert.match(layout, /Yorkshire Fortress Security/);
  assert.match(layout, /metadataBase/);
  assert.match(layout, /organizationJsonLd/);
  assert.match(layout, /websiteJsonLd/);
  assert.match(seo, /alternates: \{ canonical \}/);
  assert.match(seo, /openGraph/);
  assert.match(seo, /twitter/);
  assert.match(seo, /max-image-preview/);
  assert.match(robots, /sitemap: absoluteUrl\("\/sitemap\.xml"\)/);
  assert.match(robots, /userAgent: "\*"/);
  assert.match(sitemap, /services\.map/);
  assert.match(sitemap, /insights\.map/);
  assert.match(manifest, /Yorkshire Fortress Security/);
  assert.match(servicePage, /"@type": "Service"/);
  assert.match(servicePage, /"@type": "BreadcrumbList"/);
  assert.match(insightPage, /"@type": "Article"/);
  assert.match(insightPage, /"@type": "BreadcrumbList"/);
  assert.doesNotMatch(page + layout, /codex-preview|_sites-preview|SkeletonPreview/);
  assert.match(contact, /Let’s plan protection that fits\./);
  assert.match(contact, /<ContactForm \/>/);
  assert.match(contact, /tel:\+447435677545/);
  assert.match(contact, /07435 677545/);
  assert.match(contactForm, /fetch\("\/api\/contact"/);
  assert.match(contactForm, /Send my enquiry/);
  assert.doesNotMatch(contactForm, /mailto:/);
  assert.match(contactRoute, /new Resend\(apiKey\)/);
  assert.match(contactRoute, /resend\.emails\.send/);
  assert.match(contactRoute, /process\.env\.RESEND_API_KEY/);
  assert.match(contactRoute, /replyTo: email/);
  assert.match(contactRoute, /escapeHtml/);
  assert.match(contactRoute, /allowedServices/);
  assert.match(envExample, /RESEND_API_KEY=\n/);
  assert.doesNotMatch(envExample, /re_[A-Za-z0-9]/);
  assert.match(page, /Smart Technology\./);
  assert.match(page, /dedicated security management app/);
  assert.match(page, /Live officer visibility/);
  assert.match(page, /\/media\/app\.png/);
  assert.match(page, /live officer status, patrol checkpoints and incident reports/);

  assert.equal(
    (data.match(/\bslug:\s*"/g) ?? []).length,
    serviceSlugs.length + insightSlugs.length,
  );
  assert.equal((data.match(/\bsuitableFor:\s*\[/g) ?? []).length, serviceSlugs.length);
  assert.equal((data.match(/\bclientReceives:\s*\[/g) ?? []).length, serviceSlugs.length);
  assert.equal((data.match(/\bpublishedAt:\s*"/g) ?? []).length, insightSlugs.length);
  for (const slug of serviceSlugs) {
    assert.match(data, new RegExp(`slug: "${slug}"`));
  }
  for (const slug of insightSlugs) {
    assert.match(data, new RegExp(`slug: "${slug}"`));
  }
  assert.match(data, /title: "Vacant Property Inspection"/);
  assert.match(data, /category: "Vacant property"/);
  assert.doesNotMatch(data, /Vehicle Patrol Inspection|Mobile Patrol/);
  const articleBodies = [...data.matchAll(/content:\s*\[([\s\S]*?)\n\s*\],/g)];
  const articleHeadingGroups = [...data.matchAll(/paragraphHeadings:\s*\[([\s\S]*?)\n\s*\],/g)];
  assert.equal(articleBodies.length, insightSlugs.length);
  assert.equal(articleHeadingGroups.length, insightSlugs.length);
  for (let index = 0; index < articleBodies.length; index += 1) {
    const paragraphCount = (articleBodies[index][1].match(/^\s*"/gm) ?? []).length;
    const headingCount = (articleHeadingGroups[index][1].match(/^\s*"/gm) ?? []).length;
    assert.ok(paragraphCount >= 6);
    assert.equal(headingCount, paragraphCount);
  }
  assert.ok(
    (data.match(/image: "\/media\/insight-.*-uk\.jpg"/g) ?? []).length >= insightSlugs.length,
  );
  assert.match(insightPage, /generateStaticParams/);
  assert.match(insightPage, /generateMetadata/);
  assert.match(insightPage, /insight\.content\.map/);
  assert.match(insightPage, /insight\.paragraphHeadings\[index\]/);

  assert.match(packageJson, /"@next\/eslint-plugin-next": "16\.2\.12"/);
  assert.match(packageJson, /"next": "16\.2\.12"/);
  assert.match(packageJson, /"build": "next build --webpack"/);
  assert.match(packageJson, /"tailwindcss": "4\.3\.3"/);
  assert.match(packageJson, /"vinext": "1\.0\.0-beta\.4"/);
  assert.match(packageJson, /"resend": "\^6\.21\.0"/);
  assert.match(packageJson, /"lint:fix": "eslint \. --fix"/);
  assert.match(packageJson, /"format": "prettier --write \."/);
  assert.match(packageJson, /"format:check": "prettier --check \."/);
  assert.match(packageJson, /"prettier":/);
  assert.match(eslintConfig, /eslint-config-prettier/);
  assert.equal(JSON.parse(prettierConfig).printWidth, 100);
  assert.match(globals, /font-family:\s*"Gilroy"/);
  assert.match(globals, /\/fonts\/Gilroy-Thin\.woff2/);
  assert.match(globals, /\/fonts\/Gilroy-Regular\.woff2/);
  assert.match(globals, /\/fonts\/Gilroy-HeavyItalic\.woff2/);
  assert.equal((globals.match(/@font-face/g) ?? []).length, 20);
  assert.doesNotMatch(globals, /Jost|\.otf/);
  assert.match(globals, /@import "tailwindcss"/);
  assert.match(globals, /@theme/);
  assert.doesNotMatch(globals, /\.yfs-/);
  assert.doesNotMatch(page + contact, /className="yfs-/);
  assert.match(page, /bg-navy-deep/);
  assert.equal(JSON.parse(vercelConfig).framework, "nextjs");
});
