import React, {Component} from 'react';
import request from 'superagent';

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

  updateFromField(stateKey) {
    if(this.props.display==="register"){
      let targetStateKey = this.props.display + stateKey;
      return (event) => {
        this.setState({[targetStateKey]: event.target.value});
      }
    }else{
      let targetStateKey = 'login' + stateKey;
      return (event) => {
        this.setState({[targetStateKey]: event.target.value});
      }
    }
  }

  login(event){
    let setToken = this.props.setToken;
    event.preventDefault();
    request
      .post(url)
      .send({userName: this.state.userName, password: this.state.password})
      .end((err, res) =>{
        if(err) {
          handleError({error: res.body.error});
        }else{
          this.setState({token: res.body.token});
        }
      })
  }

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
                {this.state.error && <div className="alert">{this.state.error}</div>}
            </div>
            <div className="form-group">
              {/* <label htmlFor="username">Username</label> */}
              <input className="form-control" onChange={this.updateFromField('Username')} type="text" id="username" placeholder="Enter username" value={this.state.username}/>
            </div>
            <div className="form-group">
              {/* <label htmlFor="password">Password</label> */}
              <input className="form-control"
                onChange={this.updateFromField('Password')}
                type="text" id="password" placeholder="Password goes here" value={this.state.password}/>
            </div>

            {this.props.display==="register" ?
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Register</button>
              </div> :
              <div className="form-group">
                <button onClick={event => this.login(event)} type="submit" className="btn btn-success">Login</button>
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
