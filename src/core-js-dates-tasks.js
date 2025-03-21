/** ********************************************************************************************
 *                                                                                             *
 * Please read the following tutorial before implementing tasks:                               *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date       *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates#date_object *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl       *
 *                                                                                             *
 ********************************************************************************************* */

/**
 * By the passed date returns the number of seconds elapsed since 00:00 01.01.1970.
 *
 * @param {string} date - date and time.
 * @return {number} milliseconds in timestamp.
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 0
 * '04 Dec 1995 00:12:00 UTC' => 818035920000
 */
function dateToTimestamp(date) {
  return Date.parse(date);
}

/**
 * Returns the time in hh:mm:ss format from the received date.
 *
 * @param {Date} date - date.
 * @return {string} time in hh:mm:ss format.
 *
 * @example:
 * Date(2023, 5, 1, 8, 20, 55) => '08:20:55'
 * Date(2015, 10, 20, 23, 15, 1) => '23:15:01'
 */
function getTime(date) {
  return date.toTimeString().split(' ')[0];
}

/**
 * Returns the name of the day of the week for a given date string.
 *
 * @param {string} date - date and time.
 * @return {string} the name of the day of the week
 *
 * @example:
 * '01 Jan 1970 00:00:00 UTC' => 'Thursday'
 * '03 Dec 1995 00:12:00 UTC' => 'Sunday'
 * '2024-01-30T00:00:00.000Z' => 'Tuesday'
 */
function getDayName(date) {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const dayIndex = new Date(date).getUTCDay();
  return days[dayIndex];
}
/**
 * Returns the date of the next Friday from a given date.
 *
 * @param {Date} date
 * @return {Date}
 *
 * @example:
 * Date('2024-02-03T00:00:00Z') => Date('2024-02-09T00:00:00Z')
 * Date('2024-02-13T00:00:00Z') => Date('2024-02-16T00:00:00Z')
 * Date('2024-02-16T00:00:00Z') => Date('2024-02-23T00:00:00Z')
 */
function getNextFriday(date) {
  const tilFriday = 5 - date.getUTCDay();
  if (tilFriday === 0) return new Date(date.setUTCDate(date.getUTCDate() + 7));
  if (tilFriday > 0)
    return new Date(date.setUTCDate(date.getUTCDate() + tilFriday));
  if (tilFriday < 0) return new Date(date.setUTCDate(date.getUTCDate() + 6));
  return date;
}

/**
 * Returns the number of days in a specified month and year.
 *
 * @param {number} month - The month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The year as a four-digit number.
 * @return {number}
 *
 * @example:
 * 1, 2024 => 31
 * 2, 2024 => 29
 */
function getCountDaysInMonth(month, year) {
  const monthsInYear = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const isNotLeap = Boolean(year % 4);
  if (!isNotLeap) monthsInYear[1] += 1;
  return monthsInYear[month - 1];
}

/**
 * Returns the total number of days between two dates, including both the start and end dates.
 *
 * @param {string} dateStart - The start date of the period in ISO 8601 format.
 * @param {string} dateEnd - The end date of the period in ISO 8601 format.
 * @return {number} - The total count of days in the period.
 *
 * @example:
 * '2024-02-01T00:00:00.000Z', '2024-02-02T00:00:00.000Z'  => 2
 * '2024-02-01T00:00:00.000Z', '2024-02-12T00:00:00.000Z'  => 12
 */
function getCountDaysOnPeriod(dateStart, dateEnd) {
  const difference = Date.parse(dateEnd) - Date.parse(dateStart);
  return difference / (1000 * 3600 * 24) + 1;
}
/**
 * Returns true if a given date is within a specified range, including both the start and end dates.
 *
 * @typedef {{
 * start: string, // The start date in ISO 8601 format (e.g., 'YYYY-MM-DD').
 * end: string    // The end date in ISO 8601 format.
 * }} DatePeriod
 *
 * @param {string} date - The date to check, in ISO 8601 format.
 * @param {DatePeriod} period - The period to check against.
 * @return {boolean} - True if the date is within the range, false otherwise.
 *
 * @example:
 * '2024-02-01', { start: '2024-02-02', end: '2024-03-02' } => false
 * '2024-02-02', { start: '2024-02-02', end: '2024-03-02' } => true
 * '2024-02-10', { start: '2024-02-02', end: '2024-03-02' } => true
 */
