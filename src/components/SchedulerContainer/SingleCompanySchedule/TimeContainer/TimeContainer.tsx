import { Time } from "./Time";
import { ITime } from "../types";

export default function TimeContainer({
  start_time,
  end_time,
}: ITime) {
  return (
    <>
      <Time slot={start_time}/> - <Time slot={end_time}/>
    </>
  )
}
