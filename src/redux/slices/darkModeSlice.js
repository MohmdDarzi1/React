import { createSlice } from "@reduxjs/toolkit";

const initialState = { mode: "light" };

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      if (state.mode === "light") {
        state.mode = "dark";
      } else if (state.mode === "dark") {
        state.mode = "light";
      }
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
export const selectDarkMode = (store) => store.darkMode.mode;
