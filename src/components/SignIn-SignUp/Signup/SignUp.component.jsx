import React from 'react';
import { FormInput } from '../../FormInput/FormInput.component';
import { CustomButton } from '../../CustomButton/CustomButton.component';
import {
  auth,
  
} from '../../../firebase/firebase.utils';
import './SignUp.style.scss';



class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  onChangeHandle = e => {
    console.log(e);
  };

  onSubmitHandle = e => {
    e.preventDefault();

    let displayName = e.target.displayname.value;
    

    if (e.target.password.value !== e.target.confirmpassword.value) {
      alert("Password doesn't matched");
      return;
    }

    try {
      auth
        .createUserWithEmailAndPassword(
          e.target.email.value,
          e.target.password.value
        )
        .then(res => {
          auth.currentUser
            .updateProfile({
              displayName: displayName
            })
            .then(function() {
              // Update successful.
            })
            .catch(function(error) {
              // An error happened.
            });

          var user = auth.currentUser;

          user
            .sendEmailVerification()
            .then(function() {
              console.log('E-mail sent');
            })
            .catch(function(error) {
              console.log('Fail to send email');
            });
        })
        .catch(err => {
          console.log(`Error in sign up ${err}`);
        });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="sign-up col s6">
        <h1>I already have an account</h1>
        <span>Sign in with your E-mail and password</span>

        <form onSubmit={e => this.onSubmitHandle(e)} className="">
          <div className="row">
            <FormInput
              label="Display Name"
              changeHandle={this.onChangeHandle}
              type="text"
              name="displayname"
              id="displayname"
            />
          </div>
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
            <FormInput
              label="Confirm password"
              changeHandle={this.onChangeHandle}
              type="password"
              name="confirmpassword"
              id="confirmpassword"
            />
          </div>
          <div className="row">
            <div className="input-field col s12">
              <CustomButton type="submit">SIGN UP</CustomButton>&nbsp;
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
