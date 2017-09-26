import React, {Component} from 'react';

export default class QuestionCards extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className = "question-cards-wrapper-top">
          <div className = "question-cards-wrapper-top-left">
            <h2>all questions</h2>
          </div>
          <div className = "question-cards-wrapper-top-right">
            <a href="">Ask a Question</a>
          </div>
      

      </div>
    );
  }
}

QuestionCards.propTypes = {
};
