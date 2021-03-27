import React from "react";
import classes from "./AuthPage.module.css";
import { NavLink } from "react-router-dom";

const AuthPage = () => {
  return (
    <>
      <div>
        <NavLink to="/login">Log In</NavLink>
        <NavLink to="/register"> Register</NavLink>
      </div>
    </>
  );
};

export default AuthPage;
