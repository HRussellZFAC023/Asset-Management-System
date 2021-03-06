import React from "react";
import { withRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Users from "./components/Dashboard/Admin/Users";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/HomePage";
import Dashboard from "./components/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import "./App.scss";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signin' component={SignIn} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/dashboard/users' component={Users} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
