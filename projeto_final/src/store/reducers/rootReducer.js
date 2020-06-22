import authReducer from './authReducer'
import projectReducer from './projectReducer'
import jobReducer from './jobReducer'
import freelanceReducer from './freelanceReducer'
import creatorReducer from './creatorReducer'
import {combineReducers} from 'redux'
import { firestoreReducer } from 'redux-firestore'
 
const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    job: jobReducer,
    freelance: freelanceReducer,
    creator: creatorReducer,
    firestore: firestoreReducer
})

export default rootReducer