import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/todoActions';
import TodoList from './TodoList';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            value: ''
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
            todos: [...this.state.todos, this.state.value],
            value: ''
        });
    }

    render() {
        console.log('from Todo class', this.state.todos)
        return (
            <div>
                {this.state.todos.map((item, index) => 
                    <TodoList 
                        todo={item}
                    />
                )}
                <TodoList todos={this.state.todos} />
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='email' onChange={this.handleChange}/>
                    <input type="submit" value="Add Todo" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        value: state.value
    };
};

export default connect(mapStateToProps, { addTodo })(Todo);