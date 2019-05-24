import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.scss';

export const Header = props => {
    return (
        <div className="shop">
            <div className="shop-name">
                Beauty Shop
            </div>
            <div className="header-links">
                <NavLink exact to="/home" activeClassName="activeLink">
                    Home
                </NavLink>
                <NavLink exact to="/faq" activeClassName="activeLink">
                    FAQ
                </NavLink>
                <NavLink exact to="/terms" activeClassName="activeLink">
                    Terms
                </NavLink>
                <NavLink exact to="/contact" activeClassName="activeLink">
                    Contact
                </NavLink>
                <NavLink exact to="/basket" activeClassName="activeLink">
                    <FontAwesomeIcon icon={faShoppingCart} />
                </NavLink>
            </div>
        </div>
    )
}