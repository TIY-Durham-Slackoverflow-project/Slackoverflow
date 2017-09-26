import React, { Component } from 'react';
import '../styles/App.css';
import QuestionCard from './QuestionCard.js';
import Header from './Header.js';
import Footer from './Footer.js';
import Jumbotron from "./Jumbotron.js";
import QuestionCards from './QuestionCards.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Jumbotron/>
        <div className="App-list">
          <QuestionCards/>
          <QuestionCard/>
          <QuestionCard/>
          <QuestionCard/>
        </div>
        <div className="App-Footer">
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
