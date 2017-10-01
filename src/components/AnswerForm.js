import React, { Component } from 'react';
import cookie from 'react-cookies';
import request from 'superagent';

export default class AnswerForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      textarea: null,
      error: null
    }
  }

  componentWillMount() {
    this.setState({token: cookie.load('token')});
  }

  updateFromField(stateKey) {
    return (event) => {
      this.setState({[stateKey]: event.target.value});
    }
  }

  handleSubmittedAnswerForm(){
    // call fxn to post to DB
  }

  postAnAnswer(event){
    event.preventDefault();
    let id = this.props.questionID;
    request
      // .get(process.env.PUBLIC_URL + '/MOCK_DATA.json')
      .post(`https://murmuring-fjord-57185.herokuapp.com/api/questions/${id}/answers`)
      .send({ body: this.state.textarea }) // query string
      .set('Authorization', `Token token=${this.props.token}`)
      .end((err, res) => {
        console.log(err);
        console.log(res);
        if(err) {
          this.setState({error: res.body.error});
        }
      });
  }

  render(){
    return(
      <div>
        <div className = "answer-form-header">
          <h2>answer this question</h2>
        </div>
        {this.state.error && <div className="alert">{this.state.error}</div>}
        <form id = "answerForm">
          <p><textarea
            onChange={this.updateFromField('textarea')}
             name = "answerBody" form ="answerForm" className = "answerBody"/></p>
          <p><input onClick={event => this.postAnAnswer(event)} type = "submit" value = "submit" className = "answerSubmit"/></p>
        </form>
      </div>
    )
  }
}
