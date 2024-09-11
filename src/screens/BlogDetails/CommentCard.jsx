import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Checkbox,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useParams } from "react-router-dom";
import {
  useGetNewsLikeCommnets,
  useGetNewsReplyCommnets,
} from "../../core/services/api/News";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";

const CommentCard = ({ comment }) => {
  // const [replyComment, setReplyComment] = useState();
  console.log("comment", comment);
  const { id } = useParams();
  const getNewsReplyCommnets = useGetNewsReplyCommnets();
  const getNewsLikeCommnets = useGetNewsLikeCommnets();
  const queryClient = useQueryClient();
  // console.log("getttcommente",getNewsLikeCommnets )
  console.log("CommentBlog", id);
  const handleToggleFavorite = () => {
    setIsFavorite(prev => !prev); // Toggle favorite status
    if (!isFavorite) {
      toast.success('به لیست علاقه مندی ها افزوده شد');
    } else {
      toast.error('حذف شد');
    }
  };
  return (
    <Box
      sx={{
        flexDirection: "column",
        //   width:"778px",
        // height: "120px",
        // borderBottom: "0.5px solid #ccc",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        md: "70%",
        sm: "50%",
      }}
    >
      <Box
        sx={{
          flexDirection: "row",
          display: "flex",
          gap: "20px",
          justifyContent: "space-between",
          width: { lg: "850px", md: "750px", sm: "530px", xs: "300px" },
          // marginRight:{lg:"0px" , md:"0px" , sm:"150px"}

          // height: "90px",
        }}
      >
        <Box
          sx={{
            height: "30px",
            //   width: "208px",
            display: "flex",
            //   marginRight:{lg:"0px",md:"0px",sm:"0px",xs:"100px"}
          }}
        >
          <Avatar
            // component={"img"}
            sx={{ width: "32px", height: "32px", borderRadius: "100px" }}
            // image="src/assets/image/comment1.png"
            // image={comment.pictureAddress}

            src={
              comment?.pictureAddress === null ||
              comment?.pictureAddress === "Not-set"
                ? "../src/assets/image/logo.png"
                : comment?.pictureAddress
            }
            // image=

            display="flex"
            justifyContent="center"
            gap="10px"
          />
          <Typography
            sx={{
              lineHeight: "25px",
              marginRight: "5px",
              fontSize: { lg: "20px", md: "17px", sm: "15px", xs: "12px" },
            }}
          >
            {/* مهدی قاسمی */}
            {comment.title}
          </Typography>
        </Box>
        <Box sx={{ width: { lg: "150px", md: "80%", sm: "70%" } }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              // width: {lg:"100%",md:"70%",sm:"50%"},
              fontSize: { lg: "20px", md: "17px", sm: "15px", xs: "12px" },
            }}
          >
            {/* 12 فروردین 1402 */}
            {/* {comment.inserDate} */}
            {moment(comment?.inserDate).format("YYYY/MM/DD")}
          </Typography>
          <Button
            onClick={() => {
              getNewsReplyCommnets.mutate(
                {
                  // courseId: data.courseId,
                  commentId: id,
                },
                {
                  onSuccess: (res) => {
                    console.log("result", res);
                    setSubComments(res);
                  },
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
          width: { lg: "100%", md: "100%", sm: "100%", xs: "295px" },
          height: "30px",
        }}
      >
        <Typography
          fontSize={{ lg: "14px", md: "14px", sm: "9px", xs: "9px" }}
          lineHeight={"22px"}
          variant="body2"
          color="text.secondary"
          display={"flex"}
          justifyContent={"space-around"}
        >
          <Button>{comment.autor}</Button>
          {comment.describe}
        </Typography>
      </Box>

      <Box
      
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { lg: "120px", md: "120px", sm: "120px" },
          // gap: "10px",
          marginRight: "20px",
        }}
        
        onClick={() => {
          {handleToggleFavorite}
          if (comment?.currentUserIsLike == false) {
            getNewsLikeCommnets.mutate(
              { id: comment?.id, likeType: true },
              {
                onSuccess: (data) => {
                  console.log("dataaamee", data);
                  toast.success("به علاقه‌مندی‌ها اضافه شد!");
                  queryClient.invalidateQueries({
                    queryKey: ["getNewsListId"],
                  
                  });
                 
                },
                onError: (res) => {
                  toast.error(" ثبت شد.!");
                  console.log(res);
                
                },
              }
            );
          } else {
            comment?.currentUserIsDissLike == true;
            getNewsLikeCommnets.mutate(
              { id: comment?.id, likeType: false },
              {
                onSuccess: (data) => {
                  console.log("dataaamee", data);
                  queryClient.invalidateQueries({
                    queryKey: ["getNewsListId"],
                  });
                },
                onError: (res) => {
                  toast.error("   ثبت نشد.!");
                  console.log(res);
               
                },
              }
            );
          }
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100px",
            gap: "2px",
            color: "red",
          }}
        >
          {/* 7 */}
          {comment.likeCount}
          <Checkbox
            icon={<FavoriteBorder color="error" />}
            checkedIcon={<Favorite color="error"/> }
          />
        </Box>
        {/* <Button
          variant="text"
          sx={{ color: "text.secondary", width: "20px" }}
          // onClick={() => setReplyComment(comment)}
        >
          پاسخ
        </Button> */}
        {/* <Box sx={{borderBottom:"1px solid gray", width:"50px",height:"5px"}}></Box> */}
        <Box sx={{ width: "50px", marginRight: "50px" }}>
          <MessageIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default CommentCard;
