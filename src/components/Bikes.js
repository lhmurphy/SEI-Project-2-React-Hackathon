import React from 'react'
import axios from 'axios'

class Bikes extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      bikes: []
    }
  }

  componentDidMount() {
    // make an AJAX request to get the data to display
    axios.get(`https://api.tfl.gov.uk/bikepoint?lat=${this.props.location.lat}&lon=${this.props.location.lon}&radius=500`, )
      //.then(res => res.json())
      .then(res => this.setState({ bikes: res.data.places }))
  }

  render() {
    console.log(this.state.bikes)
    return (
      <div className="container">
        <div className="columns is-multiline">
          {this.state.bikes.map(bike =>
            <div className="column is-one-third-desktop is-half-tablet" key={bike.commonName}>
              <h2 className="title is-5">{bike.commonName}</h2>
              <h3>Bikes available: {bike.additionalProperties[6].value}</h3>
              <h3>Empty docks: {bike.additionalProperties[7].value}</h3>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Bikes
