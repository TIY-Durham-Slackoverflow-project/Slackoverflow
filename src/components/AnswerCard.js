import React, {Component} from 'react';
import cookie from 'react-cookies';
import request from 'superagent';

export default class AnswerCard extends Component {
  constructor(props){
    super(props);
    this.showProfilePage = this.showProfilePage.bind(this);

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

  showProfilePage(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.showProfilePage(event.target.id);
    }
  }


  render(){
    let data = this.props.answerData.map((answer, index) => {
    return(
      < div key={index}>
        <div className = "answer-title-header">
          <div className = "answer-header-left">
            <h2>{answer.answer_body}</h2>
          </div>
        </div>
        <div className = "answer-body-text">
          <p>{answer.code}</p>
        </div>
        <div className = "single-question-body-bottom">
          <div className = "user-class">
            <img onClick={this.showProfilePage} id={answer.answer_user.id} src ={answer.answer_user.avatar} alt ="avatar"/>
            <p>Answered by {answer.answer_user.username} on {answer.answer_user.created_at}</p>
          </div>
          <div onClick={event => this.handleVoteChangeRequest(event)} className = 'single-vote vote-btns'>
            <input type = "submit" id="1" value = "&#9650; Upvote" className = "upvote-btn vote-btn"/>
            <input type = "submit" id="-1" value = "&#9660; Downvote" className = "downvote-btn vote-btn"/>
          </div>
        </div>
      </div>
    )})
    return (
      <div>
        {data}
      </div>
    )
  }
}
