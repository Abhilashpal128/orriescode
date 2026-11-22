export const studio = {
  name: 'Orris & Code',
  logo: '/images/brand/orris-and-code-logo.png',
  email: 'info.orrisandcode@gmail.com',
  tagline: 'Independent product studio.',
}

export type Project = {
  id: string
  name: string
  subtitle: string
  category: 'Mobile apps' | 'SaaS platforms' | 'Web & growth'
  type: string
  description: string
  details: string[]
  tags: string[]
  className: string
  note: string
  previewImage?: string
  previewAlt?: string
  liveUrl?: string
  platforms: ('app' | 'website')[]
  galleryImages?: { title: string; image: string }[]
}

// Add verified projects here. Concept work is explicitly identified in the UI.
export const projects: Project[] = [
  {
    id: 'sd-build-solutions',
    platforms: ['website'],
    name: 'S&D Build Solutions',
    subtitle: 'Construction, renovation, and interior work for considered homes.',
    category: 'Web & growth',
    type: 'Client website',
    description: 'A refined client website for S&D Build Solutions, bringing construction, renovation, interior work, furniture, carpentry, glazing, aluminium, glass, uPVC, plumbing, electrical, and finishing services into one clear experience.',
    details: ['A strong, image-led homepage for construction and interior projects.', 'Clear company introduction with a warm, personal tone for Shailesh and Dinesh.', 'A project collection presenting interior work, furniture and carpentry, work in progress, and glazing.', 'An organized services section covering civil work, home renovation, interior work, and furniture and carpentry.'],
    tags: ['Website design', 'Responsive development', 'Service showcase'],
    className: 'sd',
    previewImage: '/images/sd-build-solutions/homepage.png',
    previewAlt: 'S&D Build Solutions homepage with a refined interior and the headline “A softer palette. A warmer welcome.”',
    galleryImages: [
      { title: 'Homepage and featured project', image: '/images/sd-build-solutions/homepage.png' },
      { title: 'About S&D Build Solutions', image: '/images/sd-build-solutions/about.png' },
      { title: 'The project collection', image: '/images/sd-build-solutions/work.png' },
      { title: 'Construction and interior services', image: '/images/sd-build-solutions/services.png' },
    ],
    note: 'Client website project. Previews are based on the supplied project screens.',
  },
  {
    id: 'viharsync',
    platforms: ['app', 'website'],
    name: 'ViharSync',
    subtitle: 'Society operations, residents, finance, and access.',
    category: 'SaaS platforms',
    type: 'Founder-built product',
    description: 'ViharSync is a complete society-management platform built around the way residential communities operate. We designed and developed the public web experience, resident mobile application, and administration system as one connected product.',
    details: ['Responsive web landing experience for community onboarding and product information.', 'Mobile app for dues, notices, events, gate access, residents, and profile management.', 'Admin platform for finance, maintenance, rent, expenses, parking, and flat inventory.', 'Connected workflows for residents, society staff, gate teams, accountants, and administrators.'],
    tags: ['React / Next.js', 'Mobile app', 'Admin platform', 'SaaS'],
    className: 'vihar',
    note: 'Founder-built product showcase. ViharSync is shown as our own product. No external client usage or paid-case-study results are claimed.',
  },
  {
    id: 'mumbai-man',
    platforms: ['website'],
    name: 'Mumbai Man Packers & Movers',
    subtitle: 'A clear online home for a business that helps people move.',
    category: 'Web & growth',
    type: 'Business website',
    description: 'A service-focused website for Mumbai Man Packers & Movers. The experience brings moving services, business information, and contact options together in a clear, approachable layout.',
    details: ['Dedicated sections for home shifting, office relocation, and vehicle transport.', 'A consistent visual style with service imagery and clearly organized information.', 'Prominent quote, phone, and WhatsApp contact options.', 'A website project for a Mumbai-based moving business.'],
    tags: ['Website design', 'Web development', 'Service pages'],
    className: 'mumbai',
    previewImage: '/images/mumbai-man/website.webp',
    previewAlt: 'Mumbai Man Packers & Movers website with a purple headline and a team loading a moving truck.',
    liveUrl: 'https://mumbaimanpackers.com/',
    galleryImages: [
      { title: 'Website homepage', image: '/images/mumbai-man/website.webp' },
      { title: 'Moving services', image: '/images/mumbai-man/services.webp' },
    ],
    note: 'Website project. Previews show the live Mumbai Man Packers & Movers website.',
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
    id: 'mobile',
    title: 'iOS & Android apps',
    short: 'Make every moment useful on mobile.',
    heading: 'One thoughtful experience. Every screen.',
    description: 'We design and build mobile apps for iPhone and Android, from an early prototype to a polished product ready for real-world use.',
    items: ['React Native app development', 'iOS & Android UI systems', 'Offline-ready experiences', 'Store preparation & launch'],
    label: 'Mobile apps',
  },
  {
    id: 'growth',
    title: 'Web & social growth',
    short: 'Build reach and turn attention into action.',
    heading: 'A sharper digital presence, end to end.',
    description: 'We create conversion-focused websites and support ongoing social media planning, content, scheduling, reporting, and campaign execution.',
    items: ['Website design & development', 'Social media strategy', 'Content planning & scheduling', 'Campaign reporting & optimization'],
    label: 'Web & social growth',
  },
]

export const faqs = [
  { question: 'What kind of software do you build?', answer: 'We design and build custom SaaS products, internal tools, customer portals, and business workflow software. We also create websites and e-commerce experiences. We start with the problem you want to solve, then shape the right scope together.' },
  { question: 'Can you build iOS and Android apps?', answer: 'Yes. We can help from product definition and UX through cross-platform development and launch preparation. The exact approach depends on your product, required integrations, and the devices or stores you need to support.' },
  { question: 'Do you manage social media accounts?', answer: 'We can support social strategy, content calendars, post planning, scheduling, review workflows, publishing support, and reporting. The scope is agreed before work begins and can be paired with a website or app when that makes sense.' },
  { question: 'Do you work with international clients?', answer: 'Yes. We collaborate remotely with teams across the US, UK, Canada, and other regions. We use clear milestones, scheduled calls, and written progress updates, with communication times agreed around your time zone.' },
  { question: 'Can you build something completely custom?', answer: 'Yes. We start with what your business needs, then define the right design, features, and technology. That could be a distinctive brand website, a commerce experience, a customer portal, or a new SaaS product.' },
  { question: 'What does a project cost?', answer: 'Every proposal is scoped around the work: pages, functionality, integrations, content, and timing. Share your goals and an approximate budget in the project brief, and we can shape a focused scope. There is no one-size-fits-all package.' },
  { question: 'How long will my project take?', answer: 'Timing depends on the scope and how ready your content is. We agree on milestones before work begins, with space for your feedback along the way. A focused website and a custom software platform will naturally have different timelines.' },
  { question: 'Can you help after the site goes live?', answer: 'Yes. We can scope ongoing maintenance, content changes, and product improvements alongside your initial build. Ownership, handoff, hosting, and support expectations are agreed before the project starts.' },
]
