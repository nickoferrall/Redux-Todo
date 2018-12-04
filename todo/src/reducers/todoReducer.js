import { ADD_TODO } from '../actions/todoActions';

// Initial state is the JS object that reflects the initial state for that reducer
const initialState = {
    todos: 0
}

// const reducer = (state = initialState, action) => {
//     switch (action.type) {
//         case actionTypes.ADD_TODO:
//             return {
//                 ...state,
//                 todos: state.todos +1
//             }
//     return state;
// };

// export default reducer;


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