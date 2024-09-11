import { Stack } from "@mui/system";
import React, { useState } from "react";
import { styled } from "@mui/material";
import CoursesFilterTopBox from "./CoursesFilterTopBox/CoursesFilterTopBox";
import CoursesFilterBoxContent from "./CoursesFilterBoxContent/CoursesFilterBoxContent";
// import { useGetAllCourses } from "../../../core/services/api/courses";
// import {
//   usegetCourseLevelId,
//   usegetCourseType,
// } from "../../../core/services/api/courses";
// import { useParams } from "react-router-dom";

const CoursesFilterBox = ({
  handleSliderChange,
  Cost,
  setTechnologie,
  Technologie,
  CourseLv,
  setCourseLv,
  setCourseType,
  CourseType,
}) => {
  return (
    <Stack
    
      sx={{
        width: { lg: "20%", md: "23%", sm: "30%", xs: "30%" },
        alignItems: "center",
        paddingTop: "1%",
        backgroundColor: "secondary.main",
      }}
    >
      <CoursesFilterTopBox />
      <CoursesFilterBoxContent
        Cost={Cost}
        onSliderChange={handleSliderChange}
        setTechnologie={setTechnologie}
        Technologie={Technologie}
        CourseLv={CourseLv}
        setCourseLv={setCourseLv}
        CourseType={CourseType}
        setCourseType={setCourseType}
      />
    </Stack>
  );
};

export default CoursesFilterBox;
