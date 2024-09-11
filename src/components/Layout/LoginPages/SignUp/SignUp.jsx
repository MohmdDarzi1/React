import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { selectLoginModal, toggleLoginModal } from "../../../../redux/slices/loginModalSlice";
import { Box, Stack } from "@mui/system";
import { Button, Modal, Typography } from "@mui/material";
import {
  selectSignUpModal,
  toggleSignUpModal,
} from "../../../../redux/slices/signUpModalSlice";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchBox from "./SearchBox";
import ButtonComponent from "../../../common/ButtonComponent";
import SignUpRequest from "../SignUpRequest/SignUpRequest";
import { toggleSignUpRequestModal } from "../../../../redux/slices/SignUpRequestModal";
import {
  selectLoginModal,
  toggleLoginModal,
} from "../../../../redux/slices/loginModalSlice";
import Login from "../Login";
import { toggleLoginRequestModal } from "../../../../redux/slices/LoginRequestModal";
import { toggleForgotPasswordModal } from "../../../../redux/slices/ForgotPasswordModallSlice";
import { toggleDarkMode } from "../../../../redux/slices/darkModeSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: "400px", md: "350px", sm: "350px", xs: "300px" },

  borderRadius: "50px",
  bgcolor: "secondary.main",
  color: "primary.second",
  height: "380px",
  boxShadow: 24,
  p: 4,
};
const SignUp = () => {
  const open = useSelector(selectSignUpModal);
  //  const Login = useSelector(selectLoginModal);

  const dispatch = useDispatch();

  return (
    <Modal
      open={open}
      // Login={Login}
      // Login={Login}
      onClose={() => dispatch(toggleSignUpModal())}
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
          flexDirection={"row"}
          fontSize={{ lg: "20px", md: "15px", sm: "15px", xs: "8px" }}
        >
          {/* <CloseRoundedIcon
            style={{
              width: { lg: "20px", md: "30px", sm: "50px", xs: "50px" },
              color: "#2196F3",
              border: "2px solid #2196F3",
              borderRadius: "50px",
              marginRight: "150px",
              backgroundColor: "#F1F7FF",
            }}
          /> */}
          ساخت حساب کاربری
        </Typography>
        <SearchBox />
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            width: "100%",

            height: "50px",

            marginTop: "150px",
          }}
        >
          <SignUpRequest />
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
            حساب کاربری دارید؟
            <Stack direction="row" spacing={2}>
              <Button
                onClick={() => {
                  dispatch(toggleSignUpModal());
                  dispatch(toggleLoginModal());
                }}
              >
                وارد شوید
              </Button>
              {/* <Login/>         */}
            </Stack>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignUp;
