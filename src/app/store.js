import { configureStore } from "@reduxjs/toolkit";

import teachersReducer from "../features/teachers/teacherSlice";
import teacherReducer from "../features/teacher/teacherSlice";
import appointingReducer from "../features/appointing/appointingSlice";
import authReducer from "../features/authentication/authSlice";

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
    teacher: teacherReducer,
    appointingLog: appointingReducer,
    authentication: authReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
