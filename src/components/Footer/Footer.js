import React from 'react';
import { NavLink } from 'react-router-dom';

//style import
import './Footer.scss';

export const Footer = props => {
    return (
        <div className="footer-links">
            <div className="footer-copyright">All rights reserved Ciri1987</div>
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
        </div>
    );
};