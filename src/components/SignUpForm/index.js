import React, { Component } from 'react';
import './styles.scss';

import { auth, handleUserProfile } from './../../firebase/utils';

import FormInput from './../Form/FormInput';
import FormButton from '../Form/FormButton';

const initialState = {
    fullName: '',
    email: '',
    password: '',
    errors: []
};

class SignUpForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            ...initialState
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };   

    handleFormSubmit = async e => {
        e.preventDefault();
        const { fullName, email, password } = this.state;

        try {
           const { user } = await auth.createUserWithEmailAndPassword(email, password);
           await handleUserProfile(user, { fullName });

           this.setState({
               ...initialState
           });
        }catch(err) {
            //console.log(err)
        }
    };
    render(){
        const { fullName, email, password, errors } = this.state;

        return (
            <div className="signUpContent">
                <div className="wrap">
                    {errors.length > 0 && (
                        <ul>
                            {errors.map((err, index) => {
                                return (
                                    <li key={index}>
                                        {err}
                                    </li>
                                );
                            })}
                        </ul>
                    )}
                    <form className="signUpForm" onSubmit={this.handleFormSubmit}>
                            <FormInput
                                label="Full Name" 
                                type="text"
                                name="fullName"
                                id="Full Name"
                                value={fullName}
                                placeholder="Full Name"
                                autoComplete="off"
                                onChange={this.handleChange}
                            />

                            <FormInput
                                label="email" 
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                onChange={this.handleChange}
                            />

                            <FormInput
                                label="Password" 
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                onChange={this.handleChange}
                            />
        
                            <FormButton type="submit">
                                Register
                            </FormButton>
                    </form>
                </div>
            </div>
        );
    }
};

export default SignUpForm;
