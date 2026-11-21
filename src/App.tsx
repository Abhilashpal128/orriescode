import { useEffect, useState } from 'react'
import { Activity, Bell, Building2, Check, ChevronDown, Code2, Diamond, Globe2, LayoutDashboard, Menu, Monitor, Plus, Settings, Sparkles, Users, Wallet, Wrench, X } from 'lucide-react'
import BrandMark from './components/BrandMark'
import BrandIdentity from './components/BrandIdentity'
import InquiryForm from './components/InquiryForm'
import Modal from './components/Modal'
import ProjectVisual from './components/ProjectVisual'
import { faqs, projects, services, studio, type Project } from './content'

const filters = ['All work', 'Jewelry & commerce', 'SaaS platforms'] as const
type Filter = typeof filters[number]
type OpenModal = { type: 'inquiry'; service?: string } | { type: 'project'; project: Project } | { type: 'privacy' } | null

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<Filter>('All work')
  const [serviceIndex, setServiceIndex] = useState(0)
  const [faqOpen, setFaqOpen] = useState<number | null>(0)
  const [modal, setModal] = useState<OpenModal>(null)
  const service = services[serviceIndex]

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

  function startProject(initialService?: string) { setMenuOpen(false); setModal({ type: 'inquiry', service: initialService }) }

  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">
      <div className="header-inner">
        <BrandIdentity />
        <nav className="desktop-nav" aria-label="Main navigation"><a href="#work">Our work</a><a href="#expertise">Services</a><a href="#process">How we work</a><a href="#studio">About</a></nav>
        <button className="button button-outline header-cta" onClick={() => startProject()}>Start a conversation <span className="small-spark">↗</span></button>
        <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </div>
      {menuOpen && <nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation"><a onClick={() => setMenuOpen(false)} href="#work">Our work</a><a onClick={() => setMenuOpen(false)} href="#expertise">Services</a><a onClick={() => setMenuOpen(false)} href="#process">How we work</a><a onClick={() => setMenuOpen(false)} href="#studio">About</a><button className="button button-dark" onClick={() => startProject()}>Start a conversation</button></nav>}
    </header>

    <main id="main">
      <section className="hero section-wrap" aria-labelledby="hero-heading">
        <div className="hero-copy">
          <div className="eyebrow hero-eyebrow"><span className="eyebrow-line" /> INDEPENDENT PRODUCT STUDIO · WORKING WITH US TEAMS</div>
          <h1 id="hero-heading">Custom software.<br /><i>Built around you.</i></h1>
          <p className="hero-description">We design and build SaaS products, business tools, and websites around the way your business actually works.</p>
          <div className="hero-actions"><a className="button button-dark" href="#work">Explore our work <ChevronDown size={16} className="arrow-down-right" /></a><button className="text-link" onClick={() => startProject()}>Tell us what you’re building</button></div>
          <div className="hero-footnote"><div className="craft-symbol"><Code2 size={21} /><span>+</span><Sparkles size={20} strokeWidth={1.25} /></div><span>Thoughtful product thinking.<br /><strong>Reliable engineering.</strong></span></div>
        </div>
        <div className="hero-art">
          <div className="hero-product-window" role="img" aria-label="Illustrative ViharSync founder project dashboard concept with sample data, not used by client teams">
            <div className="hero-product-top" aria-hidden="true"><div className="hero-product-brand"><span className="hero-app-icon"><Building2 size={17} /></span><strong>vihar<span>sync</span></strong><span className="concept-badge">FOUNDER PROJECT</span></div><div className="hero-product-account"><span className="sample-badge"><span /> SAMPLE DATA</span><Bell size={16} /><span className="hero-avatar">A</span></div></div>
            <div className="hero-product-layout" aria-hidden="true">
              <aside className="hero-product-sidebar"><span className="sidebar-label">WORKSPACE</span><span className="hero-side-link selected"><LayoutDashboard />Overview</span><span className="hero-side-link"><Users />Residents</span><span className="hero-side-link"><Wallet />Payments</span><span className="hero-side-link"><Wrench />Requests</span><span className="hero-side-link"><Settings />Settings</span><div className="sidebar-help"><span>?</span><div><strong>Need a hand?</strong><small>We’re here to help</small></div></div></aside>
              <div className="hero-dashboard">
                <div className="hero-dashboard-heading"><div><span className="eyebrow">COMMUNITY OVERVIEW</span><h2>A better-managed community.</h2><p>One clear view of what needs your attention.</p></div><span className="hero-date">This month <ChevronDown size={13} /></span></div>
                <div className="hero-metric-grid"><div><span>RESIDENTS</span><strong>248</strong><small>Across your community</small></div><div><span>OPEN REQUESTS</span><strong>12</strong><small>Ready for a closer look</small></div><div><span>OCCUPANCY</span><strong>96<small>%</small></strong><small>Homes in good hands</small></div></div>
                <div className="hero-dashboard-bottom"><div className="hero-activity"><div className="hero-card-title"><strong><Activity size={14} /> Community activity</strong><span>THIS MONTH</span></div><div className="hero-chart" aria-hidden="true">{[32, 54, 43, 76, 62, 88, 59, 96, 68, 80, 57, 91].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div><div className="hero-chart-axis"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div></div><div className="hero-next-step"><span className="eyebrow">UP NEXT</span><strong>Community meeting</strong><p>Saturday · 10:30 AM</p><span className="next-step-icon"><Check size={14} /></span></div></div>
                <span className="hero-sample-disclaimer">Concept interface · sample data · no client users</span>
              </div>
            </div>
          </div>
          <div className="hero-build-note" aria-hidden="true"><span><Sparkles size={17} /></span><div><strong>From first idea<br />to software that fits.</strong><small>DISCOVER · DESIGN · BUILD</small></div></div>
        </div>
      </section>

      <div className="discipline-strip"><div className="section-wrap"><span>PRODUCTS THAT WORK HARDER</span><div><span>Custom SaaS</span><span className="strip-star">✳</span><span>Business software</span><span className="strip-star">✳</span><span>Web experiences</span><span className="strip-star">✳</span><span>Remote by design</span></div></div></div>

      <section id="work" className="work-section section-wrap section-space" aria-labelledby="work-heading">
        <div className="section-heading" data-reveal><div><span className="eyebrow">INDEPENDENT WORK · NOT CLIENT CASE STUDIES</span><h2 id="work-heading">Ideas taking shape.<br /><i>Products in progress.</i></h2></div><p>We don’t have client case studies to share yet. These independent product and design concepts show how we approach digital experiences.</p></div>
        <div className="work-toolbar" data-reveal><div className="filter-group" aria-label="Filter projects">{filters.map(item => <button key={item} className={filter === item ? 'active' : ''} aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}{item === 'All work' && <span>{String(projects.length).padStart(2, '0')}</span>}</button>)}</div><span className="work-note" role="status">{projects.filter(p => filter === 'All work' || p.category === filter).length} projects & explorations</span></div>
        <div className="project-grid">
          {projects.filter(project => filter === 'All work' || project.category === filter).map(project => <article key={project.id} className={`project-card ${project.className}`}>
            <button className="project-preview" aria-label={`Explore ${project.name}`} onClick={() => setModal({ type: 'project', project })}><ProjectVisual project={project} /><span className="project-hover-label">Explore the project <Plus size={18} /></span></button>
            <div className="project-caption"><div><button className="project-title" onClick={() => setModal({ type: 'project', project })}>{project.name}</button><p>{project.subtitle}</p></div><span className="project-category">{project.id === 'viharsync' ? 'FOUNDER PRODUCT · NO CLIENT USERS' : 'INDEPENDENT DESIGN CONCEPT'}</span></div>
          </article>)}
        </div>
        <p className="portfolio-note">ViharSync is our founder-built product and has no client users. Maison Aurelle and Solenne are self-initiated design concepts.</p>
      </section>

      <section id="expertise" className="expertise-section section-space" aria-labelledby="expertise-heading">
        <div className="section-wrap">
          <div className="section-heading" data-reveal><div><span className="eyebrow">FROM FIRST IDEA TO FINISHED PRODUCT</span><h2 id="expertise-heading">The right tools.<br /><i>Built around your business.</i></h2></div><p>We help you decide what to build, then design and develop the parts that make the biggest difference.</p></div>
          <div className="expertise-layout" data-reveal>
            <div className="service-tabs" role="tablist" aria-label="Our expertise" aria-orientation="vertical">{services.map((item, index) => <button key={item.id} id={`tab-${item.id}`} role="tab" type="button" tabIndex={index === serviceIndex ? 0 : -1} aria-selected={index === serviceIndex} aria-controls={`panel-${item.id}`} className={index === serviceIndex ? 'active' : ''} onClick={() => setServiceIndex(index)} onKeyDown={event => { let next = index; if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % services.length; else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index + services.length - 1) % services.length; else if (event.key === 'Home') next = 0; else if (event.key === 'End') next = services.length - 1; else return; event.preventDefault(); setServiceIndex(next); document.getElementById(`tab-${services[next].id}`)?.focus() }}><span className="service-tab-icon">{item.id === 'software' ? <Code2 /> : item.id === 'business-tools' ? <Monitor /> : <Diamond />}</span><span><strong>{item.title}</strong><small>{item.short}</small></span><Plus className="service-plus" /></button>)}</div>
            <div key={service.id} className="service-panel" id={`panel-${service.id}`} role="tabpanel" aria-labelledby={`tab-${service.id}`} tabIndex={0}><span className="eyebrow">DESIGNED AROUND YOUR BUSINESS</span><h3>{service.heading}</h3><p>{service.description}</p><ul>{service.items.map(item => <li key={item}><Check size={15} />{item}</li>)}</ul><button className="text-link" onClick={() => startProject(service.label)}>Let’s explore the possibilities</button><BrandMark className="service-watermark" /></div>
          </div>
        </div>
      </section>

      <section id="studio" className="studio-section section-wrap section-space" aria-labelledby="studio-heading">
        <div className="studio-art product-studio-art" data-reveal><div className="studio-art-note"><span className="eyebrow">GOOD SOFTWARE STARTS WITH</span><strong>A question<br /><i>worth solving.</i></strong><div className="studio-art-steps"><span>Listen</span><span>Design</span><span>Build</span></div></div><div className="studio-mini-window"><div className="studio-mini-bar"><span /><span /><span /><small>PROJECT WORKSPACE</small></div><div className="studio-mini-content"><span className="studio-mini-icon"><Code2 /></span><strong>Made for the work<br />that matters.</strong><p>Clear goals. Thoughtful details.<br />Software that works for you.</p><span className="studio-mini-status"><span /> DESIGNED WITH INTENTION</span></div></div><div className="studio-art-label"><BrandMark /><span>THOUGHTFUL BY DESIGN.<br />BUILT FOR REAL WORK.</span></div></div>
        <div className="studio-copy" data-reveal><span className="eyebrow">A STUDIO WITH A POINT OF VIEW</span><h2 id="studio-heading">Small by choice.<br /><i>Thoughtful by nature.</i></h2><p>We’re an independent product studio working with founders and teams who need more than off-the-shelf software.</p><p>From the first product decision to the details people use every day, we bring design thinking and dependable engineering into one close collaboration.</p><div className="studio-principles"><div><span>Direct collaboration</span><p>A close partnership with the people doing the work.</p></div><div><span>Made around you</span><p>Your goals, your customers, your kind of extraordinary.</p></div></div><div className="studio-signoff"><span className="signature">A little more considered.</span><BrandMark /></div></div>
      </section>

      <section id="process" className="process-section section-space" aria-labelledby="process-heading"><div className="section-wrap"><div className="section-heading" data-reveal><div><span className="eyebrow">FROM “WHAT IF” TO OUT IN THE WORLD</span><h2 id="process-heading">A clear process.<br /><i>Room for possibility.</i></h2></div><p>You bring the ambition. We bring the care, clarity, and craft to make it happen.</p></div><div className="process-grid" data-reveal>{[
        { icon: <Sparkles />, title: 'Find the feeling.', label: 'DISCOVER & DEFINE', text: 'We get to know your business, your people, and what makes you different. Together, we define what success looks like.' },
        { icon: <Diamond />, title: 'Shape the experience.', label: 'DESIGN & REFINE', text: 'We explore a visual direction, map the journey, and turn the best ideas into a design you can see, use, and refine.' },
        { icon: <Code2 />, title: 'Make it real.', label: 'BUILD & PERFECT', text: 'Thoughtful development brings it all together. We check the details across screens, browsers, and real interactions.' },
        { icon: <Globe2 />, title: 'Give it a beginning.', label: 'LAUNCH & GROW', text: 'We prepare for launch, hand over with care, and plan the next chapter with the support your business needs.' },
      ].map((step, index) => <div className="process-step" key={step.title}><span className="process-number">{String(index + 1).padStart(2, '0')}</span><span className="process-icon">{step.icon}</span><span className="eyebrow">{step.label}</span><h3>{step.title}</h3><p>{step.text}</p></div>)}</div></div></section>

      <section id="faq" className="faq-section section-wrap section-space" aria-labelledby="faq-heading"><div className="faq-intro" data-reveal><span className="eyebrow">A LITTLE CLARITY</span><h2 id="faq-heading">Good questions.<br /><i>Honest answers.</i></h2><p>Something else on your mind?</p><button className="text-link" onClick={() => startProject()}>We’d love to hear it</button></div><div className="faq-list" data-reveal>{faqs.map((faq, index) => <div key={faq.question} className={`faq-item ${faqOpen === index ? 'open' : ''}`}><h3><button aria-expanded={faqOpen === index} aria-controls={`faq-answer-${index}`} onClick={() => setFaqOpen(faqOpen === index ? null : index)}>{faq.question}<Plus size={20} /></button></h3><div id={`faq-answer-${index}`} className="faq-answer" hidden={faqOpen !== index}><p>{faq.answer}</p></div></div>)}</div></section>

      <section id="contact" className="contact-section" aria-labelledby="contact-heading"><div className="contact-orbit orbit-one" /><div className="contact-orbit orbit-two" /><div className="section-wrap contact-inner" data-reveal><BrandMark className="contact-mark" /><span className="eyebrow">YOUR NEXT CHAPTER STARTS HERE</span><h2 id="contact-heading">Got a big idea?<br /><i>Let’s make it real.</i></h2><p>Tell us what’s slowing you down or what you wish your software could do.<br className="hidden sm:block" /> We’ll help you figure out a thoughtful next step.</p><button className="button button-cream" onClick={() => startProject()}>Start a conversation <Sparkles size={17} /></button><a href={`mailto:${studio.email}`} className="contact-email">{studio.email}</a></div></section>
    </main>

    <footer className="site-footer section-wrap"><div className="footer-top"><BrandIdentity /><p>Independent product studio.<br />Thoughtful software, made together.</p><div><a href="#work">Our work</a><a href="#expertise">Services</a><button onClick={() => startProject()}>Start a project</button></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} {studio.name}. Made with intention.</span><span className="footer-location"><Globe2 size={14} /> Based in India · Working with US teams</span><button onClick={() => setModal({ type: 'privacy' })}>Privacy</button><a href="#">Back to top <ChevronDown size={14} className="rotate-180" /></a></div></footer>

    {modal?.type === 'inquiry' && <Modal key="inquiry" labelId="inquiry-title" onClose={() => setModal(null)}><InquiryForm initialService={modal.service} /></Modal>}
    {modal?.type === 'project' && <Modal key={modal.project.id} labelId="project-dialog-title" onClose={() => setModal(null)} wide><div className="project-dialog"><span className="eyebrow">{modal.project.type}</span><h2 id="project-dialog-title">{modal.project.name}</h2><p className="project-dialog-subtitle">{modal.project.subtitle}</p><ProjectVisual project={modal.project} /><div className="project-dialog-body"><div><h3>A closer look.</h3><p>{modal.project.description}</p><ul>{modal.project.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div><aside><span className="eyebrow">THE FOCUS</span>{modal.project.tags.map(tag => <span key={tag} className="project-tag">{tag}</span>)}</aside></div><p className="project-disclosure">{modal.project.note}</p><button className="button button-dark" onClick={() => startProject(modal.project.category === 'SaaS platforms' ? 'Custom SaaS' : 'Jewelry & e-commerce')}>Have something in mind?</button>{modal.project.liveUrl && <a className="text-link ml-5" href={modal.project.liveUrl} target="_blank" rel="noreferrer">Visit live project</a>}</div></Modal>}
    {modal?.type === 'privacy' && <Modal key="privacy" labelId="privacy-title" onClose={() => setModal(null)}><span className="eyebrow">YOUR INFORMATION</span><h2 id="privacy-title">A little privacy.</h2><div className="privacy-content"><p>This website does not use analytics, advertising trackers, or cookies. Fonts and images are served with the site.</p><h3>Project inquiries</h3><p>The project form creates an email draft in your browser. Your entries stay in memory until you close or reload the page; this site does not save them to a server. A brief is only sent when you send it through your own email application.</p><h3>When you email us</h3><p>Your email provider and our email provider handle delivery. We use the information you choose to send to discuss your inquiry and any work you ask us to undertake.</p><h3>Questions or deletion requests</h3><p>Contact <a href={`mailto:${studio.email}`}>{studio.email}</a> about information you’ve sent to us. Hosting providers may process ordinary access logs needed to serve this website.</p></div></Modal>}
  </>
}

export default App
