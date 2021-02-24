import React from 'react'
import './app.scss'

import HouseItem from './components/house-item/house-item'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      monsters: '',
      houses: [],
    }
  }

  componentDidMount() {
    fetch(
      'https://raw.githubusercontent.com/jsvini/desafio-frontend/master/assets/api.json'
    )
      .then((response) => response.json())
      .then((houses) => {
        const houses2 = houses.data
          .filter((item, index) => index < 10)
          .map(
            ({
              additionalId,
              title,
              realestateSummary,
              advertisementPrice,
              advertisementAssets,
            }) => ({
              id: additionalId,
              title,
              space: realestateSummary.space,
              rooms: realestateSummary.numberOfRooms,
              postalCode: realestateSummary.address.postalCode,
              city: realestateSummary.address.city,
              street: realestateSummary.address.street,
              price: advertisementPrice.baseRent,
              image:
                advertisementAssets[0].advertisementThumbnails.inventory_m.url,
            })
          )
        this.setState(() => ({ houses: houses2 }))
      })
  }

  render() {
    return (
      <div className="wrapper">
        {this.state.houses.map(({ id, ...otherProps }) => (
          <HouseItem key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default App
