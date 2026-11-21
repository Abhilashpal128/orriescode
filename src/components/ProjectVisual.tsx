import { Bell, Building2, CircleHelp, Diamond, LayoutDashboard, Search, Settings, Users, Wallet } from 'lucide-react'
import type { Project } from '../content'
import BrandMark from './BrandMark'

export default function ProjectVisual({ project }: { project: Project }) {
  const { id } = project
  if (project.previewImage) return <div className="project-visual custom-project-visual"><img src={project.previewImage} alt={project.previewAlt || `${project.name} project preview`} loading="lazy" /><span className="visual-disclaimer">{project.type}</span></div>
  if (!['maison', 'viharsync', 'solenne'].includes(id)) return <div className="project-visual custom-project-visual"><BrandMark /><span className="custom-project-name">{project.name}</span><span className="visual-disclaimer">{project.type}</span></div>
  if (id === 'viharsync') return <div className="project-visual vihar-visual" aria-label="Illustrative ViharSync dashboard with sample community data" role="img">
    <div className="dashboard-window" aria-hidden="true">
      <aside className="dash-sidebar">
        <div className="dash-logo"><Building2 size={19} /><b>vihar<span>sync</span></b></div>
        <div className="dash-community"><span className="community-monogram">V</span><span>Vihar Heights<small>Community workspace</small></span></div>
        <div className="dash-nav active"><LayoutDashboard />Overview</div>
        <div className="dash-nav"><Users />Residents</div>
        <div className="dash-nav"><Wallet />Payments</div>
        <div className="dash-nav"><Building2 />Community</div>
        <div className="dash-nav last"><Settings />Settings</div>
        <div className="dash-help"><CircleHelp /><span>A little help?<small>Your community, connected.</small></span></div>
      </aside>
      <div className="dash-main">
        <div className="dash-top"><span>Community overview</span><div><Search /><Bell /><span className="dash-avatar">AK</span></div></div>
        <div className="dash-welcome"><div><h4>A little more connected.</h4><p>Here’s what’s happening in your community.</p></div><span>November 2026</span></div>
        <div className="dash-stats"><div><span>Total homes</span><strong>248</strong><small>One connected community</small></div><div><span>Occupancy</span><strong>96<span>%</span></strong><small>Space for new beginnings</small></div><div><span>Open requests</span><strong>12</strong><small>Every detail matters</small></div></div>
        <div className="dash-bottom"><div className="dash-chart"><div><b>Community activity</b><span>This month</span></div><div className="chart-bars">{[34, 58, 44, 76, 59, 86, 64, 92, 74, 100, 80, 91].map((n, i) => <span key={i} style={{ height: `${n}%` }} />)}</div><div className="chart-axis"><span>Week 1</span><span>Week 2</span><span>Week 3</span><span>Week 4</span></div></div><div className="dash-notice"><b>Community board</b><div><span className="notice-icon">✧</span><strong>A place to belong.</strong><p>Good things happen when a community comes together.</p></div></div></div>
      </div>
    </div>
    <span className="visual-disclaimer">Interface concept · sample data</span>
  </div>

  if (id === 'solenne') return <div className="project-visual solenne-visual" role="img" aria-label="Solenne jewelry website design concept featuring editorial gold jewelry photography">
    <div className="solenne-window" aria-hidden="true">
      <div className="solenne-nav"><span>Fine jewelry, quietly extraordinary.</span><b>solenne</b><div>Collections <span>Our story</span></div></div>
      <div className="solenne-hero"><img src="/images/jewelry-editorial.webp" alt="" loading="lazy" width="1536" height="1024" /><div><span>FOR ALL YOUR EVERYDAYS</span><h4>Made to be<br /><i>part of you.</i></h4><span className="mock-link">Find your forever piece</span></div></div>
      <div className="solenne-bottom"><span>A little gold. A lot of feeling.</span><Diamond size={14} /><span>Considered in every detail.</span></div>
    </div>
    <span className="visual-disclaimer">Independent design concept</span>
  </div>

  return <div className="project-visual maison-visual" role="img" aria-label="Maison Aurelle luxury jewelry storefront design concept">
    <div className="maison-window" aria-hidden="true">
      <div className="maison-nav"><span>Collections</span><b>MAISON AURELLE</b><span>Our world <span className="ml-3">Bag (0)</span></span></div>
      <div className="maison-hero"><div><span>THE ART OF THE EVERYDAY</span><h4>Some things<br />stay with you.<br /><i>Make them gold.</i></h4><span className="mock-link">Discover the collection</span></div><img src="/images/jewelry-hero.webp" alt="" loading="lazy" width="1122" height="1402" /></div>
      <div className="maison-bottom"><span>Considered. Collected. Cherished.</span><span>Modern heirlooms, made personal.</span></div>
    </div>
    <span className="visual-disclaimer">Independent design concept</span>
  </div>
}