function isDateInPeriod(date, period) {
  const start = Date.parse(period.start);
  const end = Date.parse(period.end);
  const day = Date.parse(date);
  if (day >= start && day <= end) return true;
  return false;
}

/**
 * Returns the date formatted in 'M/D/YYYY, hh:mm:ss a'.
 *
 * @param {string} date - The date to be formatted, in ISO 8601 format (e.g., 'YYYY-MM-DDTHH:mm:ss.sssZ').
 * @return {string} - The date formatted in 'Month/Day/Year, Hour:Minute:Second AM/PM'.
 *
 * @example:
 * '2024-02-01T15:00:00.000Z' => '2/1/2024, 3:00:00 PM'
 * '1999-01-05T02:20:00.000Z' => '1/5/1999, 2:20:00 AM'
 * '2010-12-15T22:59:00.000Z' => '12/15/2010, 10:59:00 PM'
 */
function formatDate(/* date */) {
  throw new Error('Not implemented');
  // const options = { timeZone: 'UTC' };
  // const day = new Date(date).toLocaleDateString('en-US', options);
  // const hours = new Date(date).toLocaleTimeString('en-US', options);
  // return `${day}, ${hours}`;
}

/**
 * Returns the total number of weekend days (Saturdays and Sundays) in a specified month and year.
 *
 * @param {number} month - The source month as a number (1 for January, 2 for February, etc.).
 * @param {number} year - The source year as a four-digit number.
 * @return {number} - The total count of weekend days in the month.
 *
 * @example:
 * 5, 2022 => 9
 * 12, 2023 => 10
 * 1, 2024 => 8
 */
function getCountWeekendsInMonth(/* month, year */) {
  throw new Error('Not implemented');
  // let result = 0;
  // const dateStart = new Date(Date.UTC(year, month, 0));
  // const endDate = dateStart.getUTCDate();
  // for (let i = 2; i <= endDate + 1; i += 1) {
  //   const newDate = new Date(
  //     dateStart.getUTCFullYear(),
  //     dateStart.getUTCMonth(),
  //     i
  //   );
  //   if (newDate.getUTCDay() === 6 || newDate.getUTCDay() === 0) result += 1;
  // }
  // return result;
}
/**
 * Returns the week number of the year for a given date.
 * The first week of the year is defined according to ISO8601.
 * The first day of the week is Monday.
 *
 * @param {Date} date - The date for which to find the week number.
 * @return {number} - The week number of the year.
 *
 * @example:
 * Date(2024, 0, 3) => 1
 * Date(2024, 0, 31) => 5
 * Date(2024, 1, 23) => 8
 */
function getWeekNumberByDate(/* date */) {
  throw new Error('Not implemented');
  // let result = 0;
  // for (let i = 1; i <= 12; i += 1) {
  //   const checkDate = new Date(date.getUTCFullYear(), i);
  //   for (let j = 1; j <= checkDate.getUTCDate() + 2; j += 1) {
  //     if (result === 0 && checkDate.getUTCDay() === 4) result += 1;
  //     if (result === 0) {
  //       checkDate.setUTCDate(j);
  //     } else {
  //       checkDate.setUTCDate(j + 1);
  //     }
  //     if (checkDate.toUTCString() === date.toUTCString() && result === 0)
  //       return 1;
  //     if (checkDate.getUTCDay() === 0) result += 1;
  //     if (checkDate.toUTCString() === date.toUTCString()) return result;
  //   }
  // }
  // return 1;
}

/**
 * Returns the date of the next Friday the 13th from a given date.
 * Friday the 13th is considered an unlucky day in some cultures.
 *
 * @param {Date} date - The starting date to search from.
 * @return {Date} - The date of the next Friday the 13th.
 *
 * @example:
 * Date(2024, 0, 13) => Date(2024, 8, 13)
 * Date(2023, 1, 1) => Date(2023, 9, 13)
 */
