import React from "react";

import {
  Card,
  CardBody,
  CardTitle,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Badge,
  UncontrolledTooltip,
  Table
} from "reactstrap";

import { getHeaderInfo } from "./../../services/adminService";
import { getDaybyDaySubStr } from "./../../services/daysService";
import Header from "./../common/Header/Header";
import { TicketForm } from "./TicketForm";

export function TicketCart(props) {
  const cart = JSON.parse(sessionStorage.getItem("cartData"));

  const days = Object.keys(cart);
  const itemsInCart = Object.values(cart);
  const price = days.map(day => getDaybyDaySubStr(day, 3).price);
  const pricePerDay = itemsInCart.map((day, i) => day * price[i]);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const totalPrice = pricePerDay.reduce(reducer);

  const headerInfo = getHeaderInfo("tickets");

  return (
    <div className="container mx-auto text-center mt-5 mb-5">
      <Header headerInfo={headerInfo} />
      <img
        src="https://i.imgur.com/iK6AUOt.png"
        width="300px"
        alt="Buy"
        className="m-4"
      />
      <div className="container d-flex justify-content-center">
        <Card className="mb-5  border-white shadow" style={{ width: "38rem" }}>
          <CardBody style={{ width: "25rem" }} className="mx-auto">
            <CardTitle tag="h2">Ticket Details</CardTitle>
            <div className="mx-auto" style={{ width: "20rem" }}>
              <Table borderless className="text-left">
                <thead>
                  <tr>
                    <th />
                    <th>{days[0]}</th>
                    <th>{days[1]}</th>
                    <th>{days[2]}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">#</th>
                    <td>{itemsInCart[0]}</td>
                    <td>{itemsInCart[1]}</td>
                    <td>{itemsInCart[2]}</td>
                  </tr>
                  <tr>
                    <th scope="row">Price</th>
                    <td>{pricePerDay[0]} SGD</td>
                    <td>{pricePerDay[1]} SGD</td>
                    <td>{pricePerDay[2]} SGD</td>
                  </tr>
                </tbody>
              </Table>
              <CardTitle tag="h3" className="mb-3">
                <hr width="300px" color="#8be5c3" />
                Total Price: {`${totalPrice}`}SGD
                <hr width="300px" color="#8be5c3" />
              </CardTitle>
            </div>
            <TicketForm {...props} initial={{ email: "", name:"", creditCardNumber: "", expiryDate: "", CVC: "" }} />
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default TicketCart;

// export const ValidationSchemaExample = () => (
//   <div>
//     <Formik
//       initialValues={{
//         firstName: "",
//         lastName: "",
//         email: ""
//       }}
//       validationSchema={SignupSchema}
//       onSubmit={values => {
//         console.log(values);
//       }}
//     >
//       {({ errors, touched }) => (
//         <Form>
//           <Field name="email" type="email"/>
//           {errors.email && touched.email ? <div>{errors.email}</div> : null}
//           <Field name="name" />
//           {errors.name && touched.name ? <div>{errors.name}</div> : null}
//           <Field name="creditCardNumber" />
//           {errors.creditCardNumber && touched.creditCardNumber ? (
//             <div>{errors.creditCardNumber}</div>
//           ) : null}
//           <Field name="expiryDate" />
//           {errors.expiryDate && touched.expiryDate ? (
//             <div>{errors.expiryDate}</div>
//           ) : null}
//           <Field name="CVC"  />
//           {errors.CVC && touched.CVC ? <div>{errors.CVC}</div> : null}
//           <button type="submit">Submit</button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );

// <FormGroup>
//   <Label for="email">Email Address (for e-ticket)</Label>
//   <Input type="email" name="email" id="email" />
// </FormGroup>
//   <FormGroup>
//     <Label for="name">Name on Card</Label>
//     <Input type="text" name="name" id="name" />
//   </FormGroup>
//   <Row form>
//     <Col md={6}>
//       <FormGroup>
//         <Label for="cardNumber">Credit Card Number</Label>
//         <Input type="text" name="cardNumber" id="cardNumber" />
//       </FormGroup>
//     </Col>
//     <Col md={3}>
//       <FormGroup>
//         <Label for="mmyy">MMYY</Label>
//         <Input type="number" max="9999" name="mmyy" id="mmyy" />
//       </FormGroup>
//     </Col>
//     <Col md={2}>
//       <FormGroup>
//         <Label for="cvc">
//           CVC
//                       <Badge id="cvcTip" color="light">
//             ?
//                       </Badge>
//         </Label>
//         <Input type="text" name="cvc" id="cvc" />
//         <UncontrolledTooltip placement="right" target="cvcTip">
//           CVC (card verification code) is a three or four-digit
//           number on the back of your card.
//                     </UncontrolledTooltip>
//       </FormGroup>
//     </Col>
//   </Row>
