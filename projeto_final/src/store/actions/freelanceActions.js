export const createFreelance = (freelance) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('freelances').add({
            ...freelance,
            ListingTime: new Date()
        }).then(() => {
            dispatch( { type: 'CREATE_FREE', freelance}) 
        }).catch((err) => {
            dispatch( { type: 'CREATE_FREE_ERROR', err}) 
        })
    }
};