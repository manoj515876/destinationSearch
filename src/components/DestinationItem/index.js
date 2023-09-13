import './index.css'

const DestinationItem = props => {
  const {itemDetails} = props
  const {imgUrl, name} = itemDetails
  return (
    <li className="list-card">
      <img src={imgUrl} alt={name} className="card-img" />
      <p className="card-name">{name}</p>
    </li>
  )
}

export default DestinationItem
