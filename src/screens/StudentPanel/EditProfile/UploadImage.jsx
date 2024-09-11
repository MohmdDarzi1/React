// // import { FileUpload } from "@mui/icons-material";
// import { Button, CardMedia, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import React, { useState } from "react";
// import { FileUploader } from "react-drag-drop-files";
// // import React from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import CameraAltIcon from "@mui/icons-material/CameraAlt";
// import { useGetProfileImage } from "../../../core/services/api/user";

// const validationSchema = Yup.object().shape({
//   file: Yup.mixed().required("لطفا یک فایل انتخاب کنید"),
// });

// const fileTypes = ["JPEG", "PNG", "GIF"];

// const UploadImage = ({ setFile, fileUrl, setFileUrl, handleChange }) => {
//   const uploadFile = useGetProfileImage();
//   console.log("fileUrl", fileUrl);
//   return (
//     <div>
//       <Formik
//         initialValues={{
//           file: null,
//         }}
//         validationSchema={validationSchema}
//         onSubmit={(values) => {
//           //
//           const formData = new FormData();
//           formData.append("formFile", values.file);
//           uploadFile.mutate(formData, {
//             onSuccess: (res) => {
//               console.log("success", res);
//               setFile(file);
//             },
//           });
//         }}
//       >
//         {({ setFieldValue }) => (
//           <Form name="file">
//             <Box
//               sx={{
//                 width: { lg: "200px", md: "170px", sm: "150px", xs: "100px" },
//                 textAlign: "center",
//               }}
//             >
//               <CameraAltIcon
//                 sx={{
//                   position: "relative",
//                   top: { lg: "200px", md: "170px", sm: "160px", xs: "110px" },
//                   width: { lg: "40px", md: "30px", sm: "20px", xs: "20px" },
//                   height: "40px",
//                   color: "#fff",
//                 }}
//               />
//               <CardMedia
//                 component="img"
//                 image={fileUrl ? fileUrl : "src/assets/image/ostad.jpg"}
//                 sx={{
//                   width: { lg: "200px", md: "170px", sm: "150px", xs: "100px" },
//                   height: {
//                     lg: "200px",
//                     md: "170px",
//                     sm: "150px",
//                     xs: "100px",
//                   },
//                   borderRadius: "100px",
//                 }}
//               />
//               <Field name="file">
//                 {() => (
//                   <FileUploader
//                     multiple={false}
//                     // //   handleChange={handleChange}
//                     //   name="file"
//                     //   types={fileTypes}

//                     handleChange={(file) => {
//                       setFieldValue("file", file);
//                       handleChange(file);
//                     }}
//                     name="file"
//                     types={fileTypes}
//                   />
//                 )}
//               </Field>
//               <ErrorMessage
//                 name="file"
//                 component="div"
//                 style={{ color: "red" }}
//               />
//               <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
//                 ویرایش تصاویر
//               </Typography>
//             </Box>
//             <Button type="submit">sub</Button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default UploadImage;

import { Button, CardMedia, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FileUploader } from "react-drag-drop-files";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useGetProfileImage } from "../../../core/services/api/user";
import { useQueryClient } from "@tanstack/react-query";

const validationSchema = Yup.object().shape({
  file: Yup.mixed().required("لطفا یک فایل انتخاب کنید"),
});

const fileTypes = ["JPEG", "PNG", "GIF", "JPG"];

const UploadImage = ({ setFile, fileUrl, handleChange }) => {
  const uploadFile = useGetProfileImage();
  console.log("fileUrl", fileUrl);
  const queryQlient = useQueryClient();
  return (
    <Formik
      initialValues={{
        file: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const formData = new FormData();
        formData.append("formFile", values.file);
        uploadFile.mutate(formData, {
          onSuccess: (res) => {
            console.log("success", res);
            // setFileUrl
            queryQlient.invalidateQueries(["profile"]);
            setFile(values.file);
          },
        });
      }}
    >
      {({ setFieldValue }) => (
        <Form name="file">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Box sx={{ position: "relative" }}>
              <CardMedia
                component="img"
                image={fileUrl ? fileUrl : "src/assets/image/ostad.jpg"}
                sx={{
                  width: { lg: "200px", md: "170px", sm: "150px", xs: "100px" },
                  height: {
                    lg: "200px",
                    md: "170px",
                    sm: "150px",
                    xs: "100px",
                  },
                  borderRadius: "50%",
                  objectFit: "cover",
                }}
                alt="Profile"
              />
              <CameraAltIcon
                sx={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.6)",
                  borderRadius: "50%",
                  padding: "5px",
                  width: { lg: "40px", md: "30px", sm: "25px", xs: "20px" },
                  height: { lg: "40px", md: "30px", sm: "25px", xs: "20px" },
                  color: "#fff",
                }}
              />
            </Box>
            <Field name="file">
              {() => (
                <FileUploader
                  multiple={false}
                  handleChange={(file) => {
                    setFieldValue("file", file);
                    handleChange(file);
                  }}
                  name="file"
                  types={fileTypes}
                  hoverTitle="برای آپلود بکشید و رها کنید"
                  label="تصویر را بکشید و اینجا رها کنید"
                />
              )}
            </Field>
            <ErrorMessage
              name="file"
              component="div"
              style={{ color: "red", textAlign: "center" }}
            />
            {/* <Typography sx={{ textAlign: "center", color: "text.secondary" }}>
              ویرایش تصاویر
            </Typography> */}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ margin: "10px" }}
            >
              آپلود
            </Button>
   
          </Box>
          {/* <Button
              type="submit"
              variant="contained"
              color="error"
              sx={{ margin: "10px" }}
            >
              حذف
            </Button> */}
        </Form>
      )}
    </Formik>
  );
};

export default UploadImage;
