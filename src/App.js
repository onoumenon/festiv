import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import TicketsPage from "./components/TicketsPage/TicketsPage";
import AdminPage from "./components/AdminPage/AdminPage";
import EventForm from "./components/EventForm/EventForm.jsx";
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar />
          <main>
            <Switch>
              <Route
                path="/admin/musicians/new"
                render={props => <EventForm {...props} returnPath="/admin" />}
              />
              <Route
                path="/admin/musicians/:name"
                render={props => <EventForm {...props} returnPath="/admin" />}
              />
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
