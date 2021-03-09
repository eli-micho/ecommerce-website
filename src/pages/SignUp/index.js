import React from 'react';
import './styles.scss';

import SignUpForm from '../../components/SignUpForm';

const SignUp = () => {
    return (
        <div className="page-main">
            <section className="signup">
                <h1>Sign Up</h1>

                <div className="register-container">
                    <SignUpForm />
                    <div className="signup-social">
                        <span>Register with Social</span>
                        <div className="google-signup">
                            <i className="fab fa-google"></i>
                            <span>Google</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    );
};

export default SignUp;