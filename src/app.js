
import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter as Router } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Hero from './components/Hero'
//import Bikes from './components/Bikes'

class App extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <Router>
        <main>

          <Hero />
        </main>
      </Router>
    )
  }
}



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
