import { useSelector } from "react-redux"
import { selectAllTimeSlots } from "../../store";
import { SingleCompanySchedule } from "./SingleCompanySchedule";
import global from '../index.module.css';
import styles from './index.module.css';

export default function SchedulerContainer() {
  const allData = useSelector(selectAllTimeSlots);

  return (
    <div className={`${global.container} ${styles.scheduler__container}`}>
      {allData?.map((item) => {
        return <SingleCompanySchedule key={item.id} {...item}/>
      })}
    </div>
  )
}
