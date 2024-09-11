import { Checkbox, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
import ButtonComponent from "../../../common/ButtonComponent";
import { useSignRegester } from "../../../../core/services/api/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectSignUpPhoneNumber } from "../../../../redux/slices/signUpPhoneNumber";
import { toggleLoginModal } from "../../../../redux/slices/loginModalSlice";
const SearchBox = () => {
  const phoneNumber = useSelector(selectSignUpPhoneNumber);
  console.log("phoneNumber", phoneNumber);
  const SignRegesterApi = useSignRegester();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      password: "",
      Gmail: "",
      phoneNumber: "",
      rememberMe: false,
    },
    onSubmit: (value) => {
      console.log("values", value);
      const apiData = {
        password: value.password,
        gmail: value.Gmail,
        phoneNumber: phoneNumber,
      };
      // console.log("loginApi", loginApi);

      SignRegesterApi.mutate(apiData, {
        onSuccess: (data) => {
          console.log("RegesterData", data);
          if (data.success == true) {
            // dispatch(toggleSignUpPhoneNumber());
            dispatch(toggleLoginModal());
          }
        },
        onError: (data) => {
          console.log("RegesterData::error", data);
        },
        onSettled: (data) => {
          console.log("RegesterData::settle", data);
        },
      });
    },

    validationSchema: Yup.object({
      password: Yup.string().required(" رمز عبور را درست وارد کنید"),
      Gmail: Yup.string()
        .required(" ایمیل را لطقا درست وارد کنید   ")
        .email("ایمیل نامعتبر است")
        .matches(
          /^[a-zA-Z0-9._%+-]+@(gmail\.com|email\.com)$/,
          "ایمیل باید شامل دامنه gmail.com یا email.com باشد"
        ),

      // phoneNumber: Yup.string()
      // .matches(/^[0-9]+$/, "این فیلد باید تنها شامل اعداد باشد")
      //   .required("شماره موبایل را درست وارد کنید"),

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
            top: { lg: "60px", md: "60px", sm: "40px", xs: "20px" },
            right: { lg: "-10px", md: "0px", sm: "20px", xs: "20px" },
          }}
        >
          <TextField
            fullWidth
            // required
            border="none"
            name="password"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneOrGmail}
            placeholder=" رمز عبور را وارد کنید..."
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password}
            inputProps={{ style: { borderRadius: "50px", fontSize: "15px" } }}
            sx={{ borderRadius: "10px" }}
          />
        </Box>
        <Box
          sx={{
            width: { lg: "356px", md: "290px", sm: "250px", xs: "200px" },
            display: "flex",
            justifyContent: "center",
            position: "relative",
            top: { lg: "80px", md: "80px", sm: "60px", xs: "40px" },
            right: { lg: "-10px", md: "0px", sm: "20px", xs: "20px" },
          }}
        >
          <TextField
            onChange={formik.handleChange}
            value={formik.values.phoneOrGmail}
            error={Boolean(formik.errors.Gmail)}
            helperText={formik.errors.Gmail}
            fullWidth
            // required
            border="none"
            name="Gmail"
            type="text"
            placeholder="    ایمیل  ..."
            inputProps={{
              style: { borderRadius: "50px", fontSize: "12px" },
            }}
            sx={{ borderRadius: "10px" }}
          />
        </Box>
        <Box
          sx={{
            width: { lg: "356px", md: "290px", sm: "250px", xs: "200px" },
            display: "flex",
            justifyContent: "center",
            position: "relative",
            top: { lg: "100px", md: "100px", sm: "80px", xs: "60px" },
            right: { lg: "-10px", md: "0px", sm: "20px", xs: "20px" },
          }}
        >
          {/* <TextField
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            error={Boolean(formik.errors.phoneNumber)}
            helperText={formik.errors.phoneNumber}
            fullWidth
            // required
            border="none"
            name="phoneNumber"
            type="text"
            placeholder=" شماره موبایل"
            inputProps={{
              style: { borderRadius: "50px", fontSize: "12px" },
            }}
            sx={{ borderRadius: "10px" }}
          /> */}
          {/* {phoneNumber} */}
        </Box>
        <Box sx={{ height: "100px", marginTop: "120px" }}>
          <Box sx={{ margin: "auto", width: "150px" }}>
            <ButtonComponent
              onClick={() =>{
               
              }}
              //   dispatch(toggleForgotPasswordModal())
              //   dispatch(toggleLoginRequestModal())}}
              width={{ lg: "170px", md: "150px", sm: "130px", xs: "100px" }}
              text={" دریافت کد"}
            />
          </Box>
          <Checkbox
            checked={formik.values.rememberMe}
            value={formik.values.rememberMe}
            onChange={(event, checked) =>
              formik.setFieldValue("rememberMe", checked)
            }
            inputProps={{ "aria-label": "controlled" }}
          />
          من را به خاطر بسپار
        </Box>
      </form>
    </>
  );
};

export default SearchBox;
