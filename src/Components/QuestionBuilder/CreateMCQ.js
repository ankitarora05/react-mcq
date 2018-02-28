import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CreateMCQ extends Component {
  render() {
    return (
        <div className="Main-question-box">
                <div className="Question-box">
                    <div className="Page-title">
                        Create Multiple Choice Question
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
                    <div className="MCQ-Creater">
                        <div className="MCQ-options">
                            <div className="header-row clear">
                                <div className="mcq-title pull-left">Answer Options: </div>
                                <div className="mcq-title pull-right">Right Answers:</div> 
                            </div>
                            <div className="input-check-holder">
                                <input type="text" name="optionA" placeholder="Please type option A here..." />
                                <input type="checkbox" name="optionA"/>
                            </div>
                            <div className="input-check-holder">
                                <input type="text" name="optionB" placeholder="Please type option B here..." />
                                <input type="checkbox" name="optionB"/>
                            </div>
                            <div className="input-check-holder">
                                <input type="text" name="optionC" placeholder="Please type option C here..." />
                                <input type="checkbox" name="optionC"/>
                            </div>
                            <div className="input-check-holder">
                                <input type="text" name="optionD" placeholder="Please type option D here..." />
                                <input type="checkbox" name="optionD"/>
                            </div>
                        </div>
                                              
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

export default CreateMCQ;