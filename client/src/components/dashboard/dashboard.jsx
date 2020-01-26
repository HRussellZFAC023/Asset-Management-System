import React from "react";
import Sidebar from './sidebar';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class="container">
        <div class="columns">
          <div class="column is-3 ">
            <Sidebar />
          </div>
          <div class="column is-9">
            <nav class="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li class="is-active">Dashboard</li>
              </ul>
            </nav>
            <section class="hero is-dark welcome is-small">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    Hello, Admin.
                  </h1>
                  <h2 class="subtitle">
                    Welcome to your dashboard!
                  </h2>
                </div>
              </div>
            </section>

            <section class="info-tiles">
              <div class="tile is-ancestor has-text-centered">
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">15</p>
                    <p class="subtitle">Assets</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">3</p>
                    <p class="subtitle">Types</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child box">
                    <p class="title">30</p>
                    <p class="subtitle">Users</p>
                  </article>
                </div>
              </div>
            </section>
            <div class="columns">
              <div class="column is-6">
                <div class="card events-card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Events
                    </p>
                    <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </header>
                  <div class="card-table">
                    <div class="content">
                      <table class="table is-fullwidth is-striped">
                        <tbody>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td class="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td class="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td class="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td class="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td class="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td class="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td class="level-right">Action</td>
                          </tr>
                          <tr>
                            <td width="5%"><i class="fa fa-bell-o"></i></td>
                            <td>Lorum ipsum dolem aire</td>
                            <td class="level-right">Action</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <footer class="card-footer">
                    View All
                  </footer>
                </div>
              </div>
              <div class="column is-6">
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      Asset Search
                    </p>
                    <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <div class="control has-icons-left has-icons-right">
                        <input class="input is-large" type="text" placeholder="" />
                        <span class="icon is-medium is-left">
                          <i class="fa fa-search"></i>
                        </span>
                        <span class="icon is-medium is-right">
                          <i class="fa fa-check"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <header class="card-header">
                    <p class="card-header-title">
                      User Search
                    </p>
                    <span class="icon">
                      <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </span>
                  </header>
                  <div class="card-content">
                    <div class="content">
                      <div class="control has-icons-left has-icons-right">
                        <input class="input is-large" type="text" placeholder="" />
                        <span class="icon is-medium is-left">
                          <i class="fa fa-search"></i>
                        </span>
                        <span class="icon is-medium is-right">
                          <i class="fa fa-check"></i>
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
