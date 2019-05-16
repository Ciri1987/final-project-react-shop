import { combineReducers } from 'redux';
import BasketReducer from './reducers-cart.js';
import ProductsReducer from './reducers-products.js';

const reducer = combineReducers({
    products: ProductsReducer, // data about products
    basket: BasketReducer, // basket functionalities
});

export default reducer;