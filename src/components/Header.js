import React, {Component} from 'react';
import logo from "../styles/Screen-Shot.png";
// import LoginForm from "./LoginForm.js";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.sendLoginFormRequestUp = this.sendLoginFormRequestUp.bind(this);
  }

  sendLoginFormRequestUp(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.sendDataUp(event.target.id);
    }
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
        <div onClick={this.sendDataUp} className = "header-right">
          <a id="login" className = "login-btn">Login</a>
          <a id="register" className = "register-btn">Register</a>
        </div>
        {/* <LoginForm/> */}
      </div>
    );
  }
}

Header.propTypes = {
};
