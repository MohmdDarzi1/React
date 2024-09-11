import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import ButtonComponent from "../../../components/common/ButtonComponent";
import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { useGetTopNews } from "../../../core/services/api/News";
import moment from "moment";
import { Navigate, useNavigate } from "react-router-dom";
import Loader from "../../../components/common/Loader";
const RightDetails = () => {
  const Navigate=useNavigate()
  const params = {
    count: 1,
  };
  const { data, isPending } = useGetTopNews(undefined, 1, params.count);
  return (
    <Box
      // height={"526px"}

      width={{ lg: "606px", md: "400px", sm: "300px" }}
      // my={{lg:"4px",md:"1px",}}
      display={{ lg: "flex", md: "flex", sm: "none", xs: "none" }}
      // marginLeft={"auto"}
      alignItems="center"
      gap={4}
      p={2}
      //   sx={{ border: "2px solid grey" }}
    >
      {isPending ? (
       <Loader/>
      ) : (
        data?.news.map((item) => (
          <Box sx={{ maxWidth: 616 }}>
            <CardActionArea>
              <CardMedia
               onClick={() => Navigate("/articles")}
                component="img"
                // height="340px"
                sx={{ borderRadius: "30px" }}
                image="src/assets/image/Rectangle 32.png"
                // image={item.currentImageAddressTumb}
                alt="green iguana"
              />

              <CardContent sx={{ direction: "row", textAlign: "right" }}>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: { lg: "21px", md: "15px" } }}
                >
                  چگونه مطالعه موثر را برای شما آسانتر کنیم.
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontSize: { lg: "15px", md: "10px" } }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد.

                </Typography>
                <Stack
                sx={{
                  flexDirection: "row",
                  marginTop: "20px",
                  fontSize: "11px",
                  display:"flex",
                 gap:1
                }}
              >
                <ButtonComponent
                  text={item?.currentView} 
               
                  fontSize={{ lg: "11px", md: "10px" }}
                  width={"20%"}
                  startIcon={
                    <VisibilityIcon

                      sx={{ alignItems: "center", marginLeft: "10px" }}
                    />
                   
                  }
                 
                
                />

                <ButtonComponent
                  width={"20%"}
                  // text={" 1402/7/2"}
                  text={moment(item?.updateDate).format("yyy/MM/DD")}

                  // text2={moment(item?.updateDate).format("yyy/MM/DD")}
                  fontSize={{ lg: "11px", md: "10px" }}
                  startIcon={
                    <EventNoteIcon
                      sx={{ alignItems: "center", marginLeft: "10px" }}
                    />
                  }
                />
              </Stack>
              </CardContent>
            </CardActionArea>
          </Box>
        ))
      )}
    </Box>
  );
};

export default RightDetails;
