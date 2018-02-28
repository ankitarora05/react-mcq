import React, { Component } from 'react';

class AssignedQuestions extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            AssignedQuestions: [],
            activeStudent: ''
        }
    }

    componentDidMount(){
        let studentQuestionList = JSON.parse(localStorage.getItem('studentMap'));
        let assignedQuestionsItems = studentQuestionList.filter((item)=>{
            return item.id.toString() === this.props.match.params.id
        });
        this.setState({ 
            AssignedQuestions: assignedQuestionsItems,
            
        });
    }
    render() {
        const itemMap = this.state.AssignedQuestions.map((item)=>{
            return (
                <div key={item.id} className="questions-list">
                    Questions for <span className="student-name">{item.name}</span>
                </div>
                
            )
        });
        return (
            <div className="Assigned-Questions-list">
                <div className="Page-title">
                    {itemMap}
                </div>
            </div>
        );
    }
}

export default AssignedQuestions;