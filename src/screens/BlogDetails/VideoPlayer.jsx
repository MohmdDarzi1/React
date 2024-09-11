import { Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <Box
      sx={{
        display: "flex",

        justifyContent: "center",
        widows: "1280",

        marginTop: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",

          marginTop: "20px",

          width: { lg: "840px", md: "800px", sm: "600px", xs: "300px" },
        }}
      >
        <Container>
          <ReactPlayer
            url="src/assets/Video/1.Introduction.mp4"
            controls={true}
            width="100%"
            height="auto"
            style={{ borderRadius: "100px" }}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default VideoPlayer;
