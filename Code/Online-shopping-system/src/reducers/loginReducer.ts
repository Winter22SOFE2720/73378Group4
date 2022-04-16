import { USER_LOGGED_IN } from "./../actionTypes/LoginTypes";
import { UserDetails } from "./../../models/interface";
import { USER_LOGGED_OUT } from "./../actionTypes/LoginTypes";

type InitialState = {
  user: UserDetails;
  loginState: boolean;
};
const initialState: InitialState = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
  },
  loginState: false,
};

type IAction =
  | {
      type: typeof USER_LOGGED_IN;
      payload: UserDetails;
    }
  | {
      type: typeof USER_LOGGED_OUT;
    };

export const LoginReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case USER_LOGGED_IN: {
      return {
        ...state,
        user: action.payload,
        loginState: true,
      };
    }
    case USER_LOGGED_OUT: {
      return {
        ...state,
        user: {
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          phoneNumber: "",
        },
        loginState: false,
      };
    }
    default:
      return { ...state };
  }
};
