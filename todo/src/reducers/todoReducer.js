import { ADD_TODO, HANDLE_CHANGE, HANDLE_SUBMIT } from '../actions/todoActions';

// Initial state is the JS object that reflects the initial state for that reducer
const initialState = {
    todos: [],
    value: ''
}


export default (state = initialState, action) => {
    // console.log('todos from reducer!', state.todos)
  switch (action.type) {
    // case ADD_TODO:
    //   return {
    //     ...state,
    //     todos: state.todos
    //   }
    // case HANDLE_CHANGE:
    //     return {
    //         ...state,
    //         value: state.value.concat({value: action.value})
    //     }
    case HANDLE_SUBMIT:
        return {
            ...state,
            todos: state.todos.concat({todos: action.payload})
        }
    default:
      return state;
  }
};