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
            <p><input className = "form-title-input" type = "text" name = "ask-title" placeholder="Title" autoFocus/></p>
            <p><textarea name = "ask-details">Question Details:</textarea></p>
            <div>
              <input type = "submit" value = "submit" className = "submit-question-btn" name = "submit-question"/>
              <input type = "submit" value = "cancel" className = "cancel-question-btn submit-question-btn" name = "cancel-question"/>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

QuestionForm.propTypes = {
};
