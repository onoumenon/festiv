import React from "react";
import { withFormik } from "formik";
import { FormGroup, Col, Row, Badge, UncontrolledTooltip } from "reactstrap";
import * as Yup from "yup";
import classnames from "classnames";
import valid from "card-validator";
import "./../MusicianForm/FormikForm.css";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    creditCardNumber: Yup.string()
      .test(
        "test-number",
        "Credit Card number is invalid",
        value => valid.number(value).isValid
      )
      .required(),
    expiryDate: Yup.string().test(
      "test-number",
      "Expiry Date is invalid",
      value => valid.expirationDate(value).isValid
    ),
    CVC: Yup.string().test(
      "test-number",
      "CVC is invalid",
      value => valid.cvv(value).isValid
    )
  }),
  mapPropsToValues: ({ initial }) => ({
    ...initial
  }),
  handleSubmit: (payload, { setSubmitting, props }) => {
    props.history.replace(props.returnPath);

    setSubmitting(false);
  },
  displayName: "Payment Validation"
});

const InputFeedback = ({ error }) =>
  error ? <div className="input-feedback">{error}</div> : null;

const Label = ({ error, className, children, ...props }) => {
  return (
    <label className="label" {...props}>
      {children}
    </label>
  );
};

const TextInput = ({
  type,
  id,
  label,
  error,
  value,
  onChange,
  className,
  ...props
}) => {
  const classes = classnames(
    "input-group",
    {
      "animated shake error": !!error
    },
    className
  );

  return (
    <div className={classes}>
      <Label htmlFor={id} error={error}>
        {label}
      </Label>
      <input
        id={id}
        className="text-input"
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      <InputFeedback error={error} />
    </div>
  );
};

const MyForm = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting
  } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextInput
          name="email"
          type="email"
          id="email"
          label="Email Address"
          placeholder="Email Address for e-ticket"
          error={touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          name="name"
          id="name"
          type="text"
          label="Name on Card"
          error={touched.name && errors.name}
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          name="creditCardNumber"
          id="creditCardNumber"
          type="text"
          label="Credit Card Number"
          error={touched.creditCardNumber && errors.creditCardNumber}
          value={values.creditCardNumber}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Row form>
          <Col md={6}>
            <FormGroup>
              <TextInput
                name="expiryDate"
                id="expiryDate"
                type="text"
                label="Expiry Date"
                placeholder="MMYY"
                maxLength={4}
                error={touched.expiryDate && errors.expiryDate}
                value={values.expiryDate}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <TextInput
                name="CVC"
                id="CVC"
                type="text"
                label="CVC"
                maxLength={3}
                error={touched.CVC && errors.CVC}
                value={values.CVC}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <Badge id="cvcTip" color="light">
                ?
              </Badge>

              <UncontrolledTooltip placement="right" target="cvcTip">
                CVC (card verification code) is a three or four-digit number on
                the back of your card.
              </UncontrolledTooltip>
            </FormGroup>
          </Col>
        </Row>
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </form>
    </div>
  );
};

export const TicketForm = formikEnhancer(MyForm);
