import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import Login from './Components/Login/Login.js';
import QuestionList from './Components/QuestionList/Qlist.js';
import StudentList from './Components/StudentList/SList.js';
import CreateMCQ from './Components/CreateMCQ/Create.js';
import AnswerQuestion from './Components/AnswerQuestion/AQuestion.js';
import CreateSubmission from './Components/CreateSubmission/CSubmission.js';
import CreateTextQuestion from './Components/CreateTextQuestion/CTQuestion.js';

const Routes = (props) => (
  <Router {...props}>
    <div>
        <Header />
        <Route path="/Login" component={Login} />
        <Route path="/QList" component={QuestionList} />
        <Route path="/SList" component={StudentList} />
        <Route path="/CreateMCQ" component={CreateMCQ} />
        <Route path="/AnswerQuestion" component={AnswerQuestion} />
        <Route path="/CreateSubmission" component={CreateSubmission} />
        <Route path="/CreateTextQuestion" component={CreateTextQuestion} />
    </div>
  </Router>
);

export default Routes;