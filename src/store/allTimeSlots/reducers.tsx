import { AnyAction } from "redux";
import {
  GET_ALL_TIMESLOTS_START,
  GET_ALL_TIMESLOTS_SUCCESS,
  GET_ALL_TIMESLOTS_FAILURE,
} from "./types";

const initialState = {
  allTimeSlots: [],
  error: null,
  pending: false,
}

export function allTimeSlotsReducer(
  state = initialState,
  action: AnyAction,
) {
  switch(action.type) {
    case GET_ALL_TIMESLOTS_START:
      return {
        ...state,
        pending: true,
      };
    case GET_ALL_TIMESLOTS_SUCCESS:
      return {
        ...state,
        allTimeSlots: action.payload,
        pending: false,
      };
    case GET_ALL_TIMESLOTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
