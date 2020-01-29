import React from "react";
import "./HomePage.scss";
import Header from "./Header/Header"
import Features from "./Features/Features";
import Content from "./Content/Content"
import Contact from "./Contact/Contact";

const Home = () => (
  <div class="is-fluid">
    <Header></Header>
    <Features></Features>
    <Content></Content>
    <Contact></Contact>
  </div>
);

export default Home
