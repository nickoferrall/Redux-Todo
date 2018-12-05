export const HANDLE_SUBMIT = 'HANDLE_SUBMIT'
export const ON_CHANGE_COMPLETED = 'ON_CHANGE_COMPLETED'
let getNewId = 1;

export const onHandleSubmit = (item) => {
    console.log('onhandle', item)
    return {
        type: 'HANDLE_SUBMIT',
        payload: item,
        // completed: false
        id: getNewId++ 
    };
}

export const onChangeCompleted = (item) => {
    console.log('from onChange', item)
    return {
        type: 'ON_CHANGE_COMPLETED',
        payload: item
        // completed: item.comp
    }
}