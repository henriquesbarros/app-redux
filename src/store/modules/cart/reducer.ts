import { Reducer } from "react";

//Produz um novo estado a partir de um rascunho de um estado anterior 
import produce from 'immer';

import { ICartState, IProductAction } from "./types";

const INITIAL_STATE: ICartState = {
    items: []
}

const cart: Reducer<ICartState, IProductAction> = (state = INITIAL_STATE, action) => {
    return produce(state, draft => {
        switch(action.type) {
            case 'ADD_PRODUCT_TO_CART': {
                const { product } = action.payload;

                const productInCartIndex = draft.items.findIndex(item => (
                    item.product.id === product.id
                ));

                if ( productInCartIndex >= 0) {
                    draft.items[productInCartIndex].quantity++
                } else {
                    draft.items.push({
                        product,
                        quantity: 1,
                    });
                }
                break;
            }
            default: {
                return draft;
            }
        }
    });
}

export default cart;