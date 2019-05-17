import React from 'react';
import { Product } from './SingleProduct';
import './ProductList.scss';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.products,
            currentPage: 0,
            currentProducts: [0, 4]
        };
        this.elements = this.props.sorted.length;
        this.pageSize = 4;
        this.pagesCount = Math.ceil(this.elements / this.pageSize);
    }

    handleClick(e, index) {
        e.preventDefault();
        this.setState({
            currentPage: index,
            currentProducts: [index * this.pageSize, (index + 1) * this.pageSize]
        });
    }

    render() {
        const { currentPage } = this.state;
        return (
            <div className="productList col-8">
                <Pagination aria-label="Page navigation">
                    {[...Array(this.pagesCount)].map((page, i) =>
                        <PaginationItem active-dark={i === currentPage} key={i}>
                            <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                {i + 1}
                            </PaginationLink>
                        </PaginationItem>
                    )}
                </Pagination>
                {
                    (this.props.sorted.slice(this.state.currentProducts[0], this.state.currentProducts[1])).map((product, i) => {
                        return (
                            <Product
                                id={product.id}
                                key={i}
                                name={product.name}
                                price={product.price}
                                descr={product.descr}
                                showText={false}
                                addlInfo={product.addInfo}
                                imgSrc={product.imgSrc}
                                sorted={this.props.sorted}
                            />
                        )
                    }
                    )
                }
            </div>
        );
    };
}