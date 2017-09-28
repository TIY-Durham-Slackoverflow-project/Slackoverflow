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

    console.log(this.props.arrayOfQuestionObjects);

    // let mapper = this.props.arrayOfQuestionObjects.questions.map((mapped, index) =>{
    //   if(index<100){
    //     return (
    //       <div className="question-card-wrapper">
    //         <div className = "question-card-content-top">
    //         <div className = "question-card-content-left">
    //           <div className = "question-card-icon"><img src={mapped.questionUserPhoto} alt = "icon"/></div>
    //           <a>{mapped.questionUserName}</a>
    //         </div>
    //         <div className = "question-card-content-middle">
    //           <h3 onClick={this.sendQuestionIdUpToParent} id={mapped.id} >{mapped.questionName}</h3>
    //           <p>{mapped.questionDetails}</p>
    //         </div>
    //         <div className = "question-card-content-right">
    //           <table>
    //             <tbody>
    //             <tr>
    //               <th>Votes</th>
    //               <th>Answers</th>
    //             </tr>
    //             <tr>
    //               <td>0</td>
    //               <td>0</td>
    //             </tr>
    //           </tbody>
    //           </table>
    //         </div>
    //       </div>
    //         <div className = "question-card-content-bottom">
    //           <div className = "question-card-content-bottom-left">
    //             <p>Asked on {mapped.whenAsked}</p>
    //           </div>
    //           <div className = "question-card-content-bottom-right">
    //             <p>Viewed by {mapped.viewsNum} people</p>
    //
    //           </div>
    //         </div>
    //
    //       </div>
    //     );
    //   }
    // })
    return (
      <div>
        {/* {mapper} */}
      </div>
    )
  }
}

QuestionCard.propTypes = {
};
