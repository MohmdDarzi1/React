import { Avatar, styled, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectDarkMode } from "../../../../redux/slices/darkModeSlice";


const LogoBox = () => {
  const mode = useSelector(selectDarkMode);
  const StyledLink = styled(Link)({
    display: "flex",
   flex:"2",
    height: "31px",
    gap: "18px",
    justifyContent:"center",
    alignItems: "center",
  });
  return (
    <StyledLink to={"/"}>
      <Avatar src={`src/assets/image/png/invisible${mode}.png`} />
      <Typography sx={{display:{xl:"block",lg:"block",md:"none",sm:"none",xs:"none"}}}  fontWeight={600}>
        صفحه اصلی
      </Typography>
    </StyledLink>
  );
};

export default LogoBox;
