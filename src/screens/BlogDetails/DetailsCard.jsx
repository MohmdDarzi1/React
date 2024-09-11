import React from "react";
import {
  Button,
  CardContent,
  CardMedia,
  Checkbox,
  Typography,
  styled,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  useGetDeleteFavoriteNews,
  useGetFavoriteNews,
  useGetTopNews,
} from "../../core/services/api/News";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";

const TruncatedText = styled(Typography)({
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});

const DetailsCard = ({ data }) => {
  console.log("Favorite?", data);
  const { id } = useParams();
  // console.log("Like", id);
  const AddFavoriteNews = useGetFavoriteNews();
  // const DeleteFavoriteNews = useGetDeleteFavoriteNews();
  console.log(
    "data?.detailsNewsDto?.isCurrentUserFavorite",
    data?.detailsNewsDto?.isCurrentUserFavorite
  );
  // const params = {
  //   count: 1,
  // };
  // const { data, isPending } = useGetTopNews(undefined, 1, params.count);
  // console.log("dataaaa1", data);
  // console.log("dad", data.detailsNewsDto);
  const queryClient = useQueryClient();
  return (
    <>
      {/* {isPending ? (
      <div>loading</div>
    ) : (
      data.news.map((item) => 
           */}
      <Stack
        display={"flex"}
        direction={"rtl"}
        justifyContent="center"
        alignItems="center"
        flexDirection={{ lg: "row", md: "row", sm: "inherit", xs: "inherit" }}
        spacing={2}
      >
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          height={{ lg: "32px", md: "28px", sm: "22px", xs: "18px" }}
          borderRadius={50}
          color={"error"}
          backgroundColor={"secondary.second"}
          position={"relative"}
          bottom={{ lg: "90px", md: "36px", sm: "-30px", xs: "-25px" }}
          right={{ lg: "88px", md: "55px", sm: "-100px", xs: "-90px" }}
        >
          <Box
            width={"50%"}
            onClick={() => {
              data?.detailsNewsDto?.isCurrentUserFavorite == false;
              AddFavoriteNews.mutate(id, {
                onSuccess: () => {
                  console.log("dataaamee", data);
                  queryClient.invalidateQueries({
                    queryKey: ["getNewsListId"],
                  });
                },
                onError: (res) => {
                  toast.error("در لیست علاقمندی های شما موجود میباشد.");
                },
              });
            }}
          >
            {/* <Box
      width={"50%"}
      onClick={() => {
        const id = data?.detailsNewsDto?.id;
        console.log("Clicked, current user favorite status:", data?.detailsNewsDto?.isCurrentUserFavorite);

        if (data?.detailsNewsDto?.isCurrentUserFavorite == false) {
          AddFavoriteNews.mutate(id, {
            onSuccess: () => {
              console.log("Successfully added to favorites", data);
              toast.success("به علاقه‌مندی‌ها اضافه شد!");
            },
            onError: (res) => {
              console.log("Add to favorites error response:", res);
              toast.error("این خبر قبلاً ثبت شده است!");
            },
          });
        } else if (data?.detailsNewsDto?.isCurrentUserFavorite == true) {
          DeleteFavoriteNews.mutate(id, {
            onSuccess: () => {
              console.log("Successfully removed from favorites", data);
              toast.success("از علاقه‌مندی‌ها حذف شد!");
            },
            onError: (res) => {
              console.log("Remove from favorites error response:", res);
              toast.error("شما قبلاً این خبر را ثبت کرده‌اید!");
            },
          });
        }
      }}
    > */}{" "}
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
                />
              }
            />
          </Box>
          <Box
            width={"50%"}
            marginRight={"2px"}
            fontSize={{ lg: "16px", md: "13px", sm: "11px", xs: "7px" }}
          >
            {/* 12 */}
            {/* {data?.detailsNewsDto?.currentLikeCount} */}
          </Box>
        </Box>

        <CardMedia
          display={"flex"}
          component="img"
          // image={data?.detailsNewsDto.currentImageAddressTumb}
          image={
            data?.detailsNewsDto.currentImageAddress === null ||
            data?.detailsNewsDto.currentImageAddress === "Not-set"
              ? "../src/assets/image/Rectangle 32.png" 
              : data?.detailsNewsDto.currentImageAddress
          }
          
          // alt="green iguana"

          sx={{
            marginRight: { lg: "100px", md: "80px", sm: "250px" },
            borderRadius: "24px",
            // height:"300px",
            width: { lg: "440px", md: "200px", sm: "320px", xs: "260px" },
          }}
        />

        <CardContent
          sx={{
            direction: "row",
            textAlign: { lg: "right", md: "right", sm: "center", xs: "center" },

            padding: "9px",
            height: "258px",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign={{ lg: "right", md: "right", sm: "center", xs: "center" }}
            fontSize={{ lg: "21px", md: "15px", sm: "21px", xs: "15px" }}
            marginTop={{ lg: "1px", md: "50px", sm: "1px" }}
          >
            {/* چگونه مطالعه موثر را برای شما آسانتر کنیم */}
            {/* {item.title} */}
            {data?.detailsNewsDto.title}
          </Typography>
          <Typography
            // textOverflow={ellipsis}
            variant="body2"
            color="text.secondary"
            sx={{
              width: { lg: "750px", md: "550px", sm: "550px", xs: "300px" },
              fontSize: { lg: "15px", md: "10px", sm: "12px", xs: "8px" },
            }}
          >
            {/* همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع خاص
            مثل آموزش از کتاب، ویدئو یا هر آنچه که برای آموزش است نخواهد بود و
            این مقاله به صورت جامع در مورد چگونگی آموزش دیدن و یادگیری
            است.همانطور که از عنوان مقاله مشخص است، صحبت ما روی آموزش یک موضوع
            خاص مثل آموزش از کتاب، ویدئو یا هر آنچه که همانطور که از عنوان مقاله
            مشخص است، صحبت ما روی آموزش دیدن و یادگیری است.همانطور که از عنوان
            مقاله. قبل از هر چیزی باید بدانیم که نمیشه یک روند یا روش خاصی رو
            برای همه افراد که ذهنیت های متفاوتی هم از هم دارند، در نظر گرفت. ولی
            خب هدف تمامی این افراد آموزش دیدن و رسیدن به درک عمیقی از اون مطلب
            است ولی آیا برای تمامی افراد آموزش دیدن به این جا ختم میشود و همه به
            درک عمیقی از اون مطلب میرسند؟ قطعا خیر */}
            {/* {item.miniDescribe} */}
            <TruncatedText>{data?.detailsNewsDto?.describe}</TruncatedText>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: {
                lg: "space-between",
                md: "center",
                sm: "center",
                xs: "center",
              },
              width: { lg: "750px", md: "700px", sm: "600px", xs: "300px" },
              height: "64px",
            }}
          >
            <Button
              sx={{
                flexDirection: "row-reverse",
                fontSize: { lg: "20px", md: "17px", sm: "14px", xs: "12px" },
              }}
            >
              بازدید
              {data?.detailsNewsDto.currentView}
              <VisibilityIcon
                sx={{
                  direction: "rtl",
                  width: "14px",
                  height: "14px",
                }}
              />
            </Button>

            <Button
              sx={{
                flexDirection: "row-reverse",
                marginLeft: {
                  lg: "182px",
                  md: "207px",
                  sm: "150px",
                  xs: "0px",
                },
                fontSize: { lg: "20px", md: "17px", sm: "14px", xs: "12px" },
              }}
            >
              {/* 1402/7/2 */}
              {moment(data?.insertDate).format("yyy/MM/DD")}
              {/* {item.updateDate} */}
              <EventNoteIcon
                sx={{
                  direction: "rtl",
                  width: "14px",
                  height: "14px",
                }}
              />
            </Button>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                //   width: "190px",
                height: "64px",
                gap: { lg: "10px", md: "10px", sm: "10px" },
                alignItems: "center",
              }}
            >
              <CardMedia
                sx={{ width: "40px", height: "40px", borderRadius: "20px" }}
                // image={item.addUserProfileImage}
              ></CardMedia>

              <Typography
                sx={{
                  width: "210px",
                  height: "25px",
                  textAlign: "right",
                }}
              >
                {/* محمد درزی */}
                {data?.detailsNewsDto.keyword}
                {/* {item.addUserFullName}/ */}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Stack>
      {/* ))} */}
    </>
  );
};

export default DetailsCard;
