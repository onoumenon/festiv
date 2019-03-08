import React from "react";
import { getMusician, getMusicians } from "./../../../services/musicianService";
import Musician from "./../../Musician/Musician";
import "./Modal.css";

function Modal({
  handleClose,
  show,
  children,
  handleSubmit,
  handleChange,
  handleDelete
}) {
  const allMuscians = getMusicians();
  const modalClassName = show ? "modal display-block" : "modal display-none";

  const modalFunction = children => {
    const foundMusician = getMusician(children.title);
    if (foundMusician) {
      return (
        <div>
          <Musician details={foundMusician} />
          <button
            value={children.id}
            onClick={handleDelete}
            className="btn btn-primary btn-sm"
          >
            Delete event
          </button>
          <button
            value={children.title}
            onClick={handleDelete}
            className="btn btn-primary btn-sm"
          >
            Delete all by this artist
          </button>
        </div>
      );
    }
    if (children.title === "Select Musician") {
      return (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="selectMusician">Select Musician</label>
            <select
              onChange={handleChange}
              className="form-control"
              id="selectMusician"
            >
              {allMuscians.map(option => (
                <option value={option.name} key={`${option._id}`}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
          <button className="btn btn-primary btn-sm">Save</button>
        </form>
      );
    } else {
      return;
    }
  };

  return (
    <div className={modalClassName}>
      <section className="modal-main">
        <section className="modal-content">
          {modalFunction(children)}
          <br />
        </section>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
}

export default Modal;
