import React from 'react';
import Footer from '../components/Footer';

//Components
import Header from './../components/Header';

const AccountLayout = (props) => {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    );
};

export default AccountLayout;
