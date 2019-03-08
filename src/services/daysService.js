import { getEvents } from "./eventsService";

let days = [
  {
    _id: "0",
    date: new Date("June 14, 2019"),
    price: 40
  },
  {
    _id: "1",
    date: new Date("June 15, 2019"),
    price: 60
  },
  {
    _id: "2",
    date: new Date("June 16, 2019"),
    price: 60
  }
];

export function getDays() {
  return days;
}
const events = getEvents();

export const filterDay = Day => {
  return events.filter(event => event.start.getDay() === Day.getDay());
};
