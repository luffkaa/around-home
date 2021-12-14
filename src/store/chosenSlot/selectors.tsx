import { IStore } from "../types";

export const selectChosenSlot = (
  state: IStore, 
  id: number
) => 
  state.chosenTimeSlotReducer.chosenSlots.find(
    slot => slot.id === id
  )

export const selectReservedSlot = (
  state: IStore, 
  start_time: Date, 
  end_time: Date
) =>
  state.chosenTimeSlotReducer.reservedSlots.find(
    slot => slot.start_time === start_time && slot.end_time === end_time
  )
