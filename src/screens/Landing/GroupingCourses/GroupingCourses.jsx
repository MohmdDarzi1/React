import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { styled } from "styled-components";
import ServiceCard from "../../../components/common/ServiceCard";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import DrawIcon from "@mui/icons-material/Draw";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../redux/slices/darkModeSlice";
// import { selectDarkMode } from "../../../redux/slices/darkModeSlice";

const GroupingCourses = () => {
  const mode = useSelector(selectDarkMode);
  const StyledBox = styled(Box)({
    width: "100%",
    backgroundImage: `url(src/assets/image/dastebandi${mode}.jpg)`,
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "100px",
    // gap: "10px",
    // border: "1px solid red",
  });

  const DetailsBox = styled(Box)({
    height: "90%",
    width: "48%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4%",
    // border: "1px solid green",
  });

  const defaultText =
    "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. ";
  return (
    <StyledBox height={{ lg: "752px", md: "450px", sm: "350px", xs: "180px" }}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"4%"}
        justifyContent={"center"}
        padding={"2%"}
        flex={3}
      >
        <Typography
          variant="h3"
          fontSize={{ lg: "48px", md: "37px", sm: "25px", xs: "13px" }}
        >
          {" "}
          دسته بندی دوره ها
        </Typography>
        <Typography
          variant="p"
          fontSize={{ lg: "16px", md: "13px", sm: "10px", xs: "8px" }}
        >
          {defaultText}
        </Typography>
      </Box>
      <Box display={"flex"} justifyContent={"center"} flex={4}>
        <DetailsBox>
          <ServiceCard
            boxHeight={"50%"}
            boxWidth={"90%"}
            BottomHeroSectionCenter={"تحلیل داده"}
            BottomHeroSectionText={defaultText}
            image={
              <AccountTreeIcon
                sx={{
                  fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
                }}
              />
            }
          />
          <ServiceCard
            boxHeight={"50%"}
            boxWidth={"90%"}
            BottomHeroSectionCenter={"امنیت شبکه"}
            BottomHeroSectionText={defaultText}
            image={
              <VpnLockIcon
                sx={{
                  fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
                }}
              />
            }
          />
        </DetailsBox>
        <DetailsBox marginTop={"5%"}>
          <ServiceCard
            boxHeight={"50%"}
            boxWidth={"90%"}
            BottomHeroSectionCenter={"بازی"}
            BottomHeroSectionText={defaultText}
            image={
              <SportsEsportsIcon
                sx={{
                  fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
                }}
              />
            }
          />
          <ServiceCard
            boxHeight={"50%"}
            boxWidth={"90%"}
            BottomHeroSectionCenter={"وب دیزاین"}
            BottomHeroSectionText={defaultText}
            image={
              <DrawIcon
                sx={{
                  fontSize: { lg: "40px", md: "30px", sm: "20px", xs: "15px" },
                }}
              />
            }
          />
        </DetailsBox>
      </Box>
    </StyledBox>
  );
};

export default GroupingCourses;
