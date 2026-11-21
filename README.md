# Orris & Code

An independent digital product and growth studio showcase for SaaS platforms, iOS and Android apps, websites, and social media management, built with React, TypeScript, Vite, and Tailwind CSS. The visual direction pairs readable DM Sans with Instrument Serif accents, a soft sage-and-stone palette, and clear, US-client-friendly messaging.

## Run locally

Use Node.js 22.12+ (Node 24 recommended). Dependencies are already installed in this workspace.

```sh
npm ci
npm run dev
```

Open **http://127.0.0.1:5173**. Vite uses port 5173 with strict port checking, so it will report an error if another app already occupies that port.

```sh
npm run build       # Type-check and create the production site in dist/
npm run preview     # Preview the production build
npm run test:e2e    # Desktop/mobile interaction and automated accessibility checks
```

Browser checks use an installed Google Chrome through Playwright. Install Chrome if it is not already available. Tests cover project filtering, dialogs and focus return, keyboard service tabs, form validation, email draft content, downloadable briefs, FAQ, mobile navigation, responsive overflow, and automated WCAG A/AA checks. Automated checks are not a complete accessibility audit.

## Change the brand, email, or projects

**`src/content.ts`** is the main content file:

- `studio.name`: your final studio name; the header/footer wordmark and email greeting update automatically.
- `studio.logo`: a path to your logo in `public`, for example `/images/brand-logo.svg`. Leave empty to use the temporary geometric mark.
- `studio.email`: currently `abhilashpal128@gmail.com`.
- `projects`: portfolio entries, descriptions, labels, and links.
- `services` and `faqs`: service and FAQ copy.

Update the title, description, and social metadata in `index.html`, and replace `public/favicon.svg` when final branding arrives. The current **Orris & Code** name is provisional. Web research does not establish trademark or domain availability; similar Orris studio names exist, so this should not be treated as a cleared business name.

To add a project, place an image in `public/images` and add a record to `projects`:

```ts
{
  id: 'your-project',
  name: 'Your project',
  subtitle: 'A concise description of the work.',
  category: 'SaaS platforms', // or 'Mobile apps' or 'Web & growth'
  type: 'Client project',
  description: 'What you built and why.',
  details: ['Verified project detail.', 'Another verified detail.'],
  tags: ['Web design', 'Development'],
  className: 'custom',
  previewImage: '/images/your-project.webp',
  previewAlt: 'Describe the actual project screenshot.',
  note: 'Any relevant project context or image disclosure.',
  liveUrl: 'https://your-real-project-url.com', // Optional; omit until live.
}
```

The gallery count and filters update automatically. Projects open in accessible dialogs. Live-project links appear only when a URL is supplied. A project without an image receives a branded cover with its title.

## ViharSync and concept work

ViharSync is the founder-built **society-management SaaS** product. No client communities currently use it. Its interface is explicitly labeled as a concept with sample data, not a production screenshot or evidence of live features or outcomes.

There are no client case studies yet. ViharSync is the founder-built product concept, while Orbit Mobile and Pulse Studio are independent design concepts. None are represented as commissioned engagements, shipped client projects, or evidence of client results.

## Inquiry behavior

The guided inquiry form validates required fields and prepares a project brief. The visitor reviews it, then selects **Open email draft** to open a `mailto:` draft addressed to the configured studio email. They must send it from their email application. Copy and text-download options are also provided.

This is a frontend project, with no email-sending backend. The site never claims an inquiry was delivered. Form values stay in React memory and are not written to browser storage or a server. To send inquiries directly from the site later, add a real backend/email service, delivery and error states, and update the privacy text.

## Assets and design

- `public/images/jewelry-hero.webp`: original AI-generated gold-ring still life used in the independent jewelry concept.
- `public/images/jewelry-editorial.webp`: original AI-generated editorial jewelry portrait used in the independent jewelry concept.
- `design/image-prompts.json`: exact prompts and generation mode (built-in image generation).
- `scripts/prepare-assets.mjs`: optional Sharp conversion script for optimizing new source images into WebP.
- `src/index.css`: visual system, responsive composition, product dashboard, and reduced-motion behavior.
- `src/components/BrandIdentity.tsx`: configurable brand wordmark and logo.

Both images total approximately 304 KB. Fonts are bundled locally through Fontsource, with no runtime Google Fonts requests. Tailwind v4 is integrated through `@tailwindcss/vite`; utility classes and custom CSS share the theme defined in `src/index.css`.

The ViharSync dashboard in the hero and portfolio is an illustrative product concept with sample data, not a live-product screenshot or customer case study. The site does not claim client results, testimonials, or a booking/calendar integration. Its layout, copy, visual identity, and generated images are original to this build.

## Deploy to Vercel

The project is configured as a static Vite deployment. From the project root (the folder containing `package.json`), import the repository in Vercel or deploy with the Vercel CLI. The checked-in `vercel.json` sets:

- Framework preset: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

For the CLI, run `npx vercel` for a preview deployment and `npx vercel --prod` when you are ready to publish. The CLI will ask you to sign in and link the local folder to a Vercel project. If deploying through Git, push the project to a Git provider first and import that repository into Vercel.

No environment variables or serverless functions are required. The site currently uses one page with in-page anchors, so it does not need SPA rewrite rules. Add a rewrite if client-side routes are introduced later. Set the final domain and a production social-sharing image before sharing publicly; the current site has not been deployed.

Local verification artifacts are ignored by Git in `.preview/` and `test-results/`. `scripts/inspect-preview.mjs` produces local screenshots and a compact accessibility report while Vite is running.
