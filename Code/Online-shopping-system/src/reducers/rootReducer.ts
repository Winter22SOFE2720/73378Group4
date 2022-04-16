import { alertBarReducer } from "./alertBarReducer";
import { cartReducer } from "./cartReducer";
import { combineReducers } from "redux";
import { LoginReducer } from "./loginReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  alert: alertBarReducer,
  login: LoginReducer,
});

export default rootReducer;

export type IRootReducerState = ReturnType<typeof rootReducer>;
