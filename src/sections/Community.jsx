import { SpecCard } from '../components/SpecLabel.jsx'
import './Community.css'

const JOURNEY = ['Harvest', 'Sort', 'Clean', 'Dry', 'Process', 'Mould', 'Deliver']

const SOURCING_SPECS = [
  { field: 'Region', value: 'Ayutthaya (Bang Sai area)' },
  { field: 'Community partner', value: 'วิสาหกิจชุมชนบ้านผักตบชวาไม้ตรา' },
  { field: 'Waterway role', value: 'Cleanup & invasive-growth removal' },
]

const BENEFITS = [
  {
    name: 'Plastic reduction',
    body: 'Custom water-hyacinth packaging can replace foam, plastic inserts and bubble wrap in suitable applications.',
  },
  {
    name: 'Waterway support',
    body: 'Harvesting supports waterway cleanup and removal of obstructive water hyacinth from canals and rivers.',
  },
  {
    name: 'Community income',
    body: 'Harvesting and preprocessing can create additional income opportunities for local communities and community enterprises.',
  },
  {
    name: 'Traceable sourcing',
    body: 'Batch-level records can cover harvest location and date, community supplier, processing batch, and finished-product shipment.',
  },
]

function Community() {
  return (
    <section className="community" id="material">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Our material</p>
          <h2>Sourced from Ayutthaya's waterways, with the communities who clear them</h2>
          <p>
            HYAPACK's water hyacinth is harvested in partnership with local
            communities, waterway-cleanup groups and community enterprises
            around Ayutthaya's Bang Sai area — turning a recurring waterway
            problem into a sourced material.
          </p>
        </div>

        <div className="community-grid">
          <div className="community-journey">
            <p className="eyebrow">Material journey</p>
            <ol className="journey-track">
              {JOURNEY.map((step, i) => (
                <li key={step}>
                  <span className="journey-index">{String(i + 1).padStart(2, '0')}</span>
                  <span className="journey-name">{step}</span>
                </li>
              ))}
            </ol>

            <div className="community-benefits">
              {BENEFITS.map((b) => (
                <div className="benefit-item" key={b.name}>
                  <h3>{b.name}</h3>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="community-spec">
            <SpecCard title="Sourcing" items={SOURCING_SPECS} />
            <p className="community-note">
              Certification and impact reporting (e.g. carbon-footprint or
              Thai Green Label assessment) are being explored and are not yet
              confirmed. May support eligibility for applicable BCG, BOI or
              sustainability programmes — not a guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
