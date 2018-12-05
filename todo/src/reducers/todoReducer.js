import { HANDLE_SUBMIT, ON_CHANGE_COMPLETED } from '../actions/todoActions';

// Initial state is the JS object that reflects the initial state for that reducer
const initialState = {
    todos: [{
        id: 0,
        text: 'first',
        comp: false
    }]
    // value: '',
    // comp: false
}


export default (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_SUBMIT:
        return {
            ...state,
            todos: state.todos.concat({text: action.payload, id: action.id, comp: false})
        }
    case ON_CHANGE_COMPLETED:
    // state.todos.map(todo => {
    //     console.log('hdhsdhkskjdhk', todo.id === action.payload.id ? {...todo, comp: !todo.comp} : todo}))
        console.log('todos', state.todos)
        return {
            ...state, 
            todos: state.todos.map(todo => 
                todo.id === action.payload ? {...todo, comp: !todo.comp} : todo)
            }
    default:
      return state;
  }
};