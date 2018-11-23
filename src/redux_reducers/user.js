import {
  DATA_USER,
} from "../redux_actions/actionTypes";

const initData = {
  user: "Ahihi",
};

export default function(state = initData, action) {
  switch (action.type) {
    case DATA_USER:
      return {
        ...state,
        user: "hihi",
      }
    default:
      return state;
  }
}