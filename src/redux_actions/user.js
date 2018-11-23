import {
  DATA_USER,
} from "./actionTypes";

export function setUser() {
  return {
    type: DATA_USER,
  }
}

export function getUser() {
  return dispatch => {
    return dispatch(setUser());
  }
}

export default {
  getUser,
}