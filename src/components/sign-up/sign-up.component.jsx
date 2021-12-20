import { Component } from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import './sign-up.styles.scss';

class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password, confirmPassword, displayName } = this.state;

        if (password !== confirmPassword) {
            return alert('Password and Confirm password must be matched');
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (e) {
            console.log('Error sign-up ', e.message);
        }

    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }

    render() {
        const { email, password, confirmPassword, displayName } = this.state;

        return (<div className='sign-up'>
            <form onSubmit={this.handleSubmit}>
                <FormInput
                    type="text"
                    name="displayName"
                    value={displayName}
                    label="Display name"
                    handleChange={this.handleChange}
                    required />
                <FormInput
                    type="email"
                    name="email"
                    value={email}
                    label="Email"
                    handleChange={this.handleChange}
                    required />
                <FormInput
                    type="password"
                    name="password"
                    value={password}
                    label="Password"
                    handleChange={this.handleChange}
                    required />
                <FormInput
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    label="Confirm password"
                    handleChange={this.handleChange}
                    required />
                <CustomButton type="submit">Sign Up</CustomButton>
            </form>
        </div>)
    }
}

export default SignUp;