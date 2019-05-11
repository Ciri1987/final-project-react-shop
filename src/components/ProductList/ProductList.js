import React from 'react';
import { Product } from './SingleProduct';
import products from './products';

//import style
import './ProductList.scss';

export class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = products;
    }

    render() {
        return (
            <div className="productList col-6">
                {
                    this.state.products.map((product, i) => (
                        <Product
                            key={i}
                            index={i}
                            name={product.name}
                            price={product.price}
                            descr={product.descr}
                            showText={false}
                            addInfo={product.addInfo}
                            imgSrc={product.imgSrc}
                        />)
                    )
                }
            </div>
        );
    };
}