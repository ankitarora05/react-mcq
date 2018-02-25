import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Login from './Components/Login/Login.js';
import QuestionList from './Components/QuestionList/Qlist.js';
import StudentList from './Components/StudentList/SList.js';
import CreateMCQ from './Components/CreateMCQ/Create.js';
import AnswerQuestion from './Components/AnswerQuestion/AQuestion.js';
import CreateSubmission from './Components/CreateSubmission/CSubmission.js';
import CreateTextQuestion from './Components/CreateTextQuestion/CTQuestion.js';
import ErrorComponent from './Components/NotFound/404.js';

const Routes = (props) => (
    <Router {...props}>
        <div>
            <Header />
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/Login" component={Login} />
                <Route path="/QList" component={QuestionList} />
                <Route path="/SList" component={StudentList} />
                <Route path="/CreateMCQ" component={CreateMCQ} />
                <Route path="/AnswerQuestion" component={AnswerQuestion} />
                <Route path="/CreateSubmission" component={CreateSubmission} />
                <Route path="/CreateTextQuestion" component={CreateTextQuestion} />
                <Route component={ErrorComponent} />
            </Switch>
        </div>
    </Router>
);

export default Routes;