import { Link } from 'react-router-dom'
import trayImg from '../assets/moulded-tray.png'
import HyacinthMotif from '../components/HyacinthMotif.jsx'
import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="hero">
      <HyacinthMotif className="hero-motif" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Water hyacinth, put to work</p>
          <h1>
            Custom protective packaging, grown from an invasive weed.
          </h1>
          <p className="hero-lead">
            HYAPACK harvests invasive water hyacinth cleared from Thai
            waterways and moulds it into custom-fit protective packaging —
            replacing selected foam, plastic-insert and bubble-wrap
            applications with a material that supports waterway cleanup and
            local community income.
          </p>
          <div className="hero-actions">
            <Link to="/multi-use-guide" className="btn btn-primary">
              Explore Multi-Use Guide
            </Link>
            <a href="#products" className="btn btn-secondary">
              View Our Packaging
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src={trayImg}
            alt="A custom-moulded water hyacinth fibre tray cradling a glass lotion bottle with a copper pump, resting on a woven mat"
            width="900"
            height="600"
          />
          <div className="hero-visual-tag">
            <span className="eyebrow">Custom moulded</span>
            <span>Lotion bottle tray, water hyacinth pulp</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
