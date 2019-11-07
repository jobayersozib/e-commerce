import React, { Component } from 'react';
import { Homepage } from './components/Homepage/Homepage';
import { Route } from 'react-router-dom';
import Shop from './components/Shop/Shop.component';
import { SignInSignUp } from './components/SignIn-SignUp/SignIn-SignUp.component';
import Header from './components/Header/Header.component';
import './App.css';

const Hats = () => {
  return <div>Hats page</div>;
};

class App extends Component {
  render() {
    return (
      <div>
        <Header />
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
