import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import ScheduleIcon from "@mui/icons-material/Schedule";
import { Box } from "@mui/system";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useGetFavoriteCourse } from "../../core/services/api/courses";
import { toast } from "react-toastify";
import Default from "../../assets/image/Rectangle 124(4).png";
const CardCourse = ({ course, data }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  // console.log("Favorite??", course);
  // const { id } = useParams();
  // const queryClient = useQueryClient();
  // const AddCourseFavorite = useGetFavoriteCourse();
  // console.log("default", Default);
  console.log("CardCourse", course);

  // const x = "undefined";

  const navigate = useNavigate();
  // const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const handleToggleFavorite = () => {
    setIsFavorite((prev) => !prev); // Toggle favorite status
    if (!isFavorite) {
      toast.success("به لیست علاقه مندی ها افزوده شد");
    } else {
      toast.error("حذف شد");
    }
  };
  return (
    <Card
      sx={{
        width: { lg: "275px", md: "250px", sm: "230px", xs: "140px" },
        marginBottom: "2%",
        // marginRight: "1%",
        
        borderRadius: "20px",
      }}
    >
      <CardActionArea>
        {/* <Link to={"/courses"}> */}
        <CardMedia
       
          onClick={() => {
            navigate("/courses/" + course.courseId);
          }}
          component="img"
          // image="src/assets/image/Rectangle 124(4).png"
          src={
            course?.tumbImageAddress?.length > 10
              ? course?.tumbImageAddress
              : // ||  course?.tumbImageAddress === x
                Default
          }
          sx={{height:{lg:"180px",md:"180px",sm:"180px",xs:"100px"}}}
          onError={(e) => {
            e.error = null;
            e.currentTarget.src = Default;
          }}
          alt="alt image"
        />
        {/* </Link> */}
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            width={"100%"}
            height={"25px"}
            fontSize={{ lg: "16px", md: "13px", sm: "11px", xs: "9px" }}
          >
            {course.title}
          </Typography>

          <Typography
            width={"100%"}
            height={{ lg: "40px", md: "33px", sm: "25px", xs: "15px" }}
            //   border={"1px solid #ccc"}
            borderRadius={"50px"}
            backgroundColor={"secondary.second"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"space-evenly"}
            gap={"5%"}
            alignItems={"center"}
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
              درس ها
            </Typography>
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
              مدت زمان
            </Typography>
            <Typography
              sx={{
                fontSize: { lg: "12px", md: "10px", sm: "8px", xs: "5px" },
              }}
            >
              <CalendarMonthIcon
                sx={{
                  width: { lg: "14px", md: "12px", sm: "11px", xs: "8px" },
                }}
              />
              تاریخ
            </Typography>
          </Typography>
          <Box
            width={"100%"}
            // height={{ lg: "40px", md: "33px", sm: "25px", xs: "15px" }}
            display={"flex"}
            justifyContent={"center"}
            gap={"15%"}
            alignItems={"center"}
            // border={"1px solid red"}
          >
            <Typography
              fontSize={{ lg: "13px", md: "13px", sm: "11px", xs: "7px" }}
            >
              مدرس:
              {course.teacherName}
              {/* مدرس :دکتر بحر */}
            </Typography>
            <Typography
              fontSize={{ lg: "13px", md: "13px", sm: "11px", xs: "7px" }}
            >
              دانش اموز
              {course.currentRegistrants}
            </Typography>
          </Box>
          <Box
            variant="body2"
            color="text.secondary"
            width={"100%"}
            height={{ lg: "40px", md: "33px", sm: "25px", xs: "15px" }}
            display={"flex"}
            // justifyContent={""}
            gap={"30%"}
            alignItems={"center"}
          >
            <Box
              display={"flex"}
              justifyContent={"space-evenly"}
              alignItems={"center"}
              width={"40%"}
              height={{ lg: "32px", md: "28px", sm: "22px", xs: "18px" }}
              borderRadius={50}
              color={"error"}
              backgroundColor={"secondary.second"}
              // padding={"2%"}
            >
              <Box width={"50%"} onClick={handleToggleFavorite}>
                {" "}
                <Checkbox
                  icon={
                    <FavoriteBorder
                      sx={{
                        fontSize: {
                          lg: "22px",
                          md: "16px",
                          sm: "14px",
                          xs: "10px",
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
                          xs: "10px",
                        },
                      }}
                      color="error"
                      checked={isFavorite}
                    />
                  }
                />
              </Box>
              {/* {course.userFavorite} */}
              <Box
                width={"40%"}
                fontSize={{ lg: "16px", md: "13px", sm: "11px", xs: "7px" }}
              >
                {/* 12 */}
                {/* {course.likeCount} */}
              </Box>
            </Box>
            <Typography
              width={"67%"}
              height={{ lg: "40px", md: "33px", sm: "25px", xs: "15px" }}
              display={"flex"}
              justifyContent={"left"}
              gap={"2%"}
              alignItems={"center"}
            >
              <Typography
                fontSize={{ lg: "16px", md: "13px", sm: "11px", xs: "7px" }}
                color={"primary.main"}
              >
                {new Intl.NumberFormat("fa-IR", {}).format(course.cost)}
              </Typography>
              <Typography
                fontSize={{ lg: "16px", md: "13px", sm: "11px", xs: "7px" }}
              >
                تومان
              </Typography>
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardCourse;
