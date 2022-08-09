let store = {
    _state : {
        profilePage: {
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
        },
        dialogsPage: {
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
            ]
        }

    },
    _callSubscriber() {
        console.log('State was changed!');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; //наблюдатель - патерн
    },
    
    addPost() {
        
    },
    updateNewPostText(newText) {
        
    },
    
    dispatch(action) {
        if(action.type === 'ADD-POST'){
            let newPost = {
                id: 7,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }; 

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}


window.store = store;
export default store;