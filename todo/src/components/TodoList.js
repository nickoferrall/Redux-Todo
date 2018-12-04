import React from 'react';

const TodoList = props => {
    // console.log('props from todolist', props.todos)
    return (
        <ul>
            {props.todos}
        </ul>
    )
}

export default TodoList;

    {/* {this.state.todos.map((item, index) => 
        <TodoList 
            todo={item}
        />
    )} */}