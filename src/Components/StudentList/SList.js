import React, { Component } from 'react';
import {Link} from 'react-router-dom';

let studentMapObject = []
if(localStorage.getItem('studentMap')) {
    studentMapObject = JSON.parse(localStorage.getItem('studentMap'));
} else {
    studentMapObject = [{
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
    localStorage.setItem('studentMap',JSON.stringify(studentMapObject));
}

class StudentList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            studentList: []
        }
    }

    componentDidMount = () => {
        this.setState({
            studentList: JSON.parse(localStorage.getItem('studentMap'))
        });
    }
    render() {
        const studentList = this.state.studentList.map(function(item){
            return (
                <Link to={`AssignedQuestions/${item.id}`} key={item.id}><li className="list-item" key={item.id}>{item.name}</li></Link>
            )
        });
        return (
            <div className="Student-list">
                <div className="Page-title">
                    Student List
                </div>
                <div className="sub-title">
                    Please select your name to access questions assigned to you.
                </div>
                <div className="list-container">
                    <ul className="student-list">
                        {studentList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default StudentList;