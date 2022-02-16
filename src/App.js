import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import MyIndex from "./components/MyIndex";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

class App extends Component {
  state = {};
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={MyIndex} exact />
          <Route path="/Todo/Login" component={Login} exact />
          <Route path="/Todo/SignUp" component={SignUp} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
