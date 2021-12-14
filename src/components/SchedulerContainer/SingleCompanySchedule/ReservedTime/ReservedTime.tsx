import useScheduler from "../../useScheduler";
import { TimeContainer } from "../TimeContainer";
import { IReservedTime } from "../types";
import style from "./index.module.css";

export default function ReservedTime({
  id,
}: IReservedTime) {
  const {
    handleDeleteSlot,
    chosenSlot,
  } = useScheduler({id})

  return (
    <div
      className={`module_container box_shadow border_radius_3 ${style.reserved_slot__container} ${!!chosenSlot && style.reserved_slot__delete}`
      }
      onClick={!!chosenSlot ? () => handleDeleteSlot() : undefined}
    >
      <h3>Reserved</h3>
      {!!chosenSlot &&
        <>
          <span>{chosenSlot.weekday} </span>
          <TimeContainer
            start_time={chosenSlot.start_time}
            end_time={chosenSlot.end_time}
          />
          <div className={style.reserved_slot__delete_btn}> x</div>
        </>
      }
    </div>
  )
}
