import { ModeNight } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, Switch } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleDarkMode } from "../../../../redux/slices/darkModeSlice";

const DarkModeButton = () => {
  const dispatch = useDispatch();

  return (
    <Box
      sx={{
        width: "5%",
        height: "100%",
        cursor: "pointer",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:"0"
      }}
      onClick={() => dispatch(toggleDarkMode())}
    >
      <ListItemIcon >
        <ModeNight sx={{ fontSize: {lg:"35px",md:"25px",sm:"20px",xs:"19px"} }} />
      </ListItemIcon>
    </Box>
  );
};

export default DarkModeButton;
