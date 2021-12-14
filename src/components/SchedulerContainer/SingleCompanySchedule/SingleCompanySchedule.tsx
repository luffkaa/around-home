import { IGroupedData } from "../../../store";
import { AvailableTimeSlots } from "./AvailableTimeSlots";
import styles from './index.module.css';
import { ReservedTime } from "./ReservedTime";

export default function SingleCompanySchedule({
  id,
  name,
  slots,
}: IGroupedData) {
  return (
    <div className={`module_container ${styles.company_schedule__container}`}>
      <h2 
        className={`module_container box_shadow border_radius_3 ${styles.company_schedule__title}`}
      >
        {name}
      </h2>
      <ReservedTime id={id}/>
      <AvailableTimeSlots
        id={id}
        name={name}
        slots={slots}
      />
    </div>
  )
}
