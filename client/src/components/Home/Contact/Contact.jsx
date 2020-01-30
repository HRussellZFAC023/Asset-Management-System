import React from "react";
import "./Contact.scss";

const Contact = () => (
  <section className="section hero is-dark">
    <h2 className="title has-text-centered">Hope you have your umbrella.</h2>

    <div className="columns">
      <div className="column is-3" />
      <div className="column is-6">
        <form>
          <div className="field">
            <div className="control">
              <input className="input" type="email" placeholder="Email" />
            </div>
          </div>

          <div className="field">
            <div className="select is-fullwidth">
              <select>
                <option disabled="disabled" selected="selected">
                  Select product
                </option>

                <option>
                  Product 1
                </option>

                <option>
                  Product 2
                </option>

                <option>
                  Product 3
                </option>
              </select>
            </div>
          </div>

          <div className="field">
            <div className="control">
              <textarea className="textarea" rows="5" placeholder="Write something..." />
            </div>
          </div>

          <div className="field">
            <div className="control">
              <button
                className="button is-primary is-fullwidth"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact
