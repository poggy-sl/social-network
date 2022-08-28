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
}

const dialogsReducer = (state = initialState, action) => {

    switch(action.type){
        case SEND_MESSAGE: 
            let body = action.newMessageBody;
            return{ 
                ...state, 
                messages: [...state.messages, {id: 7, message: body}]
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => {
    return{ type: SEND_MESSAGE, newMessageBody}
}

export default dialogsReducer;