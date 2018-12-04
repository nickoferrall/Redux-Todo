import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onHandleSubmit } from '../actions/todoActions';
import TodoList from './TodoList';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [],
            value: '',
            completed: false
    }
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log('from handle submit method', this.props.onHandleSubmit(this.state.value))
        this.props.onHandleSubmit(this.state.value)
        this.setState({
            todos: [...this.state.todos, this.state.value, this.state.completed: false],
            value: ''
        });
    }

    changeCompleted = props => {
        console.log('Vamos')
        this.setState({
            completed: !this.state.completed
        })
    }

    render() {
        console.log('from Todo class', this.state.completed)
        return (
            <div>
                <TodoList todos={this.state.todos} 
                    changeCompleted={this.changeCompleted}
                />
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

export default connect(mapStateToProps, { onHandleSubmit })(Todo);