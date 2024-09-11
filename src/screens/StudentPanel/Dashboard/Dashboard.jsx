import {
  Box,
  Button,
  CardMedia,
  IconButton,
  Stack,
  styled,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";
import DashboardCard from "../../../components/common/DashboardCard";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useGetProfile } from "../../../core/services/api/user";
import { useEffect } from "react";
import moment from "moment";
import CourseFavorite from "./CourseFavorite";
import NewsFavorite from "./News/NewsFavorite";
// import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
// import NotificationsIcon from "@mui/icons-material/Notifications";
const StyledStack = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  alignContent: "center",
});
const Dashboard = () => {
  // const d = new Date("")
  // console.log(new Intl.DateTimeFormat('fa-IR').format(d));

  const { data } = useGetProfile();
  console.log("getProfile", data);

  return (
    <Stack
      sx={{
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-evenly",
        padding: 2,
        // backgroundColor: "#f4f4f9",
      }}
    >
      <StyledStack
        sx={{
          justifyContent: "space-between",
          borderBottom: "1px solid grey",
          paddingBottom: 1,
          marginBottom: 2,
          alignItems: "center",
        }}
      >
        <Typography
          variant="h5"
          // sx={{ color: "#333" }}
        >
          داشبورد
        </Typography>
        <Stack
          sx={{
            gap: 2,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <IconButton component={Link} to="/">
            <NotificationsIcon />
          </IconButton>
          <IconButton component={Link} to="/">
            <LocalGroceryStoreOutlinedIcon />
          </IconButton>
        </Stack>
      </StyledStack>
      <StyledStack
        sx={{
          padding: 3,
          border: "1px solid #D5D4FE",
          borderRadius: "10px",
          flexWrap: "wrap",
          gap: 2,
          position: "relative",
          // backgroundColor: "#fff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography width={"30%"}>نام : {data?.fName}</Typography>
        <Typography width={"30%"}>نام خانوادگی :{data?.lName}</Typography>
        <Typography width={"30%"}>
          تاریخ تولد: {moment(data?.birthDay).format("YYYY/MM/DD")}
        </Typography>
        <Typography width={"30%"}>شماره همراه: {data?.phoneNumber}</Typography>
        <Typography width={"30%"}>شماره ملی: {data?.nationalCode}</Typography>
        <Typography width={"30%"}>ایمیل: {data?.email}</Typography>
        {/* <CardMedia
          sx={{
            position: "absolute",
            left: 16,
            bottom: 16,
            border: "2px solid #D5D4FE",
            borderRadius: "10px",
            width: "50px",
            height: "50px",
          }}
          // image="src/assets/image/mmd.jpg"
          // image={data?.currentPictureAddress}

          // image={
          //   data?.userImage[0].puctureAddress === null ||
          //   data?.userImage[0].puctureAddress === "Not-set"
          //     ? "src/assets/image/mmd.jpg"
          //     : data?.userImage[0].puctureAddress.replace(/\\/g, "/")
          // }
          // image={
          //   !data?.userImage.length || 
          //   data?.userImage[data.userImage.length - 1].puctureAddress === null ||
          //   data?.userImage[data.userImage.length - 1].puctureAddress === "Not-set"
          //     ? "src/assets/image/mmd.jpg"
          //     : data?.userImage[data.userImage.length - 1].puctureAddress.replace(/\\/g, "/")
          // }
        /> */}
        {/* <Buttonv
          sx={{
            position: "absolute",
            left: 16,
            bottom: 16,
            border: "2px solid #D5D4FE",
            borderRadius: "10px",
            // backgroundColor: "#fff",
            // color: "#000",
            '&:hover': {
              // backgroundColor: "#D5D4FE",
              // color: "#fff",
            }
          }}
          variant="outlined"
        >
          ویرایش
        </Buttonv> */}
      </StyledStack>
      <StyledStack
        sx={{
          // height: "60%",
          flexDirection: {
            lg: "row",
            md: "column",
            sm: "column",
            xs: "column",
          },
          gap: 2,
          padding: 2,
          // backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <NewsFavorite />
        <CourseFavorite />
      </StyledStack>
    </Stack>
  );
};

export default Dashboard;
