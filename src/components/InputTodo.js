import React, { Component } from "react"

class InputTodo extends Component {

    state = {
        title: ""
    };

    render() {
        return (
            <form onSubmit={this.submit}>
                <input type="text" placeholder="Add Todo..."
                       value={this.state.title}
                       onChange={this.onChange}
                       name="title"
                />
                <input type="submit" value="Submit" />
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