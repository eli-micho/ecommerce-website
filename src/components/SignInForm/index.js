import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../Form/FormInput';
import FormButton from './../Form/FormButton';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
});

const SignInForm = props => {
    const history = useHistory();
    const { currentUser } = useSelector(mapState);
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }
    }, [currentUser]);

    const resetForm = () => {
        setEmail('');
        setPassword('');
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(emailSignInStart({ email, password }));
    }

    const handleGoogleSignIn = () => {
        dispatch(googleSignInStart());
    }

    const configAuthWrapper = {
        headline: 'Log In'
    };

    return(
        <AuthWrapper {...configAuthWrapper}>
            <form className="signInForm" onSubmit={handleSubmit}>
                <div className="socialSignIn">
                    <h3>Sign In With Social</h3>
                    <FormButton onClick={handleGoogleSignIn}>
                        <i className="fa fa-google"></i>
                        <span>Google</span>
                    </FormButton>
                </div>

                <div className="usernameSignIn">
                    <h3>Sign in With Email</h3>

                    <FormInput 
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                    />

                    <FormInput
                        label="Password" 
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />
                </div>

                <FormButton type="submit">
                    Sign In
                </FormButton>
            </form>
        </AuthWrapper>
        
    );
};

export default SignInForm;
