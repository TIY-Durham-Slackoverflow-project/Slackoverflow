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
              <h1>{this.props.questionData.title}</h1>
            </div>
          </div>
        </div>
        <div className = "single-question-body">
          <div className = "single-question-body-left">
            <p>{this.props.questionData.body}</p>
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
                <td>{this.props.questionData.answers_num}</td>
                <td>{this.props.questionData.views}</td>
                <td>{this.props.questionData.votes}</td>
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
          <div className = "user-class">
            <img src = "" alt ="avatar"/>
            <p>Created at: {this.props.questionData.created_at}</p>
          </div>
          <div className = 'vote-btns'>
            <input type = "submit" value = "&#9650; Upvote" className = "upvote-btn vote-btn"/>
            <input type = "submit" value = "&#9660; Downvote" className = "downvote-btn vote-btn"/>
          </div>
        </div>
      </div>
    )
  }
}
