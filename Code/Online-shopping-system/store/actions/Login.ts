import { UserDetails } from "../../models/interface";
import { USER_LOGGED_IN } from "./../actionTypes/LoginTypes";
import { USER_LOGGED_OUT } from "./../actionTypes/LoginTypes";

export const userloginDetails = (user: UserDetails) => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

export const logOut = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};
