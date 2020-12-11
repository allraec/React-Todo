import React from "react";

class TodoForm extends React.Component {

    constructor() {
        super();
        this.state = {
            newItem: ""
        };
    };

    handleChanges = e => {
        this.setState({
            ...this.state,
            newItem: e.target.value
        });
    };

    submitItem = e => {
        e.preventDefault();
        this.props.addItem(e, this.state.newItem);
        this.setState({newItem: ""});
    };

    render() {
        return(
            <div>
                <form onSubmit={this.submitItem}>
                    <input value={this.state.newItem} onChange={this.handleChanges} type='text' name='todo'/>
                    <br></br>
                    <button>Add To Do</button>
                </form>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </div>
        )
    }
};

export default TodoForm;