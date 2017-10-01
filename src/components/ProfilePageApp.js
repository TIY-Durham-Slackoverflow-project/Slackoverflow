import React, { Component } from 'react';
import request from 'superagent';

export default class ProfilePageApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: null,
      displayQuestions: false,
      displayAnswers: false
    }
  }

  componentWillMount(){
    this.fetchSingleUser();
  }

  fetchSingleUser(){
    let id = this.props.profileFor;
    request
      .get(`https://murmuring-fjord-57185.herokuapp.com/api/users/${id}`)
      .end((err, res) => {
        console.log(err);
        console.log(res.body.user);
        let userData = res.body.user;
        this.setState({user: userData});
      });
  }

  componentDidUpdate(){
    if(this.state.user.questions!==[]){
      this.setState({displayQuestions: true})
    }
  }

  render(){
    // if(this.state.displayQuestions){
    //   let questions = this.state.user.questions.map((question, index) =>{
    //     return( <p>{question.title}</p> )
    //   })
    // }
    return(
      <div>
        {this.state.user &&
          (<div className = "user-wrapper">
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
            {/* {this.state.displayQuestions &&
              <div>
                {questions}
              </div>
            } */}
          </div>)
        }
      </div>
    )
  }
}
