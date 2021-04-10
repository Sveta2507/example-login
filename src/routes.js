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

const HomePage = lazy(() => {
  return import("./pages/Home/HomePage");
});

const routes = [
  {
    exact: true,
    path: "/",
    component: AuthPage,
    propKey: uuid(),
    private: false,
    restricted: false,
  },
  {
    exact: true,
    path: "/login",
    component: LoginPage,
    propKey: uuid(),
    private: false,
    restricted: false,
  },
  {
    exact: true,
    path: "/register",
    component: RegisterPage,
    propKey: uuid(),
    private: false,
    restricted: true,
  },
  {
    exact: true,
    path: "/home",
    component: HomePage,
    propKey: uuid(),
    private: true,
    restricted: false,
  },
];

export default routes;
