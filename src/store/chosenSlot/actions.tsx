import { ITimeSlot } from '../types';
import {
  ADD_NEW_TIME_SLOT,
  DELETE_TIME_SLOT,
} from "./types";

export const addNewChosenSlot = (
  data: ITimeSlot,
) => ({
  type: ADD_NEW_TIME_SLOT,
  payload: data,
})

export const deleteChosenSlot = (data: ITimeSlot) => ({
  type: DELETE_TIME_SLOT,
  payload: data,
})
