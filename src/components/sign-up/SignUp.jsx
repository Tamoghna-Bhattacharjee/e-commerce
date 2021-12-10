import React from "react";
import './SignUp.scss';
import FormInput from "../FormInput/FormInput";
import CustomBtn from "../custom-button/CustomBtn";
import { auth, addUser } from "../firebase/firebase.util";
import { createUserWithEmailAndPassword } from "firebase/auth";

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            Cpassword: '',
        }
    }

    handelChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    handelSubmit = async (event) => {
        event.preventDefault();
        let {displayName ,email, password, Cpassword} = this.state;
        password = password.trim();
        Cpassword = Cpassword.trim();
        if (password !== Cpassword || password === "" || Cpassword === "") {
            alert('Password don\'t match');
            return;
        }

        await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            addUser(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                Cpassword: '',
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === "auth/email-already-in-use") {
                alert("user already exist, just sign in using your email and password");
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    Cpassword: '',
                });
            }
        });
        
    }
    
    render() {
        const {displayName ,email, password, Cpassword} = this.state;
        return (
            <div className="sign-up">
                <h1>I don't have an account</h1>
                <span>Register using with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handelSubmit}>
                    <FormInput handelChange={this.handelChange}
                        label="Name" 
                        type="text" name="displayName" required 
                        value={displayName}/>
                    <FormInput handelChange={this.handelChange}
                        label="Email" 
                        type="email" name="email" required 
                        value={email}/>
                    <FormInput handelChange={this.handelChange}
                        label="Password" 
                        type="password" name="password" required 
                        value={password}/>

                    <FormInput handelChange={this.handelChange}
                        label="Confirm Password" 
                        type="password" name="Cpassword" required 
                        value={Cpassword}/>
                    <CustomBtn type='submit'>Sign Up</CustomBtn>
                </form>
            </div>
        );
    }
}

export default SignUp;