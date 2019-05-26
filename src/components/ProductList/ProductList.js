import React from 'react';
import { connect } from 'react-redux';
import { SingleProduct } from './SingleProduct';
import './ProductList.scss';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

export class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            currentProducts: [0, 4]
        };
        this.elements = this.props.sorted.products.length;
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
                {
                    (this.props.sorted.products.slice(this.state.currentProducts[0], this.state.currentProducts[1])).map((product, i) => {
                        return (
                            <SingleProduct
                                key={i}
                                index={i}
                                name={product.name}
                                price={product.price}
                                descr={product.descr}
                                showText={false}
                                addInfo={product.addInfo}
                                imgSrc={product.imgSrc}
                            />
                        )
                    }
                    )
                }
                <div className="productList-pagination">
                    <Pagination aria-label="Navigation">
                        {[...Array(this.pagesCount)].map((page, i) =>
                            <PaginationItem active={i === currentPage} key={i}>
                                <PaginationLink onClick={e => this.handleClick(e, i)} href="#">
                                    {i + 1}
                                </PaginationLink>
                            </PaginationItem>
                        )}
                    </Pagination>
                </div>
            </div>
        );
    };
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(ProductList);