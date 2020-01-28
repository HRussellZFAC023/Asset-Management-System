import React from "react";
import axios from "axios";
import "./SignUp.scss";
import Particles from "react-particles-js";
import particlesOptions from "../../consts/particles";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      password_match: false,
      response: '',
      errors: {
        name: '',
        email: '',
        password: '',
        c_password: '',
      },
      errorMessage: 'No error',
      showError: false
    }
  }

  addUser = event => {
    event.preventDefault();

    const data = {
      username: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    axios
      .post(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`, data)
      .then(res => {
        console.log(res);
        this.setState({response: res.data.message})
        window.location.replace("/dashboard")
      })
      .catch(err => {
        console.log(err);
        this.setState({response: err.message})
      });
  };

  handleChange = (event) => {
    this.setState({showError: false})
    // eslint-disable-next-line
    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'name':
        errors.name =
          value.length < 2
            ? 'Name must be 2 or more characters long!'
            : '';
        break;
      case 'email':
        errors.email =
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password':
        errors.password =
          value.length < 8
            ? 'Password must be 8 or more characters long!'
            : '';
        break;
      case 'c_password':
        const match = value === this.state.password;
        errors.c_password =
          !match
            ? 'Passwords do not match'
            : '';
        this.setState({password_match: match})
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  formIsValid = () => {
    const { name, email, password, password_match, errors } = this.state;

    if (name.length < 1) {
      this.setState(prevState =>
        ({errors:{...prevState.errors, name: 'Please insert your name'}}));
      return false;
    }
    if (email.length < 1) {
      this.setState(prevState =>
        ({errors:{...prevState.errors, email: 'Please insert your email'}}));
      return false;
    }
    if (password.length < 1) {
      this.setState(prevState =>
        ({errors:{...prevState.errors, password: 'Please insert your password'}}));
      return false;
    }
    if (!password_match) {
      this.setState(prevState =>
        ({errors:{...prevState.errors, c_password: 'Passwords do not match'}}));
    }

    if (!errors.name.length && !errors.email.length
    && !errors.password.length && password_match) {
      return true;
    } else {
      return false;
    }
  }
  onNameChange = (event) => {
    this.setState({name: event.target.value})
    this.handleChange(event)
  }

  clearErrors = () => {
    this.setState(prevState =>
      ({errors:{...prevState.errors, name: ''}}));
    this.setState(prevState =>
      ({errors:{...prevState.errors, email: ''}}));
    this.setState(prevState =>
      ({errors:{...prevState.errors, password: ''}}));
    this.setState(prevState =>
      ({errors:{...prevState.errors, c_password: ''}}));
  }

  onEmailChange = (event) => {
    this.setState({email: event.target.value})
    this.handleChange(event);
  }

  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
    this.handleChange(event);
  }

  onEnterKeyPress = (target) => {
    if (target.charCode === 13) {
      this.onSubmitRegister();
    }
  }

  onSubmitRegister = (event) => {
    //const {name, email, password} = this.state;
    if (this.formIsValid()) {
      this.addUser(event);
    }
  }

  toggleError = () => {
    if (this.state.showError) {
      this.setState({showError: false})
    } else {
      this.setState({showError: true})
    }
  }

  displayError = (errorMessage) => {
    if(this.state.showError) {
      alert(errorMessage);
    }
  }

  render() {
    const {errors, response} = this.state;
    return (
      <div className="columns is-vcentered parent-form">
        <div className="login sidebar column is-one-third-widescreen is-one-quarter-fullhd">
          <section className="section">
            <div className="has-text-centered">
            <img onClick={() => window.location.replace("/")} className="login-logo"
              alt='logo' src="https://image.flaticon.com/icons/svg/615/615598.svg"/>
            </div>
              <h1 className="title signup-title is-4">Sign Up</h1>
              <div className="field">
                <label htmlFor="name" className="label">
                  Name
                </label>
                <div className="control has-icons-left">
                  <input
                    name='name'
                    type="text"
                    id="inputName"
                    placeholder="e.g. Bob Smith"
                    className="input form-control"
                    onKeyPress={this.onEnterKeyPress}
                    onChange={this.onNameChange}
                    required autoFocus
                  />
                  {errors.name.length > 0 && <span className='error'>{errors.name}</span>}
                  <span className="icon is-small is-left">
                    <i className="fa fa-user" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="email" className="label">
                  Email
                </label>
                <div className="control has-icons-left">
                  <input
                    name='email'
                    type="email"
                    placeholder="e.g. bobsmith@gmail.com"
                    className="input form-control"
                    onKeyPress={this.onEnterKeyPress}
                    onChange={this.onEmailChange}
                    required
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
                    name='password'
                    type="password"
                    id="inputPassword"
                    placeholder="*******"
                    className="input form-control"
                    onKeyPress={this.onEnterKeyPress}
                    onChange={this.onPasswordChange}
                    required
                  />
                  {errors.password.length > 0 && <span className='error'>{errors.password}</span>}
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="confirmPassword" className="label">
                  Confirm Password
                </label>
                <div className="control has-icons-left">
                  <input
                    name="c_password"
                    type="password"
                    id="inputCPassword"
                    placeholder="*******"
                    className="input form-control"
                    onKeyPress={this.onEnterKeyPress}
                    onChange={this.handleChange}
                    required
                  />
                  {errors.c_password.length > 0 && <span className='error'>{errors.c_password}</span>}
                  <span className="icon is-small is-left">
                    <i className="fa fa-lock" />
                  </span>
                </div>
              </div>
              <div className="field">
                <label htmlFor="checkbox" className="checkbox">
                  <input type="checkbox" id='checkbox'/>
                  {" Remember me"}
                </label>
              </div>
              <div className="field">
                <button onClick={this.onSubmitRegister} className="button is-info is-fullwidth" type="submit">Sign Up</button>
              </div>
              {response.length > 0 && <span className='error'>{response}</span>}
              <div className='not-registered is-centered'><p>Already have an account?</p><a href='/signin'>Sign in</a></div>
          </section>
        </div>
        <div id="particles-js" className="interactive-bg has-background-info column">
          <Particles className='particles' params={particlesOptions} />
        </div>
      </div>
    );
  }
}

export default SignUp;
