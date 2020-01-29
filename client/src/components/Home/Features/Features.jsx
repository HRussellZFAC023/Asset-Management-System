import React from "react";
import "./Features.scss";
import banner from "../../../assets/sample.gif"
import tick from "../../../assets/check.svg"
import { Link } from "react-router-dom";


const Features = () => (
  <section class="section container has-text-centered">
    <h2 class="home-header title">Asset management just got easier.</h2>

    <div class="block"><img class="is-16by9" src={banner} alt="hero image" /></div>

    <div class="columns has-text-left">
      <div class="column is-4">
        <div class="columns">
          <div class="column is-2"><img src={tick} alt="tick" /></div>

          <div class="column is-10">
            <h4 class="title home-header is-spaced is-4">Visualise your assets</h4>

            <p class="subtitle is-6">Uncover lost gems in your from the past and organize
            assets however you like, using out interactive diagrams and intelligent
            search tools.</p>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <div class="columns">
          <div class="column is-2"><img src={tick} alt="tick" /></div>

          <div class="column is-10">
            <h4 class="title home-header is-spaced is-4">Centralise your documentation</h4>

            <p class="subtitle is-6">Wouldn't it be great to have all your documentation
            all in one place? Say no more, we are on it.</p>
          </div>
        </div>
      </div>

      <div class="column is-4">
        <div class="columns">
          <div class="column is-2"><img src={tick} alt="tick" /></div>

          <div class="column is-10">
            <h4 class="title home-header is-spaced is-4">Get started in minutes</h4>

            <p class="subtitle is-6">Simply upload a directory and we will parse the
            metadata. Easily add further tags as you go making searching and sorting a
            breeze.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="buttons is-centered">
      <Link class="button is-info" href="#">Sign up now</Link>
    </div>
  </section>

);

export default Features
