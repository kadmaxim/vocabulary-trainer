import { SET_NOTIFICATION } from "./types";

export const notify = (message = "", color = "danger") => ({
  type: SET_NOTIFICATION,
  payload: { message, color }
});
