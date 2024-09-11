import { Checkbox, Rating, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import {
  useGetNewsDisLike,
  useGetNewsId,
  useGetNewsLike,
  useNewsRate,
} from "../../core/services/api/News";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useQueryClient } from "@tanstack/react-query";
// import { useGetCourseLike } from "../../core/services/api/courses";
const FeedbackComponent = () => {
  const [ratingValue, setRatingValue] = useState(2);
  const NewsRating = useNewsRate();

  //  const useNewsRate = () => {
  //     return useMutation((params) => NewsRating(params.id, params.RateNumber));
  //   };
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const { id } = useParams();
  console.log("Like", id);
  const { data: data1, isPending } = useGetNewsId(id);
  console.log("data1", data1);
  const NewsLike = useGetNewsLike();
  const { data } = NewsLike;

  const NewsDissLike = useGetNewsDisLike();
  const { data: dislikedData } = NewsDissLike;
  console.log("dislikenewss", dislikedData);
  // const AddCourseLike = useGetCourseLike();

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

  const handleRatingChange = (event, newValue) => {
    setRatingValue(newValue);
    NewsRating.mutate(
      { id, RateNumber: newValue },
      {
        onSuccess: (data) => {
          console.log("dataaa", data);
          queryClient.invalidateQueries(["NewsRate", id]);
        },
        onError: (res) => {
          console.log("error", res);
          // toast.error("شما قبلا احساسات خود را برای این خبر ثبت کردید.!");
        },
      }
    );
  };
  return (
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
            // onClick={() => {
            //   NewsRating.mutate(id, {
            //     onSuccess: (data) => {
            //       console.log("dataaa", data);
            //       queryClient.invalidateQueries(["NewsRate", id]);
            //     },
            //     onError: (res) => {
            //       toast.error(
            //         "شما قبلا احساسات خود را برای این خبر ثبت کردید.!"
            //       );
            //     },
            //   });
            // }}
            value={ratingValue}
            onChange={handleRatingChange}
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
        <ButtonComponent
          fontSize={{ lg: "9px", md: "7px", sm: "7px", xs: "5px" }}
          width={"10px"}
          height={"60%"}
          text={"ثبت دیدگاه"}
          display={{ lg: "block", md: "block", sm: "block", xs: "none" }}
        />
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
                NewsLike.mutate(id, {
                  onSuccess: (data) => {
                    queryClient.invalidateQueries(["getNewsListId", id]);
                    console.log("dataaa", data);
                  },
                  onError: (res) => {
                    toast.error(
                      "شما قبلا احساسات خود را برای این خبر ثبت کردید.!"
                    );
                  },
                });
                // AddCourseLike.mutate(id, {
                //   onSuccess: (data) => {
                //     console.log("dataaa", data);
                //   },
                //   onError: (res) => {
                //     toast.error(
                //       "شما قبلا احساسات خود را برای این خبر ثبت کردید.!"
                //     );
                //   },
                // });
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
              {data1?.detailsNewsDto?.currentLikeCount}
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
            {/* {data.dissLikeCount} */}
            <Box
              width={{ lg: "50%", xs: "100%" }}
              display={"flex"}
              justifyContent={"center"}
              onClick={() => {
                NewsDissLike.mutate(id, {
                  onSuccess: (data) => {
                    console.log("dataaa", data);
                    queryClient.invalidateQueries(["getNewsListId", id]);
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
              {data1?.detailsNewsDto?.currentDissLikeCount}
            </Box>
          </Box>{" "}
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeedbackComponent;
