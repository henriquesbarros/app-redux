import { IProduct } from "./types";

/*
Toda ação do redux precisa exportar um objeto com uma proprideade
obrigatória(type), que é um string que identifica a action
*/
export function addProductToCart(product: IProduct) {
    return {
        type: 'ADD_PRODUCT_TO_CART',
        payload: {
            product,
        }
    };
}