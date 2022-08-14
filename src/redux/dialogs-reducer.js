const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogs: [{
            id: 1,
            name: 'Max'
        },
        {
            id: 2,
            name: 'Irina'
        },
        {
            id: 3,
            name: 'Nikolai'
        },
        {
            id: 4,
            name: 'Aleksander'
        },
        {
            id: 5,
            name: 'Evgeniy'
        },
        {
            id: 6,
            name: 'Victoria'
        }
    ],
    messages: [{
            id: 1,
            message: 'Hi!'
        },
        {
            id: 2,
            message: 'How are you?'
        },
        {
            id: 3,
            message: 'I am gorgeous! And you?'
        },
        {
            id: 4,
            message: 'Okey'
        },
        {
            id: 5,
            message: 'Hey'
        },
        {
            id: 6,
            message: 'Hello'
        }
    ],
    newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY: {
            let stateCopy = {...state};
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        }
        case SEND_MESSAGE: {
            let stateCopy = {...state};
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messages.push({
                id: 7,
                message: body
            });
            return stateCopy;
        }
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return{ type: SEND_MESSAGE}
}

export const updateNewMessageBodyCreator = (body) => {
    return{ type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default dialogsReducer;