import pelletsImg from '../assets/loose-fill-pellets.jpg'
import './Gallery.css'

function Gallery() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">In detail</p>
          <h2>The material, up close</h2>
        </div>

        <div className="gallery-grid">
          <figure className="gallery-item gallery-item-wide">
            <img
              src={pelletsImg}
              alt="A pile of dried, pelletised water hyacinth fibre before it is moulded into packaging"
              width="1000"
              height="750"
            />
            <figcaption>Dried water hyacinth fibre, ready for moulding</figcaption>
          </figure>

          <div className="gallery-item gallery-item-placeholder" role="img" aria-label="Placeholder for future finished-product photography">
            <span>More product photography coming soon</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery
