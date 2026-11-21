import { BarChart3, CalendarDays, Check, LayoutDashboard, Share2, Smartphone, Users, Bell } from 'lucide-react'
import type { Project } from '../content'
import BrandMark from './BrandMark'

export default function ProjectVisual({ project }: { project: Project }) {
  const { id } = project
  if (project.previewImage) return <div className="project-visual custom-project-visual"><img src={project.previewImage} alt={project.previewAlt || `${project.name} project preview`} loading="lazy" /><span className="visual-disclaimer">{project.type}</span></div>
  if (id === 'viharsync') return <div className="project-visual vihar-visual" aria-label="ViharSync web, mobile, and administrator platform" role="img">
    <div className="vihar-showcase" aria-hidden="true">
      <div className="vihar-showcase-main"><img src="/images/viharsync/viharsync-landing.png" alt="" loading="lazy" /></div>
      <div className="vihar-showcase-admin"><img src="/images/viharsync/viharsync-dashboard.png" alt="" loading="lazy" /></div>
      <div className="vihar-showcase-phone"><img src="/images/viharsync/WhatsApp Image 2026-11-21 at 4.40.21 PM.jpeg" alt="" loading="lazy" /></div>
    </div>
    <span className="visual-disclaimer">Founder-built product · web, mobile & admin</span>
  </div>
  if (!['orbit', 'pulse'].includes(id)) return <div className="project-visual custom-project-visual"><BrandMark /><span className="custom-project-name">{project.name}</span><span className="visual-disclaimer">{project.type}</span></div>

  if (id === 'orbit') return <div className="project-visual orbit-visual" role="img" aria-label="Orbit Mobile app interface concept for iOS and Android">
    <div className="phone-stage" aria-hidden="true">
      <div className="phone-shell phone-left"><div className="phone-notch" /><div className="phone-top"><span>9:41</span><span>•••</span></div><div className="phone-screen"><span className="phone-eyebrow">GOOD MORNING</span><strong>Today</strong><div className="phone-task done"><span><Check /></span><div><b>Morning review</b><small>Completed</small></div></div><div className="phone-task"><span>2</span><div><b>Design handoff</b><small>10:30 AM</small></div></div><div className="phone-task"><span>3</span><div><b>Team check-in</b><small>2:00 PM</small></div></div><div className="phone-nav"><LayoutDashboard /><CalendarDays /><Users /><Bell /></div></div></div>
      <div className="phone-shell phone-right"><div className="phone-notch" /><div className="phone-top"><span>9:41</span><span>•••</span></div><div className="phone-screen phone-progress"><span className="phone-back">←</span><strong>Launch sprint</strong><small>12 of 16 tasks complete</small><div className="progress-ring"><span>75<small>%</small></span></div><div className="phone-members"><span>AM</span><span>JK</span><span>+4</span></div><div className="phone-action"><Smartphone /> Open workspace</div></div></div>
    </div>
    <span className="visual-disclaimer">Independent iOS & Android app concept</span>
  </div>

  if (id === 'pulse') return <div className="project-visual pulse-visual" role="img" aria-label="Pulse Studio social management and web analytics concept">
    <div className="pulse-window" aria-hidden="true">
      <div className="pulse-sidebar"><strong><Share2 /> pulse</strong><span className="active"><LayoutDashboard />Overview</span><span><CalendarDays />Calendar</span><span><Share2 />Channels</span><span><BarChart3 />Reports</span></div>
      <div className="pulse-main"><div className="pulse-top"><strong>Campaign overview</strong><span>November 2026</span></div><div className="pulse-metrics"><div><span>Scheduled</span><strong>24</strong><small>Across 4 channels</small></div><div><span>Published</span><strong>18</strong><small>On track</small></div><div><span>Engagement</span><strong>8.6%</strong><small>↑ 1.4% this week</small></div></div><div className="pulse-content"><div className="pulse-calendar"><div className="pulse-card-head"><strong>Content calendar</strong><span>Week</span></div><div className="calendar-grid">{['18','19','20','21','22','23','24'].map((day, index) => <div key={day}><small>{['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][index]}</small><strong>{day}</strong>{index === 1 || index === 4 ? <span className="post-dot"><Share2 /></span> : null}</div>)}</div></div><div className="pulse-chart"><div className="pulse-card-head"><strong>Channel reach</strong><BarChart3 /></div><div className="pulse-bars">{[42,58,76,64,88,73,94].map((height, index) => <span key={index} style={{ height: `${height}%` }} />)}</div></div></div></div>
    </div>
    <span className="visual-disclaimer">Independent web & social-management concept</span>
  </div>

  return <div className="project-visual custom-project-visual"><BrandMark /><span className="custom-project-name">{project.name}</span><span className="visual-disclaimer">{project.type}</span></div>
}
