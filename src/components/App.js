import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Jumbotron from "./Jumbotron.js";
import LoginForm from "./LoginForm.js";
import QuestionCards from './QuestionCards.js';
import ProfilePageApp from './ProfilePageApp.js';
import QuestionPageApp from './QuestionPageApp.js';

class App extends Component {
  constructor(props){
    super(props);

    // header
    this.sendLoginFormRequestUp = this.sendLoginFormRequestUp.bind(this);
    this.navigateBackRequest = this.navigateBackRequest.bind(this);
    this.submitLoginData = this.submitLoginData.bind(this);
    this.submitRegisterData = this.submitRegisterData.bind(this);



    // question cards
    this.handleQuestionSubmitFormRequest = this.handleQuestionSubmitFormRequest.bind(this);
    this.handleSingleQuestionRequest = this.handleSingleQuestionRequest.bind(this);
    this.handleSubmittedAnswerForm = this.handleSubmittedAnswerForm.bind(this);

    this.state ={
      token: null,
      displayForm: false,
      questionID: "false",
      profilePage: false


    };
  }

  // componentWillMount(){
  //   this.setState({token: cookie.load})
  // }
  //
  // setToken(){
  //   this.setState({token: token});
  //   cookie.save({'token': token});
  // }

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
  handleQuestionSubmitFormRequest(){
    // Check login => display form. Display form component. Accept data and post to DB
  }

  handleSingleQuestionRequest(value){
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
        <div className="question-cards-wrapper">
        {this.state.questionID ? (<QuestionPageApp invariable={this.state.questionID} sendQuestionUpToParent={this.handleIncomingQuestion}/>) : (<QuestionCards sendDataUp={this.handleIncomingData}/>)}
        {this.state.profilePage ? (<ProfilePageApp invariable={this.state.profilePage} sendProfileUpToParent={this.handleIncomingProfilePage}/>) : (<QuestionCards sendDataUp={this.handleIncomingData}/>)}
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
