import { Box, Button, Checkbox, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

import { useNavigate } from "react-router-dom";
import ForgotPassword from "./ForgatPassWord/ForgotPassword";
import { toggleForgotPasswordModal } from "../../../redux/slices/ForgotPasswordModallSlice";
import { useDispatch } from "react-redux";
import { toggleLoginModal } from "../../../redux/slices/loginModalSlice";

const CheckBoxSignUp = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // const [checked, setChecked] = React.useState(true);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  return (
    <>
      <Stack sx={{ direction: "rtl" }}>
        <Typography
          direction="rtl"
          variant="h5"
          textAlign={"right"}
          height={"30px"}
          alignItems={"center"}
          display={"flex"}
          justifyContent={"right"}
          fontSize={{ lg: "14px", md: "10px", sm: "9px", xs: "9px" }}
          marginTop={{ lg: "130px", md: "110px", sm: "90px", xs: "70px" }}
        >
          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          من را به خاطر بسپار
          <Stack
            marginRight={"50px"}
            display={"flex"}
            justifyContent={"space-between"}
            direction="row"
            spacing={2}
          >
            <Button
              onClick={() => {
                dispatch(toggleLoginModal())
                dispatch(toggleForgotPasswordModal())}}
              sx={{
                fontSize: { lg: "14px", md: "11px", sm: "12px", xs: "7px" },
              }}
            >
              رمز عبور را فراموش کردم
            </Button>
            <ForgotPassword />
          </Stack>
        </Typography>
      </Stack>
    </>
  );
};

export default CheckBoxSignUp;
