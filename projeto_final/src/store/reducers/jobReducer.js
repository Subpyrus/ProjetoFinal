const initState = {}

const jobReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_JOB":
            return {
                ...state
            }
        case "CREATE_JOB_ERROR":
            return {
                ...state
            }
        case "ADDCAND_JOB_SUCCESS":
            return {
                ...state
            }
        case "ADDCAND_JOB_ERROR":
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