import pelletsImg from '../assets/loose-fill-pellets.jpg'
import kitImg from '../assets/modular_container.webp'
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

          <figure className="gallery-item">
            <img
              src={kitImg}
              alt="The full modular kit: two assembled jar holders and the exploded view of a bottle holder's blocks, styled with a woven mat, plant and lavender"
              width="1448"
              height="1086"
            />
            <figcaption>The modular kit, fully assembled and exploded</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}

export default Gallery
