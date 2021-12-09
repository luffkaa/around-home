import { Dispatch } from "redux";
import {
  getAllTimeSlotsStart,
  getAllTimeSlotsSuccess,
  getAllTimeSlotsFailure,
} from "./allTimeSlots";

export const getAllTimeSlots = () => 
  async (dispatch: Dispatch) => {
    dispatch(getAllTimeSlotsStart())
    try {
      const res = await fetch('./data.json');
      if (!!res.ok) {
        const data = await res.json();
        dispatch(getAllTimeSlotsSuccess(data))
      } else {
        throw new Error('No data found')
      }

    } catch (err: unknown) {
      dispatch(getAllTimeSlotsFailure(err))
    }
}
