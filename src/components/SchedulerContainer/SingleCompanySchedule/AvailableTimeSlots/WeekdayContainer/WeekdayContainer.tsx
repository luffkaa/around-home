import { ITimeSlot } from "../../../../../store"
import { SingleTimeSlot } from "../../SingleTimeSlot";
import { IWeekdayContainer } from "../../types";
import styles from "./index.module.css";

export default function WeekdayContainer({
  name, 
  slots,
}: IWeekdayContainer) {
  return (
    <div className={`module_container box_shadow border_radius_3 ${styles.weekday__container}`}>
      {slots[0].weekday}
      <div className={styles.weekday__time_slots__container}>
        { slots.map((
            slot: ITimeSlot, i: number
          ) => {
            return (
              <SingleTimeSlot 
                key={`${name} ${slot.date} ${i}`}
                singleSlot={slot}
              />
            )
          })
        }
      </div>
    </div>
  )
}
