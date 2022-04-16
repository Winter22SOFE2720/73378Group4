import { TOGGLE_ALERT_BAR } from "../actionTypes/alertBarType";

const initialState = {
  showAlertBar: false,
};

type IAction = {
  type: typeof TOGGLE_ALERT_BAR;
  payload: boolean;
};

export const alertBarReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TOGGLE_ALERT_BAR:
      return {
        ...state,
        showAlertBar: action.payload,
      };
    default:
      return { ...state };
  }
};
