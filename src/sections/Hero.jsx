import { Link } from 'react-router-dom'
import heroImg from '../assets/modular_multi.webp'
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
            Modular protective packaging, grown from an invasive weed.
          </h1>
          <p className="hero-lead">
            HYAPACK harvests invasive water hyacinth cleared from Thai
            waterways and moulds it into a kit of modular fibre blocks —
            arranged into a custom-fit holder per product, without a new
            mould for every SKU, replacing selected foam, plastic-insert and
            bubble-wrap applications.
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
            src={heroImg}
            alt="A modular water hyacinth fibre block system: assembled holders for a lotion bottle, a jar, and a small kraft box, surrounded by the loose columns, panels and connector blocks they're built from"
            width="1448"
            height="1086"
          />
          <div className="hero-visual-tag">
            <span className="eyebrow">Modular system</span>
            <span>Fibre blocks, arranged per product</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
