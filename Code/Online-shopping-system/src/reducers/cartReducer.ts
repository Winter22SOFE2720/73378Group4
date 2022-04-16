import {
  DELETE_FROM_CART,
  EMPTY_CART,
  UPDATE_CART,
} from "./../actionTypes/cartTypes";
import { ProductItem } from "../../models/products";
import { ADD_TO_CART } from "../actionTypes/cartTypes";

interface CartItem {
  id: string;
  productName: string;
  price: number;
  imageUrl: string;
  quantity: number;
}
interface IInitialState {
  cartItems: CartItem[];
  totalPrice: number;
}
const initialState: IInitialState = {
  cartItems: [],
  totalPrice: 0,
};

type IAction =
  | {
      type: typeof ADD_TO_CART;
      payload: ProductItem;
    }
  | {
      type: typeof UPDATE_CART;
      payload: {
        id: string;
        quantity: number;
      };
    }
  | {
      type: typeof DELETE_FROM_CART;
      payload: string;
    }
  | {
      type: typeof EMPTY_CART;
    };

export const cartReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const newArr = [...state.cartItems];
      const index = newArr.findIndex((item) => item.id === action.payload.id);
      if (index === -1) {
        newArr.push({ ...action.payload, quantity: 1 });
      } else {
        newArr[index].quantity += 1;
      }
      return {
        ...state,
        cartItems: newArr,
        totalPrice: newArr.reduce((a, b) => a + b.quantity * b.price, 0),
      };
    }
    case UPDATE_CART: {
      const newArr = [...state.cartItems];
      const index = newArr.findIndex((item) => item.id === action.payload.id);
      newArr[index].quantity = action.payload.quantity;
      return {
        ...state,
        cartItems: newArr,
        totalPrice: newArr.reduce((a, b) => a + b.quantity * b.price, 0),
      };
    }

    case DELETE_FROM_CART: {
      const newArr = [...state.cartItems].filter(
        (item) => item.id !== action.payload
      );
      return {
        ...state,
        cartItems: newArr,
        totalPrice: newArr.reduce((a, b) => a + b.quantity * b.price, 0),
      };
    }
    case EMPTY_CART: {
      return {
        ...state,
        cartItems: [],
        totalPrice: 0,
      };
    }
    default:
      return { ...state };
  }
};
