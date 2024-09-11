import { Checkbox, Rating, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";

import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useCourseRate,
  useGetCourseDisLike,
  useGetCourseId,
  useGetCourseLike,
} from "../../../../../core/services/api/courses";
import ButtonComponent from "../../../../../components/common/ButtonComponent";
import { useQueryClient } from "@tanstack/react-query";

const FeedbackCourse = () => {
  const CourseRating = useCourseRate()
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const { id } = useParams();
  console.log("Like", id);
  const { data: data3 } = useGetCourseId(id);
  console.log("data3data3", data3);
  const AddCourseLike = useGetCourseLike();
  const { data } = AddCourseLike;
  console.log("dataofLike", data);
  const AddCourseDissLike = useGetCourseDisLike();
  const { data: dislikeData } = AddCourseDissLike;
  console.log("dislikeData", dislikeData);

  const queryClient = useQueryClient();

  const handleLikeChange = () => {
    if (!disliked) {
      setLiked(!liked);
    }
  };

  const handleDislikeChange = () => {
    if (!liked) {
      setDisliked(!disliked);
    }
  };
  return (
    <div>
      {/* const FeedbackComponent = () => { */}

      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          height: { lg: "50px", md: "40px", sm: "30px", xs: "20px" },
        }}
      >
        <Stack
          sx={{
            width: "45%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            // border: "1px solid blue",
          }}
        >
          <Stack
            fontSize={{ lg: "14px", md: "11px", sm: "7px", xs: "5px" }}
            sx={{
              flexDirection: "row",
              gap: "1px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Rating
                        onClick={() => {
                          CourseRating.mutate(id, {
                            onSuccess: (data) => {
                              console.log("dataaa", data);
                              queryClient.invalidateQueries(["courseRate", id]);
                            },
                            onError: (res) => {
                              toast.error(
                                "شما قبلا احساسات خود را برای این خبر ثبت کردید.!"
                              );
                            },
                          });
                        }}
              sx={{
                direction: "ltr",
                fontSize: { lg: "20px", md: "15px", sm: "8px", xs: "6px" },
              }}
              name="rating"
              defaultValue={2}
              precision={1}
            />
            <Typography variant="p"> امتیازات</Typography>
          </Stack>
          {/* <ButtonComponent
           
            fontSize={{ lg: "9px", md: "7px", sm: "7px", xs: "5px" }}
            width={"10px"}
            height={"60%"}
            text={"ثبت دیدگاه"}
            display={{ lg: "block", md: "block", sm: "block", xs: "none" }}
          /> */}
        </Stack>
        <Stack
          sx={{
            width: "50%",
            height: "100%",
            flexDirection: "row",
            alignItems: "center",
            alignContent: "center",
            justifyContent: "space-evenly",
            // border: "1px solid blue",
          }}
        >
          <Typography
            variant="p"
            sx={{ fontSize: { lg: "16px", md: "12px", sm: "8px", xs: "4px" } }}
            display={{ sm: "block", xs: "none" }}
          >
            آیا از این دوره راضی بودید؟
          </Typography>
          <Stack
            flexDirection={"row"}
            justifyContent={"space-around"}
            alignItems={"center"}
            width={{ sm: "40%", xs: "100%" }}
            height={"100%"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              width={"40%"}
              height={{ lg: "32px", md: "25px", sm: "15px", xs: "13px" }}
              borderRadius={50}
              color={"error"}
              backgroundColor={"secondary.second"}
              // padding={"2%"}
            >
              <Box
                width={{ lg: "50%", xs: "100%" }}
                display={"flex"}
                justifyContent={"center"}
                onClick={() => {
                  AddCourseLike.mutate(id, {
                    onSuccess: (data) => {
                      console.log("dataaa", data);
                      queryClient.invalidateQueries(["getCourseListId", id]);
                    },
                    onError: (res) => {
                      toast.error(
                        "شما قبلا احساسات خود را برای این خبر ثبت کردید.!"
                      );
                    },
                  });
                }}
              >
                {/* {data?.dissLikeCount} */}{" "}
                <Checkbox
                  icon={
                    <ThumbUpOffAltIcon
                      sx={{
                        fontSize: {
                          lg: "22px",
                          md: "16px",
                          sm: "14px",
                          xs: "10px",
                        },
                      }}
                      // color="error"
                    />
                  }
                  checkedIcon={
                    <ThumbUpAltIcon
                      sx={{
                        fontSize: {
                          lg: "22px",
                          md: "16px",
                          sm: "14px",
                          xs: "10px",
                        },
                      }}
                      // color="error"
                    />
                  }
                  checked={liked}
                  onChange={handleLikeChange}
                />
              </Box>
              <Box
                width={"40%"}
                fontSize={{ lg: "16px", md: "13px", sm: "11px", xs: "7px" }}
                display={{ lg: "block", xs: "none" }}
              >
                {/* 12 */}
                {data3?.likeCount}
              </Box>
            </Box>{" "}
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              width={"40%"}
              height={{ lg: "32px", md: "25px", sm: "15px", xs: "13px" }}
              borderRadius={50}
              color={"error"}
              backgroundColor={"secondary.second"}
              // padding={"2%"}
            >
              {data3?.dissLikeCount}
              <Box
                width={{ lg: "50%", xs: "100%" }}
                display={"flex"}
                justifyContent={"center"}
                onClick={() => {
                  AddCourseDissLike.mutate(id, {
                    onSuccess: (dislikeData) => {
                      console.log("dislikeDataaa", dislikeData);
                      queryClient.invalidateQueries(["getCourseListId", id]);
                    },
                    onError: (res) => {
                      toast.error(
                        "شما قبلا احساسات خود را برای این خبر ثبت کردید.!"
                      );
                    },
                  });
                }}
              >
                {" "}
                <Checkbox
                  icon={
                    <ThumbDownOffAltIcon
                      sx={{
                        fontSize: {
                          lg: "22px",
                          md: "16px",
                          sm: "14px",
                          xs: "10px",
                        },
                      }}
                      // color="error"
                    />
                  }
                  checkedIcon={
                    <ThumbDownAltIcon
                      sx={{
                        fontSize: {
                          lg: "22px",
                          md: "16px",
                          sm: "14px",
                          xs: "10px",
                        },
                      }}
                      // color="error"
                    />
                  }
                  checked={disliked}
                  onChange={handleDislikeChange}
                />
              </Box>
              <Box
                width={"40%"}
                fontSize={{ lg: "16px", md: "13px", sm: "11px", xs: "7px" }}
                display={{ lg: "block", xs: "none" }}
              >
                {/* 12 */}
              </Box>
            </Box>{" "}
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
};

export default FeedbackCourse;
