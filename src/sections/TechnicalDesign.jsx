import cadImg from '../assets/moulded-tray-cad.png'
import { SpecCard } from '../components/SpecLabel.jsx'
import './TechnicalDesign.css'

const CAD_SPECS = [
  { field: 'Drawing', value: 'WH-TRAY-01, Rev. A' },
  { field: 'Material', value: 'Water hyacinth pulp' },
  { field: 'Thickness', value: '3.0 ± 0.5 mm' },
  { field: 'Tolerance', value: '± 1.0 mm' },
  { field: 'Overall size', value: '277 × 192 mm' },
]

function TechnicalDesign() {
  return (
    <section className="technical" id="technical">
      <div className="container technical-grid">
        <div className="technical-visual">
          <img
            src={cadImg}
            alt="Technical CAD drawing of the water hyacinth moulded tray showing top, side and section views with dimensions in millimetres, titled Water Hyacinth Molded Tray for Lotion Bottle"
            width="900"
            height="600"
          />
        </div>

        <div className="technical-copy">
          <p className="eyebrow">Custom design &amp; tooling</p>
          <h2>Every mould starts with your product's own dimensions</h2>
          <p>
            Custom packaging begins with the customer's product geometry:
            HYAPACK designs the moulded cavity — wall thickness, cushioning
            zones, locating ribs, and neck or base support — around it, then
            works through mould and tooling development with manufacturability
            and material-use optimisation in mind.
          </p>

          <SpecCard title="Confidentiality & IP" items={[]}>
            <p className="technical-ip-body">
              Customer CAD files, dimensions, drawings and unreleased product
              designs are treated as confidential: protected through
              non-disclosure agreements, restricted and secure file storage,
              and controlled sharing with mould makers. HYAPACK's own mould
              specifications, processing recipes and manufacturing parameters
              are protected in the same way, with clear ownership terms
              agreed for any custom mould or design.
            </p>
          </SpecCard>

          <div className="technical-mini-spec">
            <SpecCard items={CAD_SPECS} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalDesign
