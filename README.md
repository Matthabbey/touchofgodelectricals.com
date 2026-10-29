# Touch of God Electrical Installation — website

Single-page, mobile-first business site built with **Next.js (App Router, TypeScript)** and exported as static HTML, so it can be hosted on Vercel, Netlify, cPanel or any static host.

## Run it locally

```bash
npm install
npm run dev      # http://localhost:3000
```

Production build (writes the static site to `out/`):

```bash
npm run build
```

## Where to edit things

| What | File |
| --- | --- |
| Phone, WhatsApp number, email, address, hours, Google Maps link, social links, site URL | `lib/site-config.ts` |
| Service descriptions, "why us" points, steps, project cards, testimonials, FAQ, nav links, SEO keywords | `lib/content.ts` |
| Colours, fonts, spacing (all design CSS) | `app/globals.css` |
| Page title, meta description, Open Graph | `app/layout.tsx` |
| Structured data (LocalBusiness / Electrician schema) | `lib/schema.ts` |
| Section components | `components/` |

### Placeholders that still need real data

Everything marked `[PLACEHOLDER]` or `XXXX` in `lib/site-config.ts`:

- `phoneDisplay` / `phoneRaw` — real phone line (raw form: `+2348012345678`).
- `whatsappNumber` — digits only with country code: `2348012345678`.
- `email`, `address`, `workingHours`, `mapsUrl`, `socials`, `siteUrl`.
- `serviceAreas` — swap "Lagos" for the real coverage area if different.

Also:

- **Project photos**: drop real images into `public/images/projects/`, then update each entry in `projects` inside `lib/content.ts` (`image`, `alt`, `title`, `location`, `summary`, `details`) and set `sample: false`. The yellow "placeholder" notice above the gallery disappears once you delete the `gallery-note` paragraph in `components/Projects.tsx`.
- **Testimonials**: replace the three sample cards in `lib/content.ts` with real reviews (with the client's permission) and set `sample: false`.
- **FAQ answers**: edit freely in `lib/content.ts`. They deliberately avoid promising specific warranty lengths or inverter sizes.

No certifications, years in business, client names or statistics are stated anywhere. Add them only if they are true.

## How the quote form works

The form validates in the browser and shows a success summary with a **Send on WhatsApp** button that opens a pre-filled chat. There is no backend, so nothing is emailed. To add email delivery later, post the form data to a service such as Formspree or Web3Forms inside `onSubmit` in `components/Contact.tsx`.

## Deploy

- **Cloudflare Workers** (current host): `wrangler.jsonc` serves `out/` as static assets. In the Cloudflare dashboard the build command is `npm run build` and the deploy command is `npx wrangler deploy`. Do not let Cloudflare's auto-config add OpenNext; the site is a static export and has no `.next/standalone` server bundle. To deploy from your machine: `npx wrangler login` once, then `npm run build; npx wrangler deploy`.
- **Vercel**: push the repo to GitHub and import it; the static export is detected automatically.
- **Any static host**: run `npm run build` and upload the contents of `out/`.
