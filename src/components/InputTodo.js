import React, { Component } from "react"

class InputTodo extends Component {

    state = {
        title: ""
    };

    render() {
        return (
            <form onSubmit={this.submit} className="form-container">
                <input type="text" placeholder="Add Todo..."
                       value={this.state.title}
                       onChange={this.onChange}
                       name="title"
                       className="input-text"
                />
                <input type="submit" value="Submit" className="input-submit"/>
            </form>
        )
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    submit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title);
        this.setState({
            title: ""
        })
    }
}
export default InputTodo