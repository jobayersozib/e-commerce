import React, { Component } from 'react';
import { Homepage } from './components/Homepage/Homepage';
import { Route } from 'react-router-dom';
import './App.css';

const Hats = () => {
  return <div>Hats page</div>;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/hats" component={Hats} />
      </div>
    );
  }
}

export default App;