function getNextFridayThe13th(/* date */) {
  throw new Error('Not implemented');
  // for (let i = date.getMonth(); i <= 24; i += 1) {
  //   const checkDate = new Date(date.getFullYear(), i);
  //   for (let j = 1; j <= checkDate.getDate() + 2; j += 1) {
  //     checkDate.setUTCDate(j + 1);
  //     if (Date.parse(checkDate) < Date.parse(date));
  //     if (checkDate.getUTCDay() === 5 && checkDate.getUTCDate() === 13)
  //       return new Date(
  //         checkDate.getUTCFullYear(),
  //         checkDate.getUTCMonth(),
  //         checkDate.getUTCDate()
  //       );
  //   }
  // }
  // return undefined;
}

/**
 * Returns the quarter of the year for a given date.
 *
 * @param {Date} date - The date for which to find the quarter.
 * @return {number} - The quarter of the year (1-4).
 *
 * @example:
 * Date(2024, 1, 13) => 1
 * Date(2024, 5, 1) => 2
 * Date(2024, 10, 10) => 4
 */
function getQuarter(date) {
  if (date.getUTCMonth() <= 3) return 1;
  if (date.getUTCMonth() <= 6) return 2;
  if (date.getUTCMonth() <= 9) return 3;
  if (date.getUTCMonth() <= 12) return 4;
  return undefined;
}

/**
 * Generates an employee's work schedule within a specified date range, based on a pattern of working and off days.
 * The start and end dates of the period are inclusive.
 *
 * @typedef {{
 * start: string, // The start date in 'DD-MM-YYYY' format.
 * end: string    // The end date in 'DD-MM-YYYY' format.
 * }} DatePeriod
 *
 * @param {DatePeriod} period - The start and end dates of the period.
 * @param {number} countWorkDays - The number of consecutive working days.
 * @param {number} countOffDays - The number of consecutive days off.
 * @return {Array<string>} - An array of dates in 'DD-MM-YYYY' format representing the work schedule.
 *
 * @example:
 * { start: '01-01-2024', end: '15-01-2024' }, 1, 3 => ['01-01-2024', '05-01-2024', '09-01-2024', '13-01-2024']
 * { start: '01-01-2024', end: '10-01-2024' }, 1, 1 => ['01-01-2024', '03-01-2024', '05-01-2024', '07-01-2024', '09-01-2024']
 */
function getWorkSchedule(/* period, countWorkDays, countOffDays */) {
  throw new Error('Not implemented');
  // function parseDate(dateStr) {
  //   const [day, month, year] = dateStr.split('-').map(Number);
  //   return new Date(year, month - 1, day);
  // }

  // function formatDateThis(date) {
  //   const day = String(date.getDate()).padStart(2, '0');
  //   const month = String(date.getMonth() + 1).padStart(2, '0');
  //   const year = date.getFullYear();
  //   return `${day}-${month}-${year}`;
  // }

  // const startDate = parseDate(period.start);
  // const endDate = parseDate(period.end);
  // const currentDate = new Date(startDate);
  // const workSchedule = [];

  // while (currentDate <= endDate) {
  //   for (let i = 0; i < countWorkDays && currentDate <= endDate; i += 1) {
  //     workSchedule.push(formatDateThis(currentDate));
  //     currentDate.setDate(currentDate.getDate() + 1);
  //   }

  //   currentDate.setDate(currentDate.getDate() + countOffDays);
  // }

  // return workSchedule;
}

/**
 * Determines whether the year in the provided date is a leap year.
 * A leap year is a year divisible by 4, but not by 100, unless it is also divisible by 400.
 *
 * @param {Date} date - The date from which the year will be checked.
 * @return {boolean} - True if the year is a leap year, false otherwise.
 *
 * @example:
 * Date(2024, 2, 1) => true
 * Date(2022, 2, 1) => false
 * Date(2020, 2, 1) => true
 */
function isLeapYear(date) {
  if (date.getUTCFullYear() % 4 === 0) return true;
  return false;
}

module.exports = {
  dateToTimestamp,
  getTime,
  getDayName,
  getNextFriday,
  getCountDaysInMonth,
  getCountDaysOnPeriod,
  isDateInPeriod,
  formatDate,
  getCountWeekendsInMonth,
  getWeekNumberByDate,
  getNextFridayThe13th,
  getQuarter,
  getWorkSchedule,
  isLeapYear,
};
