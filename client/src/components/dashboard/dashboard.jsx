import React from "react";
import Sidebar from './sidebar';
import axios from "axios";
import UserInfo from './user-info';
import CurrentPath from './current-path';
import UsernamesTable from './usernames-table';

class Dashboard extends React.Component {
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

  render() {
    return (
      <div className="container">
        <br />
        <div className="columns">
          <div className="column is-3 ">
            <Sidebar />
          </div>
          <div className="column is-9">
            <CurrentPath zone="General" path="Dashboard"/>
            <section className="hero is-dark welcome is-small">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title">
                    Hello, Admin.
                  </h1>
                  <h2 className="subtitle">
                    Welcome to your dashboard!
                  </h2>
                </div>
              </div>
            </section>

            <section className="info-tiles">
              <div className="tile is-ancestor has-text-centered">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">0</p>
                    <p className="subtitle">Assets</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">0</p>
                    <p className="subtitle">Types</p>
                  </article>
                </div>
                <UserInfo users={this.state.users} />
              </div>
            </section>
            <div className="columns">
              <div className="column is-6">
                <div className="card events-card">
                  <header className="card-header">
                    <p className="card-header-title">
                      Users
                    </p>
                    <span className="icon">
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </header>
                  <UsernamesTable users={this.state.users} />
                </div>
              </div>
              <div className="column is-6">
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      Asset Search
                    </p>
                    <span className="icon">
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <div className="control has-icons-left has-icons-right">
                        <input className="input is-large" type="text" placeholder="" />
                        <span className="icon is-medium is-left">
                          <i className="fa fa-search"></i>
                        </span>
                        <span className="icon is-medium is-right">
                          <i className="fa fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <header className="card-header">
                    <p className="card-header-title">
                      User Search
                    </p>
                    <span className="icon">
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </header>
                  <div className="card-content">
                    <div className="content">
                      <div className="control has-icons-left has-icons-right">
                        <input className="input is-large" type="text" placeholder="" />
                        <span className="icon is-medium is-left">
                          <i className="fa fa-search"></i>
                        </span>
                        <span className="icon is-medium is-right">
                          <i className="fa fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
