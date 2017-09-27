import React, {Component} from 'react';
import QuestionCard from '../components/QuestionCard.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
// import AnswerCard from '../components/AnswerCard.js';


export default class QuestionCards extends Component {
  constructor(props) {
    super(props);
    this.sendQuestionIdUpToParent = this.sendQuestionIdUpToParent.bind(this);
    this.handleQuestionSubmitFormRequest = this.handleQuestionSubmitFormRequest.bind(this);

    this.state ={

      postQuestion: "false"

    }
    // this.sendDataUp = this.sendDataUp.bind(this);
  }

  handleQuestionSubmitFormRequest(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.handleQuestionSubmitFormRequest(event.target.id);
    }
  }

  sendQuestionIdUpToParent(e){
    this.props.sendQuestionIdUpToParent(e);
  }

  submitQuestionToDatabase(){
    // post
    // this.setState({postQuestion: false})
  }

  // fetchSomeShit(){}

  render() {
    return (
      <div>

        <div className="question-card-wrapper">
            <div className = "question-cards-wrapper-top">
              <div className = "question-cards-wrapper-top-left">
                <h2>all questions</h2>
              </div>
              <div className = "question-cards-wrapper-top-right">
                <a onClick={this.handleQuestionSubmitFormRequest}
                  id="true"
                  href="">Ask a Question</a>
              </div>
            </div>
            <QuestionCard sendQuestionIdUpToParent={this.sendQuestionIdUpToParent}/>
          </div>
      </div>
    );
  }
}

QuestionCards.propTypes = {
};
