import React from 'react'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibGhtdXJwaHkiLCJhIjoiY2p1dTNzcnNhMGRrMjN5cGl2cmFpNmR0bCJ9.dghNRjtlhnn5h6UTeqnrKA'

class Map extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      lng: -0.118092,
      lat: 51.509865,
      zoom: 10
    }
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state

    this.map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v9',
      center: [lng, lat],
      zoom
    })

    // map.on('move', () => {
    //   const { lng, lat } = map.getCenter()
    //
    //   this.setState({
    //     lng: lng.toFixed(4),
    //     lat: lat.toFixed(4),
    //     zoom: map.getZoom().toFixed(2)
    //   })
    // })
  }

  render() {

    return (
      <div className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-half-dektop is full-tablet">
              <div ref={el => this.mapContainer = el} className="map" />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Map
