import {
  format as dateFnsFormat,
  getTime,
  getDate,
  getMinutes,
  getHours,
  getMonth,
  getYear,
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
  return dateFnsFormat(date, DATE_FORMATS[format], { locale: ptBR });
}

function setHoursAndMinutes(currentDate: Date, newDate: Date) {
  const hours = getHours(newDate);
  const minutes = getMinutes(newDate);
  const year = getYear(currentDate);
  const month = getMonth(currentDate);
  const date = getDate(currentDate);

  return new Date(year, month, date, hours, minutes, 0, 0);
}

function setDayMonthAndYear(currentDate: Date, newDate: Date) {
  const date = getDate(newDate);
  const month = getMonth(newDate);
  const year = getYear(newDate);
  const hours = getHours(currentDate);
  const minutes = getMinutes(currentDate);

  return new Date(year, month, date, hours, minutes, 0, 0);
}

export const DateHandler = {
  formatDate,
  setHoursAndMinutes,
  getDate,
  setDayMonthAndYear,
  getTime,
  addMinutes,
};
