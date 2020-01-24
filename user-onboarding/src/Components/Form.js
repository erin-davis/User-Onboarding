import React, {useState, useEffect} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios";

const FormComponent = () =>{
  const [user, setUser] = useState({
    //firstName: ""
  });

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
        <label htmlFor="last name">Last name </label>
        <Field
        id="last name"
        type="text"
        name="lastName"
        placeholder="Last"
        />
        <label htmlFor="email">E-mail </label>
        <Field
        id="email"
        type="email"
        name="email"
        placeholder="E-mail"
        />
        <label htmlFor="password">Password </label>
        <Field
        id="password"
        type="password"
        name="password"
        placeholder="Password"
        />
        <label htmlFor="tos">Terms of Service
        <Field
        id="tos"
        type="checkbox"
        name="tos"
        />
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
    }
  }
})(FormComponent);

export default FormikFormComponent;
