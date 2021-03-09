import React from 'react';
import { signOutUserStart } from './../redux/User/user.actions';

import Header from './../components/Header';
import Footer from './../components/Footer';

const AdminLayout = props => {
    return(
        <div className="adminLayout">
            <Header />

            <div className="controlPanel">

                <div className="content">
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AdminLayout;

