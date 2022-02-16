//註冊表單
import React, { Component } from "react";
import Axios from "axios";
export default class SignUp extends Component {
    state = {
        signupItem: {
            usefirstName: 'asf', useemail: '42134@gamil.com', usepassWord: '2431234'
        }
    }

    okButtonClick = async () => {
        await Axios.post("http://localhost:8000/Todo/SignUp", this.state.signupItem);
    }

    useNameChange = (e) => {
        var newState = { ...this.state };
        newState.signupItem.usefirstName = e.target.value;
        this.setState(newState);
    }

    useemailChange = (e) => {
        var newState = { ...this.state };
        newState.signupItem.useemail = e.target.value;
        this.setState(newState);
    }
    usepassWordChange = (e) => {
        var newState = { ...this.state };
        newState.signupItem.usepassWord = e.target.value;
        this.setState(newState);
    }


    render() {
        return (
            <div>
                <form>
                    <h3>註冊表單</h3>

                    <div className="form-group">
                        <label></label>
                        <input type="text" className="form-control" placeholder="First name"
                            name="Name"
                            onChange={this.useNameChange}
                            value={this.state.signupItem.usefirstName}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email"
                            name="Name"
                            onChange={this.useemailChange}
                            value={this.state.signupItem.useemail} />
                    </div>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password"
                            name="Name"
                            onChange={this.usepassWordChange}
                            value={this.state.signupItem.usepassWord} />
                    </div>

                    <button type="submit" className="btn btn-dark btn-lg btn-block" onClick={this.okButtonClick} >Register</button>

                </form>

                <div>
                    {/* okButtonClick 把資料傳回 伺服器 id = .length + 1 ,  firstName:'' , lastName: '' , Email:'' , passWord:'' */}

                </div>

            </div>
        );
    }
}