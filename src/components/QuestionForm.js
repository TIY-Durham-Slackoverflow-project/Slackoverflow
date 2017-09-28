import React, {Component} from 'react';
import request from 'superagent';

export default class QuestionForm extends Component {
  constructor(props) {
    super(props);
    this.navigateBackRequest = this.navigateBackRequest.bind(this);

    this.state = {
      title: null,
      textarea: null
    }
  }

  navigateBackRequest(goBack){
    this.props.navigateBackRequest(goBack);
  }

  submitQuestionToDatabase(){
    // post
    // this.setState({postQuestion: false})

  }

  updateFromField(stateKey) {
    return (event) => {
      this.setState({[stateKey]: event.target.value});
    }
  }

  submitQuestionToDatabase(event){
    event.preventDefault();
    request
      .post()
      .send({title: this.state.title, textarea: this.state.textarea})
      .end((err, res) =>{
        if(err) {
          this.setState({error: res.body.error});
        }
      })
  }

  render() {
    return (
      <div className = "ask-question-page-wrapper">
        <div className = "ask-question-page-header">
          <h2>ask a question</h2>
        </div>
        {this.state.error && <div className="alert">{this.state.error}</div>}
        <div className = "ask-question-page-form-wrapper">
          <form className = "ask-question-form">
            <p><input onChange={this.updateFromField('title')} className = "form-title-input" type = "text" name = "ask-title" placeholder="Title" autoFocus/></p>
            <p><textarea onChange={this.updateFromField('textarea')} name = "ask-details">Question Details:</textarea></p>
            <div>

              <input onClick={event => this.submitQuestionToDatabase(event)} type = "submit" value = "submit" className = "submit-question-btn" name = "submit-question"/>
              <input onClick={this.navigateBackRequest} type = "submit" value = "cancel" className = "cancel-question-btn submit-question-btn" name = "cancel-question"/>

          </div>
          </form>
        </div>
      </div>
    );
  }
}

QuestionForm.propTypes = {
};
