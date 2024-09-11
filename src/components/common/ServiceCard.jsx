import { Avatar, Card, Typography } from "@mui/material";
import { Box, styled } from "@mui/system";

const ServiceCard = ({
  BottomHeroSectionText,
  BottomHeroSectionCenter,
  image,
  boxHeight,
  boxWidth,
}) => {
  const StyledBox = styled(Card)({
    width: `${boxWidth}`,
    height: `${boxHeight}`,
    borderRadius: "16px",

    cursor: "text",
    padding: "5px",
  });

  return (
    <StyledBox>
      <Avatar
        sx={{
          bgcolor: "primary.main",
          width: "30%",
          height: { lg: "30%", md: "27%", sm: "24%", xs: "22%" },
          margin: "5% auto  ",
          borderRadius: "20%",
        }}
      >
        {image}
      </Avatar>

      <Typography
        variant="h1"
        component="h2"
        lineHeight={"150%"}
        fontSize={{ lg: "26px", md: "20px", sm: "12px", xs: "8px" }}
        textAlign={"center"}
        fontWeight={900}
        marginTop={"5%"}
      >
        {BottomHeroSectionCenter}
      </Typography>
      <Typography
        color="text.secondary"
        textAlign={"center"}
        lineHeight={"200%"}
        fontSize={{ lg: "15px", md: "10px", sm: "10px", xs: "8px" }}
        fontWeight={900}
        marginTop={"3%"}
      >
        {BottomHeroSectionText}
      </Typography>
    </StyledBox>
  );
};

export default ServiceCard;
