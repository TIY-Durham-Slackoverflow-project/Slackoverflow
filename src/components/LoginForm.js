import React, {Component} from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      register: false
    }
  }

  render() {
    return (
      <div className="form-wrapper">
        <div className="login-form">
          <form>
            <div className="Header">

              <h4>Login</h4>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" className="form-control" id="username" placeholder="Enter username"/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" className="form-control" id="password" placeholder="Password goes here"/>
            </div>
            <div className="login-button">
              <button type="submit" className="btn btn-success">Login</button>
            </div>
            <div className="register-button">
              <button type="submit" className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
};
