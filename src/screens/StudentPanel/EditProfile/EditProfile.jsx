import {
  Box,
  Button,
  TextField,
  Stack,
  Typography,
  styled,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useFormik } from "formik";
import { Link, useOutletContext } from "react-router-dom";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import * as Yup from "yup";
// import { useGetProfileImage } from "../../../core/services/api/user";

import UploadImage from "./UploadImage";
import {
  useEditProfile,
  useGetCurrentUserProfile,
  useGetProfile,
} from "../../../core/services/api/user";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useQueryClient } from "@tanstack/react-query";

const StyledForm = styled(Box)({
  flexDirection: "row",
  width: "95%",
  display: "flex",
  justifyContent: "space-between",
  flexFlow: "wrap",
  gap: "20px",
});
const StyledStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  alignContent: "center",
  width: "100%",
});
const validationSchema = Yup.object().shape({
  FName: Yup.string().required("نام الزامی است"),
  TelegramLink: Yup.string().required("نام الزامی است"),
  LinkdinProfile: Yup.string().required("نام الزامی است"),
  ReceiveMessageEvent: Yup.string().required("نام الزامی است"),
  HomeAdderess: Yup.string().required("نام الزامی است"),
  Gender: Yup.string().required("نام الزامی است"),
  UserAbout: Yup.string().required("نام الزامی است"),
  LName: Yup.string().required("نام خانوادگی الزامی است"),
  NationalCode: Yup.string().required("کد ملی الزامی است"),
  // BirthDay: Yup.string().required("تاریخ تولد الزامی است"),
});

const EditProfile = () => {
  const queryClient = useQueryClient();

  const [file, setFile] = useState(null);
  const { data } = useGetProfile();
  const fileIndex = 0;
  const [initialValues, setInitialValues] = useState({
    FName: "",
    LName: "",
    NationalCode: 0,
    UserAbout: "",
    BirthDay: "1991-03-04T00:00:00",
    Gender: false,
    HomeAdderess: "",
    email: "",
    ReceiveMessageEvent: true,
    phoneNumber: "",
  });

  useEffect(() => {
    if (data) {
      setInitialValues({
        FName: data.FName ?? "",
        LName: data.LName ?? "",
        NationalCode: data.NationalCode ?? "",
        UserAbout: data.UserAbout ?? "",
        BirthDay: "1991-03-04T00:00:00",
        Gender: data.Gender || false,
        HomeAdderess: data.HomeAdderess ?? "",
        email: data.email ?? "",
        ReceiveMessageEvent: data.ReceiveMessageEvent ?? true,
        phoneNumber: data.phoneNumber ?? true,
      });
      setFileUrl(data?.userImage[fileIndex]?.puctureAddress);
    }
  }, [data]);

  const [fileUrl, setFileUrl] = useState(null);
  const editProfile = useEditProfile();
  const { data: data2 } = editProfile;

  const handleFileChange = (file) => {
    setFileUrl(URL.createObjectURL(file));
    setFile(file);
  };

  const formik = useFormik({
    initialValues: initialValues,
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = new FormData();
      for (let key in values) {
        formData.append(key, values[key]);
      }
      editProfile.mutate(formData, {
        onSuccess: (data2) => {
          queryClient.invalidateQueries(["profile"]);
          console.log("success", data);
        },
      });
    },
  });
  console.log("dataprofilee", data);

  return (
    <Stack
      sx={{
        width: { lg: "900px", md: "600px", sm: "400px" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <StyledStack
        sx={{
          justifyContent: "space-between",
          borderBottom: "1px solid grey",
          paddingBottom: 1,
          marginBottom: 2,
          alignItems: "center",
        }}
      >
        <Typography variant="h5">داشبورد</Typography>
        <Stack
          sx={{
            gap: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton component={Link} to="/">
            <NotificationsIcon />
          </IconButton>
          <IconButton component={Link} to="/">
            <LocalGroceryStoreOutlinedIcon />
          </IconButton>
        </Stack>
      </StyledStack>

      <UploadImage
        setFile={setFile}
        fileUrl={fileUrl}
        setFileUrl={setFileUrl}
        handleChange={handleFileChange}
      />
      <form onSubmit={formik.handleSubmit}>
        <StyledForm
          sx={{
            flexFlow: { lg: "wrap", md: "wrap", smL: "wrap", xs: "wrap" },
          }}
        >
          <TextField
            name="FName"
            placeholder="نام"
            value={formik.values.FName}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.FName)}
            helperText={formik.errors.FName}
          />
          <TextField
            name="LName"
            placeholder="نام خانوادگی"
            value={formik.values.LName}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.LName)}
            helperText={formik.errors.LName}
          />
          <TextField
            name="NationalCode"
            placeholder="کد ملی"
            value={formik.values.NationalCode}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.NationalCode)}
            helperText={formik.errors.NationalCode}
          />
          <TextField
            name="UserAbout"
            placeholder="جزییات کاربر"
            value={formik.values.UserAbout}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.UserAbout)}
            helperText={formik.errors.UserAbout}
          />
          <TextField
            name="TelegramLink"
            placeholder="تلگرام"
            value={formik.values.TelegramLink}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.TelegramLink)}
            helperText={formik.errors.TelegramLink}
          />
          <TextField
            name="LinkdinProfile"
            placeholder=" لینکدین"
            value={formik.values.LinkdinProfile}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.LinkdinProfile)}
            helperText={formik.errors.LinkdinProfile}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            {/* DatePicker component */}
          </LocalizationProvider>
          <FormControl sx={{ width: "100px" }}>
            <InputLabel id="demo-simple-select-label">جنسیت</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="Gender"
              value={formik.values.Gender}
              onChange={formik.handleChange}
              placeholder="جنسیت"
            >
              <MenuItem value={true}>مرد</MenuItem>
              <MenuItem value={false}>زن</MenuItem>
            </Select>
          </FormControl>
          <TextField
            sx={{ width: "100%" }}
            name="HomeAdderess"
            placeholder="آدرس"
            value={formik.values?.HomeAdderess}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.HomeAdderess)}
            helperText={formik.errors.HomeAdderess}
          />

          <Box sx={{ width: "100%" }}>
            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                width: "180px",
                height: "40px",
                backgroundColor: "primary.main",
                color: "text.secondary",
              }}
            >
              ثبت اطلاعات
            </Button>
          </Box>
        </StyledForm>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            gap: "10px",
            width: "95%",
            direction: "ltr",
          }}
        ></Box>
      </form>
    </Stack>
  );
};

export default EditProfile;
