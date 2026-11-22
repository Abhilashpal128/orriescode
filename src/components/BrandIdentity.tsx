import BrandMark from './BrandMark'
import { studio } from '../content'

export default function BrandIdentity() {
  return <a href="#" className="brand" aria-label={`${studio.name} home`}>
    {studio.logo ? <img className="brand-logo" src={studio.logo} alt="" /> : <BrandMark />}
    {!studio.logo && <span className="brand-wordmark">{studio.name.toLowerCase().split(/(&)/).map((part, index) => part === '&' ? <span className="brand-accent" key={index}>&amp;</span> : part)}<span className="brand-accent">.</span></span>}
  </a>
}
