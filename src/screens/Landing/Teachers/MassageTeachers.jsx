import { Typography } from "@mui/material";
import React from "react";

const MassageTeachers = () => {
  return (
    <Typography
      id="teachers"
      variant="h4"
      // color={"black"}
      sx={{
        // borderBottom: "4px solid blue",
        width: { lg: "300px", md: "250px", sm: "150px", xs: "100px" },
        // height: "60px",
        textAlign: "center",
        fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
        margin: "auto",
        // lineHeight:{lg:"20px",md:"30px",sm:"40px",xs:"50px"}
      }}
    >
      اساتید برتر
    </Typography>
  );
};

export default MassageTeachers;
