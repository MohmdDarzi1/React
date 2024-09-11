
import { Box, Button, Typography, Paper, Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../../core/services/storage/storage.services";
import { toggleLoginModal } from "../../../redux/slices/loginModalSlice";

const Exit = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    removeItem("token");
    navigate("/");
    dispatch(toggleLoginModal());
  };

  return (
    <Box
      sx={{
        width: "100%",
        // height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
        backgroundColor: "#e0f7fa",
        padding: 2,
      }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 400,
          width: "100%",
          textAlign: "center",
          backgroundColor: "#ffffff",
          borderRadius: 3,
        }}
      >
        <Typography variant="h5" sx={{ marginBottom: 3, color: "#00796b" }}>
          آیا مطمئن هستید که می‌خواهید خارج شوید؟
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 4, color: "#004d40" }}>
          در صورت خروج از حساب، اطلاعات شما ذخیره نخواهد شد.
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              sx={{
                width: "120px",
                height: "50px",
                fontSize: "16px",
                backgroundColor: "#00796b",
                color: "#ffffff",
                '&:hover': {
                  backgroundColor: "#004d40",
                },
              }}
              onClick={() => navigate(-1)}
            >
              لغو
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              sx={{
                width: "120px",
                height: "50px",
                fontSize: "16px",
                backgroundColor: "#d32f2f",
                color: "#ffffff",
                '&:hover': {
                  backgroundColor: "#b71c1c",
                },
              }}
              onClick={handleLogOut}
            >
              خروج
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Exit;
