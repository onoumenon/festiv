import React, { Component } from "react";
import { FormikForm } from "./FormikForm";
import { Card } from "reactstrap";
import { getMusician, deleteMusician } from "./../../services/musicianService";
import { deleteEventByMusician } from "./../../services/eventsService";
class MusicianForm extends Component {
  handleDelete = () => {
    if (this.props.match.params.id) {
      const id = this.props.match.params.id;
      const musician = getMusician(id);
      deleteMusician(id);
      deleteEventByMusician(musician.name);
      this.props.deleteStateData(id);
      this.props.history.replace(this.props.returnPath);
    } else {
      this.props.history.replace(this.props.returnPath);
    }
  };

  render() {
    const { handleData, musicians, ...props } = this.props;

    return (
      <div className="container mt-5" data-testid="musician-form-page">
        <h3>{props.match.params.id ? "Edit Act" : "New Act"}</h3>
        <Card body>
          <FormikForm
            {...props}
            handleData={handleData}
            handleDelete={this.handleDelete}
            musician={getMusician(this.props.match.params.id)}
          />
        </Card>
      </div>
    );
  }
}
export default MusicianForm;
