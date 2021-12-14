import { handleDayData } from "../../../../../utils";
import { IDay } from "../../types";

export default function Time({slot}: IDay) {
  const { hours, minutes } = handleDayData(slot)
  
  return (
    <span>{hours}:{minutes}</span>
  )
}
