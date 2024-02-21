/* eslint-disable import/no-anonymous-default-export */
import { REDUCERS, ActionType } from "../types";

export default (state: any, action: ActionType) => {
  const { payload } = action;

  switch (action.type) {
    case REDUCERS.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
};
