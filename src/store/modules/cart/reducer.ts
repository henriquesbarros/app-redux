import { Reducer } from "react";
import { ICartState, IProductAction } from "./types";

const INITIAL_STATE: ICartState = {
    items: []
}

const cart: Reducer<ICartState, IProductAction> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT_TO_CART': {
            const { product } = action.payload
        
            return {
                ...state,
                items: [
                    ...state.items,
                    {
                        product,
                        quantity: 1,
                    }
                ]
            };
        }
        default: {
            return state;
        }
    }
    
    // return INITIAL_STATE
}

export default cart;