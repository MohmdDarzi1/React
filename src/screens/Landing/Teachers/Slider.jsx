import { Button, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
//  import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";

import Name from "./Name";
import But from "./But";

const Slider = ({ data, img, name, newsCount }) => {
  const x =
    "https://classapi.sepehracademy.ir/\\Pictures\\ProfileImageThumbnail\\download_6dba9f00-b178-4a04-83e1-4fb5714442e0.png";
  return (
    <Stack width={276} margin={"5px"}>
      <But newsCount={newsCount} />

      <CardMedia
        component="img"
        height="240px"
        image={
          img === null || img === x || img === "Not-set"
            ? "src/assets/image/ostad.jpg"
            : img
        }
        sx={{ borderRadius: "20px" }}
        alt={name}
      />
      <Name name={name} />
    </Stack>
  );
};

export default Slider;
