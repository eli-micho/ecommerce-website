import React from 'react';
import Footer from '../components/Footer';

//Components
import Header from './../components/Header';

const MainLayout = (props) => {
    return (
        <div>
            <Header {...props} />
            {props.children}
            <Footer />
        </div>
    );
};

export default MainLayout;
