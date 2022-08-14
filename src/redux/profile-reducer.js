const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [{
            id: 1,
            message: "Hi, how are you?",
            likesCount: 15
        },
        {
            id: 2,
            message: "It is my first post",
            likesCount: 20
        },
        {
            id: 3,
            message: "I am gorgeous! And you?",
            likesCount: 12
        },
        {
            id: 4,
            message: "Okey",
            likesCount: 21
        },
        {
            id: 5,
            message: "Hey",
            likesCount: 14
        },
        {
            id: 6,
            message: "Hello",
            likesCount: 9
        },
    ],
    newPostText: 'it-kamasutra'
}

const profileReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 7,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopy = {...state};
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return{ type: ADD_POST}
}

export const updateNewPostTextActionCreator = (text) => {
    return{ type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer;