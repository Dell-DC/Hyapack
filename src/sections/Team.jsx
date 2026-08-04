import teamImg from '../assets/group4.png'
import './Team.css'

function Team() {
  return (
    <section className="team" id="team">
      <div className="container team-grid">
        <div className="team-copy">
          <p className="eyebrow">About us</p>
          <h2>The team behind HYAPACK</h2>
          <p>
            HYAPACK is developed by Group 4, a project team working through
            the material, sourcing and packaging-design questions behind
            turning water hyacinth into modular protective packaging —
            end to end, from community sourcing through to module design.
          </p>
        </div>

        <figure className="team-visual">
          <img
            src={teamImg}
            alt="The Group 4 project team gathered around a table in a meeting room, discussing the HYAPACK project"
            width="900"
            height="600"
          />
          <figcaption>Group 4 — the HYAPACK project team</figcaption>
        </figure>
      </div>
    </section>
  )
}

export default Team
