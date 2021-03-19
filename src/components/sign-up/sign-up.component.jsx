import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButtom from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state

        if(password !== confirmPassword) {
            alert("passwords don't match")
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)

            createUserProfileDocument(user, { displayName })

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = e => {
        const { name, value } = e.target

        this.setState({[ name]: value })
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Diplay Name'
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />
                    <FormInput 
                        type='confirmPassword'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButtom type='submit'>SIGN UP</CustomButtom>
                </form>
            </div>
        )
    }
}

export default SignUp;