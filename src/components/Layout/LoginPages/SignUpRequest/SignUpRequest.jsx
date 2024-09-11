import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Box, Stack } from "@mui/system";
import { Button, Modal, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

import ButtonComponent from "../../../common/ButtonComponent";
import {
  selectSignUpRequestModal,
  toggleSignUpRequestModal,
} from "../../../../redux/slices/SignUpRequestModal";
import SearchBox2 from "./SearchBox2";
import { toggleDarkMode } from "../../../../redux/slices/darkModeSlice";
import { toggleSignUpModal } from "../../../../redux/slices/signUpModalSlice";
import { selectSignUpPhoneNumber } from "../../../../redux/slices/signUpPhoneNumber";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { lg: "400px", md: "350px", sm: "350px", xs: "300px" },
  height: "500px",
  borderRadius: "50px",
  bgcolor: "secondary.main",
  color: "primary.second",

  boxShadow: 24,
  p: 4,
};
const SignUpRequest = () => {
  const open = useSelector(selectSignUpRequestModal);
  const phoneNumber = useSelector(selectSignUpPhoneNumber);
  // console.log("phoneNumber", phoneNumber);
  const dispatch = useDispatch();

  const [timer, setTimer] = useState(60); // تایمر ابتدایی به ثانیه
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  useEffect(() => {
    if (isTimerRunning && timer > 0) {
      const intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    } else if (timer === 0) {
      // اینجا می‌توانید اقدامات مرتبط با پایان تایمر را انجام دهید، مثلاً ارسال مجدد کد فعالسازی و غیره.
      setIsTimerRunning(false);
    }
  }, [timer, isTimerRunning]);

  const handleStartTimer = () => {
    setIsTimerRunning(true);
  };

  return (
    <Modal
      open={open}
      onClose={() => dispatch(toggleSignUpRequestModal())}
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
          fontSize={{ lg: "35px", md: "20px", sm: "15px", xs: "15px" }}
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
          کد تاییدیه
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          fontSize={{ lg: "12px", md: "12px", sm: "12px", xs: "10px" }}
          marginTop={"40px"}
        >
          کد به شماره {phoneNumber} ارسال شد، در صورت اشتباه بودن شماره آنرا
        </Typography>
        <Button
          onClick={() => dispatch(toggleSignUpRequestModal())}
          sx={{
            fontSize: "10px",
            bottom: { lg: "23px", md: "23px", sm: "23px", xs: "23px" },
          }}
        >
          تغییر دهید
        </Button>
        <Box
          sx={{
            direction: "ltr",
            marginTop: "50px",
            display: "flex",
            justifyContent: "center",
            gap: "1px",
          }}
        >
          <SearchBox2 />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          sx={{
            width: "100%",

            height: "50px",

            marginTop: "20px",
          }}
        >
          {/* <ButtonComponent
            //  onClick={()=>dispatch(toggleLoginRequestModal())}
            width={{ lg: "170px", md: "150px", sm: "130px", xs: "120px" }}
            text={"تایید کد"}
          /> */}
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
            fontSize={{ lg: "15px", md: "15px", sm: "15px", xs: "15px" }}
            display={"flex"}
            gap="10px"
            alignItems={"center"}
          >
            کد ارسال نشد؟
            <Stack direction="row" spacing={2}>
              {isTimerRunning && <Typography> {timer} </Typography>}
              {!isTimerRunning && (
                <Button variant="outlined" onClick={handleStartTimer}>
                  {" "}
                  ارسال شد
                </Button>
              )}
            </Stack>
          </Typography>
        </Box>
      </Box>
    </Modal>
  );
};

export default SignUpRequest;
