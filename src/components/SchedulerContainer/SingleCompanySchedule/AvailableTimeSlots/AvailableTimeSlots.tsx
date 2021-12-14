import { ITimeSlots } from "../types";
import { WeekdayContainer } from "./WeekdayContainer";
import styles from "./index.module.css";

export default function AvailableTimeSlots({
  name,
  slots
}: ITimeSlots) {
  return (
    <div className={`box_shadow ${styles.company_available_slots__container}`}>
      { Object.keys(slots).map((
          key: string, i: number
        ) => {
          const weekdaySlots = slots[key];
          return (
            <WeekdayContainer
              key={`${name} ${i}`}
              name={name}
              slots={weekdaySlots}
            />
          )
        })
      }
    </div>
  )
}
