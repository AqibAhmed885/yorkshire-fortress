# Yorkshire Fortress Security

Official website for Yorkshire Fortress Security, built with Next.js App Router, React, and Tailwind CSS.

## Services

- Security Guards
- Key Holding
- Alarm Response
- Door Supervisors
- Vacant Property Inspection
- Event Security

## Technology

- Next.js 16
- React 19
- Tailwind CSS 4
- TypeScript
- Vercel deployment support
- Optional Cloudflare Workers and Sites build commands

## Local development

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal.

## Validation

```bash
npm test
```

The test command creates a production build and verifies the homepage and dynamic service routes.

## Vercel deployment

Import this repository into Vercel and leave the Framework Preset set to **Next.js**. Keep the Build Command and Output Directory on their default values.

For the optional Cloudflare/Sites runtime, use `npm run dev:sites` and `npm run build:sites`.
