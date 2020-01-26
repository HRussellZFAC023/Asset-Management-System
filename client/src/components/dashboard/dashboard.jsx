import React from "react";
import Sidebar from './sidebar';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li className="is-active">Dashboard</li>
              </ul>
            </nav>
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
                    <p className="title">15</p>
                    <p className="subtitle">Assets</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">3</p>
                    <p className="subtitle">Types</p>
                  </article>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <p className="title">30</p>
                    <p className="subtitle">Users</p>
                  </article>
                </div>
              </div>
            </section>
            <div className="columns">
              <div className="column is-6">
                <div className="card events-card">
                  <header className="card-header">
                    <p className="card-header-title">
                      Events
                    </p>
                    <span className="icon">
                      <i className="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </header>
                  <div className="card-table">
                    <div className="content">
                      <table className="table is-fullwidth is-striped">
                        <tbody>
                          <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td className="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td className="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td className="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td className="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td className="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td className="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td className="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i className="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td className="level-right">Action</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <footer className="card-footer">
                    View All
                  </footer>
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
