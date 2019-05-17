import React from 'react';
import { NavLink } from 'react-router-dom';

//import style
import './SingleProduct.scss';

export const Product = (props) => (
    <NavLink
        exact to={"/product/" + props.id}
        index={props.index}
        className="product col-4">

        <p className="product--info">{props.addInfo}</p>
        <img className="product--photo" src={props.imgSrc} alt="product" />
        <p className="product--name">{props.name}</p>
        <p className="product--price">${props.price}</p>

    </NavLink>
);