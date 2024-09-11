import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Avatar, CardMedia, Checkbox, styled, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import ScheduleIcon from "@mui/icons-material/Schedule";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import FeedbackComponent from "../../../../../components/common/FeedbackComponent";
import FeedbackCourse from "./FeedbackCourse";
import { useGetFavoriteCourse } from "../../../../../core/services/api/courses";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import DefaultImage from "../../../../../assets/image/Rectangle 124(1).png";
const CourseDetailContentTopBox = ({ data }) => {
  console.log("Favorite?", data);
  const { id } = useParams();
  const queryClient = useQueryClient();
  const AddCourseFavorite = useGetFavoriteCourse();

  

  console.log(data, "dtaaaaaaaa");
  const StyledImg = styled(CardMedia)({
    width: "100%",
    height: "100%",
  });

  return (
    <Stack sx={{ flexDirection: "column", gap: "1%", width: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: { lg: "550px", md: "345px", sm: "230px", xs: "115px" },
          position: "relative",
          // border: "1px solid red",
        }}
      >
        {/* <StyledImg
          // sx={{width:"250px",height:"100px"}}
          //  src="src/assets/image/Rectangle 124(1).png"

          // image={data?.imageAddress}
          component="img"
          sx={{ borderRadius: "25px" }}
          src={
            data?.imageAddress?.length > 15
              ? data?.imageAddress
              : "src/assets/image/Rectangle 124(1).png"
          }
        /> */}

        <StyledImg
          component="img"
          sx={{borderRadius:"50px",objectFit: "cover" }}
          // image="src/assets/image/Rectangle 124(4).png"
          image={
            data?.imageAddress?.length > 15
              ? data?.imageAddress
              : // ||  course?.tumbImageAddress === x
                "../src/assets/image/Rectangle 124(4).png"
          }
          alt="green iguana"
        />

        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          width={{ lg: "9%", md: "10%", sm: "13%", xs: "13%" }}
          height={{ lg: "32px", md: "28px", sm: "22px", xs: "18px" }}
          borderRadius={50}
          color={"error"}
          backgroundColor={"primary.background"}
          position={"absolute"}
          top={"5%"}
          right={"5%"}
          gap={"2%"}
        >
          <Box
            width={"30%"}
            fontSize={{ lg: "16px", md: "13px", sm: "11px", xs: "5px" }}
            onClick={() => {
              if (data?.isUserFavorite == false);
              AddCourseFavorite.mutate(id, {
                onSuccess: () => {
                  console.log("dataaamee", data);
                  queryClient.invalidateQueries({
                    queryKey: ["getNewsListId"],
                  });
                },
                onError: (res) => {
                  toast.error(
                    "این دوره در لیست علاقه مندی های شما موجود میباشد"
                  );
                },
              });
            }}
          >
            {" "}
            <Checkbox
              sx={{ padding: "0" }}
              icon={
                <FavoriteBorder
                  sx={{
                    fontSize: {
                      lg: "22px",
                      md: "16px",
                      sm: "14px",
                      xs: "7px",
                    },
                  }}
                  color="error"
                />
              }
              checkedIcon={
                <Favorite
                  sx={{
                    fontSize: {
                      lg: "22px",
                      md: "16px",
                      sm: "14px",
                      xs: "7px",
                    },
                  }}
                  color="error"
                />
              }
            />
          </Box>
          <Box
            width={"20%"}
            fontSize={{ lg: "16px", md: "13px", sm: "11px", xs: "5px" }}
          >
            {/* 12 */}
            {/* {data?.likeCount} */}
          </Box>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          // width={{ lg: "15%", md: "15%", sm: "13%", xs: "13%" }}
          width={"15%"}
          sx={{ width: { xs: "18%" } }}
          height={{ lg: "32px", md: "28px", sm: "22px", xs: "18px" }}
          borderRadius={50}
          color={"error"}
          backgroundColor={"primary.background"}
          position={"absolute"}
          bottom={"5%"}
          left={"5%"}
          gap={"2%"}
        >
          {" "}
          <Typography
            sx={{
              fontSize: { lg: "12px", md: "10px", sm: "8px", xs: "5px" },
            }}
          >
            <ScheduleIcon
              sx={{
                width: { lg: "14px", md: "12px", sm: "11px", xs: "8px" },
              }}
            />
            {/* 14ساعت */}
            {data?.courseStatusName}
          </Typography>
        </Box>
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          // width={{ lg: "15%", md: "15%", sm: "13%", xs: "13%" }}
          width={"15%"}
          sx={{ width: { xs: "18%" } }}
          height={{ lg: "32px", md: "28px", sm: "22px", xs: "18px" }}
          borderRadius={50}
          color={"error"}
          backgroundColor={"primary.background"}
          position={"absolute"}
          bottom={"5%"}
          left={"25%"}
          gap={"2%"}
        >
          <Typography
            sx={{
              fontSize: { lg: "12px", md: "10px", sm: "8px", xs: "5px" },
            }}
          >
            <MenuBookIcon
              sx={{
                width: { lg: "14px", md: "12px", sm: "11px", xs: "8px" },
              }}
            />
            درس
            {data?.courseGroupCount}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          height: { lg: "140px", md: "95px", sm: "70px", xs: "45px" },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { lg: "28px", md: "20px", sm: "15px", xs: "8px" },
            fontWeight: "700",
          }}
        >
          {data?.title}
          {/* دوره جامع .net core صفر تا صد */}
        </Typography>
        <Typography
          sx={{
            fontSize: { lg: "14px", md: "12px", sm: "9px", xs: "5px" },
            fontWeight: "500",
            marginTop: "2%",
          }}
          variant="p"
          component={"p"}
        >
          {/* محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی پیشرفته و
          تمیز؛ برای مسائل واقعی دنیای نرم افزار محبوب ترین کتابخانه ی
          جاوااسکریپت محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش کدنویسی
          پیشرفته و تمیز؛ محبوب ترین کتابخانه ی جاوااسکریپت حل مساله به روش
          کدنویسی پیشرفته و تمیز. */}
          {data?.describe}
        </Typography>
      </Box>
      {/* <FeedbackComponent  /> */}
      <FeedbackCourse data={data} />
    </Stack>
  );
};

export default CourseDetailContentTopBox;
