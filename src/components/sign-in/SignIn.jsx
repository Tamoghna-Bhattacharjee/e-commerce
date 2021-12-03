import React from "react";
import './SignIn.scss';
import FormInput from "../FormInput/FormInput";

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
                                   label="email"
                                   type="email" name="email" required
                                   value={email} />
                        <FormInput handelChange={this.handelChange}
                                   label="password"
                                   type="password" name="password" required
                                   value={password} />
                    
                    <input type="submit" value="Submit form" />      
                </form>
            </div>
        );
    }
}

export default SignIn;
