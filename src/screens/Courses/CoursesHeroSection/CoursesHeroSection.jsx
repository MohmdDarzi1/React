import { Stack, styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../../redux/slices/darkModeSlice";

const CoursesHeroSection = () => {
  const mode = useSelector(selectDarkMode);

  const StyledStack = styled(Stack)({
    flexDirection: "row",
    alignItems: "center",
    spacing: "2",
    height: "100%",
    width: "100%",
    backgroundImage: `url(src/assets/image/coursesHeroSection${mode}.jpg)`,
    backgroundSize: "cover",
  });
  const StyledBox = styled(Box)({
    display:"flex",
    flexDirection:"column",
    justifyContent:"space-around",
    width: "41%",
    height: "50%",
    padding: "1%",
    marginRight: "4%",
    marginTop: "4%",
  });
  return (
    <Box
      width={"100%"}
      justifyContent={"center"}
      zIndex={2}
      height={{ lg: "550px", md: "335px", sm: "220px", xs: "111px" }}
    >
      <StyledStack>
        <StyledBox>
          <Typography variant="h6" sx={{ color: "primary.main",fontSize:{lg:"24px",md:"18px",sm:"14px",xs:"8px"} }}>
            مهمه از کی یاد میگیری!!
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "900" ,fontSize:{lg:"37px",md:"25px",sm:"18px",xs:"9px"} }}>
            {" "}
            آموزش برنامه نویسی با بهترین ها
          </Typography>
          <Typography variant="p" sx={{fontSize:{lg:"16px",md:"10px",sm:"7px",xs:"3.5px"} }}>
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.{" "}
          </Typography>
        </StyledBox>
      </StyledStack>
    </Box>
  );
};

export default CoursesHeroSection;
