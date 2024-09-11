import { Box, Stack } from "@mui/system";
import React, { useEffect } from "react";
import CourseDetailContent from "./CourseDetailContent/CourseDetailContent";
import SimilarCourses from "./SimilarCourses/SimilarCourses";
import Specifications from "./Specifications/Specifications";
import { useParams } from "react-router";
import { useGetCourseId } from "../../../core/services/api/courses";
// import { useGetCourseId } from "../../../core/services/api/courses";

const CourseDetailPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const { data, isPending } = useGetCourseId(id);
  console.log("data", data);
  return (
    <Box sx={{ width: "100vw", display: "flex", justifyContent: "center" }}>
      <Stack
        // color={"text.primary"}
        sx={{
          width: { xs: "300px", sm: "600px", md: "900px", lg: "1440px" },
          flexDirection: "column",
          justifyContent: "space-evenly",
          alignItems: "center",
          marginTop: "2%",
        }}
        // border={"1px solid red"}
        // height={"700px"}
      >
        <Stack
          sx={{
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-evenly",
          }}
          //   border={"1px solid red"}
        >
          <CourseDetailContent data={data}/>
          <Specifications data={data} />
        </Stack>
        <SimilarCourses />
      </Stack>
    </Box>
  );
};

export default CourseDetailPage;
