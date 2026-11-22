# Orris & Code

An independent digital product and growth studio portfolio, built with React, TypeScript, Vite, and Tailwind CSS. The interface uses DM Sans throughout, a white and navy palette, and cobalt-blue highlights. Shared containers, consistent section spacing, and responsive grids keep content aligned.

The homepage is divided into an introduction, selected work, services, process, studio, FAQ, and contact. Services appear in a static grid and link to their own detail views.

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

Browser checks use an installed Google Chrome through Playwright. Tests cover project filtering, screen galleries, dialogs and focus return, service navigation, form validation, email draft content, downloadable briefs, FAQ, mobile navigation, responsive overflow, and automated WCAG A/AA checks. Automated checks are not a complete accessibility audit.

## Change the brand, email, or projects

**`src/content.ts`** is the main content file:

- `studio.name`: your final studio name; the header/footer wordmark and email greeting update automatically.
- `studio.logo`: a path to a custom logo in `public`. Leave empty to use the blue looped symbol with code brackets through `src/components/BrandMark.tsx`.
- `studio.email`: currently `abhilashpal128@gmail.com`.
- `projects`: portfolio entries, descriptions, labels, and links.
- `faqs`: FAQ copy. The displayed service offerings are defined in `src/App.tsx`.

Update the title, description, and social metadata in `index.html`, and replace `public/favicon.svg` when final branding arrives. The current **Orris & Code** name is provisional. Web research does not establish trademark or domain availability; similar Orris studio names exist, so this should not be treated as a cleared business name.

To add a project, place an image in `public/images` and add a record to `projects`:

```ts
{
  id: 'your-project',
  name: 'Your project',
  subtitle: 'A concise description of the work.',
  category: 'SaaS platforms', // or 'Mobile apps' or 'Web & growth'
  platforms: ['website'], // Add 'app' only for projects that include an app.
  type: 'Client project',
  description: 'What you built and why.',
  details: ['Verified project detail.', 'Another verified detail.'],
  tags: ['Web design', 'Development'],
  className: 'custom',
  previewImage: '/images/your-project.webp',
  previewAlt: 'Describe the actual project screenshot.',
  galleryImages: [{ title: 'Homepage', image: '/images/your-project.webp' }],
  note: 'Any relevant project context or image disclosure.',
  liveUrl: 'https://your-real-project-url.com', // Optional; omit until live.
}
```

The gallery count and filters update automatically. Projects open in accessible dialogs. Live-project links appear only when a URL is supplied. A project without an image receives a branded cover with its title.

## Featured projects

**ViharSync** is the founder-built society-management product. The portfolio displays the supplied web, admin, and resident app screenshots. Its dialog includes separate web/admin and mobile galleries, with manual screen controls. No external client usage or paid-case-study results are claimed.

**Mumbai Man Packers & Movers** is a website project. It appears under All projects and Website projects, never App projects. Its dialog includes homepage and services previews captured from https://mumbaimanpackers.com/ and a link to the live website. No app, backend, or performance results are attributed to this project.

## Inquiry behavior

The guided inquiry form validates required fields and prepares a project brief. The visitor reviews it, then selects **Open email draft** to open a `mailto:` draft addressed to the configured studio email. They must send it from their email application. Copy and text-download options are also provided.

This is a frontend project, with no email-sending backend. The site never claims an inquiry was delivered. Form values stay in React memory and are not written to browser storage or a server. To send inquiries directly from the site later, add a real backend/email service, delivery and error states, and update the privacy text.

## Assets and design

- `public/images/viharsync/`: supplied product screenshots for the hero, project card, and screen gallery.
- `public/images/mumbai-man/`: optimized WebP homepage and services captures from the live project website.
- Existing jewelry images and `design/image-prompts.json` are retained from earlier work and are not displayed in the portfolio.
- `scripts/prepare-assets.mjs`: optional Sharp conversion script for optimizing new source images into WebP.
- `src/index.css`: shared visual system, responsive layouts, dialogs, and reduced-motion behavior.
- `src/components/BrandIdentity.tsx`: configurable brand wordmark and logo.
- `public/images/brand/orris-code-mark.svg`: flat vector adaptation of the supplied looped logo, with blue loops and navy code brackets. A transparent 512px PNG is available alongside it. The lowercase wordmark uses navy lettering with a blue ampersand and period.
- `public/favicon.svg`: a simplified loop-only mark for browser tabs, with a lighter blue for dark browser themes. The touch icon also omits the small code brackets.
- `scripts/prepare-brand.mjs`: the shared vector geometry and asset exporter. Run `node scripts/prepare-brand.mjs` to regenerate the SVG, transparent PNG, favicon, and touch icon together.

The Mumbai Man previews total approximately 224 KB. Fonts are bundled locally through Fontsource, with no runtime Google Fonts requests. Tailwind v4 is integrated through `@tailwindcss/vite`; utility classes and custom CSS share the theme defined in `src/index.css`.

The portfolio uses local screenshots rather than embedded external sites. Project galleries do not advance automatically, and controls remain usable with a keyboard. The site does not claim client results, testimonials, or a booking/calendar integration.

## Deploy to Vercel

The project is configured as a static Vite deployment. From the project root (the folder containing `package.json`), import the repository in Vercel or deploy with the Vercel CLI. The checked-in `vercel.json` sets:

- Framework preset: Vite
- Install command: `npm ci`
- Build command: `npm run build`
- Output directory: `dist`

For the CLI, run `npx vercel` for a preview deployment and `npx vercel --prod` when you are ready to publish. The CLI will ask you to sign in and link the local folder to a Vercel project. If deploying through Git, push the project to a Git provider first and import that repository into Vercel.

No environment variables or serverless functions are required. The site uses in-page anchors and hash routes for service detail views, so it does not need SPA rewrite rules. Set the final domain and a production social-sharing image before sharing publicly.

Local verification artifacts are ignored by Git in `.preview/` and `test-results/`. `scripts/inspect-preview.mjs` produces local screenshots and a compact accessibility report while Vite is running.
