import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { SpecCard } from '../components/SpecLabel.jsx'
import './TechnicalDesign.css'

const MODULE_SPECS = [
  { field: 'System', value: 'Modular fibre block kit' },
  { field: 'Material', value: 'Water hyacinth pulp' },
  { field: 'Block thickness', value: '3.0 ± 0.5 mm' },
  { field: 'Block types', value: 'Columns, panels, bases & connectors' },
  { field: 'Tooling', value: 'No new mould per product' },
]

function TechnicalDesign() {
  return (
    <section className="technical" id="technical">
      <div className="container technical-grid">
        <div className="technical-visual">
          <ImagePlaceholder label="Exploded assembly view — how the blocks arrange around a product — technical photo pending" />
        </div>

        <div className="technical-copy">
          <p className="eyebrow">Custom design &amp; configuration</p>
          <h2>Every holder starts with your product's own dimensions</h2>
          <p>
            Custom protection begins with the customer's product geometry:
            HYAPACK selects and arranges standard fibre blocks — columns,
            panels, bases and connectors — around it, cushioning and locating
            the product without casting a new mould per SKU. Each
            configuration is checked for structural stability and
            material-use optimisation before it ships.
          </p>

          <SpecCard title="Confidentiality & IP" items={[]}>
            <p className="technical-ip-body">
              Customer CAD files, dimensions, drawings and unreleased product
              designs are treated as confidential: protected through
              non-disclosure agreements, restricted and secure file storage,
              and controlled sharing with module makers. HYAPACK's own
              module specifications, configuration layouts, processing
              recipes and manufacturing parameters are protected in the same
              way, with clear ownership terms agreed for any custom module or
              configuration design.
            </p>
          </SpecCard>

          <div className="technical-mini-spec">
            <SpecCard items={MODULE_SPECS} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechnicalDesign
