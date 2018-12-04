import { ADD_TODO } from '../actions/todoActions';

// Initial state is the JS object that reflects the initial state for that reducer
const initialState = {
    todos: 0,
    value: ''
}


export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    // Fill in the body of this case
      return {
        ...state,
        todos: state.todos +1
      }
    default:
      return state;
  }
};