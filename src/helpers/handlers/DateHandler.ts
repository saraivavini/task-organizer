import { format as formatFn } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const DATE_FORMATS = {
  WEEKDAY_DAY_AND_MONT: "EEEE',' dd 'de' MMMM",
  HOUR_WITH_MINUTES: "hh':'mm",
  DAY_WITH_MONTH: "dd'/'MM",
} as const;

function formatDate(date: Date, format: keyof typeof DATE_FORMATS) {
  return formatFn(date, DATE_FORMATS[format], { locale: ptBR });
}

export const DateHandler = {
  formatDate,
};
