import { ProductItem } from "../../models/products";
import {
  ADD_TO_CART,
  DELETE_FROM_CART,
  UPDATE_CART,
  EMPTY_CART,
} from "../actionTypes/cartTypes";

export const addToCart = (product: ProductItem) => {
  return {
    type: ADD_TO_CART,
    payload: product,
  };
};

export const updateCart = (id: string, quantity: number) => {
  return {
    type: UPDATE_CART,
    payload: {
      id,
      quantity,
    },
  };
};

export const deleteFromCart = (id: string) => {
  return {
    type: DELETE_FROM_CART,
    payload: id,
  };
};

export const emptyCart = () => {
  return {
    type: EMPTY_CART,
  };
};
