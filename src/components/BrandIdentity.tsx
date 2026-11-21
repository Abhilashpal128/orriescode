import BrandMark from './BrandMark'
import { studio } from '../content'

export default function BrandIdentity() {
  return <a href="#" className="brand" aria-label={`${studio.name} home`}>
    {studio.logo ? <img className="brand-logo" src={studio.logo} alt="" /> : <BrandMark />}
    <span>{studio.name.toLowerCase().split(/(&)/).map((part, index) => part === '&' ? <i key={index}>&</i> : part)}<span className="brand-period">.</span></span>
  </a>
}
