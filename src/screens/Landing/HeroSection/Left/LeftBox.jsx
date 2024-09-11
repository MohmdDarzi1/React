import { Box } from "@mui/material";
import React from "react";
import { styled } from "styled-components";
import Sass from "../../../../assets/image/png/sass.png";
import nodejs from "../../../../assets/image/png/nodejs.png";
import vue from "../../../../assets/image/png/vue.png"
import figma from "../../../../assets/image/png/figma.png";

const StyledAvatar = {
  width: "100px",
};
const StyledAvatarBox = styled(Box)({
  width: "64px",
  height: "64px",

  position: "absolute",
});

const LeftBox = () => {
  return (
    <Box height={"100%"} flex={1} position={"relative"} sx={{display:{xl:"block",lg:"block",md:"none",sm:"none",xs:"none"}}}>
      <StyledAvatarBox top={200} left={150}>
        <img style={StyledAvatar} src={Sass} />
      </StyledAvatarBox>
      <StyledAvatarBox top={350} left={50}>
        <img style={StyledAvatar} src={nodejs} />
      </StyledAvatarBox>
      <StyledAvatarBox top={500} left={150}>
        <img style={StyledAvatar} src={vue} />
      </StyledAvatarBox>
      <StyledAvatarBox top={650} left={50}>
        <img style={StyledAvatar} src={figma} />
      </StyledAvatarBox>
    </Box>
  );
};

export default LeftBox;
