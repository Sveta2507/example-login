import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import authReducer from "./auth/reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "user",
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: { users: persistReducer(persistConfig, authReducer) },
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

const persistor = persistStore(store);

export default { store, persistor };
