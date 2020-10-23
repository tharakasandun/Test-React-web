import React, { Component } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import './App.css';
import HomePage from "./Pages/HomePage";
import Login from "./Pages/LoginPage";

class App extends Component {
  render() {
    let route;
    if (localStorage.getItem('login') == null) {
      route = <Switch>
        <Route path="/login" component={Login} />
        <Redirect to="/login" />
      </Switch>
    }
    else {
      route = <Switch>
        <Route path="/home" component={HomePage} />
        <Redirect to="/home" />
      </Switch>
    }
    return (
      <React.Fragment>
        {/* <Router>
          <Route path="/login" component={Login} />
          <Route path="/home" component={HomePage} />
        </Router> */}
        <Router>
          <Route default path="/" exact component={Login} />
          {route}
        </Router>
      </React.Fragment>
    );
  }
}
export default App;