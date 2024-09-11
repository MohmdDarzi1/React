import { Box, Stack } from "@mui/system";
import React from "react";
import { styled, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import TuneIcon from "@mui/icons-material/Tune";

const CoursesFilterTopBox = () => {
  const StyledButton = styled("button")({});

  return (
    <Stack
      sx={{
        flexDirection: "row",
        backgroundColor: "secondary.second",
        justifyContent: "space-between",
        alignItems: "center",
        width: "95%",
        borderRadius: "18px",
        height: { lg: "48px", md: "38px", sm: "28px", xs: "14px" },
        padding: "2%",
      }}
    >
      <Stack
        sx={{
          width: "30%",
          // border: "1px solid green",
          height: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TuneIcon
          sx={{ fontSize: { lg: "24px", md: "19px", sm: "15px", xs: "7px" } }}
        />
        <Typography
          variant="h6"
          sx={{ fontSize: { lg: "18px", md: "15px", sm: "11px", xs: "6px" } }}
        >
          فیلتر
        </Typography>
      </Stack>
      <StyledButton
        sx={{
          width: { lg: "32px", md: "27px", sm: "22px", xs: "12px" },
          height: { lg: "32px", md: "27px", sm: "22px", xs: "12px" },
          lineHeight: { lg: "24px", md: "19px", sm: "15px", xs: "9px" },
          // border: "none",
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
          borderRadius: "35%",
          backgroundColor: "primary.redLight",
          color: "primary.redDark",
        }}
      >
        <DeleteForeverIcon
          sx={{ fontSize: { lg: "24px", md: "19px", sm: "15px", xs: "9px" } }}
        />
      </StyledButton>
    </Stack>
  );
};

export default CoursesFilterTopBox;
