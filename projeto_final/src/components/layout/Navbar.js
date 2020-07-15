import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import DrawerToggleButton from './DrawerToggleButton';
import '../../App.css';
import { connect } from 'react-redux'
import { compose } from 'redux'
import {firestoreConnect} from "react-redux-firebase";

class NavB extends React.Component {

    render() {
        const {auth, users, sideNavClickHandler} = this.props;
        const links = auth.uid ?  <SignedInLinks nav_side={"0"} id={auth.uid} users={users}/> : <SignedOutLinks/>;
        return (
            <header className="navbar">
                <nav className="navbar-navigation">
                    <div className="navbar-logo"><Link to='/' className="">HINAMIC</Link></div>
                    <div className="spacer"/>
                    <div className="navbar-navigation-items">
                        {auth.isLoaded && links}
                    </div>
                    <div className="buttonDiv"><DrawerToggleButton click={sideNavClickHandler}/></div>
                </nav>
            </header>
            
        )
    }
};

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
    ]))(NavB);