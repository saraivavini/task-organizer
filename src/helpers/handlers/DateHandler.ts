import {
  format as formatFn,
  getTime as getTimeFn,
  getDate as getDateFn,
  setMinutes,
  setHours,
  getMinutes,
  getHours,
  setMonth,
  getMonth,
  getYear,
  setDay,
  set,
  addMinutes,
} from 'date-fns';
import { ptBR } from 'date-fns/locale';

const DATE_FORMATS = {
  WEEKDAY_DAY_AND_MONT: "EEEE',' dd 'de' MMMM",
  HOUR_WITH_MINUTES: "HH':'mm",
  DAY_WITH_MONTH: "dd'/'MM",
  DAY_MONTH_YEAR: "dd'/'MM'/'yyyy",
} as const;

function formatDate(date: Date, format: keyof typeof DATE_FORMATS) {
  return formatFn(date, DATE_FORMATS[format], { locale: ptBR });
}

function setHoursAndMinutes(currentDate: Date, newDate: Date) {
  const hours = getHours(newDate);
  const minutes = getMinutes(newDate);

  return set(currentDate, { hours, minutes, seconds: 0 });
}

function setDayMonthAndYear(currentDate: Date, newDate: Date) {
  const date = getDate(newDate);
  const month = getMonth(newDate);
  const year = getYear(newDate);

  return set(currentDate, { date, month, year });
}

function getDate(date: Date) {
  return getDateFn(date);
}

function getTime(date: Date) {
  return getTimeFn(date);
}

export const DateHandler = {
  formatDate,
  setHoursAndMinutes,
  getDate,
  setDayMonthAndYear,
  getTime,
  addMinutes,
};
