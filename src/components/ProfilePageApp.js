import React, { Component } from 'react';
import request from 'superagent';

export default class ProfilePageApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: null
    }
  }

  componentWillMount(){
    this.fetchSomeShit();
  }

  fetchSomeShit(){
    let id = this.props.profileFor;
    request
      .get(`https://murmuring-fjord-57185.herokuapp.com/api/users/${id}`)
      .end((err, res) => {
        let userData = res.body.user;
        this.setState({user: userData});
      });
  }

  render(){
    return(
      <div>
        {this.state.user &&
          <div className = "user-wrapper">
            <div className = "user-left">
              <div className = "large-avatar">
                <img src ={this.state.user.avatar_big}/>
              </div>
              <div className = "user-right">
              <h2>{this.state.user.username}</h2>
              <p>{this.state.user.bio_text}</p>
            </div>
            </div>
            <div className = 'questions-asked-user'>
            <h2>questions asked</h2>
          </div>
          <p>{this.state.user.questions[0].title}</p>

          </div>

        }

      </div>
    )
  }
}
