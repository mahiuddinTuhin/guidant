import { configureStore } from "@reduxjs/toolkit";

import teachersReducer from "../features/teachers/teacherSlice";
import teacherReducer from "../features/teacher/teacherSlice";
import appointingReducer from "../features/appointing/appointingSlice";

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    teacher: teacherReducer,
    appointingLog: appointingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
