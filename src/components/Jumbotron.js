import React, { Component } from 'react';
// import LoginForm from "./LoginForm.js";

export default class Jumbotron extends Component {
  render(){
    return(
      <div className = "jumbotron-wrapper">
        {/* <LoginForm/> */}
        <div className = "jumbotron-quote">
          <h1>Inspiring Quote and Better Image Goes Here...</h1>
        </div>
      </div>
    )
  }
}
