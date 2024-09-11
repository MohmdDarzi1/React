import { Typography } from "@mui/material";
import React from "react";

const Name = ({ name }) => {
  return (
    <>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{ fontSize: "14px", textAlign: "center" }}
      >
        {name}
      </Typography>
      {/* <Typography
      variant="body2"
      color="text.secondary"
      sx={{ textAlign: "center" }}
    >
      اسطوره قلبم
    </Typography> */}
    </>
  );
};

export default Name;
