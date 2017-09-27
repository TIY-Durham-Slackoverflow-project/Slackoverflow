import React, {Component} from 'react';

export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className = "ask-question-page-wrapper">
        <div className = "ask-question-page-header">
          <h2>ask a question</h2>
        </div>
        <div className = "ask-question-page-form-wrapper">
          <form className = "ask-question-form">
            <p><input type = "text" name = "ask-title" placeholder="Title"/></p>
            <p><textarea name = "ask-details">Question Details:</textarea></p>
            <p><input type = "submit" value = "submit" name = "submit-question"/></p>
          </form>

        </div>

      </div>
    );
  }
}

QuestionForm.propTypes = {
};
