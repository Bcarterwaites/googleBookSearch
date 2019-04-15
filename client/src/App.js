import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./pages/search";
import Saved from "./pages/saved"
import Navbar from "./components/Navbar/Navbar"
import Jumbotron from "./components/Jumbotron/Jumbotron"


class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Navbar />
        <Jumbotron />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          </Switch>
      </div>
    </Router>
  );
}

}

      export default App;