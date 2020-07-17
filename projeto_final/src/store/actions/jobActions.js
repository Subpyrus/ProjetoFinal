export const createJob = (job) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('jobs').add({
            ...job,
            candidatos:[],
            ListingTime: new Date()
        }).then(() => {
            dispatch( { type: 'CREATE_JOB', job}) 
        }).catch((err) => {
            dispatch( { type: 'CREATE_JOB_ERROR', err}) 
        })
    }
};

export const addCandidatura = (candidato) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {
        
        const firestore = getFirestore();
        return firestore.collection('jobs').doc(candidato.idJob).update({
            candidatos: candidato.candidatos
        }).then(() => {
            dispatch({type:'ADDCAND_JOB_SUCCESS'})
        }).catch((err) =>{
            dispatch({type:'ADDCAND_JOB_ERROR', err})
        })

    }
};

export const eliminaJob = (valor) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {
        
        const firestore = getFirestore();
        return firestore.collection("jobs").doc(valor).delete().then(function() {
            dispatch({type:'ELIMINAJOB_COMPLETE'})
        }).catch(function(err) {
            dispatch({type:'ELIMINAJOB_ERROR', err})
        });


    }
}