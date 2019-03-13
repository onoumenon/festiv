import React, { Component } from "react";
import moment from "moment";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import Calendar from "react-big-calendar";
import Modal from "../common/Modal/Modal";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./EventCalendar.css";

Calendar.setLocalizer(Calendar.momentLocalizer(moment));

const DnDCalendar = withDragAndDrop(Calendar);

class EventCalendar extends Component {
  firstMusician = musicians => {
    try {
      const firstMusician = musicians[0].name;
      return firstMusician;
    } catch (err) {
      this.setState({
        modal: {
          title: "Please add musicians in Admin.",
          id: "Click the '+' button to add musician."
        }
      });
      this.setState({ show: true });
    }
  };
  componentDidMount() {
    const musicians = this.props.musicians;
    const firstMusician = this.firstMusician(musicians);
    this.props.changeStateOption(firstMusician);
  }
  render() {
    const {
      show,
      showModal,
      hideModal,
      onEventDrop,
      onEventResize,
      handleSelect,
      handleChange,
      handleSubmit,
      handleDelete,
      musicians,
      events,
      modal
    } = this.props;
    const minTime = new Date();
    minTime.setHours(8, 30, 0);
    return (
      <div className="Calendar mb-5 p-2">
        <header className="Calendar-header">
          <h1 className="Calendar-title">Event Calendar</h1>
        </header>
        <Modal
          show={show}
          handleClose={hideModal}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          musicians={musicians}
          children={modal}
        />
        <DnDCalendar
          selectable
          resizable
          className="Calendar-body"
          defaultView={Calendar.Views.DAY}
          steps={24}
          timeslots={4}
          min={minTime}
          scrollToTime={new Date("June 14, 2018")}
          defaultDate={new Date("June 14, 2019")}
          onSelectEvent={showModal}
          events={events}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          style={{ height: "100vh" }}
          onSelectSlot={handleSelect}
        />
      </div>
    );
  }
}

export default EventCalendar;
