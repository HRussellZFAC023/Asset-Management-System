import React from "react";
import "./SignIn.scss";
import Particles from "react-particles-js";
import particlesOptions from "../../consts/particles";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
      errors: {
        email: '',
        password: '',
      },
      errorMessage: 'No error',
      showError: false
    }
  }

  handleChange = (event) => {
    this.setState({ showError: false })
    // eslint-disable-next-line
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 1
            ? 'Please insert your password!'
            : '';
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value });
  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  formIsValid = () => {
    const { signInEmail, signInPassword, errors } = this.state;

    if (signInEmail.length < 1) {
      this.setState(prevState =>
        ({ errors: { ...prevState.errors, email: 'Please insert your email' } }));
      return false;
    }
    if (signInPassword.length < 1) {
      this.setState(prevState =>
        ({ errors: { ...prevState.errors, password: 'Please insert your password' } }));
      return false;
    }

    if (signInPassword.length < 8) {
      this.setState(prevState =>
        ({ errors: { ...prevState.errors, password: 'Your password must be min 8 characters' } }));
      return false;
    }

    if (!errors.email.length && !errors.password.length) {
      this.clearErrors();
      return true;
    } else {
      return false;
    }
  }

  toggleError = () => {
    if (this.state.showError) {
      this.setState({ showError: false })
    } else {
      this.setState({ showError: true })
    }
  }

  displayError = (errorMessage) => {
    if (this.state.showError) {
      alert(errorMessage);
    }
  }

  clearErrors = () => {
    this.setState(prevState =>
      ({ errors: { ...prevState.errors, email: '' } }));
    this.setState(prevState =>
      ({ errors: { ...prevState.errors, password: '' } }));
  }

  handleOnEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value })
    this.clearErrors();
    this.handleChange(event)
  }

  handleOnPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value })
    this.clearErrors()
    this.handleChange(event)
  }

  handleOnSubmitSignIn = () => {
    const { signInEmail, signInPassword } = this.state
    if (this.formIsValid()) {
      alert('Form submitted!');
      console.log('email: ' + signInEmail);
      console.log('password: ' + signInPassword);
    }
  }

  handleOnEnterKeyPress = (target) => {
    if (target.charCode === 13) {
      this.handleOnSubmitSignIn();
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="columns is-vcentered parent-form">
        <div className="login sidebar column is-one-third-widescreen is-one-quarter-fullhd">
          <section className="section is-centered">
            <div className="has-text-centered">
              <img
                onClick={() => window.location.replace("/")}
                className="login-logo"
                alt='logo' src="https://image.flaticon.com/icons/svg/615/615598.svg"
              />
            </div>
            <h1 className="title is-4">Sign In</h1>
            <div className="field">
              <label htmlFor="email" className="label">
                Email
              </label>
              <div className="control has-icons-left">
                <input
                  name="email"
                  type="email"
                  id="inputEmail"
                  placeholder="e.g. bobsmith@gmail.com"
                  className="input form-control"
                  onChange={this.handleOnEmailChange}
                  onKeyPress={this.handleOnEnterKeyPress}
                  required autoFocus
                />
                {errors.email.length > 0 && <span className='error'>{errors.email}</span>}
                <span className="icon is-small is-left">
                  <i className="fa fa-envelope" />
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="password" className="label">
                Password
              </label>
              <div className="control has-icons-left">
                <input
                  name="password"
                  type="password"
                  id="inputPassword"
                  placeholder="*******"
                  className="input form-control"
                  onChange={this.handleOnPasswordChange}
                  onKeyPress={this.handleOnEnterKeyPress}
                  required
                />
                {errors.password.length > 0 && <span className='mb-2 error'>{errors.password}</span>}
                <span className="icon is-small is-left">
                  <i className="fa fa-lock" />
                </span>
              </div>
            </div>
            <div className="field">
              <label htmlFor="checkbox" className="checkbox">
                <input type="checkbox" id='checkbox' />
                {" Remember me"}
              </label>
            </div>
            <div className="field">
              <button className="button button-login is-primary is-fullwidth" onClick={this.handleOnSubmitSignIn}>Sign In</button>
            </div>
            <div className='not-registered is-centered'>
              <p>Don’t have an account?</p>
              <Link to='/signup'>Sign up</Link>
            </div>
          </section>
        </div>
        <div className="interactive-bg has-background-primary column">
          <Particles className='particles' params={particlesOptions} />
        </div>
      </div>
    );
  }
}

export default SignIn;
