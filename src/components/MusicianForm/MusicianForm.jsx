import React, { Component } from "react";
import {
  getMusician,
  saveMusician,
  deleteMusician
} from "../../services/musicianService";
import { deleteEventByMusician } from "./../../services/eventsService";
import { FormikForm } from "./FormikForm";
import { Card } from "reactstrap";

class MusicianForm extends Component {
  state = {
    data: {}
  };

  handleDelete = () => {
    const id = this.props.match.params.id;
    const musician = getMusician(id);
    deleteMusician(id);
    deleteEventByMusician(musician.name);
    sessionStorage.removeItem("musicianData");
    this.props.history.replace(this.props.returnPath);
  };

  handleData = data => {
    this.setState({ data });
    let musician = { ...this.state.data };
    saveMusician(musician);
    sessionStorage.removeItem("musicianData");
  };

  componentDidMount() {
    const id = this.props.match ? this.props.match.params.id : null;
    const musicianFound = getMusician(id);
    if (!musicianFound) return;
    const newMusician = { ...musicianFound };

    this.setState({ data: newMusician });
  }

  GetMusician = () => {
    const foundMusician = JSON.parse(sessionStorage.getItem("musicianData"));

    if (!foundMusician) {
      return { _id: "", name: "", description: "", avatar: "" };
    } else {
      return foundMusician;
    }
  };

  render() {
    return (
      <div className="container mt-5">
        <h3>{this.props.match.params.id ? "Edit Act" : "New Act"}</h3>
        <Card body>
          <FormikForm
            {...this.props}
            handleData={this.handleData}
            handleDelete={this.handleDelete}
            musician={this.GetMusician()}
          />
        </Card>
      </div>
    );
  }
}

export default MusicianForm;
