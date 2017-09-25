import React, {Component} from 'react';

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        Question Card. Many show on the main list.
      </div>
    );
  }
}

QuestionCard.propTypes = {
};
