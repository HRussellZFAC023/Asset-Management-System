import React from "react";
import axios from "axios";

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
      })
  }

  render() {
    return (
      <div className="container">
        <br />

        <div className="columns">
          <div className="column is-3" />

          <div className="column is-9">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Hello, Admin.</h1>

                <h2 className="subtitle">Welcome to your dashboard!</h2>
              </div>
            </div>

            <div className="tile is-ancestor has-text-centered">
              <div className="tile is-parent">
                <p className="title">0</p>

                <p className="subtitle">Assets</p>
              </div>

              <div className="tile is-parent">
                <p className="title">0</p>

                <p className="subtitle">Types</p>
              </div>
            </div>

            <div className="columns">
              <div className="column is-6">
                <div className="card events-card">
                  <p className="card-header-title">Users</p>
                </div>
              </div>

              <div className="column is-6">
                <div className="card">
                  <p className="card-header-title">Asset Search</p>

                  <div className="card-content">
                    <div className="content">
                      <div className="control has-icons-left has-icons-right">
                        <input className="input is-large" type="text" placeholder="" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                  <p className="card-header-title">User Search</p>

                  <div className="card-content">
                    <div className="content">
                      <div className="control has-icons-left has-icons-right">
                        <input className="input is-large" type="text" placeholder="" />
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
