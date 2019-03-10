import { getEvents } from "./eventsService";

let days = [
  {
    _id: "0",
    date: new Date("June 14, 2019").toDateString(),
    price: 40
  },
  {
    _id: "1",
    date: new Date("June 15, 2019").toDateString(),
    price: 60
  },
  {
    _id: "2",
    date: new Date("June 16, 2019").toDateString(),
    price: 60
  }
];

let allDaysPass = [
  {
    _id: "3",
    date: "June 14 - June 16 2019",
    price: 120
  }
];

export function getDays() {
  return days;
}

export function getDay(id) {
  const foundDay = days.find(day => day._id === id);
  if (!foundDay) {
    return;
  } else {
    return foundDay;
  }
}

export function getDaybyDaySubStr(date, substrOption = 15) {
  const foundDay = days.find(
    day => day.date.substring(0, substrOption) === date
  );
  if (!foundDay) {
    return;
  } else {
    return foundDay;
  }
}

export function getTicketOptions() {
  return [...days, allDaysPass];
}

export function getDates() {
  return allDaysPass;
}

const events = getEvents();

export const filterDay = Day => {
  return events.filter(event => event.start.getDay() === Day.getDay());
};
