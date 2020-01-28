import React from "react";
import { withRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Users from "./components/dashboard/Admin/Users";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import Home from "./components/Home/Home";
import Dashboard from './components/dashboard/Dashboard'
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
