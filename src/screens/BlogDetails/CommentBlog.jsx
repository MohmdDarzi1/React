// import React, { useState } from "react";
// import ButtonComponent from "../../components/common/ButtonComponent";
// import { Box, Stack } from "@mui/system";
// import { Button, TextField, Typography } from "@mui/material";
// import { Formik, Form, ErrorMessage } from "formik";
// import CommentCard from "./CommentCard";
// import * as Yup from "yup";

// const CommentBlog = ({ data }) => {
//   const [replyComment, setReplyComment] = useState();

//   const validationSchema = Yup.object({
//     title: Yup.string().required("لطفا عنوان را وارد کنید"),
//     desc: Yup.string().required("لطفا توضیحات را وارد کنید"),
//   });

//   return (
//     <Formik
//       initialValues={{ title: "", desc: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         console.log("values", values);
//       }}
//     >
//       {({ errors, handleChange }) => (
//         <Form>
//           <Box
//             flexDirection={"column"}
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               textAlign: "center",
//               alignItems: "center",
//               gap: "20px",
//               width: { lg: "1280px", md: "900px", sm: "600px" },
//               marginRight: { lg: "0px", md: "0px", sm: "150px", xs: "0px" },
//             }}
//           >
//             <Box
//               sx={{
//                 flexDirection: "column",
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 width: "779px",
//               }}
//             >
//               <Typography
//                 sx={{ textAlign: "center", marginTop: "50px", fontSize: "24px" }}
//               >
//                 نظر کاربران درباره این مقاله
//               </Typography>

//               {replyComment && (
//                 <TextField
//                   name="title"
//                   sx={{
//                     width: {
//                       lg: "779px",
//                       md: "750px",
//                       sm: "500px",
//                       xs: "300px",
//                     },
//                     marginTop: "20px",
//                   }}
//                   value={replyComment.title}
//                 />
//               )}

//               <TextField
//                 onChange={handleChange}
//                 name="title"
//                 sx={{
//                   width: { lg: "779px", md: "750px", sm: "500px", xs: "300px" },
//                   marginTop: "20px",
//                 }}
//                 placeholder=" title "
//                 error={Boolean(errors.title)}
//               />
//               <ErrorMessage
//                 name="title"
//                 component="div"
//                 style={{ color: "red" }}
//               />

//               <TextField
//                 name="desc"
//                 onChange={handleChange}
//                 sx={{
//                   width: { lg: "779px", md: "750px", sm: "500px", xs: "300px" },
//                   marginTop: "20px",
//                 }}
//                 placeholder=" desc "
//                 error={Boolean(errors.desc)}
//               />
//               <ErrorMessage
//                 name="desc"
//                 component="div"
//                 style={{ color: "red" }}
//               />
//               <Stack sx={{ marginTop: "20px" }}>
//                 <ButtonComponent
//                   fontSize={{ lg: "16px", md: "15px", sm: "12px", xs: "10px" }}
//                   height={{ lg: "45px", md: "35px", sm: "35px", xs: "25px" }}
//                   text={" ارسال نظر"}
//                 />
//               </Stack>
//             </Box>
//             {data?.commentDtos?.map((comment) => (
//               <CommentCard comment={comment} setReplyComment={setReplyComment} />
//             ))}
//             <Button>مشاهده12نظر دیگر</Button>
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default CommentBlog;

// import React, { useState } from "react";
// import ButtonComponent from "../../components/common/ButtonComponent";
// import { Box, Stack } from "@mui/system";
// import { Button, TextField, Typography } from "@mui/material";
// import { Formik, Form, ErrorMessage } from "formik";
// import CommentCard from "./CommentCard";
// import * as Yup from "yup";

// const CommentBlog = ({ data }) => {
//   const [replyComment, setReplyComment] = useState();

//   const validationSchema = Yup.object({
//     title: Yup.string().required("لطفا عنوان را وارد کنید"),
//     desc: Yup.string().required("لطفا توضیحات را وارد کنید"),
//   });

