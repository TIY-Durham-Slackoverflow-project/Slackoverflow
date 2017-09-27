import React, {Component} from 'react';
import QuestionCard from '../components/QuestionCard.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import AnswerCard from '../components/AnswerCard.js';

export default class QuestionCards extends Component {
  constructor(props) {
    super(props);
    this.sendDataUp = this.sendDataUp.bind(this);
    this.sendQuestionIdUpToParent = this.sendQuestionIdUpToParent.bind(this);
    this.sendQuestionUpToParent = this.sendQuestionUpToParent.bind(this);
  }
  sendAnswerUp(id){
    this.props.sendDataUp(id);
  }

  sendQuestionIdUpToParent(e){
    this.props.sendQuestionUpToParent(e);
  }

  sendQuestionUpToParent(event){
  if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
    this.props.sendQuestionUpToParent(event.target.id);
  }
}

  // fetchSomeShit(){}

  render() {
    return (
      <div className="question-card-wrapper">
        <div className = "question-cards-wrapper-top">
          <div className = "question-cards-wrapper-top-left">
            <h2>all questions</h2>
          </div>
          <div onClick={this.sendQuestionUpToParent} className = "question-cards-wrapper-top-right">
            <a href="">Ask a Question</a>
          </div>
        </div>
        <QuestionCard sendQuestionUpToParent={this.sendQuestionUpToParent}/>
      </div>
    );
  }
}

QuestionCards.propTypes = {
};
