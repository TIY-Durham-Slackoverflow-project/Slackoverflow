import React, { Component } from 'react';
import request from 'superagent';

export default class ProfilePageApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: null,
      // displayQuestions: false,
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

  // componentDidUpdate(){
  //   if(this.state.user.questions){
  //     this.setState({displayQuestions: true})
  //   }
  // }

  displayQuestions(){
    if(this.state.user.questions.length>0){
      let questions = this.state.user.questions.map((question, index) =>{
        return( < li key={index} >{question.title}</li> )
      })
      return(
        <div>
          <div className = 'questions-asked-user'>
            <h2>questions asked</h2>
          </div>
          <div>
            <ul>
              {questions}
            </ul>
          </div>
        </div>
      )
    }else{
      return null;
    }
  }

  displayAnswers(){
    if(this.state.user.answers.length>0){
      let answers = this.state.user.answers.map((answer, index) =>{
        return( < li key={index} >{answer.body}</li> )
      })
      return(
        <div>
          <div className = 'questions-asked-user'>
            <h2>questions answered</h2>
          </div>
          <div>
            <ul>
              {answers}
            </ul>
          </div>
        </div>
      )
    }else{
      return null;
    }
  }

  render(){
    return(
      <div>
        {this.state.user &&
          (<div className = "user-wrapper">
            <div className = "user-left">
              <div className = "large-avatar">
                <img src ={this.state.user.avatar_big} alt="avatar"/>
              </div>
              <div className = "user-right">
                <h2>{this.state.user.username}</h2>
                <p>{this.state.user.bio_text}</p>
              </div>
            </div>
              {this.displayQuestions()}
              {this.displayAnswers()}
          </div>)
        }
      </div>
    )
  }
}
