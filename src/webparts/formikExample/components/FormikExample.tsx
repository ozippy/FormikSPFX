import * as React from "react";
import styles from "./FormikExample.module.scss";
import { IFormikExampleProps } from "./IFormikExampleProps";
import { escape, fromPairs } from "@microsoft/sp-lodash-subset";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";
import * as moment from "moment";

interface FormValues {
  name: string;
  email: string;
  loggedDate: string;
  subject: string;
  detailedDescription: string;
}

interface MyFormProps {
  name?: string;
  email?: string;
  loggedDate?: string;
  subject?: string;
  detailedDescription?: string;
}

const InnerForm = props => {
  let todaysDate = moment().format("DD/MM/YYYY HH:MM:SS");
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isSubmitting,
    title
  } = props;

  return (
    <div className='container'>
      <h1>IT Service Request</h1>
      <Form>
        <label htmlFor=''>Your Name:</label>
        <label htmlFor=''>{props.name}</label>
        <br />
        <label htmlFor=''>Your Email:</label>
        <label htmlFor=''>{props.email}</label>
        <br />
        <label htmlFor=''>Time logged:</label>
        <label htmlFor=''>{todaysDate}</label>
        <br />
        <div>
          <label htmlFor='subject'>Subject of issue</label>
          <Field
            id='subject'
            name='subject'
            placeholder='add issue title here'
            type='text'
          />
          {touched.subject && errors.subject && <p>{errors.subject}</p>}
          <br />
        </div>
        <div>
          <label htmlFor='detailedDescription'>Detailed Description</label>
          <Field
            id='detailedDescription'
            name='detailedDescription'
            placeholder='Enter the detailed description'
            type='text'
          />
          {touched.detailedDescription && errors.detailedDescription && (
            <p>{errors.detailedDescription}</p>
          )}
          <br />
        </div>

        <button disabled={isSubmitting}>Submit</button>
      </Form>
    </div>
  );
};

const FormikExample = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: props => ({
    name: props.name || "",
    email: props.email || "",
    loggedDate: props.loggedDate || "",
    subject: props.subject || "",
    detailedDescription: props.detailedDescription || ""
  }),

  validationSchema: Yup.object().shape({
    subject: Yup.string().required("Subject is required"),
    detailedDescription: Yup.string().required("Description is required")
  }),

  handleSubmit(
    values: FormValues,
    { props, resetForm, setSubmitting, setErrors }
  ) {
    setTimeout(() => {
      if (values.subject === "test") {
        setErrors({ subject: "you can't test it!" });
      } else {
        resetForm();
      }
      setSubmitting(false);
    }, 1000);
    console.log(values.subject, values.detailedDescription);
  }
})(InnerForm);

export default FormikExample;
