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
    let data = this.props.questionData;
    let tags = data.tags.map((tag, index) => {
    return(< li key={index}>{tag}</li>)})
    return(
      <div>
        <div className = "question-title-header">
          <div className = "question-cards-wrapper-top">
            <div className = "question-cards-wrapper-top-left">
              <h1>{data.title}</h1>
            </div>
          </div>
        </div>
        <div className = "single-question-body">
          <div className = "single-question-body-left">
            <p>{data.body}</p>
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
                <td>{data.answers_num}</td>
                <td>{data.views}</td>
                <td>{data.votes}</td>
              </tr>
            </tbody>
            </table>
            <ul className = "question-tags-list">
              {tags}
            </ul>
          </div>

        </div>
        <div className = "single-question-body-bottom">
          <div className = "user-class">
            <img src ={data.user.avatar} alt ="avatar"/>
            <p>Created at: {data.created_at}</p>
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
