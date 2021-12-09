import { IStore } from "../types";

export const selectAllTimeSlots = (state: IStore) => 
  state.allTimeSlotsReducer.allTimeSlots;
export const selectAllTimeSlotsError = (state: IStore) => 
  state.allTimeSlotsReducer.error;
export const selectAllTimeSlotsPending = (state: IStore) => 
  state.allTimeSlotsReducer.pending;
