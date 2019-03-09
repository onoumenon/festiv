import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";
import classnames from "classnames";
import "./FormikForm.css";

const formikEnhancer = withFormik({
  validationSchema: Yup.object().shape({
    name: Yup.string().required("Please enter musician's name."),
    description: Yup.string()
      .min(10, "C'mon, type a longer description!")
      .required("Description is required."),
    avatar: Yup.string().required("Image Link is required.")
  }),
  mapPropsToValues: ({ musician }) => ({
    ...musician
  }),
  handleSubmit: (payload, { setSubmitting, props }) => {
    props.handleData(payload);
    props.history.replace(props.returnPath);

    setSubmitting(false);
  },
  displayName: "Festiv Musicians Submission"
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
    <form onSubmit={handleSubmit}>
      <TextInput
        id="name"
        type="text"
        label="Musician/ Band Name"
        placeholder="Name here"
        error={touched.name && errors.name}
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="description"
        type="text"
        label="Description"
        placeholder="Please write some info about the Musician/ Band."
        error={touched.description && errors.description}
        value={values.description}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <TextInput
        id="avatar"
        type="text"
        label="Avatar Image Link"
        placeholder="Please enter image URL"
        error={touched.avatar && errors.avatar}
        value={values.avatar}
        onChange={handleChange}
        onBlur={handleBlur}
      />

      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export const FormikForm = formikEnhancer(MyForm);
