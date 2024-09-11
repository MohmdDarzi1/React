import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  phoneNumber: "",
};
const signUpPhoneSlice = createSlice({
  name: "signUpPhoneNumber",
  initialState,
  reducers: {
    toggleSignUpPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
      console.log("state.phoneNumber", state.phoneNumber);
    },
  },
});
export const { toggleSignUpPhoneNumber } = signUpPhoneSlice.actions;
export default signUpPhoneSlice.reducer;
export const selectSignUpPhoneNumber = (store) =>
  store.signUpPhoneNumber.phoneNumber;
