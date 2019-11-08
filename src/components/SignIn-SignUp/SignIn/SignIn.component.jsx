import React from 'react';
import {FormInput} from '../../FormInput/FormInput.component'
import '../SignIn-SignUp.style.scss';
import { CustomButton } from '../../CustomButton/CustomButton.component';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }


  onChangeHandle=(e)=>{
     console.log(e)
  }

  onSubmitHandle=(e)=>{
     e.preventDefault();
  }

  render() {
    return (
      <div className="sign-in">
        <h1>I already have an account</h1>
        <span>Sign in with your E-mail and password</span>
        <div className="row">
        
          <form onSubmit={(e)=>this.onSubmitHandle(e)} className="col s6">
            <div className="row">
              <FormInput label="E-mail" changeHandle={this.onChangeHandle} type="email" name="email" id="email" />
            </div>
            <div className="row">
                <FormInput label="Password" changeHandle={this.onChangeHandle} type="password" name="password" id="password" />
            </div>
            <div className="row">
              <div className="input-field col s12">
                <CustomButton type="submit">Log in</CustomButton>
              </div>
            </div>
          </form>

          <form onSubmit={(e)=>this.onSubmitHandle(e)} className="col s6">
            <div className="row">
              <FormInput label="E-mail" changeHandle={this.onChangeHandle} type="email" name="email" id="email" />
            </div>
            <div className="row">
                <FormInput label="Password" changeHandle={this.onChangeHandle} type="password" name="password" id="password" />
            </div>
            <div className="row">
              <div className="input-field col s12">
                <CustomButton type="submit">Log in</CustomButton>
              </div>
            </div>
          </form>

          

        </div>

      </div>
    );
  }
}

export { SignIn };
