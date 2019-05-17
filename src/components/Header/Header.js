import React from "react";
import { NavLink } from "react-router-dom";

//style import
import "./Header.scss";

export const Header = props => {
    return (
        <nav className="main-nav">
            <div className="shop-name"> Beauty Shop
        </div>
            <div className="header-links">
                <NavLink exact to="/home" activeClassName="active">
                    Home
                </NavLink>
                <NavLink exact to="/faq" activeClassName="active">
                    FAQ
                </NavLink>
                <NavLink exact to="/terms" activeClassName="active">
                    Terms
                </NavLink>
                <NavLink exact to="/contact" activeClassName="active">
                    Contact
                </NavLink>
                <NavLink exact to="/cart" activeClassName="active">
                    Cart
                </NavLink>
            </div>
        </nav>

    );
};
