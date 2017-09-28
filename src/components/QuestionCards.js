import React, {Component} from 'react';
import QuestionCard from '../components/QuestionCard.js';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import request from 'superagent';
import superagentJsonapify from 'superagent-jsonapify';
// import fs from 'react-fs';
// import '../MOCK_DATA.json';

export default class QuestionCards extends Component {
  constructor(props) {
    super(props);
    this.sendQuestionIdUpToParent = this.sendQuestionIdUpToParent.bind(this);
    this.handleQuestionSubmitFormRequest = this.handleQuestionSubmitFormRequest.bind(this);

    this.state ={
      postQuestion: false,
      mockData: null
    }
    // this.sendDataUp = this.sendDataUp.bind(this);
  }


  handleQuestionSubmitFormRequest(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.handleQuestionSubmitFormRequest(event.target.id);
      this.setState({postQuestion: event.target.id});
    }
  }

  sendQuestionIdUpToParent(e){
    this.props.sendQuestionIdUpToParent(e);
  }

  fetchSomeShit(){
    // superagentJsonapify(request);
    request
      // .get(process.env.PUBLIC_URL + '/MOCK_DATA.json')
      .get('https://murmuring-fjord-57185.herokuapp.com/api/questions')
      // .query({ action: 'edit', city: 'London' }) // query string
      // .use(prefix) // Prefixes *only* this request
      // .use(nocache) // Prevents caching of *only* this request
      .end((err, res) => {
        // if(err) {
        //   this.setState({error: res.body.error});
        // }
        // console.log(err);
        console.log(res.text.questions);
        let mockData = res.text.questions;
        this.setState({mockData: mockData});
      });
  }

  componentWillMount(){
    this.fetchSomeShit();

  }

  render() {
    return (
      <div>

        <div className="question-card-wrapper">
            <div>
              {this.state.postQuestion ?
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
            <QuestionCard sendQuestionIdUpToParent={this.sendQuestionIdUpToParent}
              arrayOfQuestionObjects={this.state.mockData}
            />
          </div>
      </div>
    );
  }
}

QuestionCards.propTypes = {
};
