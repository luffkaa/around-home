import { ISlots, ITimeSlot } from "../../../store/types";

export interface ITimeSlots {
  id: number,
  name: string,
  slots: ISlots,
}

export interface IDay {
  slot: Date,
}

export interface ISingleTimeSlot {
  singleSlot: ITimeSlot,
}

export interface ITime {
  start_time: Date,
  end_time: Date,
}

export interface IReservedTime {
  id: number,
}

export interface IWeekdayContainer {
  name: string,
  slots: ITimeSlot[],
}
