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

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Yorkshire Fortress homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Yorkshire Fortress Security/);
  assert.match(html, /Protection with Yorkshire strength\./);
  assert.match(html, /\/media\/security-patrol\.mp4/);
  assert.match(html, /\/media\/security-patrol-poster\.jpg/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|Building your site/i);

  for (const slug of serviceSlugs) {
    assert.match(html, new RegExp(`/services/${slug}`));
  }
});

test("server-renders a dynamic service page", async () => {
  const response = await render("/services/key-holding");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /Key Holding/);
  assert.match(html, /Secure access, 24\/7/);
  assert.match(html, /Secure off-site key custody/);
});

test("keeps the completed site and current framework versions in source", async () => {
  const [page, data, layout, packageJson, globals] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/data.ts", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
  ]);

  assert.match(page, /security-patrol\.mp4/);
  assert.match(page, /autoPlay muted loop playsInline/);
  assert.match(layout, /Yorkshire Fortress Security/);
  assert.doesNotMatch(page + layout, /codex-preview|_sites-preview|SkeletonPreview/);

  assert.equal((data.match(/\bslug:\s*"/g) ?? []).length, serviceSlugs.length);
  for (const slug of serviceSlugs) {
    assert.match(data, new RegExp(`slug: "${slug}"`));
  }

  assert.match(packageJson, /"@next\/eslint-plugin-next": "16\.2\.12"/);
  assert.match(packageJson, /"tailwindcss": "4\.3\.3"/);
  assert.match(packageJson, /"vinext": "1\.0\.0-beta\.4"/);
  assert.match(globals, /font-family:"Gilroy"/);
  assert.match(globals, /\/fonts\/gilroy-light\.otf/);
  assert.match(globals, /\/fonts\/gilroy-extra-bold\.otf/);
});
