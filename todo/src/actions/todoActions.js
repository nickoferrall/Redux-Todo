// export const ADD_TODO = 'ADD_TODO';
// export const HANDLE_CHANGE = 'HANDLE_CHANGE';
export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'

// Our action creators will return
// an action packet that our reducer will
// receive. What does the action packet look like?
// Note that the action creator is not at all
// responsible for handling any of the actual
// logic of updating the central Redux store. That
// is left to the reducer(s).

// export const addTodo = () => {
//   return {
//     type: 'ADD_TODO'
//   };
// };

// export const handleChange = () => {
//   return {
//     type: 'HANDLE_CHANGE'
//   };
// };

export const onHandleSubmit = (item) => {
    return {
        type: 'HANDLE_SUBMIT',
        payload: item,
        completed: false
    };
}