import './Lifecycle.css'

const STAGES = [
  {
    step: '01',
    name: 'Protect',
    body: 'The modular fibre blocks protect the product during transportation and handling, arranged to its shape.',
  },
  {
    step: '02',
    name: 'Reuse',
    body: 'The customer can reuse the blocks as the same holder, or rearrange them for another suitable function around the home or office.',
  },
  {
    step: '03',
    name: 'Repurpose',
    body: 'Potential second lives include seedling pots, plant mulch, moisture-retention fibre, drawer organisers, pet-enrichment pieces and rebuilt modular objects.',
  },
  {
    step: '04',
    name: 'Compost',
    body: 'Designed for biodegradability, subject to full-material testing of the finished binder, coating and additive composition.',
  },
]

function Lifecycle() {
  return (
    <section className="lifecycle" id="lifecycle">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Protect → Reuse → Repurpose → Compost</p>
          <h2>Built for a life after the first use</h2>
          <p>
            Every HYAPACK block is designed around a full lifecycle, not a
            single trip from warehouse to bin.
          </p>
        </div>

        <div className="lifecycle-track">
          <div className="lifecycle-line" aria-hidden="true" />
          {STAGES.map((stage) => (
            <div className="lifecycle-card" key={stage.name}>
              <div className="lifecycle-node" aria-hidden="true" />
              <span className="lifecycle-step">{stage.step}</span>
              <h3>{stage.name}</h3>
              <p>{stage.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Lifecycle
