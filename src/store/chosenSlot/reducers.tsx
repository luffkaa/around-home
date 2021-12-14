import { AnyAction } from "redux";
import { ITimeSlot } from "../types";
import {
  ADD_NEW_TIME_SLOT,
  DELETE_TIME_SLOT,
} from "./types";

const initialState = {
  reservedSlots: [],
  chosenSlots: [],
}

export function chosenTimeSlotReducer(
  state = initialState,
  action: AnyAction,
) {
  switch(action.type) {
    case ADD_NEW_TIME_SLOT:
      return {
        ...state,
        reservedSlots: [
          ...state.reservedSlots,
          {
            date: action.payload.date,
            start_time: action.payload.start_time,
            end_time: action.payload.end_time,
            weekday: action.payload.weekday,
          }
        ],
        chosenSlots: [
          ...state.chosenSlots,
          action.payload
        ]
      };
    case DELETE_TIME_SLOT:
      return {
        ...state,
        reservedSlots: state.reservedSlots.filter(
          (slot: ITimeSlot) => 
            slot.start_time !== action.payload.start_time && 
            slot.end_time !== action.payload.end_time
        ),
        chosenSlots: state.chosenSlots.filter(
          (slot: ITimeSlot) => 
            slot.id !== action.payload.id
        )
      };
    default:
      return state;
  }
}
