import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import EventsPage from "./components/EventsPage/EventsPage";
import TicketsPage from "./components/TicketsPage/TicketsPage";
import AdminPage from "./components/AdminPage/AdminPage";
import EventForm from "./components/EventForm/EventForm.jsx";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <main>
            <Switch>
              <Route
                path="admin/musicians/:id"
                render={props => <EventForm {...props} returnPath="/admin" />}
              />
              <Route
                path="admin/musician/new"
                render={props => <EventForm {...props} returnPath="/admin" />}
              />
              <Route
                path="/musicians/:id"
                render={props => <Modal {...props} returnPath="/events" />}
              />
              <Route path="/events" component={EventsPage} />
              <Route path="/tickets" component={TicketsPage} />
              <Route path="/admin" component={AdminPage} />
              <Route path="/home" component={HomePage} />
              <Redirect from="/" to="/home" />
            </Switch>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
