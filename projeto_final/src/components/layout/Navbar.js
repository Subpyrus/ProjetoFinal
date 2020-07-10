import React from 'react';
import {Link} from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import '../../App.css';
import { connect } from 'react-redux'

class NavB extends React.Component {

    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {edge:"right", preventScrolling: "true"});
        });
    }

    render() {
        const {auth} = this.props;
        const links = auth.uid ?  <SignedInLinks id={auth.uid}/> : <SignedOutLinks/>;
        return (
            <nav className="nav-wrapper black">
                <div className="container">
                    <Link to='/' className="logo">HINAMIC</Link>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger right"><i className="material-icons">menu</i></a>
                    {auth.isLoaded && links}
                </div>
            </nav>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
    }
}

export default connect(mapStateToProps)(NavB);