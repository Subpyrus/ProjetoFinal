export const createFreelance = (freelance) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {

        const firestore = getFirestore();
        firestore.collection('freelances').add({
            ...freelance,
            candidatos:[],
            ListingTime: new Date()
        }).then(() => {
            dispatch( { type: 'CREATE_FREE', freelance}) 
        }).catch((err) => {
            dispatch( { type: 'CREATE_FREE_ERROR', err}) 
        })
    }
};

export const addCandidatura = (candidato) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {
        
        const firestore = getFirestore();
        return firestore.collection('freelances').doc(candidato.idFreelance).update({
            candidatos: candidato.candidatos
        }).then(() => {
            dispatch({type:'ADDCAND_COMPLETE'})
        }).catch((err) =>{
            dispatch({type:'ADDCAND_ERROR', err})
        })

    }
};

export const eliminaFree = (valor) => {
    return(dispatch, getState, { getFirebase , getFirestore }) => {
        
        const firestore = getFirestore();
        return firestore.collection("freelances").doc(valor).delete().then(function() {
            dispatch({type:'ELIMINAFREE_COMPLETE'})
        }).catch(function(err) {
            dispatch({type:'ELIMINAFREE_ERROR', err})
        });


    }
}
