import React, { Component } from 'react';
import './App.css';
import Grid from "./Grid";
import { BrowserRouter as Router, Route, Switch, IndexRoute } from "react-router-dom";
import Intro from "./conatiners/Intro";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route exact path="/" component={Grid} />
            <Route exact path="/intro" component={Intro} />
          </Switch>
        </Router>
    );
  }
}

export default App;
