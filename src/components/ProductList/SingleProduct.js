import React from 'react';
import { NavLink } from 'react-router-dom';
import './SingleProduct.scss';

export const SingleProduct = (props) => (
    <NavLink
        exact to={"/product/" + props.index}
        index={props.index}
        className="product col-4">

        <p className="product-info">{props.addlInfo}</p>
        <img className="product-photo" src={props.imgSrc} alt="beauty-product" />
        <p className="product-name">{props.name}</p>
        <p className="product-price">${props.price}</p>

    </NavLink>
);