import React from 'react';

export default class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: ""
        }
    }
    HandleChange = (e) => {
        this.setState({
            [e.target.name] : event.target.value,
        })
    }

    submit = e => {
        e.preventDefault();
        this.props.handleSubmit(this.state.task);
    }
    handleClear = () => {
        this.props.handleClear();
    }

    render() {
        return(
            <>
            <form onSubmit={this.submit}>
                <input
                type="text"
                value={this.state.task}
                name="task"
                onChange={this.HandleChange}
                />
                <button onClick={this.handleClear}>Clear</button>
            </form>
            </>
        )
    }
}