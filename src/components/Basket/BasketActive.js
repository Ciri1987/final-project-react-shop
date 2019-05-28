import React from 'react';
import './Basket.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { addQuantity, removeQuantity } from '../../actions/actions-basket';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export class BasketActive extends React.Component {

    createListProducts() {
        return this.props.basket.added.map((product) => {
            return (
                <div className="row basket-active-product" key={product.id}>
                    <div className="basket-active-product-photo col-2">
                        <img className="basket-active-product-photo-img" src={product.imgSrc} alt="beauty-product" />
                    </div>
                    <div className="basket-active-product-description col-5">
                        <h2 className="basket-active-product-description-name">{product.name}</h2>
                        <p className="basket-active-product-description-text">{product.descr}</p>
                    </div>
                    <div className="basket-active-product-price col-2">${product.price * product.quantity}</div>
                    <div className="basket-active-product-quantity col-3">
                        <button className="basket-active-product-quantity-button" onClick={() => this.props.addQuantity(product)}>+</button>
                        <p className="basket-active-product-quantity-value">{product.quantity}</p>
                        <button className="basket-active-product-quantity-button" onClick={() => this.props.removeQuantity(product)}>-</button>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1 className="basket-name">Your basket <FontAwesomeIcon icon={faShoppingCart} /></h1>

                {this.createListProducts()}

                <div className="basket-active-promo-code row">
                    <div className="col-9"></div>
                    <div className="col-3"><input className="basket-active-input" placeholder="Promo code" /></div>
                </div>
                <div className="basket-active-sum row">
                    <div className="col-9"></div>
                    <div className="basket-active-sum-cash col-3">Sum to pay: {this.props.basket.summary} $</div>
                </div>

            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        basket: state.basket
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            addQuantity,
            removeQuantity
        }, dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(BasketActive);
