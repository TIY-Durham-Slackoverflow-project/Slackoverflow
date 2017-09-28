import React, {Component} from 'react';
// import request from superagent

export default class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // register: false
      loginUsername: false,
      loginPassword: false,
      registerUsername: false,
      registerPassword: false,
      error: false,
      token: false
    }
  }

  submitFormData(event) {

  }

  updateFromField(){

  }

  // login(event){
  //   this.
  //
  //   event.preventDefault();
  //   request
  //     .post(url)
  //     .send({userName: this.state.userName, password: this.state.password})
  //     .end((err, res) =>{
  //       if(err) {
  //         handleError({error: res.body.error});
  //       }else{
  //         this.setState({token: res.body.token});
  //         cookie.save({token: res.body.token});
  //       }
  //     })
  //
  // }

  handleError(){}

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
              <input type="text" className="form-control" id="username" placeholder="Username:" value={this.state.username}/>
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input
                // onChange={this.}
                type="text" className="form-control" id="password" placeholder="Password:" value={this.state.password}/>
            </div>

            {this.props.display==="register" ?
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Register</button>
              </div> :
              <div onClick={event => this.login(event, this.handleError)} className="form-group">
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
