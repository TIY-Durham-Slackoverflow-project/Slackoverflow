import React, { Component } from 'react';
import '../styles/App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Jumbotron from "./Jumbotron.js";
import LoginForm from "./LoginForm.js";
import QuestionCards from './QuestionCards.js';
import QuestionPageApp from './QuestionPageApp.js';

class App extends Component {
  constructor(props){
    super(props);

    this.sendLoginFormRequestUp = this.sendLoginFormRequestUp.bind(this);



    this.handleSingleQuestionRequest = this.handleSingleQuestionRequest.bind(this);
    this.handleAnswerSubmitFormRequest = this.handleAnswerSubmitFormRequest.bind(this);
    this.handleQuestionSubmitFormRequest = this.handleQuestionSubmitFormRequest.bind(this);

    this.state ={

      displayForm: false,
      questionID: "false"

    };
  }

  // Header--
  sendLoginFormRequestUp(value){
    if(value===this.state.displayForm){
      this.setState({ displayForm: false });
    }else{
      this.setState({ displayForm: value });
    }
  }

  getFormData(){}

  // QuestionPageApp--

  handleSingleQuestionRequest(value){
    this.setState({questionID: value});
  }

  sendAnswerUp(){}

  // QuestionCard--
  handleSingleQuestionRequest(){}

  handleAnswerSubmitFormRequest(){}

  handleQuestionSubmitFormRequest(){}


// need callback for login
  render() {
    return (
      <div className="App">

        <Header sendLoginFormRequestUp={this.handleSingleQuestionRequest}/>
        {this.state.displayForm ?
          <LoginForm display={this.state.displayForm}
            getFormData={}
          /> :
          null
        }
        <Jumbotron/>
        <div className="question-cards-wrapper">
        {this.state.questionID ?
          (<QuestionPageApp sendAnswerUp={this.state.handleAnswerSubmitFormRequest} sendQuestionVotesUpToParent={this.handleIncomingQuestion}

          />) :
          (<QuestionCards sendQuestionIdUpToParent={this.handleSingleQuestionRequest}
          sendAnswerUp={this.handleAnswerSubmitFormRequest}
          sendQuestionUpToParent={this.handleQuestionSubmitFormRequest}/>)
        }

        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
