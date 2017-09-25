import React, {Component} from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className = "header-wrapper">
        <div className = "header-left">
          <div className = "slack-logo"></div>
          <div className = "slack-title>"><h3>slackoverflow</h3></div>
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
