import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import {
  getMusician,
  getMusicians,
  saveMusician
} from "./services/musicianService";

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
    data: getMusicians(),
    user: {}
  };

  componentDidMount() {
    const id = this.props.match ? this.props.match.params.id : null;
    const musicianFound = getMusician(id);
    if (!musicianFound) return;
    const newMusician = { ...musicianFound };

    this.setState({ data: newMusician });
  }

  handleData = data => {
    if (!data) {
      this.props.history.replace(this.props.returnPath);
    }
    this.setState({ data });
    let musician = { ...this.state.data };
    saveMusician(musician);
  };

  deleteStateData = id => {
    const copy = [...this.state.data];
    const remainingMusicians = copy.filter(musician => musician._id !== id);
    this.setState({ data: remainingMusicians });
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
                      musicians={this.state.data}
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
                      musician={this.state.data}
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
                      musicians={this.state.data}
                      {...props}
                      returnPath="/tickets/buy"
                    />
                  )}
                />
                <Route
                  path="/admin"
                  render={props => (
                    <AdminPage
                      musicians={this.state.data}
                      {...props}
                      returnPath="/admin"
                    />
                  )}
                />
                <Route
                  path="/"
                  render={props => (
                    <HomePage
                      musicians={this.state.data}
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
