import React, { Component } from "react";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Calendar from "react-big-calendar";

import {
  getEvents,
  deleteEvent,
  saveEvent
} from "../../services/eventsService";
import Modal from "../common/Modal/Modal";
import { getMusician } from "../../services/musicianService";
import { deleteEventByMusician } from "./../../services/eventsService";

import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./EventCalendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);

class EventCalendar extends Component {
  state = {
    events: getEvents(),
    showModal: { show: false },
    modal: { title: "", id: "" },
    selectedOption: { title: "The Observatory", start: "", end: "" }
  };

  showModal = event => {
    const copy = { ...this.state.modal };
    copy["title"] = event.title;
    copy["id"] = event._id;
    this.setState({ modal: copy });

    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, start, end } = this.state.selectedOption;
    const _id = Date.now().toString();
    let newEvent = { _id, start, end, title };
    this.setState({
      events: [...this.state.events, newEvent]
    });

    saveEvent(newEvent);
    this.hideModal();
  };

  handleChange = ({ currentTarget: input }) => {
    const copy = { ...this.state.selectedOption };
    copy["title"] = input.value;
    this.setState({ selectedOption: copy });
  };

  handleDelete = ({ currentTarget: input }) => {
    let events = [];

    getMusician(input.value)
      ? (events = deleteEventByMusician(input.value))
      : (events = deleteEvent(input.value));

    this.setState({ events });
    this.hideModal();
  };

  onEventResize = (type, { event, start, end }) => {
    const copy = [...this.state.events];
    const eventFound = copy.find(stateEvent => stateEvent._id === event._id);
    eventFound.start = start;
    eventFound.end = end;

    this.setState({ events: copy });
  };

  onEventDrop = ({ event, start, end }) => {
    const copy = [...this.state.events];

    const eventFound = copy.find(stateEvent => stateEvent._id === event._id);

    eventFound.start = start;
    eventFound.end = end;

    this.setState({ events: copy });
  };

  handleSelect = ({ start, end }) => {
    this.showModal({ title: "Select Musician" });
    const copy = { ...this.state.selectedOption };
    copy.start = start;
    copy.end = end;
    this.setState({ selectedOption: copy });
  };

  render() {
    return (
      <div className="Calendar mb-5 p-2">
        <header className="Calendar-header">
          <h1 className="Calendar-title">Event Calendar</h1>
        </header>
        <Modal
          show={this.state.show}
          handleClose={this.hideModal}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          handleDelete={this.handleDelete}
          children={this.state.modal}
        />
        <DnDCalendar
          selectable
          resizable
          className="Calendar-body"
          defaultView={Calendar.Views.DAY}
          steps={24}
          timeslots={4}
          scrollToTime={new Date("June 14, 2018")}
          defaultDate={new Date("June 14, 2019")}
          onSelectEvent={this.showModal}
          events={this.state.events}
          onEventDrop={this.onEventDrop}
          onEventResize={this.onEventResize}
          style={{ height: "100vh" }}
          onSelectSlot={this.handleSelect}
        />
      </div>
    );
  }
}

export default EventCalendar;
