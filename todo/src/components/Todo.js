import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            todos: []
    }
    }
    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({
            todos: this.state.value,
            value: ''
        });
    }

    render() {
        console.log('from Todo class', this.state.todos)
        return (
                <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='email' onChange={this.handleChange}/>
                    <input type="submit" value="Add Todo" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo })(Todo);