// // import { Box, Button, Stack, TextField, Typography } from "@mui/material";

// // import React from "react";
// // import { Link } from "react-router-dom";
// // import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
// // import NotificationsIcon from "@mui/icons-material/Notifications";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// // import { useFormik } from "formik";
// // import React from 'react';
// import { useFormik } from "formik";
// // import * as Yup from 'yup';
// import { TextField, Button, Box, Stack, Typography } from "@mui/material";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import { TabPanel } from "@mui/lab";
// import { usePasswordChange } from "../../core/services/api/user";




// const MyForm = () => {
//   const ChangePass = usePasswordChange();
//   const formik = useFormik({
//     initialValues: {
//       oldPassword: "",
//       newPassword: "",
//       // repetPassword: "",
//     },
//     // validationSchema: validationSchema,
//     onSubmit: (values) => {
//       console.log(values);
//       ChangePass.mutate(values, {
//         onSuccess: (data) => {
//           console.log("RegesterData", data);
//           // setItem("token",data.token)
//           // dispatch(toggleLoginModal());
//         },
//         onError: (data) => {
//           console.log("RegesterData::error", data);
//         },
//         onSettled: (data) => {
//           console.log("RegesterData::settle", data);
//         },
//       });
//       // handle form submission
//     },
//      validationSchema : Yup.object({
//       oldPassword: Yup.string().required("رمز عبور فعلی الزامی است"),
//       newPassword: Yup.string().required("رمز عبور جدید الزامی است"),
//       // repetPassword: Yup.string()
//       //   .oneOf(
//       //     [Yup.ref("NewPassword"), null],
//       //     "رمز عبور جدید باید مطابقت داشته باشد"
//       //   )
//       //   .required("تکرار رمز عبور جدید الزامی است"),
//     })
//   });

//   return (
//     <>
//       {/* <Stack
//       sx={{
//         width: { lg: "1200px", md: "600px", sm: "400px" },
//         // height: "650px",
//         border: "1px solid #ccc",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     > */}
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",

//           height: "50px",
//           borderBottom: "1px solid gray",
//         }}
//       >
//         <Typography variant="h5">-تغییر رمز عبور</Typography>
//         <Stack
//           sx={{
//             gap: "10%",
//             flexDirection: "row",
//             alignItems: "center",
//             alignContent: "center",
//           }}
//         >
//           <Link to={"/"}>
//             <NotificationsIcon />
//           </Link>
//           <Link to={"/"}>
//             <LocalGroceryStoreOutlinedIcon />
//           </Link>
//         </Stack>
//       </Box>
//       <form onSubmit={formik.handleSubmit}>
//         {/* <Box sx={{width:"500px",display:"flex",justifyContent:"center",flexDirection:"column",gap:"20px"}}>  */}
//         <Box sx={{ width: "100%" }}>
//           رمز عبور فعلی
//           <TextField
//             fullWidth
//             placeholder="رمز عبور فعلی"
//             name="oldPassword"
//             onChange={formik.handleChange}
//             value={formik.values.oldPassword}
//             error={Boolean(formik.errors.oldPassword && formik.touched.oldPassword)}
//             helperText={formik.touched.oldPassword && formik.errors.oldPassword}
//           />
//         </Box>
//         <Box sx={{ width: "100%" }}>
//           رمز عبور جدید
//           <TextField
//             fullWidth
//             placeholder="رمز عبور جدید"
//             name="newPassword"
//             onChange={formik.handleChange}
//             value={formik.values.newPassword}
//             error={Boolean(
//               formik.errors.newPassword && formik.touched.newPassword
//             )}
//             helperText={formik.touched.newPassword && formik.errors.newPassword}
//           />
//         </Box>
//         {/* <Box sx={{ width: "100%" }}>
//           تکرار رمز عبور جدید
//           <TextField
//             fullWidth
//             placeholder="تکرار رمز عبور جدید"
//             name="repetPassword"
//             onChange={formik.handleChange}
//             value={formik.values.repetPassword}
//             error={Boolean(
//               formik.errors.repetPassword && formik.touched.repetPassword
//             )}
//             helperText={
//               formik.touched.repetPassword && formik.errors.repetPassword
//             }
//           />
//         </Box> */}
//         <Box
//           sx={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             marginTop: "20px",
//           }}
//         >
//           <Button
//             type="submit"
//             variant="contained"
//             disableElevation
//             sx={{
//               width: "20%",
//               height: "40px",
//               backgroundColor: "primary.main",
//               color: "text.secondary",
//             }}
//           >
//             ثبت اطلاعات
//           </Button>
//         </Box>

