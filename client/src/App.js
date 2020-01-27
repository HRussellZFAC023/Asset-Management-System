import React from "react";
import { withRouter, Switch, Route } from 'react-router-dom';
import axios from "axios";
import NavBar from './components/nav-bar/nav-bar'
import UsersList from "./components/users/UsersList";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/sign-up/sign-up";
import Home from "./components/home/home";
import Dashboard from './components/dashboard/dashboard'
import NotFound from './components/not-found/not-found'
import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
      username: "",
      email: ""
    };
  }

  componentDidMount() {
    document.title = "Umbrella: Meta visualisation for everyone"
    this.getUsers();
  }

  handleChange = event => {
    const obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  getUsers() {
    axios
      .get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
      .then(res => {
        this.setState({ users: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  displayUsers = () => (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <UsersList users={this.state.users} />
          </div>
        </div>
      </div>
    </section>
  )

  render() {
    return (
      <div>
        <Route exact path={['/', '/signin', '/signup', '/users', '/dashboard']} component={NavBar} />
        <Switch>
          <Route exact path ='/' component={Home} />
          <Route exact path ='/signin' component={SignIn} />
          <Route exact path ='/signup' component={SignUp} />
          <Route exact path ='/users' component={this.displayUsers} />
          <Route exact path ='/dashboard' component={Dashboard} />
          <Route path="" component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
