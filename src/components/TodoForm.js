import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            todo: ''
        }
    }

    handleChanges = (e) => {
        this.setState({todo: e.target.value});
    }

    submitChanges = (e) => {
        e.preventDefault();
        this.setState({todo: ''});
        this.props.addTask(this.state.todo);
    }

    render() {
        return(
            <form>
                <input
                    type='text'
                    name='todo'
                    value={this.state.todo}
                    onChange={this.handleChanges}
                />
                <button onClick={this.submitChanges}>Add</button>
            </form>

        );
    }

}

export default TodoForm;