import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './Components/Header/Header';
import Login from './Components/Login/Login.js';
import QuestionList from './Components/QuestionList/Qlist.js';
import StudentList from './Components/StudentList/SList.js';
import AnswerQuestion from './Components/AnswerQuestion/AQuestion.js';
import QuestionBuilder from './Components/QuestionBuilder/QuestionBuilder.js';
import CreateMCQ from './Components/QuestionBuilder/CreateMCQ.js';
import CreateSubmission from './Components/QuestionBuilder/CreateSubmission.js';
import CreatePassage from './Components/QuestionBuilder/CreateTextQuestion.js';
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
                <Route exact path="/QuestionBuilder" component={QuestionBuilder} />
                <Route path="/QuestionBuilder/CreateMCQ" component={CreateMCQ} />
                <Route path="/QuestionBuilder/CreateSubmission" component={CreateSubmission} />
                <Route path="/QuestionBuilder/CreatePassage" component={CreatePassage} />
                <Route path="/AnswerQuestion" component={AnswerQuestion} />
                <Route component={ErrorComponent} />
            </Switch>
        </div>
    </Router>
);

export default Routes;