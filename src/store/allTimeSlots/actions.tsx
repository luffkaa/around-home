import { IGroupedData } from '../types';
import {
  GET_ALL_TIMESLOTS_START,
  GET_ALL_TIMESLOTS_SUCCESS,
  GET_ALL_TIMESLOTS_FAILURE,
} from "./types";


export const getAllTimeSlotsStart = () => ({
  type: GET_ALL_TIMESLOTS_START,
})

export const getAllTimeSlotsSuccess = (
  data: IGroupedData[],
) => ({
  type: GET_ALL_TIMESLOTS_SUCCESS,
  payload: data,
})

export const getAllTimeSlotsFailure = (
  err: unknown
) => ({
  type: GET_ALL_TIMESLOTS_FAILURE,
  payload: err,
})
