import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  getMusicians,
  saveMusician,
  getMusicianByName
} from "./services/musicianService";
import {
  getEvents,
  deleteEventByMusician,
  deleteEvent,
  saveEvent
} from "./services/eventsService";

import NavBar from "./components/common/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import TicketsPage from "./components/TicketsPage/TicketsPage";
import AdminPage from "./components/AdminPage/AdminPage";
import MusicianForm from "./components/MusicianForm/MusicianForm";
import Footer from "./components/common/Footer/Footer";
import TicketCart from "./components/TicketsPage/TicketCart";
import TicketPaid from "./components/TicketsPage/TicketPaid";
import ErrorBoundary from "./components/ErrorHandling/ErrorBoundary";

class App extends Component {
  state = {
    musicians: getMusicians(),
    events: getEvents(),
    showModal: { show: false },
    modal: { title: "", id: "" },
    selectedOption: { title: "", start: "", end: "" },
    user: {}
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

  handleEventSubmit = event => {
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

  handleEventChange = ({ currentTarget: input }) => {
    const copy = { ...this.state.selectedOption };
    copy["title"] = input.value;
    this.setState({ selectedOption: copy });
  };

  handleEventDelete = ({ currentTarget: input }) => {
    let events = [];

    getMusicianByName(input.value)
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

  handleEventSelect = ({ start, end }) => {
    const copy = { ...this.state.selectedOption };

    if (!copy.title) {
      this.setState({
        modal: {
          title: "Please add musicians.",
          id: "Click the '+' button to add musician."
        }
      });
      this.setState({ show: true });
      return;
    }
    this.showModal({ title: "Select Musician" });
    copy.start = start;
    copy.end = end;
    this.setState({ selectedOption: copy });
  };

  handleData = data => {
    if (!data) {
      this.props.history.replace(this.props.returnPath);
    }
    const newMusicians = saveMusician(data);
    this.setState({ musicians: newMusicians });
  };

  deleteStateData = (id, remainingEvents) => {
    const copy = [...this.state.musicians];
    const remainingMusicians = copy.filter(musician => musician._id !== id);
    this.setState({ musicians: remainingMusicians });
    this.setState({ events: remainingEvents });
  };

  changeStateOption = firstMusician => {
    const selectedOption = this.state.selectedOption;
    selectedOption.title = firstMusician;
    this.setState({ selectedOption });
  };

  handlePayload = payload => {
    const user = { ...payload };
    this.setState({ user });
  };

  render() {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <div>
            <div className="clip-img" />
            <NavBar />
            <main>
              <Switch>
                <Route
                  path="/admin/musicians/new"
                  render={props => (
                    <MusicianForm
                      handleData={this.handleData}
                      deleteStateData={this.deleteStateData}
                      musicians={this.state.musicians}
                      {...props}
                      returnPath="/admin"
                    />
                  )}
                />
                <Route
                  path="/admin/musicians/:id"
                  render={props => (
                    <MusicianForm
                      handleData={this.handleData}
                      deleteStateData={this.deleteStateData}
                      musicians={this.state.musicians}
                      musician={this.state.musicians}
                      {...props}
                      returnPath="/admin"
                    />
                  )}
                />
                <Route
                  exact
                  path="/tickets/paid"
                  render={props => (
                    <TicketPaid
                      user={this.state.user}
                      {...props}
                      returnPath="/"
                    />
                  )}
                />
                <Route
                  path="/tickets/buy"
                  render={props => (
                    <TicketCart
                      handlePayload={this.handlePayload}
                      {...props}
                      returnPath="/tickets/paid"
                    />
                  )}
                />
                <Route
                  path="/tickets"
                  render={props => (
                    <TicketsPage
                      musicians={this.state.musicians}
                      {...props}
                      returnPath="/tickets/buy"
                    />
                  )}
                />
                <Route
                  path="/admin"
                  render={props => (
                    <AdminPage
                      musicians={this.state.musicians}
                      show={this.state.show}
                      changeStateOption={this.changeStateOption}
                      hideModal={this.hideModal}
                      handleChange={this.handleEventChange}
                      handleSubmit={this.handleEventSubmit}
                      handleDelete={this.handleEventDelete}
                      modal={this.state.modal}
                      showModal={this.showModal}
                      events={this.state.events}
                      onEventDrop={this.onEventDrop}
                      onEventResize={this.onEventResize}
                      handleSelect={this.handleEventSelect}
                      {...props}
                      returnPath="/admin"
                    />
                  )}
                />
                <Route
                  path="/"
                  render={props => (
                    <HomePage
                      musicians={this.state.musicians}
                      events={this.state.events}
                      {...props}
                      returnPath="/"
                    />
                  )}
                />
                <Redirect from="/home" to="/" />
              </Switch>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    );
  }
}

export default App;
