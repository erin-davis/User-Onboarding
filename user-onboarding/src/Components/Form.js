import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

const FormComponent = ({values, errors, touched}) =>{
  const [user, setUser] = useState([]);

  return (
    <div className="user-form">
      <Form>
        <label htmlFor="first name">First name </label>
        <Field
        id="first name"
        type="text"
        name="firstName"
        placeholder="First"
        />
        {touched.firstName && errors.firstName &&(
          <p className="errors">{errors.firstName}</p>
        )}
        <label htmlFor="last name">Last name </label>
        <Field
        id="last name"
        type="text"
        name="lastName"
        placeholder="Last"
        />
        {touched.lastName && errors.lastName &&(
          <p className="errors">{errors.lastName}</p>
        )}
        <label htmlFor="email">E-mail </label>
        <Field
        id="email"
        type="email"
        name="email"
        placeholder="E-mail"
        />
        {touched.email && errors.email &&(
          <p className="errors">{errors.email}</p>
        )}
        <label htmlFor="password">Password </label>
        <Field
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        />
        {touched.password && errors.password &&(
          <p className="errors">{errors.password}</p>
        )}
        <label htmlFor="tos">Terms of Service
        <Field
        id="tos"
        type="checkbox"
        name="tos"
        />
        {touched.tos && errors.tos &&(
          <p className="errors">{errors.tos}</p>
        )}
        </label>
        <label required htmlFor="newsletter">Sign Up for our monthly newsletter</label>
        <Field
        id="newsletter"
        type="checkbox"
        name="newsletter"
        />
        <button type="submit">Sign Up!</button>
      </Form>
    </div>
  );
}

const FormikFormComponent = withFormik({
  mapPropsToValues({firstName, lastName, email, password, tos, newsletter}){
    return{
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      password: "",
      tos: false,
      newsletter: false,
    };
  },
  validationSchema: Yup.object().shape({
    firstName: Yup.string().required('* please enter a name'),
    lastName: Yup.string().required('* please enter a name!'),
    email: Yup.string()
      .email('Is this even a real e-mail?')
      .required('No seriously, put in a real e-mail'),
    password: Yup.string()
      .min(8, 'Must be at least 8 characters')
      .max(10, 'But still less than 10 characters')
      .required('Please enter a password'),
    tos: Yup.string().required('Either click or use a different site'),
  })
})(FormComponent);

export default FormikFormComponent;
