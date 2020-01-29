import React from "react";
import "./Contact.scss";

const Contact = () => (
  <section class="section hero is-dark">
    <h2 class="title has-text-centered">Hope you have your umbrella.</h2>

    <div class="columns">
      <div class="column is-3"></div>
      <div class="column is-6">
        <form>
          <div class="field">
            <div class="control">
              <input class="input" type="email" placeholder="Email" />
            </div>
          </div>

          <div class="field">
            <div class="select is-fullwidth">
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

          <div class="field">
            <div class="control">
              <textarea class="textarea" rows="5" placeholder="Write something...">
              </textarea>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-primary is-fullwidth" type=
                "submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact
