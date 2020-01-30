import React from "react";
import "./HomePage.scss";
import Header from "./Header/Header"
import Features from "./Features/Features";
import Content from "./Content/Content"
import Contact from "./Contact/Contact";

const Home = () => (
  <div className="is-fluid">
    <Header />
    <Features />
    <Content />
    <Contact />
  </div>
);

export default Home
