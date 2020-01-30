import React from "react";
import "./Features.scss";
import banner from "../../../assets/sample.gif"
import tick from "../../../assets/check.svg"
import { Link } from "react-router-dom";


const Features = () => (
  <section className="section container has-text-centered" id="features">
    <h2 className="home-header title">Asset management just got easier.</h2>

    <div className="block"><img className="is-16by9" src={banner} alt="Umbrella concept" /></div>

    <div className="columns has-text-left">
      <div className="column is-4">
        <div className="columns">
          <div className="column is-2"><img src={tick} alt="tick" /></div>

          <div className="column is-10">
            <h4 className="title home-header is-spaced is-4">Visualise your assets</h4>

            <p className="subtitle is-6">
              Uncover lost gems in your from the past and organize
              assets however you like, using out interactive diagrams and intelligent
              search tools.
            </p>
          </div>
        </div>
      </div>

      <div className="column is-4">
        <div className="columns">
          <div className="column is-2"><img src={tick} alt="tick" /></div>

          <div className="column is-10">
            <h4 className="title home-header is-spaced is-4">Centralise your documentation</h4>

            <p className="subtitle is-6">
              Wouldn't it be great to have all your documentation
              all in one place? Say nso more, we are on it.
            </p>
          </div>
        </div>
      </div>

      <div className="column is-4">
        <div className="columns">
          <div className="column is-2"><img src={tick} alt="tick" /></div>

          <div className="column is-10">
            <h4 className="title home-header is-spaced is-4">Get started in minutes</h4>

            <p className="subtitle is-6">
              Simply upload a directory and we will parse the
              metadata. Easily add further tags as you go making searching and sorting a
              breeze.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="buttons is-centered">
      <Link className="button is-info" to="/signup" >Sign up now</Link>
    </div>
  </section>

);

export default Features
