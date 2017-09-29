import React, {Component} from 'react';

export default class AnswerCard extends Component {
  constructor(props){
    super(props);

  }


  handleVoteChangeRequest(qOrA, plusOrMinus){
    // one vote per Q or A per user? -- break into two fxns?
    // post, include token
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
            <div className = 'vote-btns'>
              <input onClick={this.} type = "submit" value = "&#9650; Upvote" className = "upvote-btn vote-btn"/>
              <input type = "submit" value = "&#9660; Downvote" className = "downvote-btn vote-btn"/>
            </div>
          </div>
      </div>
    )
  }
}
