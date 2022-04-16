import { TOGGLE_ALERT_BAR } from "../actionTypes/alertBarType";

export const toggleAlertBar = (data: boolean) => {
  return {
    type: TOGGLE_ALERT_BAR,
    payload: data,
  };
};
