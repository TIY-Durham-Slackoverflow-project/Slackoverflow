import React, {Component} from 'react';
import '../styles/App.css';
import SingleQuestion from "../components/SingleQuestion.js";

export default class QuestionPageApp extends Component {
  constructor(props){
    super(props);
    this.handleIncomingData = this.handleIncomingData.bind(this);
    this.state={
      idvariable: "",
      questionID: false
    };
  }

  handleIncomingData(value){
    this.setState({
      idvariable: value,
      questionID: false
    });
    this.props.sendDataUpToParent(value);
  }

  render() {
    return (
      <div className="container">
        <SingleQuestion
          sendDataUpToParent={this.handleIncomingData}/>
        Single question with all the details, and answers hopefully.
      </div>
    );
  }
}

QuestionPageApp.propTypes = {
};
