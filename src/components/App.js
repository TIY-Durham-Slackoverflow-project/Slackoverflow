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
    this.handleIncomingData = this.handleIncomingData.bind(this);
    this.handleIncomingQuestion = this.handleIncomingQuestion.bind(this);
    this.state ={
      displayForm: false,
      questionID: "false",
      profilePage: "false"
    };
  }

  handleIncomingData(value){
    if(value===this.state.displayForm){
      this.setState({ displayForm: false });
    }else{
      this.setState({ displayForm: value });
    }
  }

  handleIncomingQuestion(value){
    this.setState({questionID: value});
  }

  handleIncomingProfilePage(value){
    this.setState({profilePage: value});
  }

  render() {
    return (
      <div className="App">

        <Header sendDataUp={this.handleIncomingData}/>
        {this.state.displayForm ?
          <LoginForm display={this.state.displayForm}/> :
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
