import type { Project } from '../content'
import BrandMark from './BrandMark'

export default function ProjectVisual({ project }: { project: Project }) {
  if (project.previewImage) return <div className="project-visual mumbai-visual">
    <span className="project-cover-label" aria-hidden="true">{project.id === 'mumbai-man' ? 'Mumbai Man' : project.name}<small>A BUSINESS, WELL PRESENTED.</small></span>
    <div className="preview-browser"><div className="browser-chrome" aria-hidden="true"><span /><span /><span /><small>{project.liveUrl ? new URL(project.liveUrl).hostname : project.name}</small></div><img src={project.previewImage} alt={project.previewAlt || `${project.name} website`} loading="lazy" width="1440" height="900" /></div>
  </div>

  if (project.id === 'viharsync') return <div className="project-visual vihar-visual">
    <span className="project-cover-label" aria-hidden="true">ViharSync<small>COMMUNITY, CONNECTED.</small></span>
    <div className="preview-browser"><div className="browser-chrome" aria-hidden="true"><span /><span /><span /><small>ViharSync · community dashboard</small></div><img src="/images/viharsync/viharsync-dashboard.png" alt="ViharSync society administration dashboard" loading="lazy" /></div>
    <div className="preview-phone"><img src="/images/viharsync/WhatsApp Image 2026-11-21 at 4.40.21 PM.jpeg" alt="ViharSync resident mobile app" loading="lazy" /></div>
  </div>

  return <div className="project-visual"><BrandMark /><span>{project.name}</span></div>
}
