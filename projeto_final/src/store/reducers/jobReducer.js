const initState = {}

const jobReducer = (state = initState, action) => {
    switch (action.type) {
        case "CREATE_JOB":
            console.log("create job", action.job)
            return state;
        case "CREATE_JOB_ERROR":
            console.log(action.err);
            return state;
        default :
            return state;
    }
}


export default jobReducer