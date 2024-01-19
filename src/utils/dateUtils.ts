import dayjs from "dayjs"
import { isNum } from "./number"

const dayjsObj = dayjs()

interface HoursType {
  year?: number
  month?: number
  day?: number
  h?: number
  m?: number
  s?: number
  ms?: number
}

type DayjsType = typeof dayjsObj

export const setDate = (
  date: DayjsType,
  { year, month, day, h, m, s, ms }: HoursType
): DayjsType => {
  let d = date.clone()

  isNum(year) && (d = d.year(year!))
  isNum(month) && (d = d.month(month!-1))
  isNum(day) && (d = d.date(day!))

  isNum(h) && (d = d.hour(h!))
  isNum(m) && (d = d.minute(m!))
  isNum(s) && (d = d.second(s!))
  isNum(ms) && (d = d.millisecond(ms!))

  return d
}

export const startDay = (date?: DayjsType) => setDate((date || dayjs()), { h: 0, m: 0, s: 0, ms: 0 })
export const endDay = (date?: DayjsType) => setDate((date || dayjs()), { h: 23, m: 23, s: 59, ms: 999 })

export const startMonth = (date?: DayjsType) => setDate((date || dayjs()), { day: 1, h: 0, m: 0, s: 0, ms: 0 })
export const endMonth = (date?: DayjsType) => setDate((date || dayjs()), { day: (date || dayjs()).endOf('month').date(), h: 23, m: 23, s: 59, ms: 999 })

export const startAndEndOfWeek = (date?: DayjsType) => {
  const d = date || dayjs()

  const startOfWeek = startDay(dayjs(d).startOf('week'))
  const endOfWeek = endDay(dayjs(d).endOf('week'))

  return [startOfWeek, endOfWeek]
}


export const startAndEndOfMonth = (date?: DayjsType) => {
  const d = date || dayjs()

  const startOfMonth = startMonth(d)
  const endOfMonth = endMonth(d)

  return [startOfMonth, endOfMonth]
}

export const startAndEndOfDay = (date?: DayjsType) => {
  const d = date || dayjs()

  const startOfDay = startDay(d)
  const endOfDay = endDay(d)

  return [startOfDay, endOfDay]
}

export const getDbDateTime = (date: string|Date) => new Date(date).getTime()