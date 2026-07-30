import { Link } from 'react-router-dom'
import productImg from '../assets/productnotext.png'
import { SpecCard } from '../components/SpecLabel.jsx'
import './ProductIntro.css'

const SPECS = [
  { field: 'Product', value: 'Lotion bottle protective tray' },
  { field: 'Material', value: 'Water hyacinth fibre pulp' },
  { field: 'Fit', value: 'Custom-moulded to bottle geometry' },
  { field: 'Function', value: 'Cushions & locates bottle in transit' },
  { field: 'Second life', value: 'Reusable, potentially repurposable' },
]

function ProductIntro() {
  return (
    <section className="product-intro" id="products">
      <div className="container product-intro-grid">
        <div className="product-intro-copy">
          <p className="eyebrow">The first product</p>
          <h2>A custom-moulded tray, built around one lotion bottle</h2>
          <p className="product-intro-body">
            HYAPACK's first custom design is a moulded water-hyacinth fibre
            tray shaped to cradle a single lotion bottle and its pump — a
            natural-fibre replacement for the foam inserts and bubble wrap
            this kind of product usually ships in. The cavity locates the
            bottle body and neck, protecting it in transit, while the fibre
            itself keeps a visibly natural, uncoated appearance rather than
            imitating plastic.
          </p>
          <p className="product-intro-body">
            Once the product arrives, the tray's job isn't finished: it can
            be reused as-is, or, in time, repurposed into something else
            entirely — see the{' '}
            <Link to="/multi-use-guide">Multi-Use Guide</Link> for the full
            set of ideas.
          </p>
          <SpecCard items={SPECS} />
        </div>

        <div className="product-intro-visual">
          <img
            src={productImg}
            alt="Three views of the water hyacinth tray: standing beside the lotion bottle on a woven mat, in profile, and viewed from above with the bottle seated in its custom cavity"
            width="900"
            height="600"
          />
        </div>
      </div>
    </section>
  )
}

export default ProductIntro
