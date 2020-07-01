export const signIn = (credentials) => {
    return(dispatch,getState,{getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(() => {
            dispatch({ type: 'LOGIN_SUCCESS' })
        }).catch((err) => {
            dispatch({ type: 'LOGIN_ERROR', err })
        })
    }
} 

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();
        
        firebase.auth().signOut().then(()=>{
            dispatch({ type: 'SIGNOUT_SUCCESS'});
        });
    }
}

export const signUpUser = (newUser) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.Email,
            newUser.Password
        ).then((resp) => {
            return firestore.collection('users').doc(resp.user.uid).set({
                FirstName:newUser.PrimeiroNome,
                LastName:newUser.UltimoNome,
                BirthDate:newUser.DataNascimento,
                Country:newUser.Pais,
                Local:newUser.Localidade,
                AreaTrabalho:newUser.AreaTrabalho,
                Ocupation:newUser.Ocupacao
            })
        }).then(() => {
            firebase.auth().signInWithEmailAndPassword(
                newUser.Email,
                newUser.Password
            ).then(() => {
                dispatch({type: 'SIGNUPUSER_SUCCESS'})
            })
        }).catch((err) => {
            dispatch({type: 'SIGNUPUSER_ERROR', err})
        })

    }
}