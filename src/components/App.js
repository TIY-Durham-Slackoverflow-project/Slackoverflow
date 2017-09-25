import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import QuestionCard from './QuestionCard.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header/>
        </div>
        <div className="App-list">
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
