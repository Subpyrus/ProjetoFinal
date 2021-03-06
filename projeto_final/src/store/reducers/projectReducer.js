const initState = {}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_PROJECT":
            return {
                ...state
            }
        case "CREATE_PROJECT_ERROR":
            return {
                ...state
            }
        case "ADD_VIS":
            return {
                ...state
            }
        case "ADD_VIS_ERROR":
            return {
                ...state
            }
        case "ADD_COMMENT":
            return {
                ...state
            }
        case "ADD_COMMENT_ERROR":
            return {
                ...state
            }
        case "ADD_LIKE":
            return {
                ...state
            }
        case "ADD_LIKE_ERROR":
            return {
                ...state
            }
        default :
            return {
                ...state
            }
    }
}


export default projectReducer