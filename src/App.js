import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import Home from './pages/Home'

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
        </main>
      </BrowserRouter>
    )
  }
}
