export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_CART = 'UPDATE_CART'

export function addToCart(id, count) {
    return {
        type: 'ADD_TO_CART',
        id,
        count
    }
};

export function removeFromCart(id) {
    return {
        type: 'REMOVE_FROM_CART',
        id
    }
};

export function updateCart(id, count) {
    return {
        type: 'UPDATE_CART',
        id,
        count
    }
};