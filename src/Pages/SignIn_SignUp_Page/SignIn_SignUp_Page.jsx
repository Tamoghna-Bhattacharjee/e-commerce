import React from "react";
import './SignIn_SignUp_Page.scss'
import SignIn from '../../components/sign-in/SignIn';
import SignUp from "../../components/sign-up/SignUp";

const SignIn_SignUp_Page = () => {
    return (
        <div className='signin-signup'>
            <SignIn/>
            <SignUp/>
        </div>
    );
}
export default SignIn_SignUp_Page;