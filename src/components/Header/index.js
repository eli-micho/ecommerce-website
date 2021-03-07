import React from 'react';
import logo from './../../assets/imgs/logo.svg';
import './styles.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="header-main">
                <div className="logo">
                    <img src={logo} />
                    <span><h2>Plants</h2></span>
                </div>

                <div className="cta">
                    <nav>
                        <ul>
                            <li><a>Sign Up</a></li>
                            <li><a>Log In</a></li>
                            <li><a>Cart</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            

            <div className="header-submain">
                <span>
                    Ethical, high-quality indoor plants of all kinds for the enthusiatic appreciator of cholorophyll.
                </span>
            </div>
        </header>
    );
};

export default Header;
