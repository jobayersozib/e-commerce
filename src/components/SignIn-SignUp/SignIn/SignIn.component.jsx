import React from 'react';
import '../SignIn-SignUp.style.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your E-mail and password</span>
        <div class="row">
          <form class="col s6">
            <div class="row">
              <div class="input-field col s12">
                <input type="email" name="" id="email" />
                <label for="textarea1">E-mail</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" name="" id="password" />
                <label for="password">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <button
                  class="btn waves-effect waves-light"
                  type="submit"
                  name="action"
                >
                  LOGIN
                  <i class="material-icons right"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export { SignIn };
