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
    //.then(res => this.setState({ weather: res.data}))

      .then(res => {
        let presentState = {...this.state}
        presentState.currentWeather = res.data.minutely.summary
        presentState.time = res.data.minutely.data[0].time
        presentState.icon = res.data.hourly.data[0].icon
        console.log(presentState.time)
        console.log(presentState.currentWeather)
        console.log(presentState.icon)

        this.setState({
          ...presentState
        })

        function unixTimestamp(t) {
          let dt = new Date(t*1000)
          let hr = dt.getHours()
          let m = '0' + dt.getMinutes()
          let s = '0' + dt.getSeconds()
          return hr+ ':' + m.substr(-2) + ':' + s.substr(-2)
        }

        console.log(unixTimestamp(presentState.time))

      })
  }


  render() {
    return(
      <section className="section">
        <div className="container">
          <h1 className="title is-1">{this.unixTimestamp.bind(this)}</h1>

        </div>
      </section>
    )
  }

}

export default Weather
