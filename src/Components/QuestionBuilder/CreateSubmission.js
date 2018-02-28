import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateSubmission extends Component {
    render() {
        return (
            <div className="Main-question-box">
                <div className="Question-box">
                    <div className="Page-title">
                        Create Submission Type Question
                    </div>
                    <div className="Question-title">
                        Question Title:
                    </div>
                    <div className="input-holder">
                        <input type="text" name="questionTitle" placeholder="Type your question title here..." />
                    </div>
                    <div className="Question-title">
                        Question Description:
                    </div>
                    <div className="input-holder">
                        <input type="text" name="questionDescription" placeholder="Type your question description here..." />
                    </div>
                    <div className="Question-title">
                        Instructions:
                    </div>
                    <div className="input-holder">
                        <input type="text" name="instructions" placeholder="Type your question instructions here..." />
                    </div>
                </div>
                <div className="Question-footer">
                    <div className="Footer-container">
                    <div className="footer-text">
                        Click author to create a new question and will be added automatically to the question list.
                    </div>
                    <div className="footer-action">
                        <Link to="/QuestionBuilder"><button className="Secondary-btn mar-1">Cancel</button></Link>
                        <button className="Primary-btn">Author</button>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateSubmission;