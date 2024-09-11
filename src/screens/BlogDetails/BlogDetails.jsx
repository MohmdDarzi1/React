import { TextField, Typography } from "@mui/material";
import { Box, Stack, height } from "@mui/system";
import React, { useEffect } from "react";
import DetailsCard from "./DetailsCard";
import TextDetails from "./TextDetails";
import VideoPlayer from "./VideoPlayer";
import IosShareIcon from "@mui/icons-material/IosShare";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import FeedbackComponent from "../../components/common/FeedbackComponent";

import CommentBlog from "./CommentBlog";
import { useParams } from "react-router-dom";
import { useGetNewsId } from "../../core/services/api/News";
const BlogDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();

  const { data, isPending ,} = useGetNewsId(id);
  console.log("datammd", data);
  return (
    <Box
      sx={{
        flexDirection: "column",
        display: "flex",
        justifyContent: "center",
        width: { lg: "1280px", sm: "900px" },
        // height:"2000px"
      }}
    >
      <Stack
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "20px",
        }}
      >
        <DetailsCard data={data} />
      </Stack>
      <TextDetails data={data} />
      <VideoPlayer />
      <Box
        sx={{
          flexDirection: "column",
          display: "flex",
          justifyContent: "center",
          width: "1280px",
          height: "100px",

          gap: "10px",
          marginTop: "20px",
          marginRight: { lg: "240px", md: "100px", sm: "150px", xs: "980px" },
        }}
      >
        <Typography
          sx={{
            textAlign: "right",
            width: { lg: "800px", md: "800px", sm: "600px", xs: "300px" },
            lineHeight: "26px",
            fontSize: { lg: "14px", md: "13px", sm: "10px", xs: "9px" },
          }}
        >
          {/* این مثال برای آموزش از روی کتاب بود ولی برای ویدئو یا پادکست یا هر
          آنچه که میتوانید از آن مطلبی یاد بگیرید هم صدق میکند. شما در مثال بالا
          با هر بار از نو آموزش دیدن، هم مطلب را مرور میکنید و هم نکته هایی مهم
          که در طول آموزش متوجه نشده بودین را متوجه میشوید و این اصل قضیه است */}
        </Typography>
        <Typography
          sx={{
            textAlign: { lg: "right", md: "right", sm: "center", xs: "center" },
            width: { lg: "840px", md: "600px", sm: "570px", xs: "290px" },
            lineHeight: "26px",
            fontSize: { lg: "14px", md: "13px", sm: "10px", xs: "9px" },
          }}
        >
          {/* امیدوارم مقاله مفیدی برای شما واقع بوده باشه. */}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          height: "64px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: { lg: "800px", md: "600px", sm: "400px", xs: "300px" },
            backgroundColor: "secondary.second",
            borderRadius: "20px",
          }}
        >
          <Typography
            sx={{ width: "200px", lineHeight: "60px", marginRight: "15px" }}
          >
            <IosShareIcon sx={{ marginLeft: "5px" }} />
            اشتراک گذاری
          </Typography>
          <Box
            sx={{
              flexDirection: "row-reverse",
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              width: "128px",
              height: "46px",
              marginTop: "25px",
            }}
          >
            <InstagramIcon
              sx={{
                color: "white",
                width: "22px",
                height: "22px",
                backgroundColor: "primary.main",
                borderRadius: "100px",
              }}
            />
            <TwitterIcon />
            <FacebookRoundedIcon />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: { lg: "900px", md: "900px", sm: "600px", xs: "300px" },
          marginRight: { lg: "185px", md: "5px", sm: "150px", xs: "975px" },
        }}
      >
        <FeedbackComponent data={data}/>
      </Box>
      <CommentBlog data={data} />
    </Box>
  );
};

export default BlogDetails;
