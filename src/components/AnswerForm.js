import React, { Component } from 'react';

export default class AnswerForm extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <div className = "answer-form-header">
          <h2>answer this question</h2>
        </div>
        <form id = "answerForm">
          <p><textarea name = "answerBody" form ="answerForm" className = "answerBody" /></p>
          <p><input type = "submit" value = "submit" className = "answerSubmit"/></p>
        </form>
      </div>
    )
  }
}
