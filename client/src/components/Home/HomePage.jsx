import React from "react";
import "./HomePage.scss";

const Home = () => (
  <section class="hero">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="home-header title is-spaced">Umbrella, meta visualisation for everyone.</h1>
          <h2 class="subtitle">If it exists, there is metadata of it. If only there was a way to see how how it was all
            connected? Enter. Umbrella. A new management tool that lets you keep track of and document any type of
            digital asset from source code and documents, to photos and stock control. You name it. Take charge of your
            assets today.</h2>
          <div class="buttons is-centered"><a class="control button is-primary" href="#">Sign in</a><a
              class="control button is-light" href="#">Read more</a></div>
        </div>
      </div>
    </section>
)

export default Home
