import { Link } from 'react-router-dom'
import logoIcon from '../assets/hyapack-icon.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-badge">
            <img src={logoIcon} alt="" width="34" height="42" />
          </span>
          <div>
            <p className="footer-wordmark">HYAPACK</p>
            <p className="footer-tagline">
              Transforming invasive water hyacinth into custom, protective and
              multi-use packaging.
            </p>
          </div>
        </div>

        <div className="footer-col">
          <p className="eyebrow">Site</p>
          <Link to="/#hero">Home</Link>
          <Link to="/#material">Our Material</Link>
          <Link to="/#products">Products</Link>
          <Link to="/multi-use-guide">Multi-Use Guide</Link>
          <Link to="/#team">About Us</Link>
        </div>

        <div className="footer-col">
          <p className="eyebrow">Sustainability</p>
          <span>Waterway cleanup, Ayutthaya</span>
          <span>Community-partnered sourcing</span>
          <span>Designed for biodegradability,</span>
          <span>subject to full-material testing</span>
        </div>

        <div className="footer-col" id="footer-contact-block">
          <p className="eyebrow">Contact</p>
          <p className="footer-placeholder">
            Custom packaging enquiries — contact details coming soon. In the
            meantime, reach out through your HYAPACK point of contact.
          </p>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} HYAPACK. All rights reserved.</p>
        <p className="footer-note">
          Environmental and material claims on this site are stated
          conservatively pending full third-party testing and certification.
        </p>
      </div>
    </footer>
  )
}

export default Footer
