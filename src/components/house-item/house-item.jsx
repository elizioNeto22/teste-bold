import React from 'react'

import './house-item.scss'

const HouseItem = ({
  title,
  space,
  rooms,
  postalCode,
  city,
  street,
  price,
  image,
}) => (
  <div className="container">
    <img src={image} alt="house" />

    <div className="description">
      <div>
        <h3>{title}</h3>
        <p>
          {postalCode} {street} / {city}
        </p>
      </div>

      <footer>
        <p className="price">{price} €</p>
        <div className="stats">
          <p>{rooms} Zimmer</p>
          <hr />
          <p>ab {space.toFixed(0)}m²</p>
        </div>
      </footer>
    </div>
  </div>
)

export default HouseItem
