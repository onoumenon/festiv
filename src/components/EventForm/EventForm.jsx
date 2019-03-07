import React, { Component } from "react";
import { getMusician, saveMusician } from "../../services/musicianService";

import { FormikForm } from "./FormikForm";

class EventForm extends Component {
  state = {
    data: {}
  };

  handleData = data => {
    this.setState({ data });
    let musician = { ...this.state.data };
    saveMusician(musician);
  };

  componentWillMount() {
    const name = this.props.match ? this.props.match.params.name : null;
    const musicianFound = getMusician(name);
    if (!musicianFound) return;
    const newMusician = { ...musicianFound };

    this.setState({ data: newMusician });
  }

  render() {
    const { name, description, imageUrl, avatar } = this.state.data;

    return (
      <div>
        <h3>{this.props.match.params.name ? "Edit Act" : "New Act"}</h3>
        <FormikForm
          {...this.props}
          handleData={this.handleData}
          musician={{
            name,
            description,
            imageUrl,
            avatar
          }}
        />
      </div>
    );
  }
}

export default EventForm;
