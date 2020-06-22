export const createJob = (job) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {

        dispatch( { type: 'CREATE_JOB', job})
    }
};