//         <Box sx={{ width: "100%", height: "50px", direction: "ltr" }}>
//           <Link to="/">
//             <KeyboardBackspaceIcon />
//             بازگشت
//           </Link>
//           {/* <Button sx={{ color: "text.secondary" }}>
//        <KeyboardBackspaceIcon />
//         بازگشت

//      </Button> */}
//           {/* </Box> */}
//         </Box>
//       </form>
//       {/* </Stack> */}
//     </>
//   );
// };

// export default MyForm;




// import React from "react";
// import { useFormik } from "formik";
// import { TextField, Button, Box, Stack, Typography, IconButton } from "@mui/material";
// import * as Yup from "yup";
// import { Link } from "react-router-dom";
// import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
// import { usePasswordChange } from "../../core/services/api/user";

// const MyForm = () => {
//   const ChangePass = usePasswordChange();
//   const formik = useFormik({
//     initialValues: {
//       oldPassword: "",
//       newPassword: "",
//     },
//     validationSchema: Yup.object({
//       oldPassword: Yup.string().required("رمز عبور فعلی الزامی است"),
//       newPassword: Yup.string().required("رمز عبور جدید الزامی است"),
//     }),
//     onSubmit: (values) => {
//       console.log(values);
//       ChangePass.mutate(values, {
//         onSuccess: (data) => {
//           console.log("RegesterData", data);
//         },
//         onError: (data) => {
//           console.log("RegesterData::error", data);
//         },
//         onSettled: (data) => {
//           console.log("RegesterData::settle", data);
//         },
//       });
//     },
//   });

//   return (
//     <>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//           width: "100%",
//           height: "60px",
//           borderBottom: "1px solid gray",
//           padding: "0 20px",
//           boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
//         }}
//       >
//         <Typography variant="h5">تغییر رمز عبور</Typography>
//         <Stack
//           sx={{
//             flexDirection: "row",
//             alignItems: "center",
//             gap: "15px",
//           }}
//         >
//           <IconButton component={Link} to={"/"}>
//             <NotificationsIcon />
//           </IconButton>
//           <IconButton component={Link} to={"/"}>
//             <LocalGroceryStoreOutlinedIcon />
//           </IconButton>
//         </Stack>
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//           justifyContent: "center",
//           padding: "40px 20px",
//         }}
//       >
//         <form onSubmit={formik.handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
//           <Box sx={{ marginBottom: "20px" }}>
//             <Typography variant="body1">رمز عبور فعلی</Typography>
//             <TextField
//               fullWidth
//               placeholder="رمز عبور فعلی"
//               name="oldPassword"
//               type="password"
//               onChange={formik.handleChange}
//               value={formik.values.oldPassword}
//               error={Boolean(formik.errors.oldPassword && formik.touched.oldPassword)}
//               helperText={formik.touched.oldPassword && formik.errors.oldPassword}
//               sx={{ marginTop: "10px" }}
//             />
//           </Box>
//           <Box sx={{ marginBottom: "20px" }}>
//             <Typography variant="body1">رمز عبور جدید</Typography>
//             <TextField
//               fullWidth
//               placeholder="رمز عبور جدید"
//               name="newPassword"
//               type="password"
//               onChange={formik.handleChange}
//               value={formik.values.newPassword}
//               error={Boolean(formik.errors.newPassword && formik.touched.newPassword)}
//               helperText={formik.touched.newPassword && formik.errors.newPassword}
//               sx={{ marginTop: "10px" }}
//             />
//           </Box>
//           <Box
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               marginTop: "20px",
//             }}
//           >
//             <Button
//               type="submit"
//               variant="contained"
//               disableElevation
//               sx={{
//                 width: "50%",
//                 height: "40px",
//                 backgroundColor: "primary.main",
//                 color: "text.secondary",
//               }}
//             >
//               ثبت اطلاعات
//             </Button>
//           </Box>
//           <Box sx={{ width: "100%", marginTop: "20px", textAlign: "right" }}>
//             <IconButton component={Link} to="/">
//               <KeyboardBackspaceIcon />
//               <Typography variant="body2" sx={{ marginLeft: "8px" }}>بازگشت</Typography>
//             </IconButton>
//           </Box>
//         </form>
//       </Box>
//     </>
//   );
// };

