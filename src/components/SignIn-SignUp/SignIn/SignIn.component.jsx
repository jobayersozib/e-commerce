import React from 'react';
import { FormInput } from '../../FormInput/FormInput.component';
import '../SignIn-SignUp.style.scss';
import { CustomButton } from '../../CustomButton/CustomButton.component';
import { signInWithGoogle } from '../../../firebase/firebase.utils';
import { auth } from '../../../firebase/firebase.utils';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  onChangeHandle = e => {
    console.log(e);
  };

  onSubmitHandle = e => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(e.target.email.value, e.target.password.value)
      .then(res => {
        console.log(res);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="sign-in col s6">
        <h1>I already have an account</h1>
        <span>Sign in with your E-mail and password</span>

        <form onSubmit={e => this.onSubmitHandle(e)} className="">
          <div className="row">
            <FormInput
              label="E-mail"
              changeHandle={this.onChangeHandle}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className="row">
            <FormInput
              label="Password"
              changeHandle={this.onChangeHandle}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="row">
            <div className="input-field col s12">
              <CustomButton type="submit">Log in</CustomButton>&nbsp;
              <CustomButton onClick={signInWithGoogle}>
                Log in with google
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export { SignIn };
