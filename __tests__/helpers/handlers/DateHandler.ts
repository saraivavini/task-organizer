import { DateHandler } from '../../../src/helpers';

describe('DateHandler tests', () => {
  it('formatDate tests', () => {
    const date = new Date(2010, 10, 10, 10, 10);

    const formattedDate = DateHandler.formatDate(date, 'HOUR_WITH_MINUTES');

    expect(formattedDate).toBe('10:10');
  });
  it('setHoursAndMinutes tests', () => {
    const currentDate = new Date(2010, 10, 10, 10);
    const newDate = new Date(2005, 5, 5, 5, 5);

    const addedDate = DateHandler.setHoursAndMinutes(currentDate, newDate);

    expect(addedDate.getHours()).toBe(5);
    expect(addedDate.getMinutes()).toBe(5);
  });
  it('setDayMonthAndYear tests', () => {
    const currentDate = new Date(2010, 10, 10, 10);
    const newDate = new Date(2005, 5, 5, 5, 5);

    const addedDate = DateHandler.setDayMonthAndYear(currentDate, newDate);

    expect(addedDate.getDate()).toBe(5);
    expect(addedDate.getMonth()).toBe(5);
    expect(addedDate.getFullYear()).toBe(2005);
  });
});
