import React, { Component } from 'react';
import { Homepage } from './components/Homepage/Homepage';
import { Route } from 'react-router-dom';
import Shop from './components/Shop/Shop.component';
import { SignInSignUp } from './components/SignIn-SignUp/SignIn-SignUp.component';
import Header from './components/Header/Header.component';
import {auth} from '../src/firebase/firebase.utils'
import './App.css';

const Hats = () => {
  return <div>Hats page</div>;
};

class App extends Component {

  constructor(props){
    super(props)
    this.state={userInfo:null}
  }

  componentDidMount(){
    auth.onAuthStateChanged((user)=>{
      if(user){
        this.setState({userInfo:user})
        console.log(user)
      }else{
        this.setState({userInfo:null})
        console.log("Not signed in");
      }
      
    })

    
  }

  componentWillMount(){

  }

  render() {
    return (
      <div>
        <Header isSignedIn={this.state.userInfo}/>
        <div className="App">
          <Route exact path="/" component={Homepage} />
          <Route exact path="/hats" component={Hats} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInSignUp} />
        </div>
      </div>
    );
  }
}

export default App;
