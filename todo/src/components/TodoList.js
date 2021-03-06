import React from 'react';
import { connect } from 'react-redux';

const TodoList = props => {
    // console.log('props from todolist', props.todos)
    return (
        <ul>
            {props.todos.map((item, index) => 
            <li onClick={() => props.changeCompleted(index)} key={index}>
                {item.text}
            </li>)}
        </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps)(TodoList);