import { Avatar, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { useGetProfile } from "../../../core/services/api/user";

const ProfileDetail = () => {
  const { data } = useGetProfile();
  console.log("getProfile", data);

  const StyledLink = styled(Link)({
    position: "absolute",
    top: "0",
    right: "0",
  });

  // پیدا کردن جدیدترین عکس بر اساس تاریخ insertDate
  // const lastImage = data?.userImage.reduce((latest, current) => {
  //   return new Date(latest?.insertDate) > new Date(current.insertDate) ? latest : current;
  // }, data?.userImage[0]);
  console.log("lastImage", data?.userImage);

  const images = data?.userImage
    .sort((a, b) => {
      console.log("label", a, b);
      const aDate = new Date(a.inserDate);
      const bDate = new Date(b.inserDate);
      console.log("diff", aDate, bDate);
      return aDate.getTime() - bDate.getTime();
    })
    .reverse()[0];

  console.log("lastImage", images);

  return (
    <Box
      sx={{
        width: "100%",
        height: { lg: "270px", md: "169px", sm: "112px", xs: "58px" },
        // border: "1px solid blue",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        position: "relative",
      }}
    >
      <Avatar
        src={
          !images ||
          images?.puctureAddress === null ||
          images?.puctureAddress === "Not-set"
            ? "src/assets/image/ostad.jpg"
            : images.puctureAddress.replace(/\\/g, "/")
        }
        sx={{
          width: "50%",
          height: "50%",
          borderRadius: "50%",
          border: "5px solid ",
          borderLeft: "none",
          marginBottom: "5%",
        }}
      />

      <Typography>{data?.fName} </Typography>
      <StyledLink
        sx={{ position: "absolute", top: "5%", right: "5%" }}
        to={"/"}
      >
        <HomeOutlinedIcon
          sx={{ fontSize: { lg: "40px", md: "30px", sm: "22px", xs: "16px" } }}
        />
      </StyledLink>
    </Box>
  );
};

export default ProfileDetail;
