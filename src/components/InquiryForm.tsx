import { useState, type FormEvent } from 'react'
import { Check, Copy, Download, Mail } from 'lucide-react'
import { studio } from '../content'

const needs = ['Custom SaaS', 'Business software', 'Websites & e-commerce', 'Something else']
const budgets = ['Under $5,000', '$5,000–$10,000', '$10,000–$25,000', '$25,000+', 'Let’s discuss']

export default function InquiryForm({ initialService }: { initialService?: string }) {
  const [service, setService] = useState(initialService || needs[0])
  const [brief, setBrief] = useState('')
  const [name, setName] = useState('')
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const mailto = `mailto:${studio.email}?subject=${encodeURIComponent(`New ${service.toLowerCase()} project — ${name}`)}&body=${encodeURIComponent(brief)}`

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const contactName = String(data.get('name')).trim()
    setName(contactName)
    setBrief(`Hi ${studio.name},\n\nI’d love to discuss a project.\n\nName: ${contactName}\nEmail: ${String(data.get('email')).trim()}\nBusiness: ${String(data.get('business')).trim() || 'Not provided'}\nInterested in: ${service}\nBudget: ${data.get('budget')}\nTimeline: ${data.get('timeline')}\n\nAbout the project:\n${String(data.get('message')).trim()}\n\nLooking forward to connecting,\n${contactName}`)
  }

  async function copyBrief() {
    try { await navigator.clipboard.writeText(brief); setCopied(true); setCopyError(false) }
    catch { setCopyError(true) }
  }

  function downloadBrief() {
    const url = URL.createObjectURL(new Blob([brief], { type: 'text/plain;charset=utf-8' }))
    const link = document.createElement('a')
    link.href = url; link.download = 'orris-and-code-project-brief.txt'; link.click()
    setTimeout(() => URL.revokeObjectURL(url), 1000)
  }

  return <>
    <span className="eyebrow">A GOOD THING STARTS WITH A CONVERSATION</span>
    <h2 id="inquiry-title">Let’s make<br /><i>something matter.</i></h2>
    {!brief ? <>
      <p className="dialog-intro">A little about you. A little about your idea. We’ll take it from there.</p>
      <form onSubmit={prepare} className="inquiry-form">
        <fieldset><legend>What do you have in mind?</legend><div className="choice-group">{needs.map(need => <label key={need} className={service === need ? 'selected' : ''}><input type="radio" name="service" value={need} checked={service === need} onChange={() => setService(need)} />{need}</label>)}</div></fieldset>
        <div className="form-grid"><label>Your name <span>*</span><input required name="name" autoComplete="name" placeholder="Alex Morgan" maxLength={100} pattern=".*\S.*" /></label><label>Email address <span>*</span><input required name="email" type="email" autoComplete="email" placeholder="alex@yourbrand.com" maxLength={160} /></label></div>
        <label>Business or website<input name="business" autoComplete="organization" placeholder="Your brand, business, or next big idea" maxLength={200} /></label>
        <div className="form-grid"><label>Budget in USD<select name="budget" defaultValue="Let’s discuss">{budgets.map(budget => <option key={budget}>{budget}</option>)}</select></label><label>Ideal timing<select name="timeline" defaultValue="Flexible"><option>As soon as possible</option><option>In 1–3 months</option><option>In 3–6 months</option><option>Flexible</option></select></label></div>
        <label>Tell us a little about your project <span>*</span><textarea required name="message" rows={3} placeholder="What are you imagining? What would you love to do better?" minLength={10} maxLength={1500} /></label>
        <button className="button button-dark w-full" type="submit">Prepare my inquiry <Mail size={17} /></button>
        <p className="form-note">Review your brief, then send it through your email app. Your details are not stored by this website.</p>
      </form>
    </> : <div className="inquiry-ready" role="status">
      <span className="success-mark"><Check /></span><h3>Your next chapter is ready.</h3><p>Your brief is prepared, {name.split(' ')[0]}. Open your email draft, review it, and press send to get the conversation started.</p>
      <pre>{brief}</pre>
      <a className="button button-dark w-full" href={mailto}>Open email draft <Mail size={18} /></a>
      <div className="brief-actions"><button type="button" onClick={copyBrief}><Copy size={16} />{copied ? 'Copied' : 'Copy brief'}</button><button type="button" onClick={downloadBrief}><Download size={16} />Download brief</button></div>
      {copyError && <p className="form-note">Copy isn’t available in this browser. Download your brief instead.</p>}
      <p className="form-note">Nothing has been sent yet. Email your brief to <a href={`mailto:${studio.email}`}>{studio.email}</a>.</p>
      <button className="text-link mt-5" onClick={() => setBrief('')}>Start a new brief</button>
    </div>}
  </>
}
