import { combineReducers } from 'redux';
import BasketReducer from './reducers-basket';
import ProductsReducer from './reducers-products';

const reducer = combineReducers({
    products: ProductsReducer,
    basket: BasketReducer
});

export default reducer;