import React, {Component} from 'react';
import QuestionCard from '../components/QuestionCard.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import AnswerCard from '../components/AnswerCard.js';

export default class QuestionCards extends Component {
  constructor(props) {
    super(props);
    this.sendDataUp = this.sendDataUp.bind(this);
  }
  sendDataUp(id){
    this.props.sendDataUp(id);
  }

  render() {
    return (
      <div className="question-card-wrapper">
        <div className = "question-cards-wrapper-top">
          <div className = "question-cards-wrapper-top-left">
            <h2>all questions</h2>
          </div>
          <div className = "question-cards-wrapper-top-right">
            <a href="">Ask a Question</a>
          </div>
        </div>
        <QuestionCard/>
      </div>
    );
  }
}

QuestionCards.propTypes = {
};
