import React, { Component } from 'react';
import '../styles/App.css';
import cookie from 'react-cookies';
// import request from 'superagent';
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

    // question cards
    this.sendQuestionIdUpToParent = this.sendQuestionIdUpToParent.bind(this);
    this.handleQuestionSubmitFormRequest = this.handleQuestionSubmitFormRequest.bind(this);
    this.showProfilePage = this.showProfilePage.bind(this);


    this.state ={
      token:  "VcYAN7Ni7tXBTADmCeaaN5hS",
      displayForm: false,
      questionID: false,
      profilePage: false,
      postQuestion: false

    };
  }

  componentWillMount() {
    this.setState({token: cookie.load('token')});
  }

  componentDidUpdate(){
  }

  setToken(token) {
    this.setState({token: token});
    cookie.save('token', token);
    console.log(token);
    console.log(this.state.token);
  }

  // Header--
  sendLoginFormRequestUp(value){
    if(value===this.state.displayForm){
      this.setState({ displayForm: false });
    }else{
      this.setState({ displayForm: value });
    }
  }

  navigateBackRequest(){
    this.setState({
      questionID: false,
      postQuestion: false,
      profilePage: false
    });
  }

  // ------QuestionCards--Main page--list of questions
  // Check login => display form. Display form component. Accept data and post to
  handleQuestionSubmitFormRequest(value){
    this.setState({postQuestion: value});
  }

  sendQuestionIdUpToParent(value){
    this.setState({questionID: value});
  }

  showProfilePage(value){
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
            setToken={this.setToken.bind(this)}
          /> :
          null
        }
        <Jumbotron/>
        {this.state.profilePage ?
          <ProfilePageApp
            profileFor={this.state.profilePage}
          /> :
          (<div>
            {this.state.postQuestion ?
            <QuestionForm
              navigateBackRequest={this.navigateBackRequest}
              token={this.state.token}
            /> :
          <div className="question-cards-wrapper">
            {this.state.questionID ?
              (<QuestionPageApp
                questionID={this.state.questionID}
                token={this.state.token}
              />) :
              (<QuestionCards
                sendQuestionIdUpToParent={this.sendQuestionIdUpToParent}
                handleQuestionSubmitFormRequest={this.handleQuestionSubmitFormRequest}
                showProfilePage={this.showProfilePage}
                postQuestion={this.state.postQuestion}
                token={this.state.token}
              />)
            }

          </div>
          }
        </div>)
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
