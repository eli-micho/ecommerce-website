import React from 'react';
import './styles.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer-submain">
                <li>
                    <div>
                        <h4>Help and Information</h4>
                        <ul className="footer-cta">
                            <li><a>Help</a></li>
                            <li><a>Track Order</a></li>
                            <li><a>Delivery and Returns</a></li>
                        </ul>
                    </div>
                </li>

                <li>
                    <div>
                        <h4>My Account</h4>
                        <ul className="footer-cta">
                            <li><a>Login</a></li>
                            <li><a>Register</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;