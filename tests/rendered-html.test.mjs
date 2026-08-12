import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const serviceSlugs = [
  "security-guards",
  "key-holding",
  "alarm-response",
  "door-supervisors",
  "vehicle-patrol-inspections",
  "event-security",
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
  assert.equal(appPaths["/sectors/page"], "app/sectors/page.js");
  assert.equal(appPaths["/services/page"], "app/services/page.js");
  assert.equal(appPaths["/contact/page"], "app/contact/page.js");
  assert.equal(appPaths["/services/[slug]/page"], "app/services/[slug]/page.js");
  assert.ok(routes.staticRoutes.some((route) => route.page === "/"));
  assert.ok(routes.dynamicRoutes.some((route) => route.page === "/services/[slug]"));
});

test("keeps the completed site and current framework versions in source", async () => {
  const [page, data, layout, contact, packageJson, globals, vercelConfig] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/contact/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../vercel.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /security-patrol\.mp4/);
  assert.match(page, /autoPlay muted loop playsInline/);
  assert.match(layout, /Yorkshire Fortress Security/);
  assert.doesNotMatch(page + layout, /codex-preview|_sites-preview|SkeletonPreview/);
  assert.match(contact, /Let’s plan protection that fits\./);
  assert.match(contact, /<ContactForm \/>/);

  assert.equal((data.match(/\bslug:\s*"/g) ?? []).length, serviceSlugs.length);
  assert.equal((data.match(/\bsuitableFor:\s*\[/g) ?? []).length, serviceSlugs.length);
  assert.equal((data.match(/\bclientReceives:\s*\[/g) ?? []).length, serviceSlugs.length);
  for (const slug of serviceSlugs) {
    assert.match(data, new RegExp(`slug: "${slug}"`));
  }

  assert.match(packageJson, /"@next\/eslint-plugin-next": "16\.2\.12"/);
  assert.match(packageJson, /"next": "16\.2\.12"/);
  assert.match(packageJson, /"build": "next build --webpack"/);
  assert.match(packageJson, /"tailwindcss": "4\.3\.3"/);
  assert.match(packageJson, /"vinext": "1\.0\.0-beta\.4"/);
  assert.match(globals, /font-family:\s*"Gilroy"/);
  assert.match(globals, /\/fonts\/gilroy-light\.otf/);
  assert.match(globals, /\/fonts\/gilroy-extra-bold\.otf/);
  assert.match(globals, /@import "tailwindcss"/);
  assert.match(globals, /@theme/);
  assert.doesNotMatch(globals, /\.yfs-/);
  assert.doesNotMatch(page + contact, /className="yfs-/);
  assert.match(page, /bg-navy-deep/);
  assert.equal(JSON.parse(vercelConfig).framework, "nextjs");
});
