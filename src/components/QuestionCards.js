import React, {Component} from 'react';
import QuestionCard from '../components/QuestionCard.js';
import request from 'superagent';
// import fs from 'react-fs';
// import '../MOCK_DATA.json';

export default class QuestionCards extends Component {
  constructor(props) {
    super(props);
    this.sendQuestionIdUpToParent = this.sendQuestionIdUpToParent.bind(this);
    this.handleQuestionSubmitFormRequest = this.handleQuestionSubmitFormRequest.bind(this);
    this.showProfilePage = this.showProfilePage.bind(this);

    this.state ={
      // postQuestion: false,
      questionDataArray: null,
      listLength: 10
    }
  }

  handleQuestionSubmitFormRequest(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.handleQuestionSubmitFormRequest(event.target.id);
      // this.setState({postQuestion: event.target.id});
    }
  }

  sendQuestionIdUpToParent(e){
    this.props.sendQuestionIdUpToParent(e);
  }

  showProfilePage(e){
    this.props.showProfilePage(e);
  }

  componentWillMount(){
    this.fetchAllQuestions();
  }

  fetchAllQuestions(){
    request
      .get('https://murmuring-fjord-57185.herokuapp.com/api/questions')
      .end((err, res) => {
        let mockData = res.body.questions;
        this.setState({questionDataArray: mockData});
      });
  }

  filtered(array){
    return array.filter((elem, index, arr) => arr.indexOf(elem) < 10);
  }

    render() {
      return (
        <div>
          <div className="question-card-wrapper">
              <div>
                {this.props.postQuestion ?
                  null :
                  (<div className = "question-cards-wrapper-top">
                    <div className = "question-cards-wrapper-top-left">
                      <h2>all questions</h2>
                    </div>
                    <div className = "question-cards-wrapper-top-right">
                      <a onClick={this.handleQuestionSubmitFormRequest}
                        id="true"
                        >Ask a Question</a>
                    </div>
                  </div>)
                }
              </div>
              {this.state.questionDataArray ?
                <QuestionCard
                  sendQuestionIdUpToParent={this.sendQuestionIdUpToParent}
                  showProfilePage={this.showProfilePage}
                  arrayOfQuestionObjects={this.filtered(this.state.questionDataArray)}
                  token={this.props.token}
                /> :
                null
              }
            </div>
        </div>
      );
    }

}

QuestionCards.propTypes = {
};
