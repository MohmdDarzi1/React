import { Checkbox, Modal, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";
import {
  selectForgotPasswordModal,
  toggleForgotPasswordModal,
} from "../../../../redux/slices/ForgotPasswordModallSlice";
import { useDispatch, useSelector } from "react-redux";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchBox from "./SearchBox";
import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../../common/ButtonComponent";
import { toggleLoginRequestModal } from "../../../../redux/slices/LoginRequestModal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: "400px", md: "350px", sm: "350px", xs: "300px" },
    height:{lg:"500px",md:"500px",sm:"500px",xs:"500px"},
  borderRadius: "50px",
  bgcolor: "secondary.main",
  color: "primary.second",

  boxShadow: 24,
  p: 4,
};

const ForgotPassword = () => {
  const open = useSelector(selectForgotPasswordModal);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Modal
      open={open}
      onClose={() => dispatch(toggleForgotPasswordModal())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          variant="h5"
          textAlign={"right"}
          lineHeight={"initial"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexDirection={"row-reverse"}
          fontSize={{ lg: "25px", md: "20px", sm: "15px", xs: "10px" }}
        >
          <CloseRoundedIcon
            style={{
              width: { lg: "20px", md: "30px", sm: "30px", xs: "30px" },
              color: "#2196F3",
              border: "2px solid #2196F3",
              borderRadius: "50px",
              marginRight: "150px",
              backgroundColor: "#F1F7FF",
            }}
          />
          ورود به حساب
        </Typography>

        <SearchBox />
        <Stack sx={{ direction: "rtl" }}>
          <Typography
            direction="rtl"
            variant="h5"
            textAlign={"right"}
            height={"30px"}
            alignItems={"center"}
            display={"flex"}
            justifyContent={"right"}
            fontSize={{ lg: "14px", md: "10px", sm: "9px", xs: "9px" }}
            marginTop={{ lg: "130px", md: "110px", sm: "90px", xs: "70px" }}
          >
            {/* <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
            من را به خاطر بسپار */}
          </Typography>
        </Stack>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            width: "100%",

            // height: "50px",

            marginTop: "20px",
          }}
        >
          {/* <ButtonComponent
            // onClick={() =>{
            //   dispatch(toggleForgotPasswordModal())
            //   dispatch(toggleLoginRequestModal())}}
            width={{ lg: "170px", md: "150px", sm: "130px", xs: "100px" }}
            text={" دریافت کد"}
          /> */}
        </Box>
      </Box>
    </Modal>
  );
};

export default ForgotPassword;
