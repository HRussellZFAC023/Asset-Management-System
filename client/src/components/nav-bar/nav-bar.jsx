import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link className="navbar-item" to='/'>
              Home
            </Link>
            <Link className="navbar-item" to='/'>
              Contact
            </Link>
            <Link className="navbar-item" to='/'>
              About
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to="/signin" className="button is-primary">
                  Sign in
                </Link>
                <Link to="/signup" className="button is-info">
                  <strong>Sign up</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
