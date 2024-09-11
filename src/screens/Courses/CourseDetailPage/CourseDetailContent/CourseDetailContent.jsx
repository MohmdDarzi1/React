import { Box, Stack } from "@mui/system";
import React from "react";
import CourseDetailContentBottomBox from "./CourseDetailContentBottomBox/CourseDetailContentBottomBox";
import CourseDetailContentTopBox from "./CourseDetailContentTopBox/CourseDetailContentTopBox";

const CourseDetailContent = ({data}) => {
  return (
    <Stack
      sx={{
        width: "60%",
        //  border: "1px solid green",
        flexDirection: "column",
      }}
    >
      <CourseDetailContentTopBox data={data}/>
      <CourseDetailContentBottomBox data={data}/>
    </Stack>
  );
};

export default CourseDetailContent;
