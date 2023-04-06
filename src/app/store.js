import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import teachersReducer from "../features/teachers/teacherSlice";
import teacherReducer from "../features/teacher/teacherSlice";

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    teacher: teacherReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
