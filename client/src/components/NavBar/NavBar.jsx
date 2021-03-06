import React from "react";
import { Link as a, Link } from "react-router-dom";
import "./NavBar.scss";

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      isMounted: false
    }
  }

  componentWillMount() {
    this.setState({ isMounted: true })
    window.addEventListener('resize', this.toggleDropdownAuto, false);
    window.addEventListener('click', this.toggleDropdownAuto, false);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.toggleDropdownAuto, false);
    window.removeEventListener('click', this.toggleDropdownAuto, false);
  }

  toggleDropdownAuto = (event) => {
    if (this.state.isOpen && this.state.isMounted) {
      this.handleToggleDropdown(event);
    }
  }

  handleToggleDropdown = (event) => {
    let dropdown = document.querySelector('.navbar-menu');
    let button = document.querySelector('.navbar-burger');
    event.stopPropagation();
    if (dropdown !== null && button !== null) {
      dropdown.classList.toggle('is-active');
      button.classList.toggle('is-active');
    }
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" to="/">
            <img className='logo-image' alt='logo' src="https://image.flaticon.com/icons/svg/615/615598.svg" width={35} height={35} />
            <h1 className='title is-4'>Umbrella</h1>
          </a>
          <div onClick={this.handleToggleDropdown} role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href='/#'>
              Home
            </a>
            <a className="navbar-item" href='/#contact'>
              Contact
            </a>
            <a className="navbar-item" href='/#features'>
              About
            </a>
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