//   return (
//     <Formik
//       initialValues={{ title: "", desc: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         console.log("values", values);
//       }}
//     >
//       {({ errors, handleChange }) => (
//         <Form>
//           <Box
//             flexDirection="column"
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               textAlign: "center",
//               alignItems: "center",
//               gap: "20px",
//               maxWidth: "1280px",
//               margin: "auto",
//               padding: "20px",
//               backgroundColor: "#f9f9f9",
//               borderRadius: "8px",
//               boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <Typography
//               sx={{ textAlign: "center", marginTop: "50px", fontSize: "24px", fontWeight: "bold" }}
//             >
//               نظر کاربران درباره این مقاله
//             </Typography>

//             {replyComment && (
//               <TextField
//                 name="title"
//                 sx={{
//                   width: "100%",
//                   marginTop: "20px",
//                 }}
//                 value={replyComment.title}
//                 InputProps={{
//                   style: {
//                     padding: "10px",
//                     borderRadius: "8px",
//                     border: "1px solid #ccc",
//                   },
//                 }}
//               />
//             )}

//             <TextField
//               onChange={handleChange}
//               name="title"
//               sx={{
//                 width: "100%",
//                 marginTop: "20px",
//               }}
//               placeholder="عنوان"
//               error={Boolean(errors.title)}
//               InputProps={{
//                 style: {
//                   padding: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #ccc",
//                 },
//               }}
//             />
//             <ErrorMessage
//               name="title"
//               component="div"
//               style={{ color: "red", marginTop: "5px" }}
//             />

//             <TextField
//               name="desc"
//               onChange={handleChange}
//               sx={{
//                 width: "100%",
//                 marginTop: "20px",
//               }}
//               placeholder="توضیحات"
//               error={Boolean(errors.desc)}
//               multiline
//               rows={4}
//               InputProps={{
//                 style: {
//                   padding: "10px",
//                   borderRadius: "8px",
//                   border: "1px solid #ccc",
//                 },
//               }}
//             />
//             <ErrorMessage
//               name="desc"
//               component="div"
//               style={{ color: "red", marginTop: "5px" }}
//             />

//             <Stack sx={{ marginTop: "20px" }}>
//               <ButtonComponent
//                 fontSize={{ lg: "16px", md: "15px", sm: "12px", xs: "10px" }}
//                 height={{ lg: "45px", md: "35px", sm: "35px", xs: "25px" }}
//                 text={"ارسال نظر"}
//               />
//             </Stack>

//             {data?.commentDtos?.map((comment, index) => (
//               <CommentCard key={index} comment={comment} setReplyComment={setReplyComment} />
//             ))}

//             {/* <Button variant="contained" color="primary" sx={{ marginTop: "20px" }}>
//               مشاهده 12 نظر دیگر
//             </Button> */}
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default CommentBlog;

// import React, { useState } from "react";
// import ButtonComponent from "../../components/common/ButtonComponent";
// import { Box, Stack, Card, CardContent, CardActions } from "@mui/material";
// import { Button, TextField, Typography } from "@mui/material";
// import { Formik, Form, ErrorMessage } from "formik";
// import CommentCard from "./CommentCard";
// import * as Yup from "yup";

// const CommentBlog = ({ data }) => {
//   const [replyComment, setReplyComment] = useState();

//   const validationSchema = Yup.object({
//     title: Yup.string().required("لطفا عنوان را وارد کنید"),
//     desc: Yup.string().required("لطفا توضیحات را وارد کنید"),
//   });

