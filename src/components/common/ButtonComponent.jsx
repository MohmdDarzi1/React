import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";

const StyledButton = styled(Button)({
  width: "80px",
  height: "47px",
  fontSize: { lg: "16px", md: "15px", sm: "12px", xs: "10px" },
  padding: "0",
  display: "block",
 
});
const ButtonComponent = ({
  text,
  onClick,
  startIcon,
  height,
  marginTop,
  width,
  fontSize,
  display,
}) => {
  return (
    <StyledButton
      type="submit"
      variant="contained"
      onClick={onClick}
      startIcon={startIcon}
      sx={{
        borderRadius: "100px",
        height: height,
        fontSize: fontSize,
        width: width,
        display: display,
      }}
    >
      
      {marginTop}
      {text}
    </StyledButton>
  );
};

export default ButtonComponent;
