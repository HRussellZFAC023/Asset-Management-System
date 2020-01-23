import React from "react";
import "./sign-up.scss";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="hero has-background-info my-fullheight square">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-6-tablet is-5-desktop is-4-widescreen is-large login-box">
                <form action="true" className="box">
                  <h1 className="title is-4">Sign Up</h1>
                  <div className="field">
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="text"
                        placeholder="e.g. Bob Smith"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-user" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="email"
                        placeholder="e.g. bobsmith@gmail.com"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-envelope" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="password" className="label">
                      Password
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="confirmPassword" className="label">
                      Confirm Password
                    </label>
                    <div className="control has-icons-left">
                      <input
                        type="password"
                        placeholder="*******"
                        className="input"
                        required
                      />
                      <span className="icon is-small is-left">
                        <i className="fa fa-lock" />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label htmlFor="checkbox" className="checkbox">
                      <input type="checkbox" />
                      {" Remember me"}
                    </label>
                  </div>
                  <div className="field">
                    <button className="button is-info is-fullwidth">Sign Up</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SignUp;