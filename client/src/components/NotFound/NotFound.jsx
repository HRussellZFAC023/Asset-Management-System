import React from "react";

const NotFound = () => (
  <section className="section">
    <div className="container has-text-centered">
      <h2 className="title is-2">404</h2>
      <p>Not Found</p>
      <hr />
      <p>‿︵‿︵‿︵‿ヽ(°□° )ノ︵‿︵‿︵‿︵</p>
      <br />
      <button
        onClick={() => window.location.replace("/")}
        className="button is-primary"
      >
        Home Page
      </button>
    </div>
    <img className='is-pulled-right' alt='notFoundImg' src="https://www.eastfieldcollege.edu/PublishingImages/Pages/PageNotFoundError/404-robot.gif" />
  </section>
)

export default NotFound
