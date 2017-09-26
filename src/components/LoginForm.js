import React, {Component} from 'react';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // register: false
    }
  }

  submitFormData(event) {
    
  }

  render() {
    return (
      <div className="form-wrapper">
        <div className="login-form">
          <form>
            <div className="Header">
              {this.props.display==="register" ?
                <h3>Register</h3> :
                <h3>Login</h3>
              }
            </div>
            <div className="form-group">
              {/* <label htmlFor="username">Username</label> */}
              <input type="text" className="form-control" id="username" placeholder="Enter username"/>
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input type="text" className="form-control" id="password" placeholder="Password goes here"/>
            </div>

            {this.props.display==="register" ?
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Register</button>
              </div> :
              <div className="form-group">
                <button type="submit" className="btn btn-success">Login</button>
              </div>
            }
          </form>
        </div>
      </div>
    );
  }
}

LoginForm.propTypes = {
};
