import { Dispatch } from "redux";
import {
  handleDayData,
  handleGroupBy } from "../utils";
import {
  getAllTimeSlotsStart,
  getAllTimeSlotsSuccess,
  getAllTimeSlotsFailure,
} from "./allTimeSlots";
import { ICompanyTimeSlots, IGroupedData, ITimeSlot } from "./types";

export const getAllTimeSlots = () => 
  async (dispatch: Dispatch) => {
    dispatch(getAllTimeSlotsStart())
    try {
      const res = await fetch('./data.json');
      if (!!res.ok) {
        const data = await res.json();
        const filteredData = data.map((item: ICompanyTimeSlots) =>{
          const array = item.time_slots.map((slot: ITimeSlot) => {
            const { day, month, year, weekday} = handleDayData(slot.end_time)
            return {
              id: item.id,
              name: item.name,
              type: item.type,
              date:`${year}-${month}-${day}`,
              weekday: weekday,
              start_time: slot.start_time,
              end_time: slot.end_time,
            }
          })
          return {
            id: item.id,
            name: item.name,
            type: item.type,
            time_slots: array
          }
        })

        const groupedData: IGroupedData[] = filteredData.map((
          data: ICompanyTimeSlots
        ) => {
          const slots = data.time_slots;
          return {
            ...data,
            slots: handleGroupBy(slots, i => i.date)
          }
        })

        dispatch(getAllTimeSlotsSuccess(groupedData))
      } else {
        throw new Error('No data found')
      }

    } catch (err: unknown) {
      dispatch(getAllTimeSlotsFailure(err))
    }
}
