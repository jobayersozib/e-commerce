import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { connect } from "react-redux";
import "./Header.style.scss";
import { auth } from "../../firebase/firebase.utils";

const Header = props => {
  console.log(props);
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {props.isSignedIn ? (
          <div
            style={{ cursor: "pointer" }}
            onClick={e => auth.signOut()}
            className="option"
          >
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
};

const stateMapsToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(stateMapsToProps)(Header);
