import { Reducer } from "react";
import { ICartState } from "./types";

const INITIAL_STATE: ICartState = {
    items: []
}

const cart = () => {
    return INITIAL_STATE
}

export default cart;