import { Box, Stack, styled, Typography } from "@mui/material";
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
    backgroundImage: `url(src/assets/image/articlesHeroSection${mode}.jpg)`,
    backgroundSize: "cover",
  });
  const StyledBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
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
      height={{ lg: "480px", md: "300px", sm: "200px", xs: "105px" }}
    >
      <StyledStack>
        <StyledBox>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "900",
              fontSize: { lg: "37px", md: "25px", sm: "18px", xs: "9px" },
            }}
          >
            {" "}
            اخبار و مقالات{" "}
          </Typography>
          <Typography
            variant="p"
            sx={{
              fontSize: { lg: "16px", md: "10px", sm: "7px", xs: "3.5px" },
            }}
          >
            آموزش برنامه نویسی یکی از دوره‌های محبوب در حوزه فناوری اطلاعات است.
            برنامه نویسی مهارتی است که به افراد امکان می‌دهد تا نرم‌افزارهای
            کامپیوتری را ایجاد و توسعه دهند.
          </Typography>
        </StyledBox>
      </StyledStack>
    </Box>
  );
};

export default CoursesHeroSection;
