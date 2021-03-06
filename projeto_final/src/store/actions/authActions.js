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
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firebase = getFirebase();
        const firestore = getFirestore();
        firebase.auth().createUserWithEmailAndPassword(
            newUser.Email,
            newUser.Password
        ).then((response) => {
            const number = Math.floor(Math.random() * 20) + 1;
            firestore.collection('users').doc(response.user.uid).set({
                FirstName:newUser.PrimeiroNome,
                LastName:newUser.UltimoNome,
                BirthDate:newUser.DataNascimento,
                Local:newUser.Distrito,
                AreaTrabalho:newUser.AreaTrabalho,
                Ocupation:newUser.Ocupacao,
                Gender: newUser.Genero,
                ImagemPerfil: "p"+number+".png",
                Curriculo:"",
                TipoUtilizador: 1,
                Descricao:"",
                Formacao:[],
                Favoritos:[],
                LinkWeb:"",
                LinkInsta:"",
                LinkLinked:"",
                LinkFace:""
            }).then(() => {
                dispatch({ type: 'SIGNUPUSER_SUCCESS' })
            })
        }).catch((err) => {
            dispatch({ type: 'SIGNUPUSER_ERROR', err })
        })
    }
}



export const updateProfile = (newInfo) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        return firestore.collection('users').doc(newInfo.userId).update({
            FirstName:newInfo.primeiroNome,
            LastName:newInfo.ultimoNome,
            BirthDate:newInfo.dataNascimento,
            Local:newInfo.Distrito,
            AreaTrabalho:newInfo.areaTrabalho,
            Ocupation:newInfo.ocupacao,
            ImagemPerfil: newInfo.imagemPerfil,
            TipoUtilizador: 1,
            Descricao:newInfo.sobre,
            Formacao:newInfo.formacao,
            LinkWeb:newInfo.website,
            LinkInsta:newInfo.instagram,
            LinkLinked:newInfo.linkedin,
            LinkFace:newInfo.facebook,
            Curriculo: newInfo.curriculo
        }).then(() => {
            dispatch({type:'EDITPROFILE_COMPLETE'})
        }).catch((err) =>{
            dispatch({type:'EDITPROFILE_ERROR', err})
        })

    }
}

export const add_remFav = (obj) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        return firestore.collection('users').doc(obj.idUser).update({
            Favoritos:  obj.idProj
        }).then(() => {
            dispatch({type:'ADDREMFAV_SUCCESS'})
        }).catch((err) =>{
            dispatch({type:'ADDREMFAV_ERROR', err})
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
            firestore.collection('users').doc(resp.user.uid).set({
                NomeEmpresa:newEnterprise.NomeEmpresa,
                TamanhoEmpresa:newEnterprise.TamanhoEmpresa,
                DataCriacao:newEnterprise.DataCriacao,
                EmailEmpresa:newEnterprise.Email,
                Local:newEnterprise.Distrito,
                AreaTrabalho:newEnterprise.AreaTrabalho,
                Ocupation:newEnterprise.Ocupacao,
                ImagemPerfil: "p" + number + ".png",
                TipoUtilizador: 2
            })
        }).then(() => {
            dispatch({type: 'SIGNUPENTERPRISE_SUCCESS'})
        }).catch((err) => {
            dispatch({type: 'SIGNUPENTERPRISE_ERROR', err})
        })
    }
}


export const updateProfileEmp = (newInfo) => {
    return (dispatch,getState,{getFirebase,getFirestore}) => {
        const firestore = getFirestore();
        return firestore.collection('users').doc(newInfo.userId).update({
            AreaTrabalho: newInfo.areaTrabalho,
            LinkWeb:newInfo.website,
            LinkInsta:newInfo.instagram,
            LinkLinked:newInfo.linkedin,
            LinkFace:newInfo.facebook,
            ImagemPerfil: newInfo.imagemPerfil,
            Ocupation:newInfo.ocupacao,
            Descricao:newInfo.sobre,
            TamanhoEmpresa:newInfo.tamanho
        }).then(() => {
            dispatch({type:'EDITPROFILE_COMPLETE'})
        }).catch((err) =>{
            dispatch({type:'EDITPROFILE_ERROR', err})
        })

    }
}

export const recoverPassword = (email) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        console.log(email)
        firebase.auth().sendPasswordResetEmail(email)
            .then(() =>
                dispatch({type: 'RESET_PASSWORD_SUCCESS'})
            )
            .catch((err) => {
                dispatch({type: 'RESET_PASSWORD_ERROR',err});
            });
    }
}
