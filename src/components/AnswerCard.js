import React, {Component} from 'react';
import cookie from 'react-cookies';
import request from 'superagent';

export default class AnswerCard extends Component {
  constructor(props){
    super(props);

    this.state = {
      error: null

    }
  }


  handleVoteChangeRequest(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      event.preventDefault();
      request
        .post('https://murmuring-fjord-57185.herokuapp.com/api/answers/votes')
        .send({vote: event.target.id})
        .set('Authorization', `Token token=${this.props.token}`)
        .end((err, res) =>{
          if(err) {
            this.setState({error: res.body.error});
          }

        })
    }
  }

// this.props.answerData
  render(){
    return(
      <div>
        <div className = "answer-title-header">
            <div className = "answer-header-left">
              <h2>answer title goes here</h2>
            </div>
          </div>
          <div className = "answer-body-text">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className = "single-question-body-bottom">
            <div className = "user-class">
              <img src = "" alt ="avatar"/>
              <p>Answered by NAME on DATE</p>
            </div>
            <div onClick={event => this.handleVoteChangeRequest(event)} className = 'vote-btns'>
              <input type = "submit" id="1" value = "&#9650; Upvote" className = "upvote-btn vote-btn"/>
              <input type = "submit" id="-1" value = "&#9660; Downvote" className = "downvote-btn vote-btn"/>
            </div>
          </div>
      </div>
    )
  }
}
