export const studio = {
  name: 'Orris & Code',
  logo: '', // Add a local path, for example '/images/your-logo.svg'.
  email: 'abhilashpal128@gmail.com',
  tagline: 'Independent product studio.',
}

export type Project = {
  id: string
  name: string
  subtitle: string
  category: 'Jewelry & commerce' | 'SaaS platforms'
  type: string
  description: string
  details: string[]
  tags: string[]
  className: string
  note: string
  previewImage?: string
  previewAlt?: string
  liveUrl?: string
}

// Add verified projects here. Concept work is explicitly identified in the UI.
export const projects: Project[] = [
  {
    id: 'viharsync',
    name: 'ViharSync',
    subtitle: 'A connected home for community life.',
    category: 'SaaS platforms',
    type: 'Founder-built product · no client users yet',
    description: 'ViharSync is our founder-built society-management SaaS product. It is an independent product exploration, and no client communities currently use it.',
    details: ['Product concept for society and residential-community management.', 'The interface shown is a visual exploration with sample data.', 'No client users or customer outcomes to report yet.'],
    tags: ['Society management', 'SaaS', 'Product'],
    className: 'vihar',
    note: 'Independent founder project. No client communities currently use ViharSync. The interface is an illustrative concept with sample data, not a production screenshot or evidence of live features or results.',
  },
  {
    id: 'maison',
    name: 'Maison Aurelle',
    subtitle: 'A digital home for modern heirlooms.',
    category: 'Jewelry & commerce',
    type: 'Independent design concept',
    description: 'An editorial storefront direction for a fine jewelry label. Rich materials, expressive typography, and a quiet interface let every piece tell its own story.',
    details: ['A product-first visual identity with warm, cinematic art direction.', 'A considered journey from discovering a collection to exploring a piece.', 'A flexible design direction for a future responsive commerce build.'],
    tags: ['Art direction', 'E-commerce', 'Web design'],
    className: 'maison',
    note: 'Self-initiated concept. This is a design exploration, not a commissioned client project or live store.',
  },
  {
    id: 'solenne',
    name: 'Solenne',
    subtitle: 'Everyday pieces. An unmistakable presence.',
    category: 'Jewelry & commerce',
    type: 'Independent design concept',
    description: 'A softer expression of fine jewelry online. An intimate photographic direction pairs with generous space and delicate typography for a brand that feels personal from the first visit.',
    details: ['An image-led brand world, built around light, texture, and human detail.', 'An inviting collection page direction for everyday fine jewelry.', 'Mobile-conscious composition with clear navigation and considered hierarchy.'],
    tags: ['Brand experience', 'Web design', 'Jewelry'],
    className: 'solenne',
    note: 'Self-initiated concept. This is a design exploration, not a commissioned client project or live store.',
  },
]

export const services = [
  {
    id: 'software',
    title: 'Custom SaaS products',
    short: 'Turn your idea into useful software.',
    heading: 'A product built around what makes your business different.',
    description: 'From early product thinking to a working first release, we design and build focused software for the problems your business actually needs to solve.',
    items: ['Product strategy & prototyping', 'SaaS MVPs & customer portals', 'Dashboards & custom workflows', 'Integrations & launch support'],
    label: 'Custom SaaS',
  },
  {
    id: 'business-tools',
    title: 'Business software & tools',
    short: 'Make complex work feel simpler.',
    heading: 'Less busywork. More room to grow.',
    description: 'Replace disconnected processes with clear, dependable tools. We shape the right workflows around your team, customers, and day-to-day operations.',
    items: ['Internal tools & admin portals', 'Workflow automation', 'Customer & partner platforms', 'System integrations'],
    label: 'Business software',
  },
  {
    id: 'websites',
    title: 'Websites & commerce',
    short: 'Give your business a clearer home.',
    heading: 'An online experience that feels like you.',
    description: 'From a clear, compelling website to a considered online store, we connect your brand story to the next step your customers need to take.',
    items: ['Website strategy & design', 'Custom responsive development', 'E-commerce experiences', 'Content & launch support'],
    label: 'Websites & e-commerce',
  },
]

export const faqs = [
  { question: 'What kind of software do you build?', answer: 'We design and build custom SaaS products, internal tools, customer portals, and business workflow software. We also create websites and e-commerce experiences. We start with the problem you want to solve, then shape the right scope together.' },
  { question: 'Do you work with US-based teams?', answer: 'Yes. We collaborate remotely with clear milestones, scheduled calls, and written progress updates. We agree on communication times that work across time zones, so you know what is happening and what we need from you.' },
  { question: 'Can you build something completely custom?', answer: 'Yes. We start with what your business needs, then define the right design, features, and technology. That could be a distinctive brand website, a commerce experience, a customer portal, or a new SaaS product.' },
  { question: 'What does a project cost?', answer: 'Every proposal is scoped around the work: pages, functionality, integrations, content, and timing. Share your goals and an approximate budget in the project brief, and we can shape a focused scope. There is no one-size-fits-all package.' },
  { question: 'How long will my project take?', answer: 'Timing depends on the scope and how ready your content is. We agree on milestones before work begins, with space for your feedback along the way. A focused website and a custom software platform will naturally have different timelines.' },
  { question: 'Can you help after the site goes live?', answer: 'Yes. We can scope ongoing maintenance, content changes, and product improvements alongside your initial build. Ownership, handoff, hosting, and support expectations are agreed before the project starts.' },
]
