import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AssignedQuestions extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            AssignedQuestions: [],
            activeStudent: '',
            questionsToBind: []
        }
    }

    componentDidMount(){
        let studentQuestionList = JSON.parse(localStorage.getItem('studentMap'));
        let assignedQuestionsItems = studentQuestionList.filter((item)=>{
            return item.id.toString() === this.props.match.params.id
        });
        let tempArr = [];
        assignedQuestionsItems[0].questions.forEach(element => {
           tempArr.push(element.question);
        });
        this.setState({ 
            AssignedQuestions: assignedQuestionsItems, 
            questionsToBind: tempArr
        });
    }
    makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      
        for (var i = 0; i < 5; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
      
        return text;
      }
    render() {
        const itemMap = this.state.AssignedQuestions.map((item)=>{
            return (
                <div key={item.id} className="questions-list">
                    {item.questions.length + " "} Questions for <span className="student-name">{item.name}</span>
                </div>
            )
        });
        const questionsList = this.state.questionsToBind.map((item) =>{
            return (
                <Link to="/AnswerQuestion" key={this.makeid()}><li className="questions" key={this.makeid()}>{item}</li></Link>
            );
        });
        return (
            <div className="Assigned-Questions-list">
                <div className="Page-title">
                    {itemMap}
                </div>
                <div className="Questions-link">
                <ul className="questions-items">
                    {questionsList}
                </ul>
                </div>
            </div>
        );
    }
}

export default AssignedQuestions;