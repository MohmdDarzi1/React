import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { selectRessetPassModal, toggleRessetPassModal } from '../../../../../redux/slices/RessetPassSlice';
import { useDispatch, useSelector } from 'react-redux';
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import SearchBox3 from './SearchBox3';
import { Stack } from '@mui/system';



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



const RessetPass3 = () => {
    const open = useSelector(selectRessetPassModal);
    const dispatch = useDispatch()
    // const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  return (
    <Modal
      open={open}
      onClose={() => dispatch(toggleRessetPassModal())}
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

        <SearchBox3 />
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
  )
}

export default RessetPass3
