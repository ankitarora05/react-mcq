import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLogin: '',
            loginError: false,
            redirectTo: '',
            onCancelAction: false
        }
    }

    handleLoginChange = (e) => {
        this.setState({ selectedLogin: e.target.value, loginError: false, onCancelAction: false });
        return false;
    }

    submitCancelLogin = (e) => {
        this.setState({ onCancelAction: true });
        return false;
    }

    submitLoginAction = (e) => {
        if (!this.state.selectedLogin) {
            this.setState({ onCancelAction: false, loginError: true });
            return false;
        }
        localStorage.setItem("userLogin", JSON.stringify(this.state.selectedLogin));
        this.setState({ redirectTo: this.state.selectedLogin });
    }

    render() {
        if (this.state.redirectTo === 'teacher') {
            return <Redirect push to="/QList" />;
        } else if (this.state.redirectTo === 'student') {
            return <Redirect push to="/SList" />;
        } else {
            return (
                <div className="Login-box">
                    <div className="Login-container ">
                        <div className="Header-bar">
                            Please Select Login
                        </div>
                        <div className="Form-box">
                            <div className="title">I am ...</div>
                            <div className="Radio-row">
                                <label>
                                    <input type="radio" name="login-form" value="student" checked={this.state.selectedLogin === 'student'} onChange={this.handleLoginChange.bind(this)} />
                                    Student
                            </label>
                            </div>
                            <div className="Radio-row">
                                <label>
                                    <input type="radio" name="login-form" value="teacher" checked={this.state.selectedLogin === 'teacher'} onChange={this.handleLoginChange.bind(this)} />
                                    Teacher
                                </label>
                            </div>
                            {this.state.loginError ? <div className="Error-msg">Please select an option</div> : null}
                            {this.state.onCancelAction ? <div className="Error-msg">That's all folks!!!</div> : null}
                        </div>
                        <div className="Login-footer">
                            <div className="Login-text">
                                <span>Please login to continue ...</span>
                                <div className="Button-container">
                                    <button className="Secondary-btn mar-1" onClick={this.submitCancelLogin.bind(this)}>Cancel</button>
                                    <button className="Primary-btn" onClick={this.submitLoginAction.bind(this)}>Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Login;