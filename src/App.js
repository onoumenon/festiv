import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/common/NavBar/NavBar";
import HomePage from "./components/HomePage/HomePage";
import TicketsPage from "./components/TicketsPage/TicketsPage";
import AdminPage from "./components/AdminPage/AdminPage";
import MusicianForm from "./components/MusicianForm/MusicianForm";
import Footer from "./components/common/Footer/Footer";
import TicketCart from "./components/TicketsPage/TicketCart";
import TicketPaid from "./components/TicketsPage/TicketPaid";

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
                render={props => (
                  <MusicianForm {...props} returnPath="/admin" />
                )}
              />
              <Route
                path="/admin/musicians/:name"
                render={props => (
                  <MusicianForm {...props} returnPath="/admin" />
                )}
              />
              <Route exact path="/tickets/paid" component={TicketPaid} />
              <Route
                path="/tickets/buy"
                render={props => (
                  <TicketCart {...props} returnPath="/tickets/paid" />
                )}
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
