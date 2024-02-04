import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Artworks from './views/artworks'
import NotFound1, { NotFound } from './views/not-found'
import AboutFridaKahlo from './views/about-frida-kahlo'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/" />
        <Route component={Artworks} exact path="/artworks" />
        <Route component={NotFound1} exact path="/not-found" />
        <Route component={AboutFridaKahlo} exact path="/about-frida-kahlo" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
