let events = [
  {
    _id: "0",
    start: new Date("June 14, 2019  18:00:00"),
    end: new Date("June 14, 2019  20:00:00"),
    title: "The Observatory"
  },
  {
    _id: "1",
    start: new Date("June 14, 2019  20:00:00"),
    end: new Date("June 14, 2019  22:00:00"),
    title: "Inch Chua"
  },
  {
    _id: "2",
    start: new Date("June 15, 2019  16:00:00"),
    end: new Date("June 15, 2019  18:00:00"),
    title: "Tabitha Nauser"
  },
  {
    _id: "3",
    start: new Date("June 15, 2019  18:00:00"),
    end: new Date("June 15, 2019  20:00:00"),
    title: "Jasmine Sokko"
  },
  {
    _id: "4",
    start: new Date("June 15, 2019  20:00:00"),
    end: new Date("June 15, 2019  22:00:00"),
    title: "The Sam Willows"
  },
  {
    _id: "5",
    start: new Date("June 16, 2019  16:00:00"),
    end: new Date("June 16, 2019  18:00:00"),
    title: ".Gif"
  },
  {
    _id: "6",
    start: new Date("June 16, 2019  18:00:00"),
    end: new Date("June 16, 2019  20:00:00"),
    title: "Gentle Bones"
  },
  {
    _id: "7",
    start: new Date("June 16, 2019  20:00:00"),
    end: new Date("June 16, 2019  22:00:00"),
    title: "Wormrot"
  }
];

export function getEvents() {
  return events;
}

export function deleteEvent(id) {
  const remainingEvents = events.filter(event => event._id !== id);
  events = remainingEvents;
  return remainingEvents;
}

export function deleteEventByMusician(name) {
  const remainingEvents = events.filter(event => event.title !== name);
  events = remainingEvents;
  return remainingEvents;
}

export function saveEvent(event) {
  let existing = events.find(eve => eve._id === event._id);

  if (existing) {
    const merged = { ...existing, ...event };
    events = events.filter(event => event._id !== existing._id);
    events.push(merged);
    return merged;
  } else {
    const newEvent = {
      _id: Date.now().toString(),
      ...event
    };
    events.push(newEvent);
    return newEvent;
  }
}

export function sortEvents(Events) {
  return Events.sort(function(a, b) {
    return new Date(a.start) - new Date(b.start);
  });
}

export const sortedEvents = sortEvents(events);

export const filterEvents = date =>
  events.filter(event => event.start.toDateString() === date);
