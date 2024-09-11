import { TextField } from "@mui/material";
import { Box, border } from "@mui/system";
import { Form, Formik, useFormik } from "formik";
import React from "react";
import ReactCodeInput from "react-code-input";
import ButtonComponent from "../../../common/ButtonComponent";
import { useRessetPassword } from "../../../../core/services/api/auth";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { toggleSignUpRequestModal } from "../../../../redux/slices/SignUpRequestModal";
import { toggleLoginModal } from "../../../../redux/slices/loginModalSlice";
import { toggleRessetPassModal } from "../../../../redux/slices/RessetPassSlice";
const SearchBox2 = () => {
  const dispatch = useDispatch();
  const RessetPassword = useRessetPassword();
  const formik = useFormik({
    initialValues: {
      Gmail: "",
    },
    onSubmit: (value) => {
      console.log("values", value);
      // console.log("loginApi", loginApi);
      RessetPassword.mutate(value, {
        onSuccess: (data) => {
          console.log("RessetData", data);
          // setItem("token",data.token)
          dispatch(toggleLoginModal());
          dispatch(toggleRessetPassModal());
        },
        onError: (data) => {
          console.log("resset::error", data);
        },
        onSettled: (data) => {
          console.log("resset::settle", data);
        },
      });
    },
    validationSchema: Yup.object({
      Gmail: Yup.string()
        .required("این فیلد الزامی است.")
        .email("ایمیل نامعتبر است")
        .matches(
          /^[a-zA-Z0-9._%+-]+@(gmail\.com|email\.com)$/,
          "ایمیل باید شامل دامنه gmail.com یا email.com باشد"
        ),
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
            top: { lg: "100px", md: "80px", sm: "60px", xs: "40px" },
            right: { lg: "-10px", md: "0px", sm: "20px", xs: "20px" },
          }}
        >
          <TextField
            fullWidth
            // required
            border="none"
            name="Gmail"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.Gmail}
            placeholder="  ایمیل را وارد کنید...."
            error={Boolean(formik.errors.Gmail)}
            helperText={formik.errors.Gmail}
            // inputProps={{ style: { borderRadius: "50px", fontSize: "15px" } }}
            sx={{ borderRadius: "10px" }}
          />
        </Box>
        <Box
          sx={{
            margin: "auto",
            width: { lg: "170px", md: "150px", sm: "150px", xs: "110px" },
            marginTop: "150px",
          }}
        >
          <ButtonComponent
            width={{ lg: "170px", md: "150px", sm: "130px", xs: "100px" }}
            text={"  تایید"}
            // type="submit"
          />{" "}
        </Box>
      </form>
    </>
  );
};

export default SearchBox2;
