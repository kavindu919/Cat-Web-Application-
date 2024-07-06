import { configureStore } from "@reduxjs/toolkit";
import breedReducer from "../slices/breedSlice";

export const store = configureStore({
  reducer: {
    breed: breedReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
