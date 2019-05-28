import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Product.scss';
import { addToBasket } from '../../actions/actions-product';


export class Product extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentWillMount() {
        this.props.products.map((product, i) => {
            if (product.id === this.props.match.params.id) {
                this.setState({ id: (product.id - 1) });
            }
        })
    }
    render() {
        return (
            <div className="product-page container">
                <div className="row">
                    <div className="product-page-image col-sm-12 col-md-4 col-lg-4">
                        <img
                            className="product-page-image-photo"
                            src={this.props.products[this.props.match.params.id].imgSrc}
                            alt="beauty-product"
                        />
                    </div>

                    <div className="product-page-description col-sm-12 col-md-8 col-lg-8">
                        <p className="product-page-description-name">
                            {this.props.products[this.props.match.params.id].name}
                        </p>
                        <p className="product-page-description-price">
                            ${this.props.products[this.props.match.params.id].price}
                        </p>
                        <p>
                            {this.props.products[this.props.match.params.id].descr}
                        </p>
                        <button
                            className="product-page-description-button"
                            onClick={() => this.props.addToBasket(this.props.products[this.props.match.params.id])}
                        > Add to basket</button>
                    </div>
                </div>
            </div>
        );
    }
};

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators(
        { addToBasket: addToBasket }, dispatch
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(Product);