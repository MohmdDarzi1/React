// import { Button } from '@mui/base'
import {
  Button,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { useNavigate } from "react-router-dom";
import { useGetAllNews, useGetTopNews } from "../../core/services/api/News";
import moment from "moment";

const ArticlesCard = ({ item }) => {
  // const params = {
  //   count: "2",
  // };
  // const { data, isPending, isError } = useGetTopNews(params);
  // console.log("all courses::isPending", isPending);
  // console.log("all News", data);
  const navigate = useNavigate();
  console.log("item", item);
  return (
    <>
      <Box
        // height={"346px"}
        width={{ lg: "340px", md: "300px", sm: "280px", xs: "320px" }}
        // my={4}
        // height={"200px"}
        display="flex"
        alignItems="center"
        gap={2}
        p={2}
        // borderRadius={10}
        marginTop={"100px"}
      >
        <Box sx={{ maxWidth: 616 }}>
          <CardActionArea>
            <CardMedia
              onClick={() => navigate("/blogDetails/" + item.id)}
              component="img"
              // borderRadius="10px"
              sx={{ borderRadius: "20px", width: "350px", height: "300px" }}
              // height="340px"
              // width={"150px"}
              // image="src/assets/image/Rectangle 32.png"
              // image={item.currentImageAddressTumb}
              image={
                item.currentImageAddressTumb === null ||
                item.currentImageAddressTumb === "Not-set"
                  ? "src/assets/image/Rectangle 32.png"
                  : item.currentImageAddressTumb
              }
              alt="green iguana"
            />

            <CardContent sx={{ direction: "row", textAlign: "right" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontSize: "15px" }}
              >
                {/* چگونه مطالعه موثر را برای شما آسانتر کنیم. */}
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                fontSize={{ fontSize: "10px" }}
              >
                {/* لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد. */}
                {item.miniDescribe}
              </Typography>
              <Button sx={{ flexDirection: "row-reverse" }}>
                بازدید
                {item.currentView}
                <VisibilityIcon
                  sx={{
                    direction: "rtl",
                    width: "14px",
                    height: "14px",
                  }}
                />
              </Button>
              .
              <Button sx={{ flexDirection: "row-reverse", marginLeft: "10px" }}>
                {/* 1402/7/2 */}
                {moment(item?.insertDate).format("yyy/MM/DD")}

                <EventNoteIcon
                  sx={{
                    direction: "rtl",
                    width: "14px",
                    height: "14px",
                  }}
                />
              </Button>
            </CardContent>
          </CardActionArea>
        </Box>
      </Box>
      {/* ))
      )}*/}
    </>
  );
};

export default ArticlesCard;
