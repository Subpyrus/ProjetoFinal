const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login Falhado'
            }
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                authSuccess: 'Login Efetuado'
            }
        case'SIGNOUT_SUCCESS':
            return state;
        case 'SIGNUPUSER_SUCCESS':
            return {
                ...state,
                signUpError: null
            }
        case 'SIGNUPUSER_ERROR':
            return{
                ...state,
                signUpError: action.err.message
            }
        case 'SIGNUPENTERPRISE_SUCCESS':
            return {
                ...state,
                signUpError: null
            }
        case 'SIGNUPENTERPRISE_ERROR':
            return{
                ...state,
                signUpError: action.err.message
            }
        case 'EDITPROFILE_COMPLETE':
            return {
                ...state,
                editSuccess: "Sucesso"
            }
        case 'EDITPROFILE_ERROR':
            return {
                ...state,
                editError: action.err.message
            }
        case 'RESET_PASSWORD_SUCCESS':
            return {
                ...state,
                recoverSuccess: "Enviado email de recuperação"
            }
        case 'RESET_PASSWORD_ERROR':
            return {
                ...state,
                recoverError: action.err.message
            }
        default:
            return state;
    }
}


export default authReducer