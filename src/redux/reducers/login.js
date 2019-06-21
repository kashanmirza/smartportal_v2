import { userConstants } from '../../constants/actionTypes/user';

// let user = localStorage.getItem('user');
console.log("OOOOOOOOOOOOOOOOOOOOOOOOOO  ");
// const initialState = user ? { isAuthenticated : true, user } : {};
const initialState = { isAuthenticated : true, user: {} } ;

export const login = (state = initialState ,action) => {

    switch (action.type){
        case userConstants.LOGIN_REQUEST:
            return {
                isAuthenticated : true,
                user: action.payload
            };
        case userConstants.LOGIN_SUCCESS:
            return {
                isAuthenticated : true,
                user: action.payload
            };
        case userConstants.LOGIN_FAILURE:
            return {
                isAuthenticated : false,
                error: action.error
            };
        case userConstants.LOGOUT:
            return {};
        default:
            return state;
    }
}

