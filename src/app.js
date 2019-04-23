import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Hero from './components/Hero'
import Weather from './components/Weather'
import Air from './components/Air'
import Bikes from './components/Bikes'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      bikes: []
    }
  }

  componentDidMount() {
    navigator.geolocation.watchPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ location: { lat: latitude, lon: longitude } })
    })
  }


  render() {
    if(!this.state.location) return null
    return (
      <Router>
        <main>
          <Hero />
          <Weather />
          <hr />
          <Air />
          <hr />
          <Bikes location={this.state.location} />
        </main>
      </Router>
    )
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
