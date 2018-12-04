import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';

class Todo extends Component {
    render() {
        return (
            <div>
                <button>Click dis</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state)
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { addTodo })(Todo);