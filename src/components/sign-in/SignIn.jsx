import React from "react";
import './SignIn.scss';
import FormInput from "../FormInput/FormInput";
import CustomBtn from "../custom-button/CustomBtn";
import { signinWithGoogle } from "../firebase/firebase.util";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handelSubmit = (event) => {
        event.preventDefault();
        this.setState({email: '', password: ''});
    }

    handelChange = (event) => {
        const {value, name} = event.target;
        this.setState({[name]: value});
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className='sign-in'>
                <h1>I already have an account</h1>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handelSubmit} className='signIn-form'>
                        <FormInput handelChange={this.handelChange}
                                   label="Email"
                                   type="email" name="email" required
                                   value={email} />
                        <FormInput handelChange={this.handelChange}
                                   label="Password"
                                   type="password" name="password" required
                                   value={password} />
                    
                    <CustomBtn type="submit" value="Submit form">Sign in</CustomBtn>      
                    <CustomBtn onClick={signinWithGoogle} G-auth='G-auth'>Sign in with Google</CustomBtn>
                </form>
            </div>
        );
    }
}

export default SignIn;
