import React from 'react';
import { connect } from 'react-redux';
import { ProductList } from '../ProductList/ProductList';
import './Home.scss';
import { sortBy } from './sort';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "products": this.props.products
        };
    }

    sortBy(event) {
        this.setState({
            "products": this.state.products.sort(sortBy(event.target.dataset.prop, event.target.dataset.order))
        });
    }

    render() {
        return (
            <div className='home'>
                <div className='home-sort col-sm-12 col-md-4 col-lg-3'>
                    <p className='home-sort-header'>
                        Sort by
                    </p>
                    <ul className='home-sort-list'>
                        <li className='home-sort-list-element' data-prop='name' data-order='asc' onClick={event => this.sortBy(event)}>Name: A-Z</li>
                        <li className='home-sort-list-element' data-prop='name' data-order='desc' onClick={event => this.sortBy(event)}>Name: Z-A</li>
                        <li className='home-sort-list-element' data-prop='price' data-order='asc' onClick={event => this.sortBy(event)}>Price: from low to high</li>
                        <li className='home-sort-list-element' data-prop='price' data-order='desc' onClick={event => this.sortBy(event)}>Price: from high to low</li>
                    </ul>
                </div>
                <ProductList sorted={this.state} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(Home);