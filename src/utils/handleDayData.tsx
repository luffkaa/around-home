import { MONTHS, WEEKDAYS } from "../constants"
import { handleTwoDigit } from "./handleTwoDigit"

export const handleDayData = (date: Date) => {
  const fullDate = new Date(date)
  const year = fullDate.getFullYear()
  const month = MONTHS[fullDate.getMonth()]
  const day = fullDate.getDate()
  const hours = fullDate.getHours()
  const minutes = fullDate.getMinutes()
  const seconds = fullDate.getSeconds()
  const weekday = WEEKDAYS[fullDate.getDay()]

  return {
    year,
    month,
    day,
    hours: handleTwoDigit(hours),
    minutes: handleTwoDigit(minutes),
    seconds,
    weekday,
  }
}