//   return (
//     <Formik
//       initialValues={{ title: "", desc: "" }}
//       validationSchema={validationSchema}
//       onSubmit={(values) => {
//         console.log("values", values);
//       }}
//     >
//       {({ errors, handleChange }) => (
//         <Form>
//           <Box
//             flexDirection="column"
//             sx={{
//               display: "flex",
//               justifyContent: "center",
//               textAlign: "center",
//               alignItems: "center",
//               gap: "20px",
//               maxWidth: "1000px",
//               margin: "auto",
//               padding: "20px",
//               backgroundColor: "#f0f0f0",
//               borderRadius: "12px",
//               boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
//             }}
//           >
//             <Typography
//               sx={{
//                 textAlign: "center",
//                 marginTop: "30px",
//                 fontSize: "26px",
//                 fontWeight: "bold",
//                 color: "#333",
//               }}
//             >
//               نظر کاربران درباره این مقاله
//             </Typography>

//             {replyComment && (
//               <TextField
//                 name="title"
//                 sx={{
//                   width: "100%",
//                   marginTop: "20px",
//                   backgroundColor: "#fff",
//                   borderRadius: "8px",
//                 }}
//                 value={replyComment.title}
//                 InputProps={{
//                   style: {
//                     padding: "10px",
//                     borderRadius: "8px",
//                   },
//                 }}
//               />
//             )}

//             <TextField
//               onChange={handleChange}
//               name="title"
//               sx={{
//                 width: "100%",
//                 marginTop: "20px",
//                 backgroundColor: "#fff",
//                 borderRadius: "8px",
//               }}
//               placeholder="عنوان"
//               error={Boolean(errors.title)}
//               InputProps={{
//                 style: {
//                   padding: "10px",
//                   borderRadius: "8px",
//                 },
//               }}
//             />
//             <ErrorMessage
//               name="title"
//               component="div"
//               style={{ color: "red", marginTop: "5px" }}
//             />

//             <TextField
//               name="desc"
//               onChange={handleChange}
//               sx={{
//                 width: "100%",
//                 marginTop: "20px",
//                 backgroundColor: "#fff",
//                 borderRadius: "8px",
//               }}
//               placeholder="توضیحات"
//               error={Boolean(errors.desc)}
//               multiline
//               rows={4}
//               InputProps={{
//                 style: {
//                   padding: "10px",
//                   borderRadius: "8px",
//                 },
//               }}
//             />
//             <ErrorMessage
//               name="desc"
//               component="div"
//               style={{ color: "red", marginTop: "5px" }}
//             />

//             <Stack sx={{ marginTop: "20px" }}>
//               <ButtonComponent
//                 fontSize={{ lg: "16px", md: "15px", sm: "12px", xs: "10px" }}
//                 height={{ lg: "45px", md: "35px", sm: "35px", xs: "25px" }}
//                 text={"ارسال نظر"}
//               />
//             </Stack>

//             {data?.commentDtos?.map((comment, index) => (
//               <Card
//                 key={index}
//                 sx={{
//                   width: "100%",
//                   marginTop: "20px",
//                   backgroundColor: "#fff",
//                   borderRadius: "12px",
//                   boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
//                 }}
//               >
//                 <CardContent>
//                   <CommentCard
//                     comment={comment}
//                     setReplyComment={setReplyComment}
//                   />
//                 </CardContent>
//                 <CardActions>
//                   <Button
//                     size="small"
//                     color="primary"
//                     onClick={() => setReplyComment(comment)}
//                     sx={{
//                       position: "relative",
//                       right: "70px",
//                       bottom: "60px",
//                       color: "text.secondary",
//                     }}
//                   >
//                     پاسخ
//                   </Button>
//                 </CardActions>
//               </Card>
//             ))}

//             {/* <Button
//               variant="contained"
//               color="primary"
//               sx={{
//                 marginTop: "20px",
//                 backgroundColor: "#007BFF",
//                 '&:hover': {
//                   backgroundColor: "#0056b3",
//                 },
//                 color: "#fff",
//                 borderRadius: "8px",
//                 padding: "10px 20px",
//               }}
//             >
//               مشاهده 12 نظر دیگر
//             </Button> */}
//           </Box>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default CommentBlog;



