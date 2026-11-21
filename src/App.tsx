import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, BarChart3, Check, ChevronDown, ChevronLeft, ChevronRight, Code2, Globe2, Menu, Monitor, Plus, Share2, Smartphone, Sparkles, X } from 'lucide-react'
import BrandMark from './components/BrandMark'
import BrandIdentity from './components/BrandIdentity'
import InquiryForm from './components/InquiryForm'
import Modal from './components/Modal'
import ProjectVisual from './components/ProjectVisual'
import { faqs, projects, studio, type Project } from './content'

const workTabs = [
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
      <a className="service-back-link" href="#expertise"><ArrowLeft size={16} /> Back to all services</a>
      <div className="service-detail-hero">
        <div>
          <span className="eyebrow">{studio.name.toUpperCase()} · {service.eyebrow}</span>
          <h1>{service.heading}</h1>
          <p>{service.description}</p>
          <div className="service-detail-actions"><button className="button button-dark" onClick={onStartProject}>Discuss your project <ArrowRight size={16} /></button><a className="button button-outline" href="#work">View selected work</a></div>
        </div>
        <aside className="service-tech-card"><span className="eyebrow">TOOLS & CAPABILITIES</span><div>{service.technologies.map(item => <span key={item}>{item}</span>)}</div></aside>
      </div>
      <section className="service-detail-content" aria-label="Service approach and deliverables">
        <div className="service-detail-approach">
          <span className="eyebrow">A PRACTICAL APPROACH</span>
          <h2>Built around the way your business works.</h2>
          <p>Every engagement starts with the people, goals, and day-to-day workflows behind the request. We shape a clear scope together before moving into design and development.</p>
          <div className="service-approach-grid">{service.approach.map((item, index) => <article key={item.title}><span className="eyebrow">0{index + 1} / HOW WE WORK</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
        </div>
        <aside className="service-deliverables">
          <span className="eyebrow">COMMON DELIVERABLES</span>
          <h2>Solutions for real requirements.</h2>
          <ul>{service.deliverables.map(item => <li key={item}><Check size={16} />{item}</li>)}</ul>
        </aside>
      </section>
      <nav className="service-related" aria-label="Related services"><span className="eyebrow">RELATED SERVICES</span><div>{relatedServices.map(related => <a key={related.id} href={`#/services/${related.id}`}>{related.title}<ArrowRight size={14} /></a>)}</div></nav>
      <aside className="service-next-step"><div><span className="eyebrow">NEXT STEPS</span><h2>Have a {service.title.toLowerCase()} project in mind?</h2><p>Tell us what you need and we’ll help shape a practical, high-performance solution.</p></div><button className="button button-dark" onClick={onStartProject}>Start a conversation <ArrowRight size={16} /></button></aside>
    </div>
  </main>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [workMode, setWorkMode] = useState<'website' | 'app'>('app')
  const [mobileScreenIndex, setMobileScreenIndex] = useState(0)
  const [websiteScreenIndex, setWebsiteScreenIndex] = useState(0)
  const [showcaseVisible, setShowcaseVisible] = useState(false)
  const [activeServiceId, setActiveServiceId] = useState<string | null>(serviceIdFromHash)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [modal, setModal] = useState<OpenModal>(null)
  const showcaseRef = useRef<HTMLDivElement>(null)
  const activeService = serviceOfferings.find(service => service.id === activeServiceId)
  const activeSurfaces = workMode === 'app' ? mobileWorkSurfaces : websiteWorkSurfaces
  const activeScreenIndex = workMode === 'app' ? mobileScreenIndex : websiteScreenIndex

  function moveScreen(direction: -1 | 1) {
    const updateIndex = (index: number) => (index + direction + activeSurfaces.length) % activeSurfaces.length
    if (workMode === 'app') setMobileScreenIndex(updateIndex)
    else setWebsiteScreenIndex(updateIndex)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.08 })
    document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === 'Escape') { setMenuOpen(false); document.querySelector<HTMLButtonElement>('.menu-toggle')?.focus() } }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  useEffect(() => {
    const syncServiceRoute = () => setActiveServiceId(serviceIdFromHash())
    window.addEventListener('hashchange', syncServiceRoute)
    return () => window.removeEventListener('hashchange', syncServiceRoute)
  }, [])

  useEffect(() => {
    if (activeService) window.scrollTo(0, 0)
  }, [activeService])

  useEffect(() => {
    const showcase = showcaseRef.current
    if (!showcase) return
    const observer = new IntersectionObserver(([entry]) => setShowcaseVisible(entry.isIntersecting), { threshold: 0.2 })
    observer.observe(showcase)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!showcaseVisible || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const interval = window.setInterval(() => {
      if (document.visibilityState !== 'visible') return
      if (workMode === 'app') setMobileScreenIndex(index => (index + 1) % mobileWorkSurfaces.length)
      else setWebsiteScreenIndex(index => (index + 1) % websiteWorkSurfaces.length)
    }, 3600)
    return () => window.clearInterval(interval)
  }, [showcaseVisible, workMode])

  function startProject(initialService?: string) { setMenuOpen(false); setModal({ type: 'inquiry', service: initialService }) }

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="header-inner">
        <BrandIdentity />
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Selected work</a><a href="#expertise">Services</a><a href="#process">How we work</a><a href="#studio">About</a></nav>
        <button className="button button-outline header-cta" onClick={() => startProject()}>Start a conversation <span className="small-spark">↗</span></button>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation"><a onClick={() => setMenuOpen(false)} href="#work">Our work</a><a onClick={() => setMenuOpen(false)} href="#expertise">Services</a><a onClick={() => setMenuOpen(false)} href="#process">How we work</a><a onClick={() => setMenuOpen(false)} href="#studio">About</a><button className="button button-dark" onClick={() => startProject()}>Start a conversation</button></nav>}
    </header>

    {activeService
      ? <ServiceDetailPage service={activeService} onStartProject={() => startProject(activeService.inquiryService)} />
      : <main id="main">
      <section className="hero section-wrap" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> GLOBAL DIGITAL PARTNER · US, UK, CANADA & MORE</div>
          <h1 id="hero-heading">Your idea.<br /><i>Built the right way.</i></h1>
          <p className="hero-description">We design and develop custom SaaS platforms, iOS and Android apps, business systems, websites, and social media workflows around exactly how you want your business to work.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">See what we build <ChevronDown size={16} className="arrow-down-right" /></a><button className="text-link" onClick={() => startProject()}>Discuss your project</button></div>
          <div className="hero-proof" aria-label="Core delivery capabilities"><span><strong>Build</strong> SaaS & mobile apps</span><span><strong>Grow</strong> Websites & social</span><span><strong>Support</strong> From launch onward</span></div>
          <div className="hero-footnote"><div className="craft-symbol"><Code2 size={21} /><span>+</span><Sparkles size={20} strokeWidth={1.25} /></div><span>Thoughtful product thinking.<br /><strong>Reliable engineering.</strong></span></div>
        </div>
        <div className="hero-art">
          <div className="hero-agency-window" role="img" aria-label="Digital product workspace showing web, mobile, and business software capabilities">
            <div className="agency-window-bar"><div className="agency-window-dots"><span /><span /><span /></div><span>PRODUCT WORKSPACE</span><div className="agency-status"><span /> Ready to build</div></div>
            <div className="agency-window-body">
              <div className="agency-sidebar" aria-hidden="true"><span className="agency-logo-mark">OC</span><span className="active">01</span><span>02</span><span>03</span><span>04</span></div>
              <div className="agency-canvas" aria-hidden="true">
                <div className="agency-canvas-heading"><span>ACTIVE BUILD</span><strong>One connected<br />digital system.</strong></div>
                <div className="agency-device-grid">
                  <div className="agency-browser"><div className="agency-browser-bar"><span /><span /><span /><b>your-business.com</b></div><div className="agency-browser-body"><span>NEW EXPERIENCE</span><strong>Built for the people<br />you want to reach.</strong><div><i /><i /><i /></div></div></div>
                  <div className="agency-phone"><div className="agency-phone-notch" /><span>Mobile app</span><strong>Easy to use.<br />Ready to grow.</strong><div className="agency-phone-actions"><i /><i /><i /></div></div>
                </div>
                <div className="agency-metrics"><div><span>WEB</span><strong>Fast</strong></div><div><span>APP</span><strong>Native</strong></div><div><span>SAAS</span><strong>Scalable</strong></div></div>
              </div>
            </div>
          </div>
          <div className="hero-build-note" aria-hidden="true"><span><Sparkles size={17} /></span><div><strong>Web. Mobile.<br />SaaS. Growth.</strong><small>DESIGNED AS ONE SYSTEM</small></div></div>
        </div>
      </section>

      <div className="discipline-strip"><div className="section-wrap"><span>ONE DIGITAL PARTNER</span><div><span>Custom SaaS</span><span className="strip-star">✳</span><span>Mobile apps</span><span className="strip-star">✳</span><span>Websites</span><span className="strip-star">✳</span><span>Social management</span></div></div></div>

      <section className="technology-strip" aria-label="Technology capabilities">
        <div className="section-wrap technology-inner">
          <span className="eyebrow">A PRACTICAL MODERN STACK</span>
          <div className="technology-list" aria-label="Technology and design tools">
            <span>React</span><i /> <span>TypeScript</span><i /> <span>React Native</span><i /> <span>Node.js</span><i /> <span>PostgreSQL</span><i /> <span>AWS</span><i /> <span>Figma</span>
          </div>
        </div>
      </section>

      <section id="work" className="work-section section-wrap section-space" aria-labelledby="work-heading">
        <div className="section-heading" data-reveal><div><span className="eyebrow">SELECTED WORK · PRODUCTS & DIGITAL EXPERIENCES</span><h2 id="work-heading">Built products.<br /><i>Ready for the next one.</i></h2></div><p>ViharSync is our featured in-house product. As we deliver more client work, this section will grow with websites, apps, SaaS platforms, and business systems.</p></div>
        <div className="work-toolbar work-mode-toolbar" data-reveal><div className="filter-group" aria-label="Choose project type">{workTabs.map(tab => <button key={tab.mode} className={workMode === tab.mode ? 'active' : ''} aria-pressed={workMode === tab.mode} onClick={() => setWorkMode(tab.mode)}>{tab.label}</button>)}</div><span className="work-note" role="status">ViharSync · our in-house product</span></div>
        <div className="surface-carousel" data-reveal>
          <div className="surface-carousel-heading"><div><span className="eyebrow">{workMode === 'website' ? 'WEBSITE & ADMIN' : 'MOBILE APP'}</span><h3>{workMode === 'website' ? <>Web & <i>admin.</i></> : <>One app. <i>Every screen.</i></>}</h3></div><div className="carousel-controls"><button type="button" aria-label="Previous ViharSync screen" onClick={() => moveScreen(-1)}><ChevronLeft /></button><button type="button" aria-label="Next ViharSync screen" onClick={() => moveScreen(1)}><ChevronRight /></button></div></div>
          <div className={`product-showcase ${workMode === 'app' ? 'showcase-app' : 'showcase-website'}`} ref={showcaseRef}>
            <div className="showcase-copy">
              <span className="eyebrow">VIHARSYNC · {workMode === 'app' ? 'MOBILE APP' : 'WEB PLATFORM'}</span>
              <strong>{workMode === 'app' ? 'One clear experience.' : 'One connected platform.'}</strong>
              <p>{activeSurfaces[activeScreenIndex].title}</p>
              <div className="showcase-dots" aria-label={`${workMode === 'app' ? 'App' : 'Website'} screens`}>
                {activeSurfaces.map((surface, index) => <button key={surface.title} type="button" aria-label={`Show ${surface.title}`} aria-current={index === activeScreenIndex ? 'step' : undefined} onClick={() => workMode === 'app' ? setMobileScreenIndex(index) : setWebsiteScreenIndex(index)} />)}
              </div>
              <span className="showcase-hint">A closer look at the product</span>
            </div>
            <button type="button" className="showcase-open" onClick={() => projects[0] && setModal({ type: 'project', project: projects[0] })} aria-label={`Open ViharSync details — ${activeSurfaces[activeScreenIndex].title}`}>
              <span className={workMode === 'app' ? 'showcase-device showcase-phone' : 'showcase-device showcase-browser'}>
                {workMode === 'website' && <span className="showcase-browser-bar"><i /><i /><i /><span>viharsync.com</span></span>}
                <span className="showcase-screen-window">
                  {workMode === 'app' && <span className="phone-notch" />}
                  <span className="showcase-screen-track" style={{ height: `${activeSurfaces.length * 100}%`, transform: `translateY(-${activeScreenIndex * (100 / activeSurfaces.length)}%)` }}>
                    {activeSurfaces.map(surface => <span className="showcase-screen" key={surface.title} style={{ flexBasis: `${100 / activeSurfaces.length}%` }}><img src={surface.image} alt={`${surface.title} in ViharSync`} loading="lazy" /></span>)}
                  </span>
                </span>
              </span>
            </button>
            <span className="showcase-open-label">View ViharSync details <Plus /></span>
          </div>
        </div>
        <aside className="work-coming-soon" data-reveal>
          <div><span className="eyebrow">YOUR PRODUCT COULD BE HERE NEXT</span><h3>A digital system built<br /><i>around your business.</i></h3></div>
          <button type="button" className="button button-dark" onClick={() => startProject()}>Start a project <ChevronRight /></button>
        </aside>
        <p className="portfolio-note">ViharSync is our own product, shown as a product showcase. No external client usage or paid-case-study results are claimed.</p>
      </section>

      <section id="expertise" className="expertise-section section-space" aria-labelledby="expertise-heading">
        <div className="section-wrap">
            <div className="section-heading" data-reveal><div><span className="eyebrow">FROM FIRST IDEA TO FINISHED PRODUCT</span><h2 id="expertise-heading">Services built<br /><i>around your business.</i></h2></div><p>Explore the capabilities we bring together to create useful products and stronger digital experiences.</p></div>
            <div className="service-ticker" role="region" aria-label="Our services, scrolling horizontally">
              <div className="service-ticker-track">
                <div className="service-ticker-set">
                  {serviceOfferings.map(offering => <a className="service-ticker-card" key={offering.id} href={`#/services/${offering.id}`}><span className="service-ticker-icon"><ServiceIcon type={offering.icon} /></span><strong>{offering.title}</strong><p>{offering.summary}</p><span className="service-ticker-link">Explore service <ArrowRight size={15} /></span><small>{offering.technologies.slice(0, 2).join(' · ')}</small></a>)}
                </div>
                <div className="service-ticker-set" aria-hidden="true">
                  {serviceOfferings.map(offering => <div className="service-ticker-card" key={offering.id}><span className="service-ticker-icon"><ServiceIcon type={offering.icon} /></span><strong>{offering.title}</strong><p>{offering.summary}</p><span className="service-ticker-link">Explore service <ArrowRight size={15} /></span><small>{offering.technologies.slice(0, 2).join(' · ')}</small></div>)}
                </div>
              </div>
            </div>
            <div className="expertise-cta"><p>Not sure which service fits? Tell us what you’re trying to solve.</p><button className="text-link" onClick={() => startProject()}>Let’s talk about your project <ArrowRight size={15} /></button></div>
        </div>
      </section>

      <section id="studio" className="studio-section section-wrap section-space" aria-labelledby="studio-heading">
        <div className="studio-art product-studio-art" data-reveal><div className="studio-art-note"><span className="eyebrow">GOOD SOFTWARE STARTS WITH</span><strong>A question<br /><i>worth solving.</i></strong><div className="studio-art-steps"><span>Listen</span><span>Design</span><span>Build</span></div></div><div className="studio-mini-window"><div className="studio-mini-bar"><span /><span /><span /><small>PROJECT WORKSPACE</small></div><div className="studio-mini-content"><span className="studio-mini-icon"><Code2 /></span><strong>Made for the work<br />that matters.</strong><p>Clear goals. Thoughtful details.<br />Software that works for you.</p><span className="studio-mini-status"><span /> DESIGNED WITH INTENTION</span></div></div><div className="studio-art-label"><BrandMark /><span>THOUGHTFUL BY DESIGN.<br />BUILT FOR REAL WORK.</span></div></div>
        <div className="studio-copy" data-reveal><span className="eyebrow">A GLOBAL DIGITAL PARTNER</span><h2 id="studio-heading">Small by choice.<br /><i>Built for range.</i></h2><p>We help startups and growing businesses worldwide turn ideas into usable digital products across web, mobile, SaaS, and social channels.</p><p>Strategy, design, development, and growth stay in one close collaboration—with clear updates, scheduled calls, and milestones aligned to your time zone.</p><div className="studio-principles"><div><span>Direct collaboration</span><p>A close partnership with the people doing the work.</p></div><div><span>Global delivery</span><p>Clear communication and overlap for international teams.</p></div></div><div className="studio-signoff"><span className="signature">One team. Every screen.</span><BrandMark /></div></div>
      </section>

      <section id="process" className="process-section section-space" aria-labelledby="process-heading"><div className="section-wrap"><div className="section-heading" data-reveal><div><span className="eyebrow">FROM “WHAT IF” TO OUT IN THE WORLD</span><h2 id="process-heading">A clear process.<br /><i>Room for possibility.</i></h2></div><p>You bring the ambition. We bring the care, clarity, and craft to make it happen.</p></div><div className="process-grid" data-reveal>{[
        { icon: <Sparkles />, title: 'Find the opportunity.', label: 'DISCOVER & DEFINE', text: 'We understand your audience, goals, channels, and operational needs before choosing the right product scope.' },
        { icon: <Monitor />, title: 'Shape the experience.', label: 'DESIGN & REFINE', text: 'We map the journey and turn it into a clear interface—ready to test across web and mobile screens.' },
        { icon: <Code2 />, title: 'Make it real.', label: 'BUILD & PERFECT', text: 'We develop the product, integrations, and launch-ready flows with close reviews at every milestone.' },
        { icon: <BarChart3 />, title: 'Grow with purpose.', label: 'LAUNCH & OPTIMIZE', text: 'We help launch your digital presence, then improve campaigns, content, and product flows with real feedback.' },
      ].map((step, index) => <div className="process-step" key={step.title}><span className="process-number">{String(index + 1).padStart(2, '0')}</span><span className="process-icon">{step.icon}</span><span className="eyebrow">{step.label}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>

      <section id="faq" className="faq-section section-wrap section-space" aria-labelledby="faq-heading"><div className="faq-intro" data-reveal><span className="eyebrow">A LITTLE CLARITY</span><h2 id="faq-heading">Good questions.<br /><i>Honest answers.</i></h2><p>Something else on your mind?</p><button className="text-link" onClick={() => startProject()}>We’d love to hear it</button></div><div className="faq-list" data-reveal>{faqs.map((faq, index) => <div key={faq.question} className={`faq-item ${faqOpen === index ? 'open' : ''}`}><h3><button aria-expanded={faqOpen === index} aria-controls={`faq-answer-${index}`} onClick={() => setFaqOpen(faqOpen === index ? null : index)}>{faq.question}<Plus size={20} /></button></h3><div id={`faq-answer-${index}`} className="faq-answer" hidden={faqOpen !== index}><p>{faq.answer}</p></div></div>)}</div></section>

      <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><div className="section-wrap contact-inner" data-reveal><BrandMark className="contact-mark" /><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2 id="contact-heading">Got a big idea?<br /><i>Let’s make it real.</i></h2><p>Tell us what’s slowing you down or what you wish your software could do.<br className="hidden sm:block" /> We’ll help you figure out a thoughtful next step.</p><button className="button button-cream" onClick={() => startProject()}>Start a conversation <Sparkles size={17} /></button><a href={`mailto:${studio.email}`} className="contact-email">{studio.email}</a></div></section>
    </main>}

    <footer className="site-footer section-wrap"><div className="footer-top"><BrandIdentity /><p>Digital product & growth studio.<br />Web, mobile, SaaS, and social.</p><div><a href="#work">Our work</a><a href="#expertise">Services</a><button onClick={() => startProject()}>Start a project</button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {studio.name}. Made with intention.</span><span className="footer-location"><Globe2 size={14} /> Based in India · Working worldwide</span><button onClick={() => setModal({ type: 'privacy' })}>Privacy</button><a href="#">Back to top <ChevronDown size={14} className="rotate-180" /></a></div></footer>

    {modal?.type === 'inquiry' && <Modal key="inquiry" labelId="inquiry-title" onClose={() => setModal(null)}><InquiryForm initialService={modal.service} /></Modal>}
    {modal?.type === 'project' && <Modal key={modal.project.id} labelId="project-dialog-title" onClose={() => setModal(null)} wide><div className="project-dialog"><span className="eyebrow">{modal.project.type}</span><h2 id="project-dialog-title">{modal.project.name}</h2><p className="project-dialog-subtitle">{modal.project.subtitle}</p><ProjectVisual project={modal.project} />{modal.project.id === 'viharsync' && <div className="project-detail-gallery"><div className="project-detail-heading"><span className="eyebrow">PRODUCT SURFACE GALLERY</span><span>Web · Admin · Mobile</span></div><div className="project-detail-grid">{workSurfaces.map(surface => <figure key={surface.title} className={surface.label.includes('MOBILE') ? 'detail-mobile' : 'detail-wide'}><img src={surface.image} alt={`${surface.title} in ViharSync`} loading="lazy" /><figcaption><span>{surface.label}</span><strong>{surface.title}</strong></figcaption></figure>)}</div></div>}<div className="project-dialog-body"><div><h3>A closer look.</h3><p>{modal.project.description}</p><ul>{modal.project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div><aside><span className="eyebrow">THE FOCUS</span>{modal.project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}</aside></div><p className="project-disclosure">{modal.project.note}</p><button className="button button-dark" onClick={() => startProject(modal.project.category === 'SaaS platforms' ? 'Custom SaaS' : modal.project.category === 'Mobile apps' ? 'iOS & Android app' : 'Web & social growth')}>Have something in mind?</button>{modal.project.liveUrl && <a className="text-link ml-5" href={modal.project.liveUrl} target="_blank" rel="noreferrer">Visit live project</a>}</div></Modal>}
    {modal?.type === 'privacy' && <Modal key="privacy" labelId="privacy-title" onClose={() => setModal(null)}><span className="eyebrow">YOUR INFORMATION</span><h2 id="privacy-title">A little privacy.</h2><div className="privacy-content"><p>This website does not use analytics, advertising trackers, or cookies. Fonts and images are served with the site.</p><h3>Project inquiries</h3><p>The project form creates an email draft in your browser. Your entries stay in memory until you close or reload the page; this site does not save them to a server. A brief is only sent when you send it through your own email application.</p><h3>When you email us</h3><p>Your email provider and our email provider handle delivery. We use the information you choose to send to discuss your inquiry and any work you ask us to undertake.</p><h3>Questions or deletion requests</h3><p>Contact <a href={`mailto:${studio.email}`}>{studio.email}</a> about information you’ve sent to us. Hosting providers may process ordinary access logs needed to serve this website.</p></div></Modal>}
  </>
}

export default App
