import React, {Component} from 'react';

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="question-card-wrapper">
        <div className = "question-card-content-top">
        <div className = "question-card-content-left">
          <div className = "question-card-icon"><img src="" alt = "icon"/></div>
          <a href = "">name here</a>
        </div>
        <div className = "question-card-content-middle">
          <h3>This is a question header</h3>
          <p>This is more info about the question...</p>
          <ul className = "question-tags">
            <li>javascript</li>
            <li>react</li>
            <li>css</li>
          </ul>
        </div>
        <div className = "question-card-content-right">
          <table>
            <tbody>
            <tr>
              <th>Votes</th>
              <th>Answers</th>
            </tr>
            <tr>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
          </table>
        </div>
      </div>
        <div className = "question-card-content-bottom">
          <div className = "question-card-content-bottom-left">
            <p>Asked on DATE</p>
          </div>
          <div className = "question-card-content-bottom-right">
            <p>Viewed by 0 people</p>
          </div>
        </div>
      </div>
    );
  }
}

QuestionCard.propTypes = {
};
