import { Box, Typography } from "@mui/material";
import React from "react";
import DashboardCard from "../../../components/common/DashboardCard";
import { useGetMyFavoriteCourses } from "../../../core/services/api/user";

const CourseFavorite = () => {
  // const params = {
  //   count: 2,
  // };
  // const { data, isPending } = useGetMyFavoriteCourses(params);
  // const newArr = data &&
  // data.favoriteCourseDto.slice(-2)
  const params = {
    count: 2,
  };
  const { data, isPending } = useGetMyFavoriteCourses(params);
  const newArr = data && data.favoriteCourseDto.slice(0, 2);
    // data &&
    // data.favoriteCourseDto.filter((item, index) => {
    //   return index < 2;
    // });
  newArr && console.log("newsFv2", newArr);
  console.log("dataFav3", data);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // gap: "30px",
          // marginRight: "100px",
        }}
      >
        <Typography sx={{ marginTop: "25px" }}>- آخرین دوره های پیشنهادی  </Typography>
        <DashboardCard data={newArr && newArr} />
        {/* <DashboardCard /> */}
      </Box>
    </div>
  );
};

export default CourseFavorite;
