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
  constructor(props) {
    super(props);
    this.state = {
      backdrop: false
    };

    this.toggle = this.toggle.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

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
            backgroundSize: "contain",
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
              <Form inline>
                <FormGroup onSubmit={this.handleSubmit}>
                  <Label for="exampleEmail" hidden>
                    Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="EMAIL"
                    bsSize="lg"
                  />
                </FormGroup>
                <Button size="lg" onClick={this.toggle}>
                  Newsletter
                </Button>
              </Form>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default HPJumbotron;
