import { Avatar, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import React from "react";

const CourseDataComponent = ({ avatarIcon, text1, text2 }) => {
  return (
    <Box
      sx={{
        width: "90%",
        height: "15%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: { lg: "20px", md: "13px", sm: "8px", xs: "5px" },
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          //   width: "40%",
          alignItems: "center",
          justifyContent: "space-evenly",
          gap:"3px"
        }}
      >
        <Avatar
          sx={{
            backgroundColor: "primary.main",
            width: { lg: "40px", md: "30px", sm: "20px", xs: "10px" },
            height: { lg: "40px", md: "30px", sm: "20px", xs: "10px" },
          }}
        >
          {avatarIcon}{" "}
        </Avatar>
        <Typography fontWeight={"500"} fontSize={{lg:"18px",md:"15px",sm:"12px",xs:"10px"}}>{text1}</Typography>
      </Stack>
      <Typography fontSize={{lg:"18px",md:"15px",sm:"12px",xs:"10px"}}>{text2}</Typography>
    </Box>
  );
};

export default CourseDataComponent;
