import { Container } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useRef } from "react";
import { styled } from "styled-components";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ForgotPassword from "./LoginPages/ForgatPassWord/ForgotPassword";
import Login from "./LoginPages/Login";
import LoginRequest from "./LoginPages/LoginRequest/LoginRequest";
import SignUp from "./LoginPages/SignUp/SignUp";
import SignUpRequest from "./LoginPages/SignUpRequest/SignUpRequest";
import RessetPass3 from "./LoginPages/LoginRequest/RessetPassword3/RessetPass3";

const StyledStack = styled(Stack)({
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100vw",
  overflowX: "hidden",
});

const Layout = ({ children }) => {
  // const ref = useRef();

  return (
    <StyledStack
      bgcolor={"primary.background"}
      color={"text.primary"}
      // ref={ref}
    >
      {/* //{" "} */}
      {/* <Container maxWidth="sm" style={{ overflowX: "hidden" }}> */}
      <Header />
      <Login />
      <SignUp />
      <ForgotPassword />
      <LoginRequest />
      <RessetPass3 />
      <SignUpRequest />
      {children}
      <Footer />
      {/* //{" "} */}
      {/* </Container> */}
    </StyledStack>
  );
};

export default Layout;
