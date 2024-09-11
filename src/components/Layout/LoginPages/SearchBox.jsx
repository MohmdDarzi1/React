import { Button, Checkbox, Stack, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form, useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { useLoginApi } from "../../../core/services/api/auth";
import { setItem } from "../../../core/services/storage/storage.services";
import { toggleLoginModal } from "../../../redux/slices/loginModalSlice";
import ButtonComponent from "../../common/ButtonComponent";
import ForgotPassword from "./ForgatPassWord/ForgotPassword";
import { toggleForgotPasswordModal } from "../../../redux/slices/ForgotPasswordModallSlice";
import { toggleLoginRequestModal } from "../../../redux/slices/LoginRequestModal";
import { toggletoken } from "../../../redux/slices/token";
import { useNavigate } from "react-router-dom";
const SearchBox = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginApi = useLoginApi();
  const formik = useFormik({
    initialValues: {
      phoneOrGmail: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (value) => {
      console.log("values", value);
      // console.log("loginApi", loginApi);
      loginApi.mutate(value, {
        onSuccess: (data) => {
          console.log("loginData", data);
          setItem("token", data.token);
          dispatch(toggletoken(data.token));
          dispatch(toggleLoginModal());
          navigate("/studentPanel");
        },
        onError: (data) => {
          console.log("loginData::error", data);
        },
        onSettled: (data) => {
          console.log("loginData::settle", data);
        },
      });
    },
    validationSchema: Yup.object({
      phoneOrGmail: Yup.string().required("این فیلد الزامی است."),
      password: Yup.string().required("این فیلد الزامی است."),
      rememberMe: Yup.boolean(),
    }),
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Box
          sx={{
            width: { lg: "356px", md: "290px", sm: "250px", xs: "200px" },
            display: "flex",
            justifyContent: "center",
            position: "relative",
            top: { lg: "80px", md: "70px", sm: "40px", xs: "20px" },
            right: { lg: "-10px", md: "0px", sm: "20px", xs: "20px" },
          }}
        >
          <TextField
            fullWidth
            border="none"
            name="phoneOrGmail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneOrGmail}
            placeholder=" ایمیل یا شماره تماس وارد کنید...."
            error={Boolean(formik.errors.phoneOrGmail)}
            helperText={formik.errors.phoneOrGmail}
          />
        </Box>
        <Box
          sx={{
            width: { lg: "356px", md: "290px", sm: "250px", xs: "200px" },
            display: "flex",
            justifyContent: "center",
            position: "relative",
            top: { lg: "100px", md: "80px", sm: "60px", xs: "40px" },
            right: { lg: "-10px", md: "0px", sm: "20px", xs: "20px" },
          }}
        >
          <TextField
            fullWidth
            border="none"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password}
            placeholder=" رمز عبور را وارد کنید..."
          />
        </Box>
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
            checked={formik.values.rememberMe}
            value={formik.values.rememberMe}
            onChange={(event, checked) =>
              formik.setFieldValue("rememberMe", checked)
            }
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
                dispatch(toggleLoginRequestModal());
                // dispatch(toggleForgotPasswordModal());
              }}
              sx={{
                fontSize: { lg: "14px", md: "11px", sm: "12px", xs: "7px" },
              }}
            >
              رمز عبور را فراموش کردم
            </Button>
            <ForgotPassword />
          </Stack>
        </Typography>
        <Box
          sx={{
            margin: "auto",
            width: { lg: "170px", md: "150px", sm: "150px", xs: "110px" },

            marginTop: "50px",
          }}
        >
          <ButtonComponent
            width={{ lg: "170px", md: "150px", sm: "130px", xs: "100px" }}
            text={"ورود به حساب"}
            
          />
        </Box>
      </form>
    </>
  );
};

export default SearchBox;
