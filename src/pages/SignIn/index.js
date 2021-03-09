import React from 'react';
import './styles.scss';

import SignInForm from '../../components/SignInForm';

const SignIn = () => {
    return (
        <div className="page-main">
            <section className="signin">
                <h1>Sign In</h1>

               <div className="signin-container">
                    <SignInForm />

               </div>

            </section>
        </div>
    );
};

export default SignIn;