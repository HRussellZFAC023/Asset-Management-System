import React from "react";
import Sidebar from "../SideBar";
import axios from "axios";
import UsersList from "./UsersList";
import CurrentPath from "../Path";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
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

  removeUser(id) {
    axios
      .delete(`${process.env.REACT_APP_USERS_SERVICE_URL}/users/` + id)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    window.location.reload();
  }

  render() {
    return (
      <div className="container">
        <br />
        <div className="columns">
          <div className="column is-3 ">
            <Sidebar />
          </div>
          <div className="column is-9">
            <CurrentPath zone="Asset Management" path="Users" />
            <UsersList users={this.state.users} delete={this.removeUser} />
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
