import React, {Component} from 'react';
import moment from "moment";

export default class QuestionCard extends Component {
  constructor(props) {
    super(props);
    this.sendQuestionIdUpToParent = this.sendQuestionIdUpToParent.bind(this);
    this.showProfilePage = this.showProfilePage.bind(this);

  }

  sendQuestionIdUpToParent(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.sendQuestionIdUpToParent(event.target.id);
    }
  }

  showProfilePage(event){
    if (event.target.id !== "" && event.target.id !== undefined && event.target.id !== null){
      this.props.showProfilePage(event.target.id);
    }  }

  handleVoteChangeRequest(qOrA, plusOrMinus){
    // one vote per Q or A per user? -- break into two fxns?
  }

  displayTags(mappedTags){
    if(mappedTags.length>0){
      let tags = mappedTags.map((tag, index) =>{
        return( < li key={index} >{tag}</li> )
      })
      return(
          <div className='question-tags-list'>
            <ul>
              {tags}
            </ul>
          </div>
      )
    }else{
      return null;
    }
  }

  render() {
    let mapper = this.props.arrayOfQuestionObjects.map((mapped, index) =>{
      console.log(mapped);
      if(index<100){
        return (
          < div key={mapped.id} className="question-card-wrapper">
            <div className = "question-card-content-top">
              <div className = "question-card-content-middle">
                <h3 onClick={this.sendQuestionIdUpToParent} id={mapped.id} >{mapped.title}</h3>
                <p>{mapped.body}</p>
                <div className = "user-div">
                  <div className = "question-card-icon">
                    <img onClick={this.showProfilePage} id={mapped.id} src={mapped.id} alt = "icon"/>
                  </div>
                  <div>
                    <a>{mapped.answers.answer_user} asked {moment(mapped.created_at).format("MMM DD 'YY h:mm")}</a>
                  </div>
                </div>
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
                    <td>{mapped.answers_num}</td>
                    <td>{mapped.views}</td>
                    <td>0</td>
                  </tr>
                </tbody>
                </table>
              </div>
              {this.displayTags(mapped.tags)}
            </div>
          </div>
        );
      }
    })
    return (
      <div>
        {mapper}
      </div>
    )
  }
}

QuestionCard.propTypes = {
};
