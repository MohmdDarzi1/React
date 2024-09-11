import { Box, Typography } from "@mui/material";
import React from "react";

const TopHeroSectionBox = () => {
  return (
    <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} textAlign={"center"} height={"20%"} width={"80%"}>
      <Typography fontWeight={500} lineHeight={"80%"} fontSize={{lg:"24px",md:"20px",sm:"17px",xs:"14px"}}  >پلتفرم اموزش طراحی وب</Typography>
      <Typography sx={{fontSize:{lg:"50px",md:"40px",sm:"30px",xs:"20px"}}} fontWeight={900} lineHeight={"250%"} >مرجع اموزش برنامه نویسی</Typography>
      <Typography sx={{display:{xl:"block",lg:"block",md:"block",sm:"block",xs:"none"}, fontSize:{md:"16px",sm:"14px"}}} fontWeight={500} lineHeight={"37px"} fontSize={"22px"}>مرجع اموزش زنده و تعاملی دسترسی به بیش از هفت هزار ویدیوی اموزشی به زبان فارسی </Typography>
    </Box>
  );
};

export default TopHeroSectionBox;
