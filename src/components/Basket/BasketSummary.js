import React from 'react';
import './Basket.scss';
import { connect } from 'react-redux';

export class BasketSummary extends React.Component {

    createSummary() {
        return this.props.basket.added.map((product) => {
            return (
                <div className="row basket-summary-product" key={product.id}>
                    <div className="basket-summary-product-name col-6">{product.name}</div>
                    <div className="basket-summary-product-price col-2">{product.quantity}</div>
                    <div className="basket-summary-product-price col-2">${product.price}</div>
                    <div className="basket-summary-product-price col-2">${product.price * product.quantity}</div>
                </div>
            );
        });
    }

    render() {
        return (
            <div className="basket container">
                <h1 className="basket-name">Your order</h1>
                <div className="row basket-summary-line">
                    <div className="basket-summary-line-name col-6">Name</div>
                    <div className="basket-summary-line-element col-2">Quantity</div>
                    <div className="basket-summary-line-element col-2">Price</div>
                    <div className="basket-summary-line-element col-2">Full price</div>
                </div>
                {this.createSummary()}
                <div className="row basket-summary-line">
                    <div className="basket-summary-line-element-name col-10">Sum to pay</div>
                    <div className="basket-summary-line-element-sum col-2">$ {this.props.basket.summary}</div>

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

export default connect(mapStateToProps)(BasketSummary);