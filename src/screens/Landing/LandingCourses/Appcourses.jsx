import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import MassageCourse from "./MassageCourse";
import { useNavigate } from "react-router-dom";
import { useGetCourseTop } from "../../../core/services/api/courses";
import CardCourse from "../../../components/common/CardCourse";
import Loader from "../../../components/common/Loader";
// import { NavLink } from "react-router-dom";

const Appcourses = () => {
  const params = {
    count: 4,
  };
  const { data, isPending, isError } = useGetCourseTop(params);
  // console.log("data landing", data);

  const navigate = useNavigate();
  return (
    <Stack
      direction="column"
      // direction={{xl:"column", lg:"column", md:"row",sm:"column",xs:"column"}}
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        width: "100%",
        // width:{xl:"290px",lg:"190px",md:"150px",sm:"100px"},
        // height: {lg:"600px",md:"1300px",sm:"1350px",xs:"1300px"},
        // height:"600px",
        // height:"1200px",
        margin: "auto",
        marginTop: "5%",
        // gap: "5%",
      }}
    >
      <MassageCourse text={"دوره های آموزشی"} />
      <Stack
        direction={{ xl: "row", lg: "row", md: "row", sm: "row", xs: "row" }}
        justifyContent={"space-around"}
        display={"flex"}
        flexWrap={"wrap"}
        alignItems="center"
        // gap={{ lg: "10px", md: "7px", sm: "6px" }}
        width={"100%"}
      >
        {isPending ? (
       <Loader/>
        ) : (
          data?.map((item) => <CardCourse  key={item.courseId} course={item} />)
        )}
      </Stack>

      <Button
        sx={{
          // display:"flex",
          // justifyContent:"center",
          // flexFlow:"wrap",
          borderRadius: "100px",
          width: "130px",
          height: "50px",
          fontSize: "16px",

          // top:{lg:"1px",md:"380px",sm:"380px",xs:"1100px"}

          marginTop: {
            xl: "1px",
            lg: "390px",
            md: "390px",
            sm: "390px",
            xs: "390px",
          },

          //  paddingTop:"50px"
        }}
        variant="contained"
        disableElevation
        onClick={() => navigate("/courses")}
      >
        مشاهده همه
      </Button>
    </Stack>
  );
};

export default Appcourses;
