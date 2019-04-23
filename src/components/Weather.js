import React from 'react'
import axios from 'axios'

class Weather extends React.Component {

  constructor() {
    super()

    this.state = {
      weather: []
    }
  }

  componentDidMount() {
    axios.get('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/edd734530cf0d4569f24705b5e593c4a/51.509865,-0.118092')
      .then(res => this.setState({ weather: res.data}))
  }


  render() {
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{this.state.weather.timezone}</h1>

        </div>
      </section>
    )
  }

}

export default Weather
