import React, {Component} from 'react';
import logo from "../styles/Screen-Shot.png";

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = 'footer-wrapper'>
        <img src={logo} className="app-logo" alt="logo" />
        <h3>slackoverflow</h3>
      </div>
    );
  }
}

Footer.propTypes = {
};
