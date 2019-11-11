import React from 'react';
import './SignIn-SignUp.style.scss';
import './SignIn/SignIn.component';
import { SignIn } from './SignIn/SignIn.component';
import SignUpForm from './Signup/SignUp.component';

const SignInSignUp = () => {
  return (
    <div className="row">
      <SignIn />
      <SignUpForm />
    </div>
  );
};
export { SignInSignUp };
