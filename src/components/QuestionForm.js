import React, {Component} from 'react';

export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.navigateBackRequest = this.navigateBackRequest.bind(this);
  }

  navigateBackRequest(goBack){
    this.props.navigateBackRequest(goBack);
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
              <input type = "submit" value = "Submit" className = "submit-question-btn" name = "submit-question"/>
              <input onClick={this.navigateBackRequest} type = "submit" value = "Cancel" className = "cancel-question-btn submit-question-btn" name = "cancel-question"/>
          </div>
          </form>
        </div>
      </div>
    );
  }
}

QuestionForm.propTypes = {
};
