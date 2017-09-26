import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Jumbotron from "./Jumbotron.js";
// import LoginForm from "./LoginForm.js";
import QuestionCards from './QuestionCards.js';
import QuestionPageApp from './QuestionPageApp.js';

class App extends Component {
  constructor(props){
    super(props);
    this.handleIncomingData = this.handleIncomingData.bind(this);
    this.state ={
      questionID: false
    };
  }

  handleIncomingData(value){
    this.setState({ questionID: value });

  }

  render() {
    return (
      <div className="App">

        <Header sendDataUpToParent={this.handleIncomingData}/>
        {/* <LoginForm/> */}
        <Jumbotron/>
        <div className="question-cards-wrapper">
        {this.state.questionID ? (<QuestionPageApp invariable={this.state.questionID} sendDataUpToParent={this.handleIncomingData}/>) : (<QuestionCards sendDataUp={this.handleIncomingData}/>)}

        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
