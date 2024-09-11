import { Button, Modal, Typography } from "@mui/material";
import { Box, Stack, height } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { toggleDarkMode } from "../../../redux/slices/darkModeSlice";
import {
  selectLoginModal,
  toggleLoginModal,
} from "../../../redux/slices/loginModalSlice";
import SearchBox from "./SearchBox";
import CheckBoxSignUp from "./CheckBoxSignUp";
import ButtonComponent from "../../common/ButtonComponent";
import SignUp from "./SignUp/SignUp";
import { toggleSignUpModal } from "../../../redux/slices/signUpModalSlice";
import LoginRequest from "./LoginRequest/LoginRequest";
import { toggleLoginRequestModal } from "../../../redux/slices/LoginRequestModal";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: "400px", md: "350px", sm: "350px", xs: "300px" },

  borderRadius: "50px",
  bgcolor: "secondary.main",
  color: "primary.second",

  boxShadow: 24,
  p: 4,
};

const Login = () => {
  const open = useSelector(selectLoginModal);
  const dispatch = useDispatch()
  const navigate =useNavigate()
  return (
    <Modal
      open={open}
      onClose={() => dispatch(toggleLoginModal())}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box  sx={style}>
        <Typography
          variant="h5"
          textAlign={"right"}
          lineHeight={"initial"}
          display={"flex"}
          justifyContent={"space-between"}
        
          alignItems={"center"}
          flexDirection={"row"}
          fontSize={{ lg: "25px", md: "20px", sm: "15px", xs: "10px" }}
        >
          {/* <CloseRoundedIcon
            style={{
              
              width: { lg: "20px", md: "30px", sm: "30px", xs: "30px" },
              color: "#2196F3",
              border: "2px solid #2196F3",
              borderRadius: "50px",
              marginRight: "150px",
              backgroundColor: "#F1F7FF",
            }}
          /> */}
          ورود به حساب
        </Typography>
        <SearchBox />
        {/* <CheckBoxSignUp /> */}
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            width: "100%",

            height: "50px",

            marginTop: "20px",
          }}
        >
        

          <LoginRequest />
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h6"
            marginTop="10px"
            // color={"black"}
            textAlign={"center"}
            fontSize={{ lg: "15px", md: "10px", sm: "10px", xs: "" }}
            display={"flex"}
            gap="10px"
            alignItems={"center"}
          >
            حساب کاربری ندارید؟
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => {
                  dispatch(toggleLoginModal());
                  dispatch(toggleSignUpModal());
                }}
                // type="submit"
              >
                ثبت نام کنید
              </Button>

              <SignUp />
            </Stack>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default Login;
