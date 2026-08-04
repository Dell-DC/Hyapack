import './ImagePlaceholder.css'

function ImagePlaceholder({ label, className }) {
  return (
    <div className={`image-placeholder${className ? ` ${className}` : ''}`} role="img" aria-label={label}>
      <span>{label}</span>
    </div>
  )
}

export default ImagePlaceholder
