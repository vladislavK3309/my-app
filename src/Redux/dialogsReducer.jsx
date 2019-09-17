const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogsPage: {
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
    }
};


export function dialogsReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body});