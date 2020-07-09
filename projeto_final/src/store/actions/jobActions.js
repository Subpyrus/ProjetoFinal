export const createJob = (job) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('jobs').add({
            ...job,
            ListingTime: new Date()
        }).then(() => {
            dispatch( { type: 'CREATE_JOB', job}) 
        }).catch((err) => {
            dispatch( { type: 'CREATE_JOB_ERROR', err}) 
        })
    }
};