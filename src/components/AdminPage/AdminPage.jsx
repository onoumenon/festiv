import React from "react";
import MusiciansTable from "../MusiciansTable/MusiciansTable";
import EventCalendar from "../EventCalendar/EventCalendar";

function AdminPage({
  musicians,
  changeStateOption,
  show,
  showModal,
  hideModal,
  onEventDrop,
  onEventResize,
  handleSelect,
  handleChange,
  handleSubmit,
  handleDelete,
  events,
  modal
}) {
  return (
    <React.Fragment>
      <div className="text-center mx-auto w-75" data-testid="admin-page">
        <MusiciansTable musicians={musicians} events={events} admin="admin" />
        <EventCalendar
          show={show}
          changeStateOption={changeStateOption}
          hideModal={hideModal}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          handleDelete={handleDelete}
          modal={modal}
          showModal={showModal}
          events={events}
          onEventDrop={onEventDrop}
          onEventResize={onEventResize}
          handleSelect={handleSelect}
          musicians={musicians}
        />
      </div>
    </React.Fragment>
  );
}

export default AdminPage;
