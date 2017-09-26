import React, {Component} from 'react';

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="question-card-wrapper">
        <div className = "question-card-content-left">
          <div className = "question-card-icon"><img src="" alt = "icon"/></div>
          <a href = "">name here</a>
        </div>
        <div className = "question-card-content-middle">
          <h3>This is a question header</h3>
          <p>This is more info about the question...</p>
        </div>
        <div className = "question-card-content-right">
          <table>
            <tr>
              <th>Votes</th>
              <th>Answers</th>
            </tr>
            <tr>
              <td>number</td>
              <td>number</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

QuestionCard.propTypes = {
};
