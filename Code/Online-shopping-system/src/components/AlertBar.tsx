import * as React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IRootReducerState } from "../store/reducers/rootReducer";

const AlertBar: React.FunctionComponent = () => {
  const cartItem = useSelector(
    (state: IRootReducerState) => state.cart.cartItems
  );

  const item = cartItem[cartItem.length - 1];

  return (
    <div
      className="bg-white px-4 py-2 shadow-lg fixed top-1 w-full z-50"
      role="alert"
    >
      <div className="flex justify-between">
        <div>
          <p className="font-bold">Item added to cart</p>
          <div className="flex items-center gap-2">
            <p className="text-sm">
              {item.quantity} {item.quantity > 1 ? "items" : "item"}
            </p>
            <p>-</p>
            <p className="text-sm text-[#c7ab62]">{`$ ${
              item.quantity * item.price
            }`}</p>
          </div>
        </div>
        <Link to="/checkout">
          <button className="text-white bg-[#c7ab62] w-max py-2 px-6 capitalize text-lg font-base">
            checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AlertBar;
