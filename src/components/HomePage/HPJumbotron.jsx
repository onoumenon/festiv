import React from "react";
import {
  Jumbotron,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import { getDates } from "./../../services/daysService";
import "./hpj.css";

class HPJumbotron extends React.Component {
  state = {
    email: "",
    backdrop: false
  };

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  };

  handleChange = ({ currentTarget: input }) => {
    const email = input.value;
    this.setState({ email });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.email !== "") {
      this.toggle();
    }
  };

  render() {
    const { headerInfo } = this.props;
    const dates = getDates();

    return (
      <div>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Festiv</ModalHeader>
          <ModalBody>
            <p>Thank you for subscribing!</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Dismiss
            </Button>
          </ModalFooter>
        </Modal>
        <Jumbotron
          className="bg-white mx-auto"
          style={{
            backgroundImage: `url(${headerInfo.imageURL})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "700px",
            maxWidth: "100vw"
          }}
        >
          <div className="text-white">
            <div className="hpj-text">
              <h1>FESTIV</h1>
              <h6>SINGAPORE MUSIC FESTIVAL</h6>
              <h2>{`${dates[0].date}`}</h2>
            </div>
            <div className="lead d-flex hpj-btn justify-content-end">
              <Form inline onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Label for="exampleEmail" hidden>
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="EMAIL"
                    onChange={this.handleChange}
                    value={this.state.email}
                    bsSize="lg"
                  />
                </FormGroup>
                <Button size="lg">Newsletter</Button>
              </Form>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default HPJumbotron;
