import React, { Component } from "react";
import { getMusician, saveMusician } from "../../services/musicianService";

import { FormikForm } from "./FormikForm";

class RestaurantForm extends Component {
  state = {
    data: {}
  };

  handleData = data => {
    this.setState({ data });
    let musician = { ...this.state.data };
    saveMusician(musician);
  };

  componentDidMount() {
    const name = this.props.match ? this.props.match.params.name : null;
    const musicianFound = getMusician(name);
    if (!musicianFound) return;
    const newMusician = { ...musicianFound };

    this.setState({ data: newMusician });
  }
  render() {
    return (
      <div>
        <h3>{this.props.match.params.name ? "Edit Act" : "New Act"}</h3>
        <FormikForm
          {...this.props}
          handleData={this.handleData}
          musician={{ name: "", description: "", imageUrl: "", avatar: "" }}
        />
      </div>
    );
  }
}

export default RestaurantForm;

// state = {};

// handleSubmit = () => { };

// handleChange = () => { };

// validateForm = () => { };

/* <div>
  <h3>{this.props.match.params.id ? "Edit Act" : "New Act"}</h3>
  <form onSubmit={this.handleSubmit}>
    <Input
      name="name"
      label="Name"
      onChange={this.handleChange}
      value={name}
      error={error.name}
    />
    <SelectInput
      name="date"
      label="Date"
      onChange={this.handleChange}
      options={days}
      value={date}
      error={error.date}
    />
    <TimeInput
      name="time"
      label="Time"
      onChange={this.handleChange}
      value={time}
    />
    <Input
      name="description"
      label="Description"
      onChange={this.handleChange}
      value={description}
    />
    <Input
      name="imageUrl"
      label="Image Url"
      onChange={this.handleChange}
      value={imageUrl}
      error={error.imageUrl}
    />
    <Input
      name="avatar"
      label="Avatar"
      type="number"
      onChange={this.handleChange}
      value={avatar}
      error={error.avatar}
    />
    <button
      className="btn btn-primary btn-sm"
      disabled={this.validateForm() ? true : false}
    >
      Save
            </button>
  </form>
</div> */
