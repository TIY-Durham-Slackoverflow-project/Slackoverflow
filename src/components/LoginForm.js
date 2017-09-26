import React, {Component} from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      register: false
    }
  }

  render() {
    return (
      <div>
        <form>
          <div className="Header">
            <h4>Login</h4>
          </div>
          <div class="form-group">
            <label for="username">Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter username"/>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="text" class="form-control" id="password" placeholder="Password goes here"/>
          </div>
          <div className="login-button">
            <button type="submit" class="btn btn-success">Login</button>
          </div>
          <div className="register-button">
            <button type="submit" class="btn btn-primary">Register</button>
          </div>
        </form>
      </div>
    );
  }
}

LoginForm.propTypes = {
};
