// import { Box } from "@mui/system";
// import { Form, Formik, useFormik } from "formik";
// import React from "react";
// import ReactCodeInput from "react-code-input";
// import * as Yup from "yup";
// import ButtonComponent from "../../../common/ButtonComponent";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ReactCodeInput from "react-code-input";
import * as Yup from "yup";
import { Box, Button, modalClasses } from "@mui/material";
import ButtonComponent from "../../../common/ButtonComponent";
import { useSignApiData } from "../../../../core/services/api/auth";
import {
  selectSignUpPhoneNumber,
  toggleSignUpPhoneNumber,
} from "../../../../redux/slices/signUpPhoneNumber";
import { useDispatch, useSelector } from "react-redux";
import { toggleForgotPasswordModal } from "../../../../redux/slices/ForgotPasswordModallSlice";
import { toggleSignUpRequestModal } from "../../../../redux/slices/SignUpRequestModal";
import { toggleRegesterModal } from "../../../../redux/slices/RegesterSlice";

const SearchBox2 = () => {
  const SignApiData = useSignApiData();
  const dispatch = useDispatch();
  const phoneNumber = useSelector(selectSignUpPhoneNumber);
  const validationSchema = Yup.object().shape({
    verifyCode: Yup.string()
      .required("کد الزامی است")
      .length(5, "کد باید دقیقاً ۵ رقم باشد"),
  });

  return (
    <Formik
      initialValues={{ verifyCode: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("formData::values", values);
        const apiData = {
          verifyCode: values.verifyCode,
          phoneNumber: phoneNumber,
        };
        SignApiData.mutate(apiData, {
          onSuccess: (data) => {
            console.log("verify code::", data);
            if (data.success == true) {
              // dispatch(toggleSignUpPhoneNumber());
              dispatch(toggleForgotPasswordModal());
            }
          },
          onError: (data) => {
            console.log("SignData::error", data);
          },
          onSettled: (data) => {
            console.log("SignApiData", values);
            console.log("SignData::settle", data);
          },
        });
        // console.log(values);
      }}
    >
      {({ setFieldValue, errors }) => (
        <Form>
          <div>
            <ReactCodeInput
              type="number"
              fields={5}
              name="verifyCode"
              onChange={(value) => setFieldValue("verifyCode", value)}
            />
            {errors.verifyCode && (
              <div style={{ color: "red" }}>{errors.verifyCode}</div>
            )}
          </div>

          {/* <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
            // marginTop: "50px",
            color: "primary.main",
          }}
        >
          1:34
        </Box> */}
          <Box
            sx={{
              width: "150px",
              textAlign: "center",
              alignItems: "center",
              margin: "auto",
              marginTop: "50px",
            }}
          >
            <ButtonComponent
              // onClick={()=>dispatch(toggleForgotPasswordModal())}
              width={{ lg: "170px", md: "150px", sm: "130px", xs: "100px" }}
              text={" دریافت کد"}
              // type="submit"
            />{" "}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox2;
