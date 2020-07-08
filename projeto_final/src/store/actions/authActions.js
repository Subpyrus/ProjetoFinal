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
            const number = Math.floor(Math.random() * 20) + 1;
            return firestore.collection('users').doc(resp.user.uid).set({
                FirstName:newUser.PrimeiroNome,
                LastName:newUser.UltimoNome,
                BirthDate:newUser.DataNascimento,
                Local:newUser.Distrito,
                AreaTrabalho:newUser.AreaTrabalho,
                Ocupation:newUser.Ocupacao,
                ImagemPerfil: "p" + number + ".png",
                TipoUtilizador: 1
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

export const signUpEnterprise = (newEnterprise) => {

    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newEnterprise.Email,
            newEnterprise.Password
        ).then((resp) => {
            const number = Math.floor(Math.random() * 20) + 1;
            return firestore.collection('users').doc(resp.user.uid).set({
                NomeEmpresa:newEnterprise.NomeEmpresa,
                TamanhoEmpresa:newEnterprise.TamanhoEmpresa,
                DataCriacao:newEnterprise.DataCriacao,
                Local:newEnterprise.Distrito,
                AreaTrabalho:newEnterprise.AreaTrabalho,
                Ocupation:newEnterprise.Ocupacao,
                ImagemPerfil: "p" + number + ".png",
                TipoUtilizador: 2
            })
        }).then(() => {
            firebase.auth().signInWithEmailAndPassword(
                newEnterprise.Email,
                newEnterprise.Password
            ).then(() => {
                dispatch({type: 'SIGNUPENTERPRISE_SUCCESS'})
            })
        }).catch((err) => {
            dispatch({type: 'SIGNUPENTERPRISE_ERROR', err})
        })

    }




}