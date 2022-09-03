import profileReducer from './profile-reducer';
import {addPostActionCreator, deletePost} from './profile-reducer';

let state = {
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
    ]

}

it('length of post should be incremented', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com");
    //2. action
    let newState = profileReducer(state, action);
    //3. expectations
    expect(newState.posts.length).toBe(7);
})

it('message of new post should be correct', () => {
    //1. test data
    let action = addPostActionCreator("it-kamasutra.com");
    //2. action
    let newState = profileReducer(state, action);
    //3. expectations
    expect(newState.posts[6].message).toBe("it-kamasutra.com");
})

it('after deleting length of message should be decremented', () => {
    //1. test data
    let action = deletePost(1);
    //2.actions 
    let newState = profileReducer(state, action);
    //3.expectations
    expect(newState.posts.length).toBe(5);
})