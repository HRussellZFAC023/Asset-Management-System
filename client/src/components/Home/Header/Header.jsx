import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => (
  //TODO can do is-fullheight-with-navbar but I think this looks better? @aidan
  <section className="hero is-info is-fullheight">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title is-spaced home-header">Umbrella, meta visualisation for everyone.</h1>
        <h2 className="subtitle">
          If it exists, there is metadata of it. If only there was a way to see how how it was all
          connected? Enter. Umbrella. A new management tool that lets you keep track of and document any type of
          digital asset from source code and documents, to photos and stock control. You name it. Take charge of your
          assets today.
        </h2>
        <div className="buttons is-centered">
          <Link className="control button is-primary" to="/signin">Sign in</Link>
          <a className="control button is-light" href="#features">Read more</a>
        </div>
      </div>
    </div>
  </section>
);

export default Header
