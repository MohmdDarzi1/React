import { Box, Stack } from "@mui/system";
import React from "react";
import { styled } from "styled-components";
import LoginAndCard from "./LoginAndCard/LoginAndCard";
import LogoBox from "./LogoBox/LogoBox";
import Navbar from "./Navbar/Navbar";

const StyledStack = styled(Stack)({
  flexDirection: "row",
  position: "relative",
  top: "5px",
  zIndex: "4",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
});
const StyledBox = styled(Box)({
  display: "flex",
  flexDirection:"row-reverse",
  justifyContent: "space-between",
  alignItems: "center",
  height: "50px",
});

const Header = () => {
  return (
    <StyledStack>
      <StyledBox sx={{width:{lg:"1280px",md:"900px",sm:"600px",xs:"300px"},}}>
        <LoginAndCard />
        <Navbar />
        <LogoBox />
      </StyledBox>
    </StyledStack>
  );
};

export default Header;
