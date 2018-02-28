import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';


class QuestionBuilder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeState: ''
        }
    }

    handleQuestionCreationRadio = (e) => {
        this.setState({
            activeState: e.target.value
        });
        e.preventDefault();
    }
    render() {
        if (this.state.activeState === 'MCQ') {
            return <Redirect push={true} to="/QuestionBuilder/CreateMCQ"/>;
        } else if (this.state.activeState === 'Passage') {
            return <Redirect push={true} to="/QuestionBuilder/CreatePassage"/>;
        } else if (this.state.activeState === 'Submission') {
            return <Redirect push={true} to="/QuestionBuilder/CreateSubmission" />;
        } else {
            return (
                <div className="Question-builder">
                    <div className="title">
                        Question Builder
        </div>
                    <div className="sub-title">
                        What type of question you want to create?
            </div>
                    <div className="radio-group">
                        <div className="radio-row">
                            <label>
                                <input type="radio" value="MCQ" name="question-type" onChange={this.handleQuestionCreationRadio.bind(this)} /> Multiple Choice Question
                            </label>
                        </div>
                        <div className="radio-row">
                            <label>
                                <input type="radio" value="Submission" name="question-type" onChange={this.handleQuestionCreationRadio.bind(this)} /> Submission type question
                </label>
                        </div>
                        <div className="radio-row">
                            <label>
                                <input type="radio" value="Passage" name="question-type" onChange={this.handleQuestionCreationRadio.bind(this)} /> Passage(text) type question
                </label>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default QuestionBuilder;