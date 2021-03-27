import { lazy } from "react";
import { v4 as uuid } from "uuid";

const AuthPage = lazy(() => {
  return import("./pages/AuthPage/AuthPage");
});

const LoginPage = lazy(() => {
  return import("./pages/LogIn/LogIn");
});

const RegisterPage = lazy(() => {
  return import("./pages/Register/Register");
});

const routes = [
  {
    exact: true,
    path: "/",
    component: AuthPage,
    propKey: uuid(),
  },
  {
    exact: true,
    path: "/login",
    component: LoginPage,
    propKey: uuid(),
  },
  {
    exact: true,
    path: "/register",
    component: RegisterPage,
    propKey: uuid(),
  },
];

export default routes;
