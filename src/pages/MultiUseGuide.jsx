import { Link } from 'react-router-dom'
import { SpecCard } from '../components/SpecLabel.jsx'
import HyacinthMotif from '../components/HyacinthMotif.jsx'
import './MultiUseGuide.css'

const USES = [
  {
    id: 'seedling-pots',
    step: '01',
    name: 'Seedling pots',
    summary:
      'A recessed base block can be filled with soil and used to start seedlings before transplanting.',
    steps: [
      'Set aside a recessed base block from the kit once its holder is no longer needed.',
      'Add a small drainage hole in the base if it will hold standing water.',
      'Fill with potting soil and sow or transplant a seedling as usual.',
      'Transplant the seedling — block and all — once roots are established; the fibre is designed for biodegradability, subject to full-material testing.',
    ],
    note: 'Confirm your soil and seedling type tolerate direct contact with the fibre before relying on this for sensitive plants.',
  },
  {
    id: 'plant-mulch',
    step: '02',
    name: 'Plant mulch',
    summary: 'Spare blocks can be shredded and used as surface mulch around garden beds or potted plants.',
    steps: [
      'Break or shred a spare block into small, loose fragments.',
      'Spread a thin, even layer over the soil surface around existing plants.',
      'Top up as the layer breaks down over time.',
    ],
    note: 'Plant-safety testing of the finished material is ongoing — introduce mulch gradually and monitor sensitive plants.',
  },
  {
    id: 'moisture-retention',
    step: '03',
    name: 'Moisture-retention fibre',
    summary:
      'Broken into smaller pieces, spare blocks can be placed beneath or mixed into potting soil to help retain moisture.',
    steps: [
      'Break a spare block into coarse fragments, roughly bead- to coin-sized.',
      'Mix through the top few centimetres of potting soil, or layer beneath the surface.',
      'Water as usual — the fibre is intended to help slow moisture loss.',
    ],
    note: 'Subject to plant-safety testing; trial on a single pot before wider use.',
  },
  {
    id: 'organiser',
    step: '04',
    name: 'Desk or drawer organiser',
    summary: 'Arranged as-is, the blocks divide a drawer or desk into compartments for stationery, jewellery, cables or other small items — no cutting or shredding needed.',
    steps: [
      'Wipe the blocks clean and let them dry fully if they have been near liquids.',
      'Arrange the blocks directly in a drawer or on a desk to form compartments.',
      'Use a column or panel block to divide sections, and a recessed base block for small loose items.',
    ],
  },
  {
    id: 'pet-enrichment',
    step: '05',
    name: 'Pet-enrichment piece',
    summary:
      'Selected blocks can become a small scratching surface, play object, or one piece in a larger enrichment structure.',
    steps: [
      'Inspect each block for loose fragments before offering it to a pet.',
      'Introduce it under supervision as a scratching surface or chew-adjacent toy.',
      'Remove and discard once it begins to fray or break apart.',
    ],
    note: 'Pet-safety testing has not yet been completed — supervise use closely and do not allow ingestion. A complete enclosure (e.g. a cat house) is a future concept; one holder\'s worth of blocks is too small on its own.',
    warning: true,
  },
  {
    id: 'returnable',
    step: '06',
    name: 'Returnable packaging',
    summary:
      'In a future closed-loop delivery or refill programme, the blocks could potentially be returned and reused rather than repurposed at home.',
    steps: [
      'Keep the blocks in reasonable condition after use.',
      'Watch for return-and-reuse instructions from your HYAPACK point of contact once a programme is available.',
    ],
    note: 'This option is a potential future programme and is not yet operational.',
  },
]

function MultiUseGuide() {
  return (
    <div className="guide">
      <section className="guide-hero">
        <HyacinthMotif className="guide-motif" />
        <div className="container">
          <p className="guide-breadcrumb">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Multi-Use Guide</span>
          </p>
          <p className="eyebrow">Multi-Use Guide</p>
          <h1>Six ways to give your blocks a second life</h1>
          <p className="guide-lead">
            A HYAPACK block kit's job doesn't end at delivery. Because each
            holder is built from separate, reusable modules rather than one
            fixed shape, there's more than one way to reuse, repurpose,
            return or responsibly dispose of it — with honest notes on
            what's confirmed and what's still being tested.
          </p>
        </div>
      </section>

      <section className="guide-suitability">
        <div className="container guide-suitability-grid">
          <SpecCard
            title="Good fit"
            items={[
              { field: 'Dry storage', value: 'Stationery, cables, jewellery, small tools' },
              { field: 'Planting', value: 'Seedling starts, mulch, moisture-retention fibre' },
              { field: 'Light pet use', value: 'Supervised scratching or play surface' },
            ]}
          />
          <SpecCard
            title="Not suitable"
            items={[
              { field: 'Food contact', value: 'Not tested or intended for direct food contact' },
              { field: 'Wet / outdoor storage', value: 'Fibre will soften and degrade with sustained moisture' },
              { field: 'Unsupervised pet use', value: 'Do not allow ingestion; supervise closely' },
            ]}
          />
        </div>
      </section>

      <section className="guide-uses">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">Reuse &amp; repurpose ideas</p>
            <h2>Pick the life that suits you</h2>
          </div>

          <div className="guide-use-list">
            {USES.map((use) => (
              <article
                className={`guide-use-card${use.warning ? ' guide-use-card-warning' : ''}`}
                id={use.id}
                key={use.id}
              >
                <div className="guide-use-head">
                  <span className="guide-use-step">{use.step}</span>
                  <h3>{use.name}</h3>
                </div>
                <p className="guide-use-summary">{use.summary}</p>
                <ol className="guide-use-steps">
                  {use.steps.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ol>
                {use.note && (
                  <p className="guide-use-note">
                    {use.warning ? 'Safety note: ' : 'Note: '}
                    {use.note}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="guide-compost">
        <div className="container guide-compost-grid">
          <div>
            <p className="eyebrow">End of life</p>
            <h2>Composting &amp; disposal</h2>
            <p>
              Once a block has reached the end of its useful life, it may be
              composted or biodegraded — this is designed for
              biodegradability, subject to full-material testing of the
              finished binder, coating and additive composition. Where
              composting isn't available locally, dispose of the blocks
              through your standard waste stream.
            </p>
            <ul className="guide-compost-list">
              <li>Check whether your local composting facility accepts fibre-based packaging.</li>
              <li>Remove any non-fibre attachments (labels, tape) before composting.</li>
              <li>If in doubt, dispose of the blocks as general waste rather than contaminating a compost stream.</li>
            </ul>
          </div>

          <div className="guide-traceability">
            <p className="eyebrow">Coming later</p>
            <h3>Batch traceability</h3>
            <p>
              A QR-code or RFID system to trace an individual block back to
              its harvest batch, community source and processing date is a
              potential future feature — it is not yet operational.
            </p>
          </div>
        </div>
      </section>

      <section className="guide-cta">
        <div className="container guide-cta-inner">
          <div>
            <h2>Have a product that needs custom protection?</h2>
            <p>See how HYAPACK arranges modular blocks around your product's dimensions.</p>
          </div>
          <Link to="/#technical" className="btn btn-primary">
            See our technical design process
          </Link>
        </div>
      </section>
    </div>
  )
}

export default MultiUseGuide
