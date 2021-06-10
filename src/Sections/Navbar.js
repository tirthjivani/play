import React, { Component } from 'react';
import logo from '../logo.png';
import '../Styles/homescreen.css';
import '../Styles/neo.css';

export default class Navbar extends Component {
  render() {
    return (
      <>
        <div className="navbar-container">
          <div className="logo-space">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div className="nav-links">
            <a className="nav-link" href="/play">
              Self Tests
            </a>
            <a className="nav-link" href="/play">
              For Coporates
            </a>
            <a className="nav-link" href="/play">
              How it works?
            </a>
          </div>
          <div className="signup">
            <a href="/play" className="nav-link signin-btn">
              SignIn
            </a>
            <a href="/play" className="register-btn">
              <span className="neo-bottom-right">Register</span>
            </a>
          </div>
        </div>
      </>
    );
  }
}
