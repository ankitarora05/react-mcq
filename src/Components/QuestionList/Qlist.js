import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            studentMap: [],
            allSelected: false,
            activeStudent: '',
            userAssignError: false,
            noSelectionError: false,
            tempQuestionArray: [],
            assignSuccess: false
        }
    };

    componentDidMount() {
        let questionObject = [];
        if (localStorage.getItem('questionMapObject')) {
            questionObject = JSON.parse(localStorage.getItem('questionMapObject'));
        } else {
            questionObject = [{
                'id': 1,
                'question': 'Creating External Table with partition and adding data in it.',
                'subQuestion': 'Why there are no airplanes visible in the Google Maps satellite view?',
                'type': 'Submission',
                'isChecked': false
            }, {
                'id': 2,
                'question': 'Creating External Table with partition and adding data in it.',
                'subQuestion': 'Why there are no airplanes visible in the Google Maps satellite view?',
                'type': 'MCQ(Quiz)',
                'isChecked': false
            }, {
                'id': 3,
                'question': 'Creating External Table with partition and adding data in it.',
                'subQuestion': 'Why there are no airplanes visible in the Google Maps satellite view?',
                'type': 'Passage(Text)',
                'isChecked': false
            }, {
                'id': 4,
                'question': 'Creating External Table with partition and adding data in it.',
                'subQuestion': 'Why there are no airplanes visible in the Google Maps satellite view?',
                'type': 'MCQ(Quiz)',
                'isChecked': false
            }, {
                'id': 5,
                'question': 'Creating External Table with partition and adding data in it.',
                'subQuestion': 'Why there are no airplanes visible in the Google Maps satellite view?',
                'type': 'Submission',
                'isChecked': false
            }, {
                'id': 6,
                'question': 'Creating External Table with partition and adding data in it.',
                'subQuestion': 'Why there are no airplanes visible in the Google Maps satellite view?',
                'type': 'Passage(Text)',
                'isChecked': false
            }, {
                'id': 7,
                'question': 'Creating External Table with partition and adding data in it.',
                'subQuestion': 'Why there are no airplanes visible in the Google Maps satellite view?',
                'type': 'MCQ(Quiz)',
                'isChecked': false
            }, {
                'id': 8,
                'question': 'Creating External Table with partition and adding data in it.',
                'subQuestion': 'Why there are no airplanes visible in the Google Maps satellite view?',
                'type': 'Submission',
                'isChecked': false
            }];
        }

        const studentMapObject = [{
            'id': 1,
            'name': 'Akshay',
            'questions': []
        }, {
            'id': 2,
            'name': 'Ahona',
            'questions': []
        }, {
            'id': 3,
            'name': 'Abir',
            'questions': []
        }, {
            'id': 4,
            'name': 'Saurav',
            'questions': []
        }, {
            'id': 5,
            'name': 'Rahul',
            'questions': []
        }, {
            'id': 6,
            'name': 'Taranjit',
            'questions': []
        }, {
            'id': 7,
            'name': 'Param',
            'questions': []
        }, {
            'id': 8,
            'name': 'Shivani',
            'questions': []
        }, {
            'id': 9,
            'name': 'Aayush',
            'questions': []
        }, {
            'id': 10,
            'name': 'Ateiv',
            'questions': []
        }];

        this.setState({
            questionList: questionObject,
            studentMap: studentMapObject
        });
    };

    singleCheckBoxSelection = (e) =>{
        let selectedQuetionIndex = e.target.value;
        if(this.state.activeStudent === '') {
            this.setState({
                userAssignError: true
            });
            return;
        }
        let questions = this.state.questionList;
        let selectedQuestion = this.state.questionList[selectedQuetionIndex  - 1];
        questions[selectedQuetionIndex - 1]['isChecked'] = !questions[selectedQuetionIndex - 1]['isChecked'];
        this.setState({
            questionList: questions,
            tempQuestionArray: [...this.state.tempQuestionArray, selectedQuestion],
            noSelectionError: false
        });
    };

    assginQuestions = () => {
        if(this.state.tempQuestionArray.length === 0) {
            this.setState({
                noSelectionError: true
            });
            return;
        }
        let studentMapTemp = this.state.studentMap.map((e,i) => {
            if(e.name === this.state.activeStudent) {
                e.questions = this.state.tempQuestionArray;
            }
            return e;
        }, this);
        this.setState({
            studentMap: studentMapTemp,
            assignSuccess: true
        });
        setTimeout(()=>{
            localStorage.setItem('studentMap', JSON.stringify(this.state.studentMap));
            this.setState({
                assignSuccess: false
            });
        }, 3000);
        return false;
    }
    

    selectAllCheckbox = (e) => {
        let questions = this.state.questionList;
        this.setState({
            allSelected: !this.state.allSelected
        });
        if (this.state.allSelected) {
            questions.forEach(element => {
                element.isChecked = false;
            });
        } else {
            questions.forEach(element => {
                element.isChecked = true;
            });
        }
        this.setState({
            questionList: questions,
            tempQuestionArray: []
        });
        this.setState({
            tempQuestionArray: questions
        });

        return false;
    }

    selectedStudent = (e) => {
        this.setState({
            activeStudent: e.target.value,
            userAssignError: false
        });
    }

    render() {
        const students = this.state.studentMap;
        const studentOptions = students.map((student) => {
            return (<option key={student.id} value={student.name}>{student.name}</option>)
        });
        
        return (
            <div className="Main-question-list">
                <div className="title">Question List</div>
                <div className="Question-select-box">
                    <div className="Header-bar">
                        <div className="selection-box">
                            <label>
                                <input type="checkbox" value="selectAll" onChange={this.selectAllCheckbox.bind(this)} />
                                Select All
                                </label>
                        </div>
                        <div className="assign-box">
                            <div className="assign-text">
                                <div className="text-title">
                                    Select students & questions to Assign
                                </div>
                            <div className="Student-drop">
                                    <select onChange={this.selectedStudent.bind(this)}>
                                        <option defaultValue="defaultValue">Select student</option>
                                        {studentOptions}
                                    </select>
                                </div>
                            </div>
                            <div className="Button-container">
                                <button className="Primary-btn mar-1" onClick={this.assginQuestions.bind(this)}>Assign</button>
                                <Link to="/QuestionBuilder"><button className="Secondary-btn">Author New Question</button></Link>
                            </div>
                        </div>
                    </div>
                    {this.state.activeStudent ? <div className="Active-stundent">Active Student Profile: {this.state.activeStudent}</div> : null}
                    {(this.state.userAssignError) ? <div className="Error-msg">Select a student to assing first</div> : null}
                    {(this.state.noSelectionError) ? <div className="Error-msg">Select a Question Selected to assing first</div> : null}
                    {(this.state.assignSuccess) ? <div className="Error-msg">Questions assinged sucessfully</div> : null}
                    
                    {this.state.questionList.map( (item, index)=> {
                        return (<div className="Selection-rows" key={item.id.toString()}>
                            <div className="selection-check">
                                <label><input type="checkbox" value={item.id.toString()} checked={item.isChecked} onChange={this.singleCheckBoxSelection.bind(this)}/></label>
                            </div>
                            <div className="course-info-bar">
                                <div className="serial-col">
                                    <div className="title">S.No.</div>
                                    <div className="font-16">{item.id}</div>
                                </div>
                                <div className="question-col">
                                    <div className="title">{item.question}</div>
                                    <div className="sub-title">{item.subQuestion}</div>
                                </div>
                                <div className="question-type-col">
                                    <div className="title">Question Type</div>
                                    <div className="sub-title">{item.type}</div>
                                </div>
                            </div>
                        </div>);
                    })}
                </div>
            </div>
        );
    }
}

export default QuestionList;