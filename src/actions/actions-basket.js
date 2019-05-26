export const clickProduct = (product) => {
    return {
        type: "PRODUCT_CLICKED",
        payload: product
    }
};

export const addQuantity = (product) => {
    return {
        type: "ADD_QUANTITY",
        payload: product
    }
};

export const removeQuantity = (product) => {
    return {
        type: "REMOVE_QUANTITY",
        payload: product
    }
};