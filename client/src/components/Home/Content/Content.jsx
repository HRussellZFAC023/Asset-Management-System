import React from "react";
import "./Content.scss";
import logo from "../../../assets/logo.png"


const Home = () => (
  <section className="section container has-text-centered">
    <h2 className="home-header title">We find what you are looking for, so you don't have to.</h2>

    <div className="block">
      <img src={logo} alt="umbrella icon" />
      <img src={logo} alt="umbrella icon" />
      <img src={logo} alt="umbrella icon" />
    </div>

    <p>
      Gone are the days of searching through endless archives for by hand. Umbrella
      gives a comprehensive view of the source code assets landscape of your whole company.
      We offer advanced search capabilities, documentation support and management offered
      nowhere else. With Umbrella, everything is in one place. Freedom. At. last
    </p>

  </section>
);

export default Home
