
import { Box, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

const StyledCard = ({ item }) => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate(`/courses/${item.courseId}`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "16px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s",
        '&:hover': {
          transform: "scale(1.02)",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
        },
        margin: "10px 0",
      }}
      onClick={handleImageClick}
    >
      <CardMedia
        component="img"
        image={
          item?.tumbImageAddress?.length > 15
            ? item?.tumbImageAddress
            : "../src/assets/image/Rectangle 124(4).png"
        }
        sx={{
          width: "70px",
          height: "70px",
          borderRadius: "8px",
          marginRight: "16px",
          cursor: "pointer"
        }}
       
      />
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="subtitle1" sx={{ fontWeight: 600, margin: "10px", fontSize: "12px" }}>
          {item?.courseTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ margin: "10px" }}>
          {item?.teacheName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {/* {item?.levelName} */}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {moment(item?.updateDate).format("YYYY/MM/DD")}
      </Typography>
    </Box>
  );
};

const DashboardCard = ({ data }) => (
  <Stack
    sx={{
      width: "100%",
      height: "100%",
      padding: "16px",
      flexDirection: "column",
    }}
  >
    {data?.map((item) => (
      <StyledCard key={item.courseId} item={item} />
    ))}
  </Stack>
);

export default DashboardCard;
