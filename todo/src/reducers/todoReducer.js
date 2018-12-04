import { HANDLE_SUBMIT } from '../actions/todoActions';

// Initial state is the JS object that reflects the initial state for that reducer
const initialState = {
    todos: [],
    value: '',
    completed: false
}


export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SUBMIT:
        return {
            ...state,
            todos: state.todos.concat({todos: action.payload, completed: action.completed})
        }
    default:
      return state;
  }
};