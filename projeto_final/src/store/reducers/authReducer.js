import { Redirect } from "react-router";

const initState = {
    authError: null
}


const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError:'Login Falhado'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authError: null
            }
        case'SIGNOUT_SUCCESS':
            return state;
        case 'SIGNUPUSER_SUCCESS':
            return {
                ...state,
                authError:null
            }
        case 'SIGNUPUSER_ERROR':
            return{
                ...state,
                authError:action.err.message
            }
        default:
            return state;
    }
}


export default authReducer