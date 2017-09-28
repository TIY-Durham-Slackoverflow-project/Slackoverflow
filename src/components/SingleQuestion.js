import React, {Component} from 'react';

export default class SingleQuestion extends Component{
  constructor(props){
    super(props);

    // this.handleVoteChangeRequest = this.handleVoteChangeRequest.bind(this);
    // this.handleSubmittedAnswerForm = this.handleSubmittedAnswerForm.bind(this);
  }

  submitAnswerFormUp(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      // post
    }
  }

  sendQuestionUpToParent(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.sendQuestionUpToParent(event.target.id);
    }
  }

// post: answerQ, voteA, voteQ

  render(){
    return(
      <div>
        <div className = "question-title-header">
          <div className = "question-cards-wrapper-top">
            <div className = "question-cards-wrapper-top-left">
              <h1>question title goes here</h1>
            </div>
          </div>
        </div>
        <div className = "single-question-body">
          <div className = "single-question-body-left">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <code>console.log("Hello World")</code>
            <p>Blah blah blah words about code answers</p>
          </div>
          <div className = "single-question-body-right">
            <table>
              <tbody>
              <tr>
                <th>Answers</th>
                <th>Views</th>
                <th>Votes</th>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
            </table>
            <ul className = "question-tags-list">
              <li>javascript</li>
              <li>react</li>
              <li>css</li>
            </ul>
          </div>

        </div>
        <div className = "single-question-body-bottom">
          <img src = "" alt ="avatar"/>
          <p>Asked by NAME on DATE</p>
        </div>
      </div>
    )
  }
}
