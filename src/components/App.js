import React, { Component } from 'react';
import '../styles/App.css';
import cookie from 'react-cookies';
import request from 'superagent';
import Header from './Header.js';
import Footer from './Footer.js';
import Jumbotron from "./Jumbotron.js";
import LoginForm from "./LoginForm.js";
import QuestionCards from './QuestionCards.js';
import ProfilePageApp from './ProfilePageApp.js';
import QuestionPageApp from './QuestionPageApp.js';
import QuestionForm from '../components/QuestionForm.js';

class App extends Component {
  constructor(props){
    super(props);

    // header
    this.sendLoginFormRequestUp = this.sendLoginFormRequestUp.bind(this);
    this.navigateBackRequest = this.navigateBackRequest.bind(this);
    this.submitLoginData = this.submitLoginData.bind(this);
    this.submitRegisterData = this.submitRegisterData.bind(this);



    // question cards
    this.sendQuestionIdUpToParent = this.sendQuestionIdUpToParent.bind(this);
    this.handleSubmittedAnswerForm = this.handleSubmittedAnswerForm.bind(this);
    this.handleQuestionSubmitFormRequest = this.handleQuestionSubmitFormRequest.bind(this);

    this.state ={
      token: null,
      displayForm: false,
      questionID: false,
      profilePage: false,
      postQuestion: false

    };
  }

  componentWillMount() {
    this.setState({token: cookie.load('token')});
  }

  setToken(token) {
    this.setState({token: token});
    cookie.save('token', token);
  }

  // Header--
  sendLoginFormRequestUp(value){
    if(value===this.state.displayForm){
      this.setState({ displayForm: false });
    }else{
      this.setState({ displayForm: value });
    }
  }

  submitLoginData(){
    // (post) check user data against DB. Returns with token. Put into cookie.
  }

  submitRegisterData(){
    // (post) new user data
  }

  navigateBackRequest(){
    this.setState({ questionID: false });
  }

  //------ QuestionPageApp--Single question, answers and answer form
  handleVoteChangeRequest(qOrA, plusOrMinus){
    // one vote per Q or A per user? -- break into two fxns?
  }

  // handleAnswerVoteChangeRequest(){}

  handleSubmittedAnswerForm(){
    // call fxn to post to DB
  }

  // ------QuestionCards--Main page--list of questions
  // Check login => display form. Display form component. Accept data and post to
  handleQuestionSubmitFormRequest(value){

    this.setState({postQuestion: value});
  }

  sendQuestionIdUpToParent(value){
    this.setState({questionID: value});
  }

  handleIncomingProfilePage(value){
    this.setState({profilePage: value});
  }

  render() {
    return (
      <div className="App">

        <Header
          sendLoginFormRequestUp={this.sendLoginFormRequestUp}
          navigateBackRequest={this.navigateBackRequest}
        />
        {this.state.displayForm ?
          <LoginForm
            display={this.state.displayForm}
            submitLoginData={this.submitLoginData}
            submitRegisterData={this.submitRegisterData}
          /> :
          null
        }
        <Jumbotron/>
        {this.state.postQuestion ?
          <QuestionForm/> :
          null
        }
        <div className="question-cards-wrapper">
        {this.state.questionID ?
          (<QuestionPageApp />) :
          (<QuestionCards
            sendQuestionIdUpToParent={this.sendQuestionIdUpToParent}
            handleQuestionSubmitFormRequest={this.handleQuestionSubmitFormRequest}
          />)
        }
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