// export default MyForm;





import React from "react";
import { useFormik } from "formik";
import { TextField, Button, Box, Stack, Typography, IconButton } from "@mui/material";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { usePasswordChange } from "../../core/services/api/user";

const MyForm = () => {
  const ChangePass = usePasswordChange();
  const formik = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
    },
    validationSchema: Yup.object({
      oldPassword: Yup.string().required("رمز عبور فعلی الزامی است"),
      newPassword: Yup.string().required("رمز عبور جدید الزامی است"),
    }),
    onSubmit: (values) => {
      console.log(values);
      ChangePass.mutate(values, {
        onSuccess: (data) => {
          console.log("RegesterData", data);
        },
        onError: (data) => {
          console.log("RegesterData::error", data);
        },
        onSettled: (data) => {
          console.log("RegesterData::settle", data);
        },
      });
    },
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          height: { xs: "50px", sm: "60px" },
          borderBottom: "1px solid gray",
          padding: "0 20px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <Typography variant="h5" fontSize={{lg:"16px",md:"14px",sm:"12px",xs:"10px"}}>تغییر رمز عبور</Typography>
        <Stack
          sx={{
            flexDirection: "row",
            alignItems: "center",
            gap: { xs: "10px", sm: "15px" },
          }}
        >
          <IconButton component={Link} to={"/"}>
            <NotificationsIcon />
          </IconButton>
          <IconButton component={Link} to={"/"}>
            <LocalGroceryStoreOutlinedIcon />
          </IconButton>
        </Stack>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
        }}
      >
        <form onSubmit={formik.handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography variant="body1">رمز عبور فعلی</Typography>
            <TextField
              fullWidth
              placeholder="رمز عبور فعلی"
              name="oldPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.oldPassword}
              error={Boolean(formik.errors.oldPassword && formik.touched.oldPassword)}
              helperText={formik.touched.oldPassword && formik.errors.oldPassword}
              sx={{ marginTop: "10px" }}
            />
          </Box>
          <Box sx={{ marginBottom: "20px" }}>
            <Typography variant="body1">رمز عبور جدید</Typography>
            <TextField
              fullWidth
              placeholder="رمز عبور جدید"
              name="newPassword"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.newPassword}
              error={Boolean(formik.errors.newPassword && formik.touched.newPassword)}
              helperText={formik.touched.newPassword && formik.errors.newPassword}
              sx={{ marginTop: "10px" }}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "20px",
            }}
          >
            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{
                width: { xs: "80%", sm: "50%" },
                height: "40px",
                backgroundColor: "primary.main",
                color: "text.secondary",
              }}
            >
              ثبت اطلاعات
            </Button>
          </Box>
          {/* <Box sx={{ width: "100%", marginTop: "20px", textAlign: "right" }}>
            <IconButton component={Link} to="/" sx={{ display: "flex", alignItems: "center" }}>
              <KeyboardBackspaceIcon />
              <Typography variant="body2" sx={{ marginLeft: "8px" }}>بازگشت</Typography>
            </IconButton>
          </Box> */}
        </form>
      </Box>
    </>
  );
};

export default MyForm;
