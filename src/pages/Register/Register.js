import React from "react";
import classes from "./Register.module.css";
import RegisterForm from "../../components/Register/Register";

const RegisterPage = () => {
  return (
    <>
      <div>
        <h1>Register Page</h1>
        <RegisterForm />
      </div>
    </>
  );
};

export default RegisterPage;
