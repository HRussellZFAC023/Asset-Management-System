import React from "react";
import { Route } from 'react-router-dom';
import axios from "axios";
import NavBar from './components/nav-bar/nav-bar'
import UsersList from "./components/users/UsersList";
import AddUser from "./components/users/AddUser";
import SignIn from "./components/sign-in/sign-in"
import SignUp from "./components/sign-up/sign-up"
import './App.css';

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

  addUser = event => {
    event.preventDefault();

    const data = {
      username: this.state.username,
      email: this.state.email
    };

    axios
      .post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
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

  testUI = () => (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <br />
            <h1 className="title is-1">Users</h1>
            <hr />
            <br />
            <AddUser
              addUser={this.addUser}
              username={this.state.username}
              email={this.state.email}
              // eslint-disable-next-line react/jsx-handler-names
              handleChange={this.handleChange}
            />
            <br />
            <br />
            <UsersList users={this.state.users} />
          </div>
        </div>
      </div>
    </section>
  )

  render() {
    return (
      <div className='main-root'>
        <NavBar />
        <Route exact path ='/' component={this.testUI} />
        <Route exact path ='/signin' component={SignIn} />
        <Route exact path ='/signup' component={SignUp} />
      </div>
    );
  }
}

export default App;