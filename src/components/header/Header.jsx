import React from "react";
import './Header.scss';
import { Link } from "react-router-dom";
import {ReactComponent as BrandLogo} from '../../assets/crown.svg';
import { auth } from "../firebase/firebase.util";
import { connect } from "react-redux";

const Header = ({currUser}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'> 
                <BrandLogo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>  
                {
                    currUser?
                    <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    :<Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    // state- root_reducer
    return {
        currUser: state.user.currUser
    }
}

export default connect(mapStateToProps)(Header);