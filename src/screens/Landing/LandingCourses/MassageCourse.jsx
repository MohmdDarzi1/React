import { Typography } from "@mui/material";
import React from "react";

const MassageCourse = ({ text }) => {
  return (
    <Typography
      variant="h4"
      sx={{
        width: { lg: "300px", md: "250px", sm: "150px", xs: "100px" },
        height: "60px",
        textAlign: "center",

        gap: "8px",
        display: "flex",
        justifyContent: "center",
        lineHeight: "23px",
        fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
      }}
    >
      {text}{" "}
    </Typography>
  );
};

export default MassageCourse;
