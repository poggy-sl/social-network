import {authAPI} from '../api/api';
const SET_USER_DATA = 'SET_USER_DATA';
const SET_LOGIN = 'SET_LOGIN';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    
    switch(action.type) {
        case SET_USER_DATA: {
        return{...state, ...action.data, isAuth: true}
        }
        case SET_LOGIN : {
        return{...state, ...action.login}
        }
        default:
            return state;
    }
}

export const setAuthLogin = (login, password, rememberMe) => ({type: SET_LOGIN, data: {login, password, rememberMe}});
export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login}});

export const getAuthUserData = () => {
    return (dispatch) => {
        authAPI.me()
            .then(response => {
                if(response.data.resultCode === 0){
                    let {id, email, login} = response.data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
        }
}

export const setLogin = () => (dispatch) => {
    authAPI.login()
        .then(response => {
            if(response.data.resultCode === 0){
                let {login, password, rememberMe} = response.data.data;
                dispatch(setAuthLogin(login, password, rememberMe));
            }
        })
}

export default authReducer;