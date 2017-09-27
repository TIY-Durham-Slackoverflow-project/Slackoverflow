import React, {Component} from 'react';
import QuestionCard from '../components/QuestionCard.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
// import AnswerCard from '../components/AnswerCard.js';
import QuestionForm from '../components/QuestionForm.js';

export default class QuestionCards extends Component {
  constructor(props) {
    super(props);

    this.state ={
      postQuestion: false
    }
    // this.sendDataUp = this.sendDataUp.bind(this);
    this.sendQuestionIdUpToParent = this.sendQuestionIdUpToParent.bind(this);
    this.handleQuestionSubmitFormRequest = this.handleQuestionSubmitFormRequest.bind(this);
  }
  // sendAnswerUp(id){
  //   this.props.sendDataUp(id);
  // }



  sendQuestionIdUpToParent(e){
    this.props.sendQuestionIdUpToParent(e);
  }

  handleQuestionSubmitFormRequest(event){
    // Check login => display form. Display form component. Accept data and post to

    this.setState({postQuestion: event.target.id})
  }

  submitQuestionToDatabase(){
    // post
    this.setState({postQuestion: false})
  }

  // fetchSomeShit(){}

  render() {
    return (
      <div>
        {this.state.postQuestion ?
          <QuestionForm/>
         :
        (<div className="question-card-wrapper">
            <div className = "question-cards-wrapper-top">
              <div className = "question-cards-wrapper-top-left">
                <h2>all questions</h2>
              </div>
              <div onClick={this.handleQuestionSubmitFormRequest}
                id="displayForm"
                className = "question-cards-wrapper-top-right">
                <a href="">Ask a Question</a>
              </div>
            </div>
            <QuestionCard sendQuestionIdUpToParent={this.sendQuestionIdUpToParent}/>
          </div>)
        }
      </div>
    );
  }
}

QuestionCards.propTypes = {
};
