import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class QuestionList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questionList: [],
            studentMap: [],
            allSelected: false,
            activeStudent: ''
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
            'name': 'Ankit',
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
            'name': 'Hitpreet',
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
            'name': 'Arvind',
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
        this.singleCheckBoxSelection = this.singleCheckBoxSelection.bind(this);
    }

    singleCheckBoxSelection(e, index) {
        const questions = this.state.questionList;

        questions[index]['isChecked'] = !questions[index]['isChecked'];

        this.setState({
            questionList: questions
        });
    };

    selectAllCheckbox = (e) => {
        const questions = this.state.questionList;
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
            questionList: questions
        });
    }

    selectedStudent = (e) => {
        console.log(e.target.value);
        this.setState({
            activeStudent: e.target.value
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
                                <button className="Primary-btn mar-1">Assign</button>
                                <Link to="/QuestionBuilder"><button className="Secondary-btn">Author New Question</button></Link>
                            </div>
                        </div>
                    </div>
                    {this.state.activeStudent ? <div className="Active-stundent">Active Student Profile: {this.state.activeStudent}</div> : null}
                    {this.state.questionList.map(function (item, index) {
                        return (<div className="Selection-rows" key={item.id.toString()}>
                            <div className="selection-check">
                                <label><input type="checkbox" value={item.id.toString()} checked={item.isChecked} /></label>
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