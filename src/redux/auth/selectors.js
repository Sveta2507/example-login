import { createSelector } from "@reduxjs/toolkit";

const getLoading = (state) => state.loading;

const getAllUsers = (store) => {
  return store.users;
};

const isAuth = (store) => {
  return store.user.token;
};

export default { getLoading, getAllUsers };
