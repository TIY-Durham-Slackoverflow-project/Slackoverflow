import React, { Component } from 'react';
import '../styles/App.css';
import QuestionCard from './QuestionCard.js';
import Header from './Header.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
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
