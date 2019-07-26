import * as React from "react";
import styles from "./FormikExample.module.scss";
import { IFormikExampleProps } from "./IFormikExampleProps";
import { escape, fromPairs } from "@microsoft/sp-lodash-subset";
import { withFormik, Field, Form } from "formik";
import * as Yup from "yup";

import { TextField } from "office-ui-fabric-react/lib/TextField";
import {
  css,
  classNamesFunction,
  DefaultButton,
  IButtonProps,
  IStyle,
  PrimaryButton
} from "office-ui-fabric-react";

import { Label } from "office-ui-fabric-react/lib/Label";
import {
  FormikTextField,
  mapFieldToTextField
} from "formik-office-ui-fabric-react";

import { DefaultPalette } from "office-ui-fabric-react/lib/Styling";

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
    <div className={styles.formikExample}>
      <h1>IT Service Request</h1>
      <div className={styles.title}>Hello</div>
      <Form>
        <div>
          <Field
            label='Your Name:'
            id='name'
            name='name'
            readOnly
            component={FormikTextField}
          />

          <Field
            label='Your Email:'
            name='email'
            id='email'
            readOnly
            component={FormikTextField}
          />

          <Field
            label='Time logged:'
            name='loggedDate'
            id='loggedDate'
            readOnly
            component={FormikTextField}
          />

          <Field
            id='subject'
            name='subject'
            placeholder='add issue title here'
            component={FormikTextField}
            required
            label='Subject of issue'
          />

          <Field
            id='detailedDescription'
            name='detailedDescription'
            placeholder='Enter the detailed description'
            multiline={true}
            component={FormikTextField}
            required
            label='Detailed Description'
          />

          <div>
            <PrimaryButton
              disabled={isSubmitting}
              text='Submit'
              type='submit'
            />
          </div>
        </div>
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
