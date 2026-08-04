import { Link } from 'react-router-dom'
import ImagePlaceholder from '../components/ImagePlaceholder.jsx'
import { SpecCard } from '../components/SpecLabel.jsx'
import './ProductIntro.css'

const SPECS = [
  { field: 'Product', value: 'Lotion bottle & jar protective holders' },
  { field: 'Material', value: 'Water hyacinth fibre pulp' },
  { field: 'Fit', value: 'Modular blocks arranged to product geometry' },
  { field: 'Function', value: 'Cushions & locates product in transit' },
  { field: 'Second life', value: 'Reusable, rebuildable, repurposable' },
]

function ProductIntro() {
  return (
    <section className="product-intro" id="products">
      <div className="container product-intro-grid">
        <div className="product-intro-copy">
          <p className="eyebrow">The first products</p>
          <h2>A modular block kit, built around your product</h2>
          <p className="product-intro-body">
            HYAPACK's modular system starts from a small library of
            standardised water-hyacinth fibre blocks — columns, panels,
            bases and connectors — arranged to cradle a specific product,
            shown here holding a lotion bottle and a cream jar. It's a
            natural-fibre replacement for the foam inserts and bubble wrap
            these products usually ship in, without casting a new mould for
            every SKU: the blocks locate the product body and protect it in
            transit, while keeping a visibly natural, uncoated appearance
            rather than imitating plastic.
          </p>
          <p className="product-intro-body">
            Once the product arrives, the blocks' job isn't finished: they
            can be reused as the same holder, rebuilt into a different
            configuration, or, in time, repurposed into something else
            entirely — see the{' '}
            <Link to="/multi-use-guide">Multi-Use Guide</Link> for the full
            set of ideas.
          </p>
          <SpecCard items={SPECS} />
        </div>

        <div className="product-intro-visual">
          <ImagePlaceholder label="Modular block holders — lotion bottle, jar & tray configurations — product photo pending" />
        </div>
      </div>
    </section>
  )
}

export default ProductIntro
