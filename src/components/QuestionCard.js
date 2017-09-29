import React, {Component} from 'react';

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.sendQuestionIdUpToParent = this.sendQuestionIdUpToParent.bind(this);
    this.showProfilePage = this.showProfilePage.bind(this);

  }

  sendQuestionIdUpToParent(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.sendQuestionIdUpToParent(event.target.id);
    }
  }

  showProfilePage(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.showProfilePage(event.target.id);
    }  }
<<<<<<< HEAD

  handleVoteChangeRequest(qOrA, plusOrMinus){
    // one vote per Q or A per user? -- break into two fxns?
  }

  render() {
    let mapper = this.props.arrayOfQuestionObjects.map((mapped, index) =>{
      if(index<100){
        return (
          < div key={mapped.id} className="question-card-wrapper">
            <div className = "question-card-content-top">
            <div className = "question-card-content-middle">
              <h3 onClick={this.sendQuestionIdUpToParent} id={mapped.id} >{mapped.title}</h3>
              <p>{mapped.body}</p>
              <div className = "user-div">
              <div onClick={this.showProfilePage} id={mapped.user.id} className = "question-card-icon"><img src={mapped.user.avatar} alt = "icon"/></div>
              <div><a>{mapped.user.username} asked on {mapped.created_at}</a></div>
            </div>
            </div>
            <div className = "question-card-content-right">
              <table>
                <tbody>
                <tr>
                  <th>Answers</th>
                  <th>Views</th>
                  <th>Votes</th>
                </tr>
                <tr>
                  <td>{mapped.answers_num}</td>
                  <td>{mapped.views}</td>
                  <td>{mapped.votes}</td>
                </tr>
              </tbody>
              </table>
            </div>
          </div>
=======

  handleVoteChangeRequest(qOrA, plusOrMinus){
    // one vote per Q or A per user? -- break into two fxns?
  }

  render() {
    let mapper = this.props.arrayOfQuestionObjects.map((mapped, index) =>{
      if(index<100){
        return (
          < div key={mapped.id} className="question-card-wrapper">
            <div className = "question-card-content-top">
            <div className = "question-card-content-left">
              <div onClick={this.showProfilePage} id={mapped.user.id} className = "question-card-icon"><img src={mapped.avatar} alt = "icon"/></div>
              <a>{mapped.questionUserName}</a>
            </div>
            <div className = "question-card-content-middle">
              <h3 onClick={this.sendQuestionIdUpToParent} id={mapped.id} >{mapped.title}</h3>
              <p>{mapped.body}</p>
            </div>
            <div className = "question-card-content-right">
              <table>
                <tbody>
                <tr>
                  <th>Votes</th>
                  <th>Answers</th>
                </tr>
                <tr>
                  <td>{mapped.votes}</td>
                  <td>{mapped.answers_num}</td>
                </tr>
              </tbody>
              </table>
            </div>
          </div>
            <div className = "question-card-content-bottom">
              <div className = "question-card-content-bottom-left">
                <p>Asked on {mapped.created_at}</p>
              </div>
              <div className = "question-card-content-bottom-right">
                <p>Viewed by {mapped.views} people</p>

              </div>
            </div>

>>>>>>> react
          </div>
        );
      }
    })
    return (
      <div>
        {mapper}
      </div>
    )
  }
}

QuestionCard.propTypes = {
};