import React, { useState } from "react";
import ButtonComponent from "../../components/common/ButtonComponent";
import { Box, Stack, Card, CardContent, CardActions } from "@mui/material";
import { Button, TextField, Typography } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";
import CommentCard from "./CommentCard";
import * as Yup from "yup";

const CommentBlog = ({ data }) => {
  const [replyComment, setReplyComment] = useState();

  const validationSchema = Yup.object({
    title: Yup.string().required("لطفا عنوان را وارد کنید"),
    desc: Yup.string().required("لطفا توضیحات را وارد کنید"),
  });

  return (
    <Formik
      initialValues={{ title: "", desc: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("values", values);
      }}
    >
      {({ errors, handleChange }) => (
        <Form>
          <Box
            flexDirection="column"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              alignItems: "center",
              gap: "20px",
              maxWidth: "1000px",
              margin: "auto",
              padding: { xs: "10px", sm: "20px" },
              backgroundColor: "#f0f0f0",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                marginTop: { xs: "20px", sm: "30px" },
                fontSize: { xs: "20px", sm: "26px" },
                fontWeight: "bold",
                color: "#333",
              }}
            >
              نظر کاربران درباره این مقاله
            </Typography>

            {replyComment && (
              <TextField
                name="title"
                sx={{
                  width: {lg:"100%",md:"70%",sm:"50%"},
                  marginTop: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                }}
                value={replyComment.title}
                InputProps={{
                  style: {
                    padding: "10px",
                    borderRadius: "8px",
                  },
                }}
              />
            )}

            <TextField
              onChange={handleChange}
              name="title"
              sx={{
                width: {lg:"100%",md:"70%",sm:"50%"},
                marginTop: "20px",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
              placeholder="عنوان"
              error={Boolean(errors.title)}
              InputProps={{
                style: {
                  padding: "10px",
                  borderRadius: "8px",
                },
              }}
            />
            <ErrorMessage
              name="title"
              component="div"
              style={{ color: "red", marginTop: "5px" }}
            />

            <TextField
              name="desc"
              onChange={handleChange}
              sx={{
                width: {lg:"100%",md:"70%",sm:"50%"},
                marginTop: "20px",
                backgroundColor: "#fff",
                borderRadius: "8px",
              }}
              placeholder="توضیحات"
              error={Boolean(errors.desc)}
              multiline
              rows={4}
              InputProps={{
                style: {
                  padding: "10px",
                  borderRadius: "8px",
                },
              }}
            />
            <ErrorMessage
              name="desc"
              component="div"
              style={{ color: "red", marginTop: "5px" }}
            />

            <Stack sx={{ marginTop: "20px" }}>
              <ButtonComponent
                fontSize={{ lg: "16px", md: "15px", sm: "12px", xs: "10px" }}
                height={{ lg: "45px", md: "35px", sm: "35px", xs: "25px" }}
                text={"ارسال نظر"}
              />
            </Stack>

            {data?.commentDtos?.map((comment, index) => (
              <Card
                key={index}
                sx={{
                  width: {lg:"100%",md:"70%",sm:"50%"},
                  marginTop: "20px",
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardContent>
                  <CommentCard
                    comment={comment}
                    setReplyComment={setReplyComment}
                  />
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => setReplyComment(comment)}
                    sx={{
                      position: "relative",
                      right: {lg:"70px",md:"70px",sm:"70px",xs:"170px"},
                      bottom: "60px",
                      color: "text.secondary",
                    }}
                  >
                    پاسخ
                  </Button>
                </CardActions>
              </Card>
            ))}

            {/* <Button
              variant="contained"
              color="primary"
              sx={{
                marginTop: "20px",
                backgroundColor: "#007BFF",
                '&:hover': {
                  backgroundColor: "#0056b3",
                },
                color: "#fff",
                borderRadius: "8px",
                padding: "10px 20px",
              }}
            >
              مشاهده 12 نظر دیگر
            </Button> */}
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default CommentBlog;
