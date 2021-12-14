import useScheduler from "../../useScheduler";
import { TimeContainer } from "../TimeContainer";
import { ISingleTimeSlot } from "../types";
import styles from "./index.module.css";

export default function SingleTimeSlot({
  singleSlot,
}: ISingleTimeSlot) {
  const { id, start_time, end_time } = singleSlot;

  const {
    handleAddNewSlot,
    isTimeReserved,
    isTimeForCompanyReserved,
  } = useScheduler({ id,singleSlot })

  return (
    <div 
      className={`box_shadow border_radius_3 ${styles.single_time_slot__container}
        ${isTimeReserved && styles.reserved}
      `}
      onClick={
        !isTimeReserved && 
        !isTimeForCompanyReserved 
        ? () => handleAddNewSlot()
        : undefined
      }
    >
      <TimeContainer start_time={start_time} end_time={end_time}/>
    </div>
  )
}
