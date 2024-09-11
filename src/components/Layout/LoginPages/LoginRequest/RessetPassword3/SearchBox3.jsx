import { Checkbox, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form, useFormik } from "formik";
import React from "react";
import * as Yup from "yup";
// import ButtonComponent from "../../../common/ButtonComponent";
// import { useSignRegester } from "../../../../core/services/api/auth";
import { useDispatch } from "react-redux";
import ButtonComponent from "../../../../common/ButtonComponent";
import { useRessetPass3 } from "../../../../../core/services/api/auth";
const SearchBox3 = () => {
  const Resset3 = useRessetPass3();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
        id: "",
      password: "",
      password2: "",
      rememberMe: false,
    },
    onSubmit: (value) => {
      console.log("values", value);
      console.log("loginApi", loginApi);

      Resset3.mutate(value, {
        onSuccess: (data) => {
          console.log("RegesterData", data);
          // setItem("token",data.token)
          // dispatch(toggleLoginModal());
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
      id: Yup.string()
        .required("Number is required"),
        // .matches(/^[0-9]+$/, "این فیلد باید تنها شامل اعداد باشد"),
      password: Yup.string().required("This field is required"),
      password2: Yup.string()
        .required("This field is required"),
        // .email("ایمیل نامعتبر است")
        // .matches(
        //   /^[a-zA-Z0-9._%+-]+@(gmail\.com|email\.com)$/,
        //   "ایمیل باید شامل دامنه gmail.com یا email.com باشد"
        // ),

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
            name="id"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneOrGmail}
            placeholder=" نام کاربری "
            error={Boolean(formik.errors.id)}
            helperText={formik.errors.id}
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
            value={formik.values.password}
            error={Boolean(formik.errors.password)}
            helperText={formik.errors.password}
            fullWidth
            // required
            border="none"
            name="password"
            type="text"
            placeholder=" رمز عبور را وارد کنید..."
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
          <TextField
            onChange={formik.handleChange}
            value={formik.values.password2}
            error={Boolean(formik.errors.password2)}
            helperText={formik.errors.password2}
            fullWidth
            // required
            border="none"
            name="password2"
            type="text"
            placeholder="    تکرار رمز عبور  ..."
            inputProps={{
              style: { borderRadius: "50px", fontSize: "12px" },
            }}
            sx={{ borderRadius: "10px" }}
          />
        </Box>
        <Box sx={{ height: "100px", marginTop: "120px" }}>
          <Box sx={{ margin: "auto", width: "150px" }}>
            <ButtonComponent
              // onClick={() =>{
              //   dispatch(toggleForgotPasswordModal())
              //   dispatch(toggleLoginRequestModal())}}
              width={{ lg: "170px", md: "150px", sm: "130px", xs: "100px" }}
              text={"  اتمام"}
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

export default SearchBox3;
