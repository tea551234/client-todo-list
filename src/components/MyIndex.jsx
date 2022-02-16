import React, { Component } from 'react';
import Axios from 'axios';

class TodoIndex extends Component {
    state = {
       
    }

    async componentDidMount() {
        var result = await Axios.get("http://localhost:8000/todo/list");
        // this.state.todoList = result.data;
        // this.setState({});
        this.setState({
            todoList: result.data
        })
    }

    render() {
        return (
            <div className="container">
                <a href={`/Todo/SignUp`} className="btn btn-outline-danger btn-sm">註冊</a>
                <a href={`/Todo/Login`} className="btn btn-outline-danger btn-sm">登入</a>

            </div>
        );
    }
}

export default TodoIndex;

