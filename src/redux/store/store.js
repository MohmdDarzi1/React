import { configureStore } from "@reduxjs/toolkit";
import darkModeReducer from "../slices/darkModeSlice.js";
import loginModalReducer from "../slices/loginModalSlice";
import ForgotPasswordModallSlice from "../slices/ForgotPasswordModallSlice.js";
import LoginRequestModalSlice from "../slices/LoginRequestModal.js";
import SignUpRequestModalSlice from "../slices/SignUpRequestModal.js";
import signUpModalSlice from "../slices/signUpModalSlice.js";
import loginModalSlice from "../slices/loginModalSlice";
import allCoursesReducer from "../slices/allCoursesSlice";
// import loginModalSlice from "../slices/loginModalSlice";
import signUpPhoneNumberReducer from "../slices/signUpPhoneNumber.js";
import RegesterSlice from "../slices/RegesterSlice.js";
import RessetPassSlice from "../slices/RessetPassSlice.js";

const store = configureStore({
  reducer: {
    darkMode: darkModeReducer,
    loginModal: loginModalSlice,
    allCourses: allCoursesReducer,
    SignUpModal: signUpModalSlice,
    ForgotPasswordModal: ForgotPasswordModallSlice,
    LoginRequestModal: LoginRequestModalSlice,
    SignUpRequestModal: SignUpRequestModalSlice,
    signUpPhoneNumber: signUpPhoneNumberReducer,
    RegesterModal:RegesterSlice,
    RessetPassModal:RessetPassSlice,
  },
});

export default store;
