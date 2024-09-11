import { Box } from "@mui/material";
import React from "react";

import reactIcon from "../../../../assets/image/png/react.png";
import angular from "../../../../assets/image/png/angular.png";
import css3 from "../../../../assets/image/png/css3.png";
import html5 from "../../../../assets/image/png/html5.png";
import { styled } from "styled-components";
const StyledAvatar = {
  width: "100px",
};
const StyledAvatarBox = styled(Box)({
  width: "64px",
  height: "64px",
  position: "absolute",
});

const RightBox = () => {
  return (
    <Box height={"100%"} flex={1} position={"relative"} sx={{display:{xl:"block",lg:"block",md:"none",sm:"none",xs:"none"}}}>
      <StyledAvatarBox top={200} left={150}>
        <img style={StyledAvatar} src={reactIcon} />
      </StyledAvatarBox>
      <StyledAvatarBox top={350} left={50}>
        <img style={StyledAvatar} src={angular} />
      </StyledAvatarBox>
      <StyledAvatarBox top={500} left={150}>
        <img style={StyledAvatar} src={css3} />
      </StyledAvatarBox>
      <StyledAvatarBox top={650} left={50}>
        <img style={StyledAvatar} src={html5} />
      </StyledAvatarBox>
    </Box>
  );
};

export default RightBox;
