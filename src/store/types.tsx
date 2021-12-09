interface IDataLoading {
  error: string,
  pending: boolean,
}

interface ITimeSlot {
  start_time: Date,
  end_time: Date,
}

export interface ICompanyTimeSlots {
  id: number,
  name: string,
  type: string,
  time_slots: ITimeSlot[],
}

export interface ITimeSlotsStore extends IDataLoading{
  timeSlots: ICompanyTimeSlots[],
}


export interface IStore {
  allTimeSlotsReducer: ITimeSlotsStore,
}
