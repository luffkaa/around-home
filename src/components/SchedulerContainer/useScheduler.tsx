import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { 
  addNewChosenSlot,
  deleteChosenSlot,
  selectChosenSlot,
  selectReservedSlot
} from "../../store";
import { IUseScheduler } from "./types";



export default function useScheduler({
  id,
  singleSlot,
}: IUseScheduler) {
  const [isTimeReserved, setIsTimeReserved] = useState<boolean>(false)
  const [isTimeForCompanyReserved, setIsTimeForCompanyReserved] = useState<boolean>(false);

  const getChosenSlot = useCallback((state) => 
    selectChosenSlot(state, id), [id]
  )
  const chosenSlot = useSelector(getChosenSlot);

  const getReservedSlot = useCallback((state) => 
    singleSlot && 
      selectReservedSlot(state, singleSlot?.start_time, singleSlot?.end_time),
    [singleSlot]
  )
  
  const reservedSlot = useSelector(getReservedSlot)

  const dispatch = useDispatch();

  const handleDeleteSlot = () => {
    dispatch(deleteChosenSlot(chosenSlot!))
  }

  const handleAddNewSlot = () => {
    dispatch(addNewChosenSlot(singleSlot!))
  }

  useEffect(() => {
    if (!!reservedSlot && !!singleSlot) {
      setIsTimeReserved(reservedSlot.end_time === singleSlot.end_time && 
        reservedSlot.start_time === singleSlot.start_time)
    } else {
      setIsTimeReserved(false)
    }
  }, [reservedSlot, singleSlot])

  useEffect(() => {
    if(!!chosenSlot && !!singleSlot) {
      setIsTimeForCompanyReserved(singleSlot.id === chosenSlot.id)
    } else {
      setIsTimeForCompanyReserved(false)
    }
  }, [chosenSlot, singleSlot])

  return {
    handleDeleteSlot,
    handleAddNewSlot,
    chosenSlot,
    isTimeReserved,
    isTimeForCompanyReserved,
  }
}
