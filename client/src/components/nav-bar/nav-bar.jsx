import React from 'react';
import './nav-bar.scss';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  toggleDropdown = (event) => {
    console.log('Action!');
    var dropdown = document.querySelector('.navbar-menu');
    event.stopPropagation();
    dropdown.classList.toggle('is-active');
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img className='logo-image' alt='logo' src="https://image.flaticon.com/icons/svg/615/615598.svg" width={35} height={35} />
            <h1 className='title is-4'>Umbrella</h1>
          </a>
          <div onClick={this.toggleDropdown} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href='/'>
              Home
            </a>
            <a className="navbar-item" href='/'>
              Contact
            </a>
            <a className="navbar-item" href='/'>
              About
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href="/signin" className="button is-info">
                  Sign in
                </a>
                <a href="/signup" className="button is-primary">
                  <strong>Sign up</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar