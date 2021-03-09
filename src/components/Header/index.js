import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import logo from './../../assets/imgs/logos/logo.svg';
import './styles.scss';

const mapState = (state) => ({
    currentUser: state.user.currentUser,
    totalNumCartItems: selectCartItemsCount(state)
});

const Header = (props) => {
    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };
    return (
        <header className="header">
            <div className="header-main">
                <div className="logo">
                    <img src={logo} />
                    <Link to="/"><span><h2>Plant Planet</h2></span></Link>
                </div>

                <div className="cta">
                    <nav>
                        {currentUser && (
                            <ul>
                                <li><span>{currentUser.fullName}</span></li>
                                <li><NavLink  exact={true} activeClassName='isActive' to="/Cart">Cart ({totalNumCartItems})</NavLink></li>
                                <li><span className="signOutBtn" onClick={() => signOut()}>Sign Out</span></li>
                            </ul>
                        )}

                        {!currentUser && 
                            <ul>
                                <li><NavLink  exact={true} activeClassName='isActive' to="/signup">Sign Up</NavLink></li>
                                <li><NavLink  exact={true} activeClassName='isActive'to="/signin">Sign In</NavLink></li>
                                <li><NavLink  exact={true} activeClassName='isActive' to="/Cart">Cart</NavLink></li>
                            </ul>
                        }
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

Header.defaultProps = {
    currentUser: null
};

export default Header;
