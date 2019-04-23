import React from 'react'
import axios from 'axios'

class Air extends React.Component {

  constructor() {
    super()

    this.state = {
      air: []
    }
  }

  componentDidMount() {
    axios.get('https://api.tfl.gov.uk/AirQuality')
      .then(res =>  this.setState({ air: res.data.currentForecast }))

  }

  render() {
    console.log(this.state.air)
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            {this.state.air.map(airy =>
              <div className="column" key={airy.updateFrequency}>
                <h2>Air: {airy.forecastSummary}</h2>
                <h2>Air: {airy.nO2Band}</h2>
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }

}

export default Air
