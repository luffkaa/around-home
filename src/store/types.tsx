interface IDataLoading {
  error: string,
  pending: boolean,
}

interface ICompanyData {
  id: number,
  name: string,
  type: string,
}

export interface ITimeSlot extends ICompanyData {
  date: string,
  weekday: string,
  start_time: Date,
  end_time: Date,
}


export interface ICompanyTimeSlots extends ICompanyData {
  time_slots: ITimeSlot[],
}

export interface ISlots {
  [key: string]: ITimeSlot[]
}

export interface IGroupedData extends ICompanyTimeSlots {
  slots: ISlots,
}

export interface ITimeSlotsStore extends IDataLoading{
  allTimeSlots: IGroupedData[],
}

export interface IChosenSlot {
  reservedSlots: ITimeSlot[],
  chosenSlots: ITimeSlot[],
}

export interface IStore {
  allTimeSlotsReducer: ITimeSlotsStore,
  chosenTimeSlotReducer: IChosenSlot,
}
