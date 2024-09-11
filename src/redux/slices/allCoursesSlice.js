import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  courses: [],
};
const allCoursesSlice = createSlice({
  name: "allCourses",
  initialState,
  CoursesSearch:"",
  reducers: {
    toggleAllCourses: (state, action) => {
      console.log("payload", action);
      // state.push("bilbilak");
      state.courses = action.payload;

      console.log("state", state.courses);
      // return state;
      // return state.courses;
    },
    handleCoursesSearch:(state,action)=>{
      state.CoursesSearch= action.payload;
    }
  },
});
export const { toggleAllCourses,handleCoursesSearch } = allCoursesSlice.actions;
export default allCoursesSlice.reducer;
export const selectAllCourses = (store) => store.allCourses.courses;
