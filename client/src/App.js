import React from "react";
import { withRouter, Switch, Route } from 'react-router-dom';
import axios from "axios";
import NavBar from './components/nav-bar/nav-bar'
import Users from "./components/dashboard/admin/users";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/sign-up/sign-up";
import Home from "./components/home/home";
import Dashboard from './components/dashboard/dashboard'
import './App.scss';

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
          <Route exact path ='/' component={Home} />
          <Route exact path ='/signin' component={SignIn} />
          <Route exact path ='/signup' component={SignUp} />
          <Route exact path ='/dashboard' component={Dashboard} />
          <Route exact path ='/dashboard/users' component={Users} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
