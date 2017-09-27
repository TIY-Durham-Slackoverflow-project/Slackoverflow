import React, {Component} from 'react';
import '../styles/App.css';
import SingleQuestion from "../components/SingleQuestion.js";
import AnswerCard from '../components/AnswerCard.js';

export default class QuestionPageApp extends Component {
  constructor(props){
    super(props);

    // this.submitAnswerFormUp = this.submitAnswerFormUp.bind(this);

    this.state={
      idvariable: "",
      questionID: false
    };
  }

  // handleIncomingData(value){
  //   this.setState({
  //     idvariable: value,
  //     questionID: false
  //   });
  // }
  // this.props.sendDataUpToParent(value);





  render() {
    return (
      <div className="single-question-container">


        <SingleQuestion
          // submitAnswerFormUp={this.submitAnswerFormUp}
        />

        <AnswerCard/>

      </div>
    );
  }
}

QuestionPageApp.propTypes = {
};
