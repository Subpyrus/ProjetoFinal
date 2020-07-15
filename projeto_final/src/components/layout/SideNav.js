import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../App.css';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {firestoreConnect} from "react-redux-firebase";

class SideDrawer extends React.Component {
 
    render(){

        const {auth, users} = this.props;
        const links = auth.uid ?  <SignedInLinks nav_side={"1"} id={auth.uid} users={users}/> : <SignedOutLinks/>;
        let sidenavClasses = "sidenavClass";
        if(this.props.show) {
            sidenavClasses = "sidenavClass open";
        }
        return (
            <nav className={sidenavClasses}>
                {auth.isLoaded && links}
            </nav>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        users: state.firestore.ordered.users
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'users' }
    ]))(SideDrawer);