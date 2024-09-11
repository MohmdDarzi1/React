import React, { useState } from "react";
import { Box, Stack } from "@mui/system";
import {
  Button,
  CardMedia,
  Checkbox,
  TextField,
  Typography,
} from "@mui/material";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import MessageIcon from "@mui/icons-material/Message";
import { ErrorMessage, Form, Formik } from "formik";
import {
  useCourseCommnets,
  useDeleteCourseCommentLike,
  useGetCourseCommentId,
  useGetCourseDisLikeComment,
  useGetCourseLikeComment,
  useGetCourseReplyCommnets,
  useGetReplyCommnet,
  // useLikeCommnetsCourse,
} from "../../../../../core/services/api/courses";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { toast } from "react-toastify";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
const CommentBlog = ({ data }) => {
  const [replyComment, setReplyComment] = useState();
  // const [createComment,setcreateComment] = useState()
  const { id } = useParams();
  const { data: apiData, isPending, error } = useGetCourseCommentId(id);

  const queryClient = useQueryClient();
  const AddReplyCourseComment = useGetReplyCommnet();
  const AddCommentCourse = useCourseCommnets();
  console.log("addC",AddCommentCourse)
  if (isPending) return <div>در حال بارگذاری...</div>;
  if (error) return <div>خطا در بارگذاری داده‌ها</div>;

  const validationSchema = Yup.object({
    title: Yup.string().required("لطفا عنوان را وارد کنید"),
    desc: Yup.string().required("لطفا توضیحات را وارد کنید"),
  });

  return (
    <Box
      flexDirection={"column"}
      sx={{
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        gap: "20px",
        width: { lg: "830px", md: "670px", sm: "500px", xs: "300px" },
        padding: "20px",
        // backgroundColor: "#f9f9f9",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { lg: "800px", md: "750px", sm: "600px", xs: "100%" },
          // backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          sx={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "24px",
            fontWeight: "bold",
            color: "text.secondary",
          }}
        >
          نظر کاربران درباره این مقاله
        </Typography>

        <Formik
          initialValues={{ title: "", desc: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            if (replyComment) {
              const formData = new FormData();
              formData.append("Title", values.title);
              formData.append("CourseId", data.courseId);
              formData.append("CommentId", replyComment.id);
              formData.append("Describe", values.desc);

              AddReplyCourseComment.mutate(formData, {
                onSuccess: (res) => {
                  queryClient.invalidateQueries({
                    queryKey: ["ReplyCommnets"],
                  });
                },
                onError: (error) => console.log("error", error),
              });
            } else {
              // Add main comment logic here
              
            }
         
            const formData = new FormData();
            formData.append("CourseId", data.courseId);
            formData.append("Title", values.title);

            // formData.append("CommentId", replyComment.id);
            formData.append("Describe", values.desc);
            
            AddCommentCourse.mutate(formData, {
            
              onSuccess: (res) => {
                queryClient.invalidateQueries({
                  queryKey: ["CommnetsCourse"],
                
                });
              },
              onError: (error) => console.log("error", error),
            });
          }}
        >
          {({ errors, handleChange, values }) => (
            <Form>
              {replyComment && (
                <TextField
                  onChange={handleChange}
                  name="reply"
                  sx={{
                    width: "100%",
                    marginTop: "20px",
                  }}
                  value={replyComment.title}
                  placeholder="پاسخ به نظر"
                  error={Boolean(errors.reply)}
                />
              )}
              <TextField
                onChange={handleChange}
                value={values.title}
                name="title"
                sx={{
                  width: "100%",
                  marginTop: "20px",
                }}
                placeholder="عنوان"
                error={Boolean(errors.title)}
                inputProps={{ maxLength: 12 }}
              />
              <ErrorMessage
                name="title"
                component="div"
                style={{ color: "red", marginTop: "5px" }}
              />

              <TextField
                name="desc"
                value={values.desc}
                onChange={handleChange}
                sx={{
                  width: "100%",
                  marginTop: "20px",
                }}
                placeholder="توضیحات"
                error={Boolean(errors.desc)}
                multiline
                rows={4}
              />
              <ErrorMessage
                name="desc"
                component="div"
                style={{ color: "red", marginTop: "5px" }}
              />

              <Button type="submit" sx={{ marginTop: "20px" }}>
                ارسال
              </Button>
            </Form>
          )}
        </Formik>
      </Box>

      {apiData?.map((data) => (
        <CommentItem
          key={data.id}
          data={data}
          setReplyComment={setReplyComment}
        />
      ))}
    </Box>
  );
};

const CommentItem = ({ data, setReplyComment }) => {
  const [isDisliked, setIsDisliked] = useState(false);
  const [subComments, setSubComments] = useState();
  const getCourseReplyCommnets = useGetCourseReplyCommnets();
  const DeleteCourseCommentLike = useDeleteCourseCommentLike();
  const { id } = useParams();
  const AddCourseCommentLike = useGetCourseLikeComment();
  const AddCourseCommentDissLike = useGetCourseDisLikeComment();
  // const { data } = AddCourseCommentLike;
  const queryClient = useQueryClient();
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    if (checked) {
      // If checkbox is checked
      if (data.id) {
        DeleteCourseCommentLike.mutate(data.id, {
          onSuccess: () => {
            console.log("dataaamee", id);
            toast.success(" حذف شد!");
          },
          onError: (res) => {
            console.log("Remove from favorites error response:", res);
            toast.error("  error");
          },
        });
      }
    } else {
      // If checkbox is not checked
      if (data.id) {
        AddCourseCommentLike.mutate(data.id, {
          onSuccess: (data) => {
            console.log("dataaa", data);
            queryClient.invalidateQueries(["CourseCommentLikeId", id]);
          },
          onError: (res) => {
            toast.error("شما قبلا احساسات خود را برای این خبر ثبت کردید.!");
          },
        });
      }
    }
    // Toggle the checked state
    setChecked(!checked);
  };
  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        // backgroundColor: "#fff",
        padding: "15px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        marginBottom: "20px",
      }}
    >
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardMedia
            sx={{ width: "32px", height: "32px", borderRadius: "100px" }}
            // image={data?.pictureAddress}
            image={
              data?.pictureAddress?.length > 15
                ? data?.pictureAddress
                : // ||  course?.tumbImageAddress === x
                  "../src/assets/image/Rectangle 124(4).png"
            }
          />
          <Typography
            sx={{
              lineHeight: "25px",
              marginRight: "10px",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            {data?.author}
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              fontSize: "14px",
            }}
          >
            {moment(data?.insertDate).format("YYYY/MM/DD")}
          </Typography>
          <Button
            onClick={() => {
              getCourseReplyCommnets.mutate(
                { courseId: data.courseId, commentId: data.id },
                {
                  onSuccess: (res) => setSubComments(res),
                  onError: (err) => console.log("error", err),
                }
              );
            }}
          >
            مشاهده کامنت
          </Button>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: "10px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            display: "flex",
            justifyContent: "space-around",
            lineHeight: "22px",
          }}
          variant="body2"
          color="text.secondary"
        >
          <Button sx={{ fontSize: "14px", padding: 0 }}>{data?.title}</Button>
          {data?.describe}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            color: "red",
          }}
        >
          {/* {data?.likeCount} */}
          {/* onClick={() => {
            // console.log("CourseCommandId:", data.id);

            AddCourseCommentLike.mutate(
              data.id,
              // {CourseCommandId:id},
              // { CourseCommandId: data.id},
              {
                onSuccess: (data) => {
                  console.log("dataaa", data);
                  queryClient.invalidateQueries(["CourseCommentLikeId", id]);
                },
                onError: (res) => {
                  toast.error(
                    "شما قبلا احساسات خود را برای این خبر ثبت کردید.!"
                  );
                },
              }
            );
          }} */}

          <Checkbox
            checked={checked}
            onClick={handleClick}
            icon={<FavoriteBorder color="error" />}
            checkedIcon={<Favorite color="error" />}
          />
        </Box>
        <Box
          sx={{ cursor: "pointer" }}
          onClick={() => {
            // console.log("CourseCommandId:", data.id);

            AddCourseCommentDissLike.mutate(
              data.id,
              // {CourseCommandId:id},
              // { CourseCommandId: data.id},
              {
                onSuccess: (data) => {
                  console.log("dataaa", data);
                  setIsDisliked(true);
                  queryClient.invalidateQueries(["CourseCommentLikeId", id]);
                },
                onError: (res) => {
                  toast.error(
                    "شما قبلا احساسات خود را برای این خبر ثبت کردید.!"
                  );
                },
              }
            );
          }}
        >
          <ThumbDownOffAltIcon  sx={{ color: isDisliked ? 'red' : 'inherit' }} />
        </Box>
        
        <Button
          variant="text"
          sx={{ color: "text.secondary", marginLeft: "10px" }}
          onClick={() => setReplyComment(data)}
        >
          پاسخ
        </Button>
        <MessageIcon sx={{ marginLeft: "5px" }} />
      </Box>
      {subComments?.map((subData) => (
        <CommentItem
          key={subData.id}
          data={subData}
          setReplyComment={setReplyComment}
        />
      ))}
    </Box>
  );
};

export default CommentBlog;
