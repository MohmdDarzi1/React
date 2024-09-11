// import { useState } from "react";

import { Box } from "@mui/system";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { toggleLoginModal } from "../../../../redux/slices/loginModalSlice";
import ButtonComponent from "../../../common/ButtonComponent";
import DarkModeButton from "../DarkModeButton/DarkModeButton";
import SignUp from "../../LoginPages/SignUp/SignUp";
import { getItem } from "../../../../core/services/storage/storage.services";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  height: "40px",
});

const LoginAndCard = () => {
  const dispatch = useDispatch();
  const token = getItem("token");
  const navigate = useNavigate();
  return (
    <StyledBox
      sx={{
        gap: { lg: "16px", md: "5px", sm: "0px", xs: "0px" },
        width: { lg: "15%", md: "17%", sm: "20%", xs: "25%" },
      }}
    >
      <DarkModeButton />

      {token ? (
        <ButtonComponent
          onClick={() => navigate("/studentPanel")}
          height={"60%"}
          fontSize={{ lg: "9px", md: "7px", sm: "7px", xs: "10px" }}
          width={"30%"}
          text={"حساب کاربری"}
        />
      ) : (
        <ButtonComponent
          onClick={() => dispatch(toggleLoginModal())}
          height={"60%"}
          fontSize={{ lg: "9px", md: "7px", sm: "7px", xs: "10px" }}
          width={"30%"}
          text={"ورود"}
        />
      )}
    </StyledBox>
  );
};

export default LoginAndCard;
