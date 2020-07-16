export const createProject = (project) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {
        
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            Comments: [],
            Vis:0,
            ListingTime: new Date()
        }).then(() => {
            dispatch( { type: 'CREATE_PROJECT', project})
        }).catch((err) => {
            dispatch( { type: 'CREATE_PROJECT_ERROR', err})
        })
    };
};

export const addVis = (valor) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {
        
        const firestore = getFirestore();
        return firestore.collection('projects').doc(valor.id).update({
            Vis:valor.vis
        }).then(() => {
            dispatch( { type: 'ADD_VIS'})
        }).catch((err) => {
            dispatch( { type: 'ADD_VIS_ERROR', err})
        })
        
    };
};