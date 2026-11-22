import { useEffect, useState } from 'react'
import { BarChart3, Check, ChevronLeft, ChevronRight, Code2, Globe2, Menu, Monitor, Plus, Share2, Smartphone, Sparkles, X } from 'lucide-react'
import BrandIdentity from './components/BrandIdentity'
import InquiryForm from './components/InquiryForm'
import Modal from './components/Modal'
import ProjectVisual from './components/ProjectVisual'
import { faqs, projects, studio, type Project } from './content'

const workTabs = [
  { label: 'All projects', mode: 'all' },
  { label: 'App projects', mode: 'app' },
  { label: 'Website projects', mode: 'website' },
] as const
const workSurfaces = [
  { title: 'Society website', label: 'WEB EXPERIENCE', image: '/images/viharsync/viharsync-landing.png' },
  { title: 'Admin dashboard', label: 'ADMIN PLATFORM', image: '/images/viharsync/viharsync-dashboard.png' },
  { title: 'Finance & reports', label: 'FINANCE MODULE', image: '/images/viharsync/viharsync-finance.png' },
  { title: 'Unit inventory', label: 'PROPERTY MODULE', image: '/images/viharsync/viharsync-inventory.png' },
  { title: 'Resident home', label: 'MOBILE APP', image: '/images/viharsync/WhatsApp Image 2026-11-21 at 4.40.21 PM.jpeg' },
  { title: 'Payments', label: 'MOBILE APP', image: '/images/viharsync/WhatsApp Image 2026-11-21 at 4.40.22 PM.jpeg' },
  { title: 'Resident profile', label: 'MOBILE APP', image: '/images/viharsync/WhatsApp Image 2026-11-21 at 4.40.22 PM (1).jpeg' },
  { title: 'Gate & visitors', label: 'MOBILE APP', image: '/images/viharsync/WhatsApp Image 2026-11-21 at 4.40.23 PM.jpeg' },
  { title: 'Community notices', label: 'MOBILE APP', image: '/images/viharsync/WhatsApp Image 2026-11-21 at 4.40.23 PM (1).jpeg' },
  { title: 'Society profile', label: 'MOBILE APP', image: '/images/viharsync/WhatsApp Image 2026-11-21 at 4.40.18 PM.jpeg' },
] as const
const mobileWorkSurfaces = workSurfaces.filter(surface => surface.label.includes('MOBILE'))
const websiteWorkSurfaces = workSurfaces.filter(surface => !surface.label.includes('MOBILE'))
type ServiceOffering = {
  id: string
  title: string
  summary: string
  icon: 'saas' | 'mobile' | 'web' | 'commerce' | 'tools' | 'growth'
  inquiryService: string
  eyebrow: string
  heading: string
  description: string
  technologies: string[]
  approach: { title: string; text: string }[]
  deliverables: string[]
  related: string[]
}
const serviceOfferings: ServiceOffering[] = [
  {
    id: 'custom-saas',
    title: 'Custom SaaS Products',
    summary: 'Purpose-built software shaped around your business model.',
    icon: 'saas',
    inquiryService: 'Custom SaaS',
    eyebrow: 'PRODUCT ENGINEERING',
    heading: 'A SaaS product built around what makes your business different.',
    description: 'From early product thinking to a dependable first release, we design and develop focused SaaS experiences for the people who will use them every day.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    approach: [
      { title: 'Start with the problem.', text: 'Understand your users, business goals, and the workflow the product needs to improve.' },
      { title: 'Build in clear milestones.', text: 'Shape the experience, develop the core features, and review progress together before launch.' },
    ],
    deliverables: ['Product discovery & scope', 'SaaS MVPs & customer portals', 'Accounts, roles & permissions', 'Dashboards & integrations'],
    related: ['mobile-apps', 'internal-tools'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile App Development',
    summary: 'Thoughtful iOS and Android apps for your customers and team.',
    icon: 'mobile',
    inquiryService: 'iOS & Android app',
    eyebrow: 'APP ENGINEERING',
    heading: 'One useful app experience, made for iOS and Android.',
    description: 'We turn mobile product ideas into clear, reliable experiences—from mapping the user journey to preparing a polished app for release.',
    technologies: ['React Native', 'TypeScript', 'iOS', 'Android'],
    approach: [
      { title: 'Design around real use.', text: 'Prioritize the everyday moments, devices, and conditions your users need the app to support.' },
      { title: 'Make every screen count.', text: 'Build, test, and refine a connected experience with reviews at each milestone.' },
    ],
    deliverables: ['Mobile product planning', 'iOS & Android app UI', 'API & account integrations', 'Store preparation & launch'],
    related: ['custom-saas', 'websites'],
  },
  {
    id: 'websites',
    title: 'Website Design & Development',
    summary: 'Fast, accessible websites that explain your value clearly.',
    icon: 'web',
    inquiryService: 'Web & social growth',
    eyebrow: 'WEB EXPERIENCE',
    heading: 'A website that makes your next step feel clear.',
    description: 'We plan, design, and build responsive websites that help the right people understand your business and confidently get in touch.',
    technologies: ['React', 'Next.js', 'TypeScript', 'Content systems'],
    approach: [
      { title: 'Clarify the message.', text: 'Organize your content around your audience, what you offer, and the action you want visitors to take.' },
      { title: 'Design for every screen.', text: 'Create a distinctive visual system and implement it responsively, with performance and accessibility in mind.' },
    ],
    deliverables: ['Website structure & content guidance', 'Responsive UI design', 'Front-end development', 'Launch & maintenance support'],
    related: ['ecommerce', 'digital-growth'],
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Solutions',
    summary: 'Smooth storefronts and shopping flows for your customers.',
    icon: 'commerce',
    inquiryService: 'Web & social growth',
    eyebrow: 'COMMERCE SOLUTIONS',
    heading: 'A shopping experience designed to move naturally.',
    description: 'We create online stores that make it easier to discover products, understand the offer, and complete an order across desktop and mobile.',
    technologies: ['Shopify', 'React', 'Payment integrations', 'Analytics'],
    approach: [
      { title: 'Map the customer journey.', text: 'Review how shoppers find products, compare options, and move through checkout.' },
      { title: 'Connect the moving parts.', text: 'Bring the storefront, catalog, payment flow, and operational needs together in a cohesive experience.' },
    ],
    deliverables: ['Storefront design & setup', 'Product and collection pages', 'Payment & checkout integration', 'Order management workflows'],
    related: ['websites', 'custom-saas'],
  },
  {
    id: 'internal-tools',
    title: 'Admin Panels & Dashboards',
    summary: 'Useful internal tools for data, teams, and daily operations.',
    icon: 'tools',
    inquiryService: 'Custom SaaS',
    eyebrow: 'INTERNAL TOOLING',
    heading: 'A control center built around how your team works.',
    description: 'We build admin panels and business systems that bring important information and operational workflows into one understandable place.',
    technologies: ['React', 'TypeScript', 'Node.js', 'REST APIs'],
    approach: [
      { title: 'Untangle the workflow.', text: 'Understand the decisions, handoffs, and information your team handles throughout the day.' },
      { title: 'Make the important things visible.', text: 'Design usable dashboards and management flows with clear roles and practical feedback.' },
    ],
    deliverables: ['Admin panels & dashboards', 'Business workflow tools', 'Role-based access', 'Data views & API integrations'],
    related: ['custom-saas', 'mobile-apps'],
  },
  {
    id: 'digital-growth',
    title: 'Social Media & Digital Growth',
    summary: 'Consistent content planning and a more connected online presence.',
    icon: 'growth',
    inquiryService: 'Web & social growth',
    eyebrow: 'DIGITAL GROWTH',
    heading: 'A more consistent digital presence, built with purpose.',
    description: 'We help businesses plan and manage social content, improve their digital presence, and connect their channels to a clear business goal.',
    technologies: ['Content planning', 'Social channels', 'Website optimization', 'Reporting'],
    approach: [
      { title: 'Set a clear direction.', text: 'Align your audience, brand voice, content themes, and channels before planning activity.' },
      { title: 'Publish and learn.', text: 'Organize content, support publishing, and review performance to inform the next cycle.' },
    ],
    deliverables: ['Social media strategy', 'Content calendars & planning', 'Scheduling & publishing support', 'Campaign reporting'],
    related: ['websites', 'ecommerce'],
  },
]
type OpenModal = { type: 'inquiry'; service?: string } | { type: 'project'; project: Project } | { type: 'privacy' } | null

function ServiceIcon({ type }: { type: ServiceOffering['icon'] }) {
  if (type === 'mobile') return <Smartphone />
  if (type === 'web' || type === 'commerce') return <Monitor />
  if (type === 'tools') return <BarChart3 />
  if (type === 'growth') return <Share2 />
  return <Code2 />
}

function serviceIdFromHash() {
  const match = window.location.hash.match(/^#\/services\/([^/]+)$/)
  return match?.[1] ?? null
}

function ServiceDetailPage({ service, onStartProject }: { service: ServiceOffering; onStartProject: () => void }) {
  const relatedServices = service.related
    .map(id => serviceOfferings.find(offering => offering.id === id))
    .filter((offering): offering is ServiceOffering => offering !== undefined)

  return <main id="main" className="service-detail-page">
    <div className="section-wrap">
      <a className="service-back-link" href="#expertise"> Back to all services</a>
      <div className="service-detail-hero">
        <div>
          <span className="eyebrow">{studio.name.toUpperCase()} · {service.eyebrow}</span>
          <h1>{service.heading}</h1>
          <p>{service.description}</p>
          <div className="service-detail-actions"><button className="button button-dark" onClick={onStartProject}>Discuss your project </button><a className="button button-outline" href="#work">View selected work</a></div>
        </div>
        <aside className="service-tech-card"><span className="eyebrow">TOOLS & CAPABILITIES</span><div>{service.technologies.map(item => <span key={item}>{item}</span>)}</div></aside>
      </div>
      <section className="service-detail-content" aria-label="Service approach and deliverables">
        <div className="service-detail-approach">
          <span className="eyebrow">A PRACTICAL APPROACH</span>
          <h2>Built around the way your business works.</h2>
          <p>Every engagement starts with the people, goals, and day-to-day workflows behind the request. We shape a clear scope together before moving into design and development.</p>
          <div className="service-approach-grid">{service.approach.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
        <aside className="service-deliverables">
          <span className="eyebrow">COMMON DELIVERABLES</span>
          <h2>Solutions for real requirements.</h2>
          <ul>{service.deliverables.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul>
        </aside>
      </section>
      <nav className="service-related" aria-label="Related services"><span className="eyebrow">RELATED SERVICES</span><div>{relatedServices.map(related => <a key={related.id} href={`#/services/${related.id}`}>{related.title}</a>)}</div></nav>
      <aside className="service-next-step"><div><span className="eyebrow">NEXT STEPS</span><h2>Have a {service.title.toLowerCase()} project in mind?</h2><p>Tell us what you need and we’ll help shape a practical, high-performance solution.</p></div><button className="button button-dark" onClick={onStartProject}>Start a conversation </button></aside>
    </div>
  </main>
}

function ProjectGallery({ project }: { project: Project }) {
  const [mode, setMode] = useState<'website' | 'app'>('website')
  const [index, setIndex] = useState(0)
  const surfaces = project.id === 'viharsync'
    ? (mode === 'app' ? mobileWorkSurfaces : websiteWorkSurfaces)
    : project.galleryImages ?? (project.previewImage ? [{ title: 'Project preview', image: project.previewImage }] : [])
  if (!surfaces.length) return null
  const current = surfaces[index]
  return <div className="project-gallery">
    <div className="gallery-toolbar">
      {project.id === 'viharsync' ? <div className="filter-group" aria-label="Project screens">
        {(['website', 'app'] as const).map(type => <button key={type} aria-pressed={mode === type} className={mode === type ? 'active' : ''} onClick={() => { setMode(type); setIndex(0) }}>{type === 'website' ? 'Web & admin' : 'Mobile app'}</button>)}
      </div> : <span className="eyebrow">WEBSITE PREVIEW</span>}
      <div className="carousel-controls"><button aria-label="Previous project screen" onClick={() => setIndex((index + surfaces.length - 1) % surfaces.length)}><ChevronLeft size={20} /></button><button aria-label="Next project screen" onClick={() => setIndex((index + 1) % surfaces.length)}><ChevronRight size={20} /></button></div>
    </div>
    <figure className={`gallery-stage ${mode === 'app' ? 'gallery-mobile' : ''}`}><img src={current.image} alt={`${current.title} in ${project.name}`} /><figcaption aria-live="polite">{current.title}<span>{index + 1} / {surfaces.length}</span></figcaption></figure>
    <div className="gallery-thumbnails" aria-label="Choose a screen">{surfaces.map((surface, screenIndex) => <button key={surface.title} aria-label={`Show ${surface.title}`} aria-pressed={index === screenIndex} onClick={() => setIndex(screenIndex)}><img src={surface.image} alt="" loading="lazy" /><span>{surface.title}</span></button>)}</div>
  </div>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [workMode, setWorkMode] = useState<'all' | 'website' | 'app'>('all')
  const [activeServiceId, setActiveServiceId] = useState<string | null>(serviceIdFromHash)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [modal, setModal] = useState<OpenModal>(null)
  const activeService = serviceOfferings.find(service => service.id === activeServiceId)
  const visibleProjects = projects.filter(project => workMode === 'all' || project.platforms.includes(workMode))

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setMenuOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus() }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    const syncServiceRoute = () => { setActiveServiceId(serviceIdFromHash()); setMenuOpen(false) }
    window.addEventListener('hashchange', syncServiceRoute)
    return () => window.removeEventListener('hashchange', syncServiceRoute)
  }, [])

  useEffect(() => {
    if (activeService) { window.scrollTo({ top: 0, behavior: 'instant' }); return }
    const target = window.location.hash.slice(1)
    if (target) requestAnimationFrame(() => document.getElementById(target)?.scrollIntoView())
  }, [activeService])

  function startProject(initialService?: string) { setMenuOpen(false); setModal({ type: 'inquiry', service: initialService }) }

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="header-inner section-wrap">
        <BrandIdentity />
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Our work</a><a href="#expertise">Services</a><a href="#process">Process</a><a href="#studio">About us</a></nav>
        <button className="button button-dark header-cta" onClick={() => startProject()}>Let’s talk</button>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation"><a onClick={() => setMenuOpen(false)} href="#work">Our work</a><a onClick={() => setMenuOpen(false)} href="#expertise">Services</a><a onClick={() => setMenuOpen(false)} href="#process">Process</a><a onClick={() => setMenuOpen(false)} href="#studio">About us</a><button className="button button-dark" onClick={() => startProject()}>Start a conversation</button></nav>}
    </header>

    {activeService ? <ServiceDetailPage service={activeService} onStartProject={() => startProject(activeService.inquiryService)} /> : <main id="main">
      <section className="hero-section" aria-labelledby="hero-heading">
        <div className="hero section-wrap">
          <div className="hero-topline"><span className="eyebrow">INDEPENDENT DESIGN & DEVELOPMENT STUDIO</span><span className="hero-location"><Globe2 size={15} /> India-based. Working worldwide.</span></div>
          <h1 id="hero-heading">Ambitious ideas.<br />Thoughtfully <span className="heading-accent">built.</span></h1>
          <div className="hero-bottom"><div className="hero-actions"><button className="button button-dark" onClick={() => startProject()}>Discuss your project</button><a className="hero-work-link" href="#work">Explore our work</a></div><p className="hero-description">We design and build websites, apps, and digital products that make your business easier to understand—and better to use.</p></div>
        </div>
      </section>

      <section id="work" className="work-section section-space" aria-labelledby="work-heading"><div className="section-wrap">
        <div className="work-heading"><h2 id="work-heading">A little of what we do.</h2><span className="eyebrow">SELECTED WORK</span></div>
        <div className="work-toolbar"><div className="filter-group" aria-label="Choose project type">{workTabs.map(tab => <button key={tab.mode} className={workMode === tab.mode ? 'active' : ''} aria-pressed={workMode === tab.mode} onClick={() => setWorkMode(tab.mode)}>{tab.label}</button>)}</div><span className="work-note" role="status">{visibleProjects.length} {visibleProjects.length === 1 ? 'project' : 'projects'}</span></div>
        <div className="project-grid">{visibleProjects.map(project => <article className={`project-card ${project.className}`} key={project.id}>
          <button className="project-preview" onClick={() => setModal({ type: 'project', project })} aria-label={`View ${project.name} project`}><ProjectVisual project={project} /><span className="project-preview-action" aria-hidden="true">Explore project <Plus size={18} /></span></button>
          <div className="project-card-body"><div className="project-meta"><span>{project.type}</span><span>{project.platforms.length > 1 ? 'WEB + APP' : 'WEBSITE'}</span></div><div className="project-title-row"><h3>{project.name}</h3><button className="project-details-link" onClick={() => setModal({ type: 'project', project })} aria-label={`More about ${project.name}`}><Plus size={22} /></button></div><p>{project.subtitle}</p><div className="project-tags">{project.id === 'viharsync' ? <><span>Product design</span><span>Web & mobile development</span></> : <><span>Web design</span><span>Development</span></>}</div></div>
        </article>)}</div>
        <div className="work-next"><p>Something you’re imagining could be here next.</p><button className="text-link" onClick={() => startProject()}>Start a project</button></div>
      </div></section>

      <section id="expertise" className="expertise-section section-space" aria-labelledby="expertise-heading"><div className="section-wrap">
        <div className="expertise-layout"><div className="expertise-intro"><span className="eyebrow">OUR CAPABILITIES</span><h2 id="expertise-heading">Good design.<br />Solid engineering.</h2><p>From the first conversation to the final details. The right mix of skills, all working toward your goal.</p><button className="text-link" onClick={() => startProject()}>Find the right starting point</button></div>
          <div className="services-grid">{serviceOfferings.map(offering => <a className="service-card" key={offering.id} href={`#/services/${offering.id}`}><span className="service-icon"><ServiceIcon type={offering.icon} /></span><div className="service-card-copy"><h3>{offering.title}</h3><p>{offering.summary}</p></div><span className="service-card-action"><span className="sr-only">Explore service</span><Plus size={21} /></span></a>)}</div>
        </div>
        <div className="technology-inner"><span className="eyebrow">BUILT WITH TOOLS WE TRUST</span><div className="technology-list">{['React', 'TypeScript', 'React Native', 'Node.js', 'PostgreSQL', 'Figma'].map(name => <span key={name}>{name}</span>)}</div></div>
      </div></section>

      <section id="process" className="process-section section-space" aria-labelledby="process-heading"><div className="section-wrap">
        <div className="section-heading"><div><span className="eyebrow">THE WAY WE WORK</span><h2 id="process-heading">A clear path.<br />From idea to out there.</h2></div><p>Close collaboration. Clear milestones.<br />You’re part of the process at every step.</p></div>
        <div className="process-grid">{[
          { icon: <Sparkles />, title: 'Get the right brief.', text: 'We ask questions, understand your users, and turn your goals into a focused scope.' },
          { icon: <Monitor />, title: 'Make it make sense.', text: 'We shape the experience and refine the design together before writing code.' },
          { icon: <Code2 />, title: 'Build with care.', text: 'Regular reviews, thoughtful engineering, and testing on the screens that matter.' },
          { icon: <BarChart3 />, title: 'Launch. Then learn.', text: 'We help you go live, hand things over, and plan what comes next.' },
        ].map(step => <article className="process-step" key={step.title}><span className="process-icon">{step.icon}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div></section>

      <section id="studio" className="studio-section section-wrap section-space" aria-labelledby="studio-heading">
        <div className="studio-heading"><span className="eyebrow">MEET THE STUDIO</span><h2 id="studio-heading">Small team.<br />Shared ambition.</h2><span className="studio-signature">Design minds. Developer hands.</span></div>
        <div className="studio-copy"><p className="studio-lead">Your project deserves people who care about it as much as you do.</p><p>We’re an independent studio based in India, bringing design and development together for startups and growing businesses worldwide. You work directly with the people shaping your product, from the first sketch to launch day.</p><div className="studio-principles"><div><Check size={18} /><span><strong>Direct by design</strong><small>A close working relationship, with fewer handoffs.</small></span></div><div><Globe2 size={18} /><span><strong>Built to work remotely</strong><small>Clear updates and calls planned around your time zone.</small></span></div></div><button className="text-link" onClick={() => startProject()}>Let’s get to know each other</button></div>
      </section>

      <section id="faq" className="faq-section section-space" aria-labelledby="faq-heading"><div className="section-wrap faq-layout"><div className="faq-intro"><span className="eyebrow">A FEW THINGS TO KNOW</span><h2 id="faq-heading">Good questions.<br />Straight answers.</h2><p>Have a different question?</p><button className="text-link" onClick={() => startProject()}>Ask us directly</button></div><div className="faq-list">{faqs.map((faq, index) => <div key={faq.question} className={`faq-item ${faqOpen === index ? 'open' : ''}`}><h3><button aria-expanded={faqOpen === index} aria-controls={`faq-answer-${index}`} onClick={() => setFaqOpen(faqOpen === index ? null : index)}>{faq.question}<Plus size={20} /></button></h3><div id={`faq-answer-${index}`} className="faq-answer" hidden={faqOpen !== index}><p>{faq.answer}</p></div></div>)}</div></div></section>

      <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="section-wrap contact-inner"><div><span className="eyebrow">THE NEXT GOOD THING STARTS HERE</span><h2 id="contact-heading">What’s next?</h2><p>A better website. A new product.<br />An idea worth exploring together.</p></div><div className="contact-actions"><button className="button button-cream" onClick={() => startProject()}>Start a conversation</button><a href={`mailto:${studio.email}`} className="contact-email">{studio.email}</a></div></div></section>

    </main>}

    <footer className="site-footer section-wrap"><div className="footer-top"><div><BrandIdentity /><p>Thoughtful digital experiences.<br />Built around your business.</p></div><div className="footer-links"><a href="#work">Our work</a><a href="#expertise">Services</a><a href="#studio">About us</a><button onClick={() => startProject()}>Get in touch</button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {studio.name}</span><span className="footer-location"><Globe2 size={15} /> Based in India. Working worldwide.</span><div><button onClick={() => setModal({ type: 'privacy' })}>Privacy</button><a href="#">Back to top</a></div></div></footer>

    {modal?.type === 'inquiry' && <Modal key="inquiry" labelId="inquiry-title" onClose={() => setModal(null)}><InquiryForm initialService={modal.service} /></Modal>}
    {modal?.type === 'project' && <Modal key={modal.project.id} labelId="project-dialog-title" onClose={() => setModal(null)} wide><div className="project-dialog"><span className="eyebrow">{modal.project.type}</span><h2 id="project-dialog-title">{modal.project.name}</h2><p className="project-dialog-subtitle">{modal.project.subtitle}</p><ProjectGallery project={modal.project} /><div className="project-dialog-body"><div><h3>About the project</h3><p>{modal.project.description}</p><ul>{modal.project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div><aside><span className="eyebrow">PROJECT FOCUS</span>{modal.project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}</aside></div><p className="project-disclosure">{modal.project.note}</p><div className="project-dialog-actions"><button className="button button-dark" onClick={() => startProject(modal.project.category === 'SaaS platforms' ? 'Custom SaaS' : modal.project.category === 'Mobile apps' ? 'iOS & Android app' : 'Web & social growth')}>Discuss a similar project</button>{modal.project.liveUrl && <a className="button button-outline" href={modal.project.liveUrl} target="_blank" rel="noreferrer">Visit live website</a>}</div></div></Modal>}
    {modal?.type === 'privacy' && <Modal key="privacy" labelId="privacy-title" onClose={() => setModal(null)}><span className="eyebrow">YOUR INFORMATION</span><h2 id="privacy-title">A little privacy.</h2><div className="privacy-content"><p>This website does not use analytics, advertising trackers, or cookies. Fonts and images are served with the site.</p><h3>Project inquiries</h3><p>The project form creates an email draft in your browser. Your entries stay in memory until you close or reload the page; this site does not save them to a server. A brief is only sent when you send it through your own email application.</p><h3>When you email us</h3><p>Your email provider and our email provider handle delivery. We use the information you choose to send to discuss your inquiry and any work you ask us to undertake.</p><h3>Questions or deletion requests</h3><p>Contact <a href={`mailto:${studio.email}`}>{studio.email}</a> about information you’ve sent to us. Hosting providers may process ordinary access logs needed to serve this website.</p></div></Modal>}
  </>
}

export default App
