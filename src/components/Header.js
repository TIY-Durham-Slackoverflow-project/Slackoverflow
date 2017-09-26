import React, {Component} from 'react';
import logo from "../styles/Screen-Shot.png";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className = "header-wrapper">
        <div className = "header-left">
          <div className = "slack-logo">
            <img src={logo} className="app-logo" alt="logo" />
          </div>
          <div className = "slack-title>">
            <h3>slackoverflow</h3>
          </div>
        </div>
        <div className = "header-right">
          <a href = "" className = "login-btn">Login</a>
          <a href = "" className = "register-btn">Register</a>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
};
