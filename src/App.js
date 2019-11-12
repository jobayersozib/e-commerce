import React, { Component } from "react";
import { Homepage } from "./components/Homepage/Homepage";
import { Route } from "react-router-dom";
import Shop from "./components/Shop/Shop.component";
import { SignInSignUp } from "./components/SignIn-SignUp/SignIn-SignUp.component";
import Header from "./components/Header/Header.component";
import { connect } from "react-redux";
import { setUserState } from "./redux/actions/user.action";
import {
  auth,
  createUserProfileDocument,
  firestore
} from "../src/firebase/firebase.utils";
import "./App.css";

const Hats = () => {
  return <div>Hats page</div>;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userInfo: null };
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ userInfo: user });
        console.log(this.state.userInfo);
        createUserProfileDocument(user, userRef => {
          userRef.onSnapshot(snap => {
            this.props.setUserState({
              userInfo: {
                id: snap.id,
                ...snap.data()
              }
            });
            // this.setState(
            //   {
            //     userInfo: {
            //       id: snap.id,
            //       ...snap.data()
            //     }
            //   },
            //   () => {
            //     firestore
            //       .collection("users")
            //       .doc(this.state.userInfo.id)
            //       .get()
            //       .then(res => {
            //         console.log(res.data());
            //       });
            //     console.log(this.state);
            //   }
            // );
          });
        });
      } else {
        this.props.setUserState(null);
      }
    });
  }

  UNSAFE_componentWillMount() {}

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

const mapsdispatchToprops = dispatch => ({
  setUserState: user => dispatch(setUserState(user))
});

// Push commit for officepc

export default connect(null, mapsdispatchToprops)(App);
