const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {message: 'hi'},
        {message: 'how is your'},
        {message: 'yo'},
        {message: 'yo'},
        {message: 'yo'}
    ],
    dialogs: [
        {id: 1, name: 'demyan'},
        {id: 2, name: 'anton'},
        {id: 3, name: 'masha'},
        {id: 4, name: 'katya'},
        {id: 5, name: 'anton'}
    ],
    newMessageBody: ''
};


export function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };

        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }
}

export const sendMessage = () => ({type: SEND_MESSAGE});
export const updateNewMessageBody = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});