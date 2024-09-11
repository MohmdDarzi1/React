import { Stack, styled } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import CoursesContentBox from "./CoursesContentBox/CoursesContentBox";
import CoursesFilterBox from "./CoursesFilterBox/CoursesFilterBox";
import CoursesHeroSection from "./CoursesHeroSection/CoursesHeroSection";

const CoursesStack = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-around",
  width: "100%",
});

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [Cost, setCostValue] = useState([0, 1999999999]);
  const [Technologie, setTechnologie] = useState([]);
  const [CourseLv, setCourseLv] = useState([]);
  const [CourseType, setCourseType] = useState([]);

  const handleSliderChange = (newValue) => {
    setCostValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Box
        position={"relative"}
        bgcolor={"primary.background"}
        color={"text.primary"}
        sx={{ width: { lg: "1440px", xs: "300px", sm: "600px", md: "900px" } }}
      >
        <CoursesHeroSection />
        <CoursesStack>
          <CoursesFilterBox
            handleSliderChange={handleSliderChange}
            Cost={Cost}
            Technologie={Technologie}
            setTechnologie={setTechnologie}
            CourseLv={CourseLv}
            setCourseLv={setCourseLv}
            CourseType={CourseType}
            setCourseType={setCourseType}
          />
          <CoursesContentBox
            Cost={Cost}
            Technologie={Technologie}
            CourseLv={CourseLv}
            CourseType={CourseType}
          />
        </CoursesStack>
      </Box>
    </Box>
  );
};

export default Courses;
