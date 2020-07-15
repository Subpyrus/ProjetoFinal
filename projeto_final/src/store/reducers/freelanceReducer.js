const initState = {}

const jobReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_FREE":
            return {
                ...state
            }
        case "CREATE_FREE_ERROR":
            return {
                ...state
            }
        case "ADDCAND_COMPLETE":
            return {
                ...state
            }
        case "ADDCAND_ERROR":
            return {
                ...state
            }
        default :
            return {
                ...state
            }
    }
}


export default jobReducer