import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import teachersReducer from "../features/teachers/teacherSlice";

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
