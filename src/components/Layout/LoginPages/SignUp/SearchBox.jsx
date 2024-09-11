import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Formik, Form, useFormik } from "formik";
import React from "react";
import { useSignApi } from "../../../../core/services/api/auth";
import { toggleSignUpModal } from "../../../../redux/slices/signUpModalSlice";
import * as Yup from "yup";
import ButtonComponent from "../../../common/ButtonComponent";
import { toggleSignUpRequestModal } from "../../../../redux/slices/SignUpRequestModal";
import { useDispatch } from "react-redux";
import { setItem } from "../../../../core/services/storage/storage.services";
import { toggleSignUpPhoneNumber } from "../../../../redux/slices/signUpPhoneNumber";
import { toast } from "react-toastify";
const SearchBox = () => {
  const SignApi = useSignApi();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
    },
    onSubmit: (value) => {
      SignApi.mutate(value, {
        onSuccess: (data) => {
          console.log("signUpData", data);
          if (data.success) {
            dispatch(toggleSignUpModal());
            dispatch(toggleSignUpRequestModal());
            dispatch(toggleSignUpPhoneNumber(value.phoneNumber));
          }
          // dispatch(toggleSignUpModal());
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
      phoneNumber: Yup.string()
        .required("این فیلد الزامی است.")
        .length(11, "شماره تماس نامعتبر"),
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
            name="phoneNumber"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            placeholder=" شماره موبایل"
            error={Boolean(formik.errors.phoneNumber)}
            helperText={formik.errors.phoneNumber}
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
            onClick={() => {}}
            width={{ lg: "170px", md: "150px", sm: "130px", xs: "100px" }}
            text={" دریافت کد"}
            // type="submit"
          />{" "}
        </Box>
      </form>
    </>
  );
};

export default SearchBox;
