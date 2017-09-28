import React, {Component} from 'react';

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.sendQuestionIdUpToParent = this.sendQuestionIdUpToParent.bind(this);
  }

  sendQuestionIdUpToParent(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.sendQuestionIdUpToParent(event.target.id);
    }
  }

  render() {
    // let mapper = this.props.arrayOfQuestionObjects.map((mapped, index) =>{
    // id={mapped.id} goes with onClick
      return (
        <div className="question-card-wrapper">
          <div className = "question-card-content-top">
          <div className = "question-card-content-middle">
            <h3 onClick={this.sendQuestionIdUpToParent} id="single" >This is a question header</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis dolor vestibulum, vulputate purus nec, commodo elit. Sed eget dolor non elit iaculis convallis. Nam fermentum maximus diam, eget euismod ante cursus posuere. Praesent nec leo tincidunt, dapibus ex vitae, pharetra lectus. Quisque vestibulum elit sed leo interdum, in ultrices lorem sollicitudin. Morbi quis rhoncus nibh. Phasellus volutpat dui eu elementum finibus. Nunc vel metus diam. Fusce velit magna, commodo id massa et, rutrum ullamcorper quam. Pellentesque imperdiet, dolor et ornare malesuada, sapien lacus posuere enim, a hendrerit urna dolor nec quam. Nulla aliquet iaculis elit, eu consectetur neque tincidunt quis. Integer egestas nulla vitae enim sollicitudin pellentesque. Cras a felis tellus.

Donec dictum volutpat mi in posuere. Aenean eu enim lectus. Donec mollis lectus purus, eu efficitur nunc cursus vel. Nulla id eros egestas tortor pellentesque rutrum. Duis consectetur, nunc vitae hendrerit tempus, erat velit faucibus velit, non posuere urna eros a enim. Nam lobortis neque ut dignissim convallis. Vivamus augue tellus, faucibus non nulla ac, feugiat pretium ligula. Nam viverra ligula in enim viverra ultricies.</p>
          </div>
          <div className = "question-card-content-right">
            <table>
              <tbody>
              <tr>
                <th>Answers</th>
                <th>Views</th>
                <th>Votes</th>
              </tr>
              <tr>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
            </table>
          </div>
        </div>
          <div className = "question-card-content-bottom">
            <div className = "question-card-content-bottom-left">
              <div className = "user-class">
                <img src = "" alt ="avatar"/>
                <p>Asked by NAME on DATE</p>
              </div>
            </div>

          </div>
        </div>
      );
    // }
    // return (
    //   <div>
    //     {mapper}
    //   </div>
    // )
  }
}

QuestionCard.propTypes = {
};
