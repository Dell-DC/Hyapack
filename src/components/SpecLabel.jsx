import './SpecLabel.css'

function SpecLabel({ field, value }) {
  return (
    <div className="spec-label">
      <span className="spec-field">{field}</span>
      <span className="spec-value">{value}</span>
    </div>
  )
}

export function SpecCard({ title, items, children }) {
  return (
    <div className="spec-card">
      {title && <p className="spec-card-title">{title}</p>}
      <div className="spec-card-list">
        {items.map((item) => (
          <SpecLabel key={item.field} field={item.field} value={item.value} />
        ))}
      </div>
      {children}
    </div>
  )
}

export default SpecLabel
