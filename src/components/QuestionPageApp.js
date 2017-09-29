import React, {Component} from 'react';
import '../styles/App.css';
import SingleQuestion from "../components/SingleQuestion.js";
import AnswerCard from '../components/AnswerCard.js';
import AnswerForm from '../components/AnswerForm.js';
import request from 'superagent';

export default class QuestionPageApp extends Component {
  constructor(props){
    super(props);

    // this.submitAnswerFormUp = this.submitAnswerFormUp.bind(this);

    this.state={
      idvariable: "",
      questionData: null
    };
  }

  componentWillMount(){
    this.fetchSomeShit();
  }

  fetchSomeShit(){
    let id = this.props.questionID;
    // id = 1;
    request
      .get(`https://murmuring-fjord-57185.herokuapp.com/api/questions/${id}`)
      .end((err, res) => {
        let questionData = res.body.question;
        this.setState({questionData: questionData});
      });
  }


  render() {
    return (
      <div className="single-question-container">
        {this.state.questionData &&
          (<div>
            <SingleQuestion
              questionData={this.state.questionData}
              questionID={this.props.questionID}
              token={this.props.token}
            />
            <AnswerCard
              answerData={this.state.questionData.answers}
              questionID={this.props.questionID}
              token={this.props.token}
            />
            <AnswerForm
              questionID={this.props.questionID}
              token={this.props.token}
            />
          </div>)
        }
      </div>
    );
  }
}

QuestionPageApp.propTypes = {
};
