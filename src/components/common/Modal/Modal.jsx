import React from "react";
import { getMusicianByName } from "./../../../services/musicianService";
import Musician from "./../../Musician/Musician";
import "./Modal.css";

function Modal({
  handleClose,
  show,
  children,
  handleSubmit,
  handleChange,
  handleDelete,
  musicians
}) {
  const modalClassName = show ? "modal display-block" : "modal display-none";

  const modalFunction = children => {
    const foundMusician = getMusicianByName(children.title);
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
            Delete all events by this artist
          </button>
        </div>
      );
    }
    if (children.title === "Select Musician") {
      return (
        <div>
          <h3>Select Musician</h3>
          <form
            className="form-inline justify-content-center"
            onSubmit={handleSubmit}
          >
            <div className="form-group ">
              <select
                onChange={handleChange}
                className="form-control"
                id="selectMusician"
              >
                {musicians.map(option => (
                  <option value={option.name} key={`${option._id}`}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            <button className="btn btn-primary btn-sm">Save</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h3>{children.title}</h3>
          <p>{children.id}</p>
        </div>
      );
    }
  };

  return (
    <div className={modalClassName}>
      <section className="modal-main">
        <section className="modal-content border-white text-center">
          {modalFunction(children)}
          <br />
        </section>
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
}

export default Modal;
