import { Box, Typography } from "@mui/material";
import React from "react";
import DashboardCard from "../../../../components/common/DashboardCard";
import DashBordNews from "./DashBordNews";
import { useGetMyFavoriteNews } from "../../../../core/services/api/user";

const NewsFavorite = () => {
  const params = {
    count: 2,
  };
   const { data, isPending } = useGetMyFavoriteNews(params);
  // const newArr =
  //   // data &&
  //   // data.myFavoriteNews
  //   //   .reverse()
  //   //   .map((item, index) => {
  //   //     if (index < 2) return item;
  //   //   })
  //   //   .slice(0, 2);
  //     data &&
  //     data.myFavoriteNews.slice(-2)
  // newArr && console.log("newsFv2", newArr);
  // const params = {
  //   count: 2,
  // };
  // const { data, isPending } = useGetMyFavoriteCourses(params);
  const newArr = data && data?.myFavoriteNews.slice(0, 2);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // border:"1px solid red",
          // flexFlow:"wrap",
          gap: "15px",
          marginRight: "30px",
        }}
      >
        <Typography sx={{marginTop:"10px"}}>- اخبار موردعلاقه </Typography>
        {/* <DashboardCard /> */}
        {/* <DashboardCard /> */}
        <DashBordNews data={newArr && newArr} />
        {/* <DashBordNews/> */}
      </Box>
    </div>
  );
};

export default NewsFavorite;